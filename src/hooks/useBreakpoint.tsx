"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const { theme } = resolveConfig(tailwindConfig);
const breakpoints = theme.screens;

export function useBreakpoint(breakpointKey: keyof typeof breakpoints) {
  return useMediaQuery(`(min-width: ${breakpoints[breakpointKey]})`);
}
