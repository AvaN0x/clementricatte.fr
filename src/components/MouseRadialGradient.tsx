"use client";
import { useRelativeMousePosition } from "@/hooks/useMousePosition";
import { cn } from "@/lib/utils";

export default function MouseRadialGradient({
  children,
  className,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { ref, lastInside } = useRelativeMousePosition();

  return (
    <div ref={ref} className={cn("relative", className)}>
      {lastInside && (
        <div
          className="-z-[1] pointer-events-none absolute inset-px transition duration-300 transform-gpu max-w-full "
          style={{
            background: `radial-gradient(500px at ${lastInside.x}px ${lastInside.y}px, var(--mouse-radial-gradient-color), transparent 75%)`,
          }}
        ></div>
      )}
      {children}
    </div>
  );
}
