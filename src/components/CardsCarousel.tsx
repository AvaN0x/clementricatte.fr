"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type CardsCarouselContextProps = {
  id: string;
  hasMultipleSlides: boolean;
  expanded: boolean;
  setExpanded: (mode: boolean) => void;
};

const CardsCarouselContext =
  React.createContext<CardsCarouselContextProps | null>(null);

function useCardsCarousel() {
  const context = React.useContext(CardsCarouselContext);

  if (!context) {
    throw new Error("useCardsCarousel must be used within a <CardsCarousel />");
  }

  return context;
}

export function CardsCarousel({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [expanded, setExpanded] = React.useState(false);
  const [hasMultipleSlides, setHasMultipleSlides] = React.useState(false);
  const id = React.useId();

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    setHasMultipleSlides(api.scrollSnapList().length > 1);
  }, []);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CardsCarouselContext.Provider
      value={{
        id,
        hasMultipleSlides,
        expanded,
        setExpanded,
      }}
    >
      <Carousel
        setApi={setApi}
        className={cn("", className)}
        opts={{ align: "start" }}
      >
        {children}
      </Carousel>
    </CardsCarouselContext.Provider>
  );
}

export function CardsCarouselContent({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { expanded } = useCardsCarousel();

  if (expanded) {
    return (
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <CarouselContent className={cn("", className)}>{children}</CarouselContent>
  );
}

export function CardsCarouselItem({
  children,
  className,
  index,
}: {
  children?: React.ReactNode;
  className?: string;
  index: number | string;
}) {
  const { id, expanded } = useCardsCarousel();

  const child = index ? (
    <motion.div
      className="size-full"
      layoutId={`${id}-${index}`}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  ) : (
    children
  );

  if (expanded) {
    return (
      <div className={cn("min-w-0 shrink-0 grow-0 ", className)}>{child}</div>
    );
  }

  return (
    <CarouselItem className={cn("md:basis-1/2 lg:basis-1/3", className)}>
      {child}
    </CarouselItem>
  );
}

export function CardsCarouselToggleExpanded({
  className,
}: {
  className?: string;
}) {
  const { hasMultipleSlides, expanded, setExpanded } = useCardsCarousel();

  if (!hasMultipleSlides) {
    return <></>;
  }

  return (
    <Button
      variant="link"
      className={cn(
        "text-xs text-muted-foreground decoration-primary p-1 h-fit w-14 focus-visible:ring-offset-0",
        className
      )}
      onClick={() => setExpanded(!expanded)}
    >
      {expanded ? "Réduire" : "Tout voir"}
    </Button>
  );
}

export function CardsCarouselActions({ className }: { className?: string }) {
  const { expanded } = useCardsCarousel();

  if (expanded) {
    return <></>;
  }

  return (
    <div className={cn("flex gap-4 items-center mt-1", className)}>
      <CarouselPrevious
        hideWithoutMultipleSlides
        className="max-xl:static max-xl:transform-none"
      />
      <CarouselDots className="flex-1" />
      <CarouselNext
        hideWithoutMultipleSlides
        className="max-xl:static max-xl:transform-none max-xl:float-right"
      />
    </div>
  );
}
