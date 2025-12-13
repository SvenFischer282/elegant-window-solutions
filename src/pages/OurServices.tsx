import { useState, useEffect, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Ruler, Wrench, Truck, Shield, HeadphonesIcon, FileCheck } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    alt: "Profesionálna montáž okien",
  },
  {
    src: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&q=80",
    alt: "Zameranie a konzultácia",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    alt: "Moderné riešenia pre váš domov",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
    alt: "Kvalitné okná a dvere",
  },
];

const OurServices = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const services = [
    {
      icon: Ruler,
      title: "Bezplatné zameranie",
      description: "Náš technik príde k vám domov a bezplatne zameria všetky otvory pre presný výpočet.",
    },
    {
      icon: FileCheck,
      title: "Odborné poradenstvo",
      description: "Pomôžeme vám vybrať správny typ okien a dverí pre vaše potreby a rozpočet.",
    },
    {
      icon: Wrench,
      title: "Profesionálna montáž",
      description: "Vlastné montážne tímy zabezpečujú kvalitný a rýchly montáž podľa najnovších štandardov.",
    },
    {
      icon: Truck,
      title: "Doprava po celom Slovensku",
      description: "Zabezpečujeme dopravu hotových výrobkov priamo k vám domov.",
    },
    {
      icon: Shield,
      title: "Záruka kvality",
      description: "Na všetky naše produkty a montážne práce poskytujeme rozšírenú záruku.",
    },
    {
      icon: HeadphonesIcon,
      title: "Pozáručný servis",
      description: "Aj po skončení záruky sa o vás postaráme a zabezpečíme potrebné opravy.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />
      
      {/* Fullscreen Carousel */}
      <section className="relative h-screen w-screen">
        <Carousel 
          className="h-full w-full cursor-grab active:cursor-grabbing" 
          opts={{ loop: true, dragFree: false }}
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
        >
          <CarouselContent className="h-full -ml-0">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="h-full pl-0">
                <div className="relative h-screen w-screen overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-foreground/40 pointer-events-none" />
                  <div 
                    className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-500 ease-out will-change-transform"
                    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                  >
                    <div className="text-center text-background">
                      <h2 className="text-4xl md:text-6xl font-bold mb-4">{image.alt}</h2>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* Dots indicator */}
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
      </section>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div>
            {/* Main Content */}
            <div>
              {/* Services Header */}
              <section className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
                  Naše služby
                </h1>
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Poskytujeme komplexné služby od poradenstva cez zameranie, výrobu, dopravu až po 
                    profesionálnu montáž. Všetko pod jednou strechou, aby ste mali istotu kvality 
                    v každom kroku procesu.
                  </p>
                </div>
              </section>

              {/* Services Grid */}
              <section className="mb-16">
                <div className="grid md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                    <div 
                      key={index}
                      className="p-6 bg-background border border-border rounded-lg hover-lift hover:border-primary/30 transition-colors"
                    >
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4">
                        <service.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Process Section */}
              <section className="bg-primary/5 rounded-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                  Ako to funguje
                </h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: "1", title: "Konzultácia", desc: "Preberieme vaše požiadavky" },
                    { step: "2", title: "Zameranie", desc: "Príjdeme k vám zadarmo" },
                    { step: "3", title: "Výroba", desc: "Vyrobíme na mieru" },
                    { step: "4", title: "Montáž", desc: "Profesionálna inštalácia" },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurServices;
