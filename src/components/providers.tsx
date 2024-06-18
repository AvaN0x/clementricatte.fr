"use client";

import { ThemeProvider } from "next-themes";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class">
      <KonamiEasterEgg />
      {children}
    </ThemeProvider>
  );
}
