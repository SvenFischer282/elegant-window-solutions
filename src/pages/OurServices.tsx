import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { 
  LayoutGrid, 
  DoorOpen, 
  Blinds, 
  Warehouse, 
  Building2, 
  SlidersHorizontal, 
  PanelTop,
  Hammer,
  Users,
  Factory,
  Heart
} from "lucide-react";

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    alt: "Profesionálna montáž okien",
  },
  {
    src: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&q=80",
    alt: "20 rokov skúseností",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    alt: "Kompletné riešenia pre váš domov",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
    alt: "Kvalitné okná a dvere",
  },
];

const OurServices = () => {
  const services = [
    {
      icon: LayoutGrid,
      title: "Plastové okná a dvere",
      description: "Kvalitné plastové okná a dvere z vlastnej výroby s vynikajúcou tepelnou izoláciou.",
    },
    {
      icon: DoorOpen,
      title: "Hliníkové okná a dvere",
      description: "Moderné hliníkové konštrukcie pre náročných zákazníkov s dlhou životnosťou.",
    },
    {
      icon: Blinds,
      title: "Žalúzie a rolety",
      description: "Horizontálne žalúzie a rolovacie závesy pre dokonalé tienenie.",
    },
    {
      icon: Warehouse,
      title: "Garážové brány",
      description: "Kvalitné garážové brány s motorovým pohonom a diaľkovým ovládaním.",
    },
    {
      icon: Building2,
      title: "Fasádne systémy",
      description: "Moderné fasádne riešenia pre administratívne budovy a obchodné priestory.",
    },
    {
      icon: SlidersHorizontal,
      title: "Posuvné systémy",
      description: "Elegantné posuvné dvere a okná pre maximálne využitie priestoru.",
    },
    {
      icon: PanelTop,
      title: "Hliníkové priečky",
      description: "Interiérové hliníkové priečky pre kancelárie a komerčné priestory.",
    },
    {
      icon: Hammer,
      title: "Doplnkové prvky",
      description: "Výroba parapetov, odkvapov, striešok a ďalších doplnkov.",
    },
  ];

  const advantages = [
    {
      icon: Factory,
      title: "Vlastná výroba",
      description: "Všetky produkty vyrábame vo vlastných výrobných priestoroch.",
    },
    {
      icon: Users,
      title: "Vlastné montážne tímy",
      description: "Kvalifikovaní pracovníci zabezpečujú profesionálnu montáž.",
    },
    {
      icon: Heart,
      title: "Individuálny prístup",
      description: "Vždy načúvame želaniam klientov a premieňame ich predstavy na realitu.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />
      
      <HeroCarousel 
        images={carouselImages} 
        title="Naše služby"
        subtitle="Kompletný sortiment služieb pre váš domov"
        showParallax={true}
      />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Intro Section */}
          <section className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
              Naše služby
            </h1>
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dôležitú úlohu pri vytváraní útulného domova zohrávajú okná.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Naša spoločnosť už dvadsať rokov dodáva okenné konštrukcie, ktoré spájajú 
                praktickosť, ekologickosť a dlhú životnosť.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ponúkame našim klientom kompletný sortiment služieb – od predaja okien vyrobených 
                vo vlastnej výrobe až po zasklievanie bytov, rodinných domov, lodžií a balkónov 
                konštrukciami z hliníka a PVC.
              </p>
            </div>
          </section>

          {/* Services Header */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
              Ponúkame kompletný sortiment služieb
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Výroba a montáž konštrukcií z PVC a hliníka
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="p-6 bg-background border border-border rounded-lg hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Us Section */}
          <section className="bg-primary/5 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Prečo si vybrať nás
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                    <advantage.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-xl">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-lg text-muted-foreground mt-8 max-w-3xl mx-auto">
              Máme kvalifikovaných pracovníkov, vlastné montážne tímy a vlastnú výrobu – 
              vždy načúvame želaniam klientov a ich predstavy premieňame na skutočnosť.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurServices;
