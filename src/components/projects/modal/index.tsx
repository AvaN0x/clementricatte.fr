"use client";

import * as React from "react";
import type { Project } from "@/components/projects/type";
import { cn } from "@/lib/utils";
import { TechList } from "@/components/techs";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { IconUsers, IconX } from "@/components/icons";
import { ProjectLinks } from "@/components/projects/links";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const modalTriggerClass =
  "size-full text-left rounded-lg focus-visible-ring focus-visible:ring-inset focus-visible:ring-offset-0";

function ModalContributors({
  contributorsCount,
  className,
}: {
  contributorsCount: Project["contributorsCount"];
  className?: string;
}) {
  if (!contributorsCount || contributorsCount <= 1) return <></>;

  const title = `${contributorsCount} contributeurs`;
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger className="focus-visible-ring rounded-sm" asChild>
          <div className={cn("flex items-center gap-0.5", className)}>
            <span className="text-sm text-foreground">{contributorsCount}</span>
            <IconUsers />
            <span className="sr-only">{title}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
export function ProjectModal({
  children,
  project,
  className,
}: {
  children: React.ReactNode;
  project: Project;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const isDialog = useBreakpoint("md");

  if (isDialog) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className={cn(modalTriggerClass, className)}>
          {children}
        </DialogTrigger>
        <DialogContent className="flex flex-col max-w-2xl lg:max-w-screen-lg max-h-[85vh]">
          <DialogHeader
            className={cn(
              project.modal &&
                "relative after:content-[''] after:absolute after:-bottom-3 after:inset-x-8 after:mb-2 after:h-[1px] after:bg-border/50"
            )}
          >
            <DialogTitle>
              {project.name && <>{project.name} · </>}
              {project.title}
            </DialogTitle>
            {"education" in project && (
              <DialogDescription className="text-foreground">
                {project.education}
              </DialogDescription>
            )}
            {project.description && (
              <DialogDescription>{project.description}</DialogDescription>
            )}
            <div className="flex w-full gap-2 items-center flex-wrap min-[450px]:flex-nowrap">
              <ModalContributors
                contributorsCount={project.contributorsCount}
              />
              <TechList techs={project.techs} />
              <ProjectLinks links={project.links} className="ml-auto" />
            </div>
          </DialogHeader>
          {project.modal && (
            <div className="overflow-y-auto -mr-6 pr-6">{project.modal}</div>
          )}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className={cn(modalTriggerClass, className)}>
        {children}
      </DrawerTrigger>
      <DrawerContent className="max-w-screen-lg mx-auto max-h-[85vh] pb-10 focus-visible:outline-none">
        <DrawerHeader
          className={cn(
            project.modal &&
              "relative after:content-[''] after:absolute after:bottom-0 after:inset-x-8 after:mb-2 after:h-[1px] after:bg-border/50"
          )}
        >
          <div className="flex w-full gap-2 mb-2">
            <DrawerTitle className="flex-1 self-center">
              {project.name && <>{project.name} · </>}
              {project.title}
            </DrawerTitle>

            <DrawerClose asChild>
              <Button variant="outline" className="self-start p-2 h-fit">
                <IconX />
              </Button>
            </DrawerClose>
          </div>
          {"education" in project && (
            <DrawerDescription className="text-foreground">
              {project.education}
            </DrawerDescription>
          )}
          {project.description && (
            <DrawerDescription>{project.description}</DrawerDescription>
          )}
          <div className="flex w-full gap-2 items-center flex-wrap min-[450px]:flex-nowrap">
            <ModalContributors contributorsCount={project.contributorsCount} />
            <TechList techs={project.techs} />
            <ProjectLinks links={project.links} className="ml-auto" />
          </div>
        </DrawerHeader>
        {project.modal && (
          <DrawerFooter className="overflow-y-auto">
            {project.modal}
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}
