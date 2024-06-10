import * as React from "react";
import type { Project } from "@/components/projects/type";
import { cn } from "@/lib/utils";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { TechList } from "@/components/techs";
import { ProjectModal } from "@/components/projects/modal";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  // TODO display that you can click the modal, maybe with a button
  return (
    <ProjectModal project={project}>
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
        <TechList techs={project.techs} />
      </Card>
    </ProjectModal>
  );
}
