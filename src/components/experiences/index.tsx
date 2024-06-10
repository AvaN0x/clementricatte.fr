import * as React from "react";
import { Experience } from "@/components/experiences/type";
import { cn } from "@/lib/utils";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { formatRange } from "@/lib/dates";
import { TechList } from "@/components/techs";

export function ExperienceCard({
  experience,
  className,
}: {
  experience: Experience;
  className?: string;
}) {
  return (
    <Card className={cn("bg-card/50 p-4 space-y-2", className)}>
      <div>
        <CardTitle className="text-lg">{experience.title}</CardTitle>
        <CardDescription className="text-foreground">
          {experience.enterprise}
          {experience.location && <> · {experience.location}</>}
        </CardDescription>
        <CardDescription>
          {formatRange(experience.range.start, experience.range.end, {
            ignoreDay: true,
          })}
        </CardDescription>
      </div>
      <TechList techs={experience.techs} />
    </Card>
  );
}
