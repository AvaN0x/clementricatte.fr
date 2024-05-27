"use client";

import { useTheme } from "next-themes";
import { IconBlank, IconMoon, IconSun } from "@/components/icons";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const ThemeToggle = React.forwardRef<
  HTMLButtonElement,
  { className?: string }
>(({ className }, ref) => {
  const { resolvedTheme: theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  const updateTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <Button
            ref={ref}
            variant="ghost"
            size="icon"
            onClick={updateTheme}
            className={cn("bg-background", className)}
          >
            {!mounted ? (
              <IconBlank />
            ) : theme === "dark" ? (
              <IconSun />
            ) : (
              <IconMoon />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Changer de thème</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});
ThemeToggle.displayName = "ThemeToggle";
