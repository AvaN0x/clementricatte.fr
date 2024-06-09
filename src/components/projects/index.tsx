import * as React from "react";
import { Project } from "@/components/projects/type";
import { cn } from "@/lib/utils";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { TechBadge } from "@/components/techs";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  // TODO WIP
  return (
    <Card className={cn("bg-card/50 p-4 space-y-2", className)}>
      <div>
        {project.name && <CardDescription>{project.name}</CardDescription>}
        <CardTitle className="text-lg">{project.title}</CardTitle>
        {"education" in project && (
          <CardDescription className="text-foreground">
            {project.education}
          </CardDescription>
        )}
        {project.description && (
          <CardDescription>{project.description}</CardDescription>
        )}
      </div>
      {project.techs && project.techs.length > 0 && (
        <div className="flex gap-1 flex-wrap">
          {Object.entries(project.techs).map(([key, t]) => (
            <TechBadge key={key} tech={t} />
          ))}
        </div>
      )}
    </Card>
  );
}
