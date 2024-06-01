import MouseRadialGradient from "@/components/MouseRadialGradient";
import { cn } from "@/lib/utils";
import React from "react";

export const PageBackground = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof MouseRadialGradient>) => {
  return (
    <MouseRadialGradient
      className={cn(
        "-mt-12 pt-12 pb-8 min-h-screen overflow-x-hidden",
        "bg-gradient-to-tr from-10% via-80%",
        "from-violet-100/20 via-violet-50/20 to-violet-100/20",
        "dark:from-violet-900/20 dark:via-violet-950/20 dark:to-violet-900/20",
        className
      )}
      {...props}
    >
      {children}
    </MouseRadialGradient>
  );
};
