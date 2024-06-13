import * as React from "react";
import type { Project } from "@/components/projects/type";
import { cn } from "@/lib/utils";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { TechList } from "@/components/techs";
import { ProjectModal } from "@/components/projects/modal";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <ProjectModal project={project}>
      <Card
        className={cn(
          "bg-card/50 space-y-2 py-4",
          "group flex flex-col",
          "transition-colors duration-300",
          "hover:border-primary/65",
          className
        )}
      >
        <div className="flex-1 px-4">
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
        <div
          className={cn(
            "relative flex gap-2 overflow-hidden px-4",
            "flex-row-reverse",
            "justify-between",
            "md:flex-row"
          )}
        >
          <div
            className={cn(
              "md:absolute pointer-events-none flex items-end h-full",
              "transform-gpu transition-all duration-300",
              "max-md:whitespace-nowrap",
              "md:items-center md:w-0 md:opacity-0 md:-translate-x-10 md:overflow-hidden",
              "md:group-hover:min-w-[5.5rem] md:group-hover:w-[5.5rem] md:group-hover:opacity-100 md:group-hover:translate-x-0"
            )}
          >
            <Badge variant="outline" className="border-primary">
              Voir plus
            </Badge>
          </div>
          <TechList
            techs={project.techs}
            className={cn(
              "relative",
              "transform-gpu transition-all duration-300",
              "md:min-w-full md:w-full",
              "md:group-hover:translate-x-[5.5rem] md:group-hover:opacity-75"
            )}
          />
        </div>
      </Card>
    </ProjectModal>
  );
}
