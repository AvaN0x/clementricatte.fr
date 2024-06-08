import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CardsCarousel({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Carousel className={cn("", className)} opts={{ align: "start" }}>
      {children}
    </Carousel>
  );
}

export function CardsCarouselItems<T extends object>({
  items,
  className,
  formatCard,
}: {
  items: T[];
  className?: string;
  formatCard: (item: T, className?: string) => React.ReactNode;
}) {
  return (
    <CarouselContent className={cn("", className)}>
      {items.map((item, i) => (
        <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
          {formatCard(item, "h-full")}
        </CarouselItem>
      ))}
    </CarouselContent>
  );
}

export function CardsCarouselActions({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-4", className)}>
      <CarouselPrevious
        hideWithoutMultipleSlides
        className="max-xl:static max-xl:mt-6"
      />
      <CarouselDots className="flex-1" />
      <CarouselNext
        hideWithoutMultipleSlides
        className="max-xl:static max-xl:mt-6 max-xl:float-right"
      />
    </div>
  );
}
