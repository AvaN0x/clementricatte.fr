import * as React from "react";
import { Education } from "@/components/educations/type";
import { cn } from "@/lib/utils";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { formatRange } from "@/lib/dates";
import { TechList } from "@/components/techs";

export function EducationCard({
  education,
  className,
}: {
  education: Education;
  className?: string;
}) {
  return (
    <Card className={cn("bg-card/50 p-4 space-y-2", className)}>
      <div>
        <CardTitle className="text-lg">{education.title}</CardTitle>
        {education.speciality && (
          <CardDescription>{education.speciality}</CardDescription>
        )}
        {education.highlight && (
          <CardDescription className="text-primary mb-2">
            {education.highlight}
          </CardDescription>
        )}
        <CardDescription className="text-foreground">
          {education.diploma && <>{education.diploma} · </>}
          {education.school}
          {education.location && <> · {education.location}</>}
        </CardDescription>
        <CardDescription>
          {formatRange(education.range.start, education.range.end, {
            ignoreDay: true,
          })}
        </CardDescription>
      </div>
      <TechList techs={education.techs} />
    </Card>
  );
}
