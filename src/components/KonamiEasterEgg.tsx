"use client";

import { useKonami } from "@/hooks/useKonami";
import confetti from "canvas-confetti";
import { toast } from "sonner";

export default function KonamiEasterEgg() {
  useKonami(() => {
    console.log("Easter egg activated :)");

    const duration = 2.5 * 1000; // in ms
    const end = Date.now() + duration;
    let colors = [
      "#fbbd23", // Dark theme primary
      "#2004af", // Light theme primary
    ];

    // Single frame called until the end of the duration
    const frame = () => {
      if (Date.now() > end) return;

      const options: confetti.Options = {
        particleCount: 2,
        spread: 55,
        startVelocity: 60,
        colors: colors,
      };
      // Left side
      confetti({
        ...options,
        angle: 60,
        origin: { x: -0.02, y: 0.75 },
      });
      // Right side
      confetti({
        ...options,
        angle: 120,
        origin: { x: 1.02, y: 0.75 },
      });

      requestAnimationFrame(frame);
    };
    frame();
    toast.message("🎉 Easter egg activé ! 🎉", { duration: duration + 2000 });
  });

  return <></>;
}
