"use client";

import * as React from "react";
import type { Project } from "@/components/projects/type";
import { cn } from "@/lib/utils";
import { TechList } from "@/components/techs";
import { Button } from "@/components/ui/button";
import { IconX } from "@/components/icons";
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
import { Drawer } from "vaul";
import { DrawerFooter, DrawerHeader } from "@/components/ui/drawer";

const modalTriggerClass =
  "size-full text-left rounded-lg focus-visible-ring focus-visible:ring-inset focus-visible:ring-offset-0";

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
        <DialogContent className="flex flex-col max-w-screen-lg max-h-[85vh]">
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
            <div className="flex w-full justify-between items-center flex-wrap min-[450px]:flex-nowrap">
              <TechList techs={project.techs} />
              <ProjectLinks links={project.links} />
            </div>
          </DialogHeader>
          {project.modal && (
            <div className="overflow-y-auto text-justify -mr-6 pr-6">
              {project.modal}
            </div>
          )}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer.Root>
      <Drawer.Trigger className="size-full">{children}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-background flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
          <DrawerHeader
            className={cn(
              project.modal &&
                "relative after:content-[''] after:absolute after:bottom-0 after:inset-x-8 after:mb-2 after:h-[1px] after:bg-border/50"
            )}
          >
            <div className="flex w-full mb-2">
              <Drawer.Title className="flex-1 self-center">
                {project.name && <>{project.name} · </>}
                {project.title}
              </Drawer.Title>

              <Drawer.Close asChild>
                <Button variant="outline" className="self-start p-2 h-fit">
                  <IconX />
                </Button>
              </Drawer.Close>
            </div>
            {"education" in project && (
              <Drawer.Description className="text-foreground">
                {project.education}
              </Drawer.Description>
            )}
            {project.description && (
              <Drawer.Description>{project.description}</Drawer.Description>
            )}
            <div className="flex w-full justify-between items-center flex-wrap min-[450px]:flex-nowrap">
              <TechList techs={project.techs} />
              <ProjectLinks links={project.links} />
            </div>
          </DrawerHeader>
          {project.modal && (
            <DrawerFooter className="overflow-y-auto text-justify">
              {project.modal}
            </DrawerFooter>
          )}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
