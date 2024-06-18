"use client";
import React from "react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonami(action: () => void) {
  const [currentIndex, setCurrentIndex] = React.useState<number>(-1);

  const onKeyUp = React.useCallback(
    (e: KeyboardEvent) => {
      // Is current key the same as the next key in the sequence?
      if (e.key === KONAMI[currentIndex + 1]) {
        // If so, increment the index
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);
        // If the index is the last one in the sequence, trigger the action and reset the index
        if (newIndex >= KONAMI.length - 1) {
          action();
          setCurrentIndex(-1);
        }
      } else {
        // If the key is not the next one in the sequence, reset the index
        setCurrentIndex(-1);
      }
    },
    [currentIndex, setCurrentIndex, action]
  );

  React.useEffect(() => {
    document.addEventListener("keyup", onKeyUp);

    return () => {
      document.removeEventListener("keyup", onKeyUp);
    };
  }, [onKeyUp]);
}
