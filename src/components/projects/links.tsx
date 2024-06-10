"use client";

import * as React from "react";
import type { ProjectLink } from "@/components/projects/type";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandYoutube,
  IconExternalLink,
} from "@/components/icons";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ProjectLink = ({ href, type }: ProjectLink) => {
  let icon = <IconExternalLink />;
  let label = "Lien";
  if (type === "github") {
    icon = <IconBrandGithub />;
    label = "Github";
  } else if (type === "youtube") {
    icon = <IconBrandYoutube />;
    label = "Youtube";
  }

  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" asChild className="h-auto">
          <Link
            href={href}
            className={cn(
              "p-3 text-md focus-visible-ring rounded-sm align-baseline"
            )}
            target="_blank"
          >
            {icon}
            <span className="sr-only">{label}</span>
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export function ProjectLinks({
  links,
  className,
}: {
  links?: ProjectLink[];
  className?: string;
}) {
  if (!links || links.length <= 0) return null;

  return (
    <div className={cn("self-end flex gap-1 flex-wrap justify-end", className)}>
      <TooltipProvider>
        {links.map((link, i) => (
          <ProjectLink key={i} {...link} />
        ))}
      </TooltipProvider>
    </div>
  );
}
