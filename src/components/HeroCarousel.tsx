import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface CarouselImage {
  src: string;
  alt: string;
}

interface HeroCarouselProps {
  images: CarouselImage[];
  height?: string;
  autoplayDelay?: number;
  showParallax?: boolean;
  showDots?: boolean;
}

const HeroCarousel = ({
  images,
  height = "calc(100vh - 4rem)",
  autoplayDelay = 5000,
  showParallax = true,
  showDots = true,
}: HeroCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!showParallax) return;
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showParallax]);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section className="relative w-full" style={{ height }}>
      <Carousel
        className="h-full w-full cursor-grab active:cursor-grabbing"
        opts={{ loop: true, dragFree: false }}
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: autoplayDelay,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent className="-ml-0" style={{ height }}>
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0" style={{ height }}>
              <div className="relative w-full overflow-hidden" style={{ height }}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-foreground/40 pointer-events-none" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      {showDots && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-background w-8"
                  : "bg-background/50 hover:bg-background/80"
              }`}
              aria-label={`Prejsť na slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroCarousel;
