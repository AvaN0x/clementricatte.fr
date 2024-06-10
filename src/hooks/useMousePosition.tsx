"use client";

import { RefObject, useEffect, useRef, useState } from "react";

// Inspired by https://magicui.design/docs/components/magic-card
interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: globalThis.MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}

interface MousePositionRelative extends MousePosition {
  isInside: boolean;
  lastInside?: MousePosition;
}

export function useRelativeMousePosition(): MousePositionRelative & {
  ref: RefObject<HTMLDivElement>;
} {
  const mousePosition = useMousePosition();

  const containerRef = useRef<HTMLDivElement>(null);
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const mouseRelativeData = useRef<MousePositionRelative>({
    x: 0,
    y: 0,
    isInside: false,
  });

  const initContainerSize = () => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth;
      containerSize.current.h = containerRef.current.offsetHeight;
    }
  };

  // Get container size on mount and resize
  useEffect(() => {
    initContainerSize();
    window.addEventListener("resize", initContainerSize);

    return () => {
      window.removeEventListener("resize", initContainerSize);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const { w, h } = containerSize.current;
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;
      const isInside = x < w && x > 0 && y < h && y > 0;

      mouseRelativeData.current = {
        x,
        y,
        isInside,
        lastInside: isInside ? { x, y } : mouseRelativeData.current.lastInside,
      };
    }
  }, [mousePosition, containerSize]);

  return { ...mouseRelativeData.current, ref: containerRef };
}
