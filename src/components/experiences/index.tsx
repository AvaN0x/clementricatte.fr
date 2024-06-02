import * as React from "react";
import { Experience } from "@/components/experiences/type";
import { cn } from "@/lib/utils";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { formatRange } from "@/lib/dates";
import { TechBadge } from "@/components/techs";

export function ExperienceCard({
  experience,
  className,
}: {
  experience: Experience;
  className?: string;
}) {
  return (
    <Card
      className={cn("bg-card/50 p-4 space-y-2 border-primary/75", className)}
    >
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
      {experience.techs && experience.techs.length > 0 && (
        <div className="flex gap-1 flex-wrap">
          {Object.entries(experience.techs).map(([key, t]) => (
            <TechBadge key={key} tech={t} />
          ))}
        </div>
      )}
    </Card>
  );
}
