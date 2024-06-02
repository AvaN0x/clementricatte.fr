import * as React from "react";
import { Education } from "@/components/educations/type";
import { cn } from "@/lib/utils";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { formatRange } from "@/lib/dates";
import { TechBadge } from "@/components/techs";

export function EducationCard({
  education,
  className,
}: {
  education: Education;
  className?: string;
}) {
  return (
    <Card
      className={cn("bg-card/50 p-4 space-y-2 border-primary/75", className)}
    >
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
      {education.techs && education.techs.length > 0 && (
        <div className="flex gap-1 flex-wrap">
          {Object.entries(education.techs).map(([key, t]) => (
            <TechBadge key={key} tech={t} />
          ))}
        </div>
      )}
    </Card>
  );
}
