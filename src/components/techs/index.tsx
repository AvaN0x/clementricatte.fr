import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Tech } from "@/components/techs/type";

export function TechBadge({
  tech,
  className,
}: {
  tech: Tech;
  className?: string;
}) {
  return (
    <Badge variant="outline" className={cn("flex gap-1", className)}>
      {tech.icons && tech.icons.length > 0 && (
        <>
          {Object.entries(tech.icons).map(([key, Icon]) => (
            <Icon key={key} />
          ))}
        </>
      )}
      {tech.label}
    </Badge>
  );
}

export function TechList({
  techs,
  className,
}: {
  techs?: Tech[];
  className?: string;
}) {
  if (!techs || techs.length === 0) return null;

  return (
    <div className={cn("flex gap-1 flex-wrap", className)}>
      {techs.map((t, key) => (
        <TechBadge key={key} tech={t} />
      ))}
    </div>
  );
}
