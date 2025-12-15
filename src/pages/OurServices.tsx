import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";

const STORAGE_URL = "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna";

const carouselImages = [
  {
    src: `${STORAGE_URL}/glass_door_image.jpg`,
    alt: "Profesionálna montáž",
  },
  {
    src: `${STORAGE_URL}/1.jpg`,
    alt: "20 rokov skúseností",
  },
  {
    src: `${STORAGE_URL}/2.jpg`,
    alt: "Kompletné riešenia pre váš domov",
  },
  {
    src: `${STORAGE_URL}/3.jpg`,
    alt: "Kvalitné okná a dvere",
  },
];

const OurServices = () => {
  const services = [
    {
      title: "Plastové okná a dvere",
      description:
        "Kvalitné plastové okná a dvere z vlastnej výroby s vynikajúcou tepelnou izoláciou.",
    },
    {
      title: "Hliníkové okná a dvere",
      description:
        "Moderné hliníkové konštrukcie pre náročných zákazníkov s dlhou životnosťou.",
    },
    {
      title: "Garážové brány",
      description:
        "Kvalitné garážové brány s motorovým pohonom a diaľkovým ovládaním.",
    },
    {
      title: "Fasádne systémy",
      description:
        "Moderné fasádne riešenia pre administratívne budovy a obchodné priestory.",
    },
    {
      title: "Posuvné systémy",
      description:
        "Elegantné posuvné dvere a okná pre maximálne využitie priestoru.",
    },
  ];

  const advantages = [
    {
      title: "Vlastná výroba",
      description:
        "Všetky produkty vyrábame vo vlastných výrobných priestoroch.",
    },
    {
      title: "Vlastné montážne tímy",
      description: "Kvalifikovaní pracovníci zabezpečujú profesionálnu montáž.",
    },
    {
      title: "Individuálny prístup",
      description:
        "Vždy načúvame želaniam klientov a premieňame ich predstavy na realitu.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden pt-16">
      <Navigation />

      <HeroCarousel images={carouselImages} height="calc(100vh - 4rem)" />

      <main className="flex-grow">
        {/* Intro Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-8 text-foreground">Naše služby</h1>
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Dôležitú úlohu pri vytváraní útulného domova zohrávajú okná.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Naša spoločnosť už dvadsať rokov dodáva okenné konštrukcie,
                  ktoré spájajú praktickosť, ekologickosť a dlhú životnosť.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ponúkame našim klientom kompletný sortiment služieb – od predaja
                  okien vyrobených vo vlastnej výrobe až po zasklievanie bytov,
                  rodinných domov, lodžií a balkónov konštrukciami z hliníka a
                  PVC.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-4 text-foreground">
              Kompletný sortiment služieb
            </h2>
            <p className="text-center text-muted-foreground mb-16">
              Výroba a montáž konštrukcií z PVC a hliníka
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <h3 className="text-lg font-normal mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-16 text-foreground">
              Prečo si vybrať nás
            </h2>
            <div className="grid md:grid-cols-3 gap-x-12 gap-y-12 max-w-4xl mx-auto">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-normal text-foreground mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center text-lg text-muted-foreground mt-16 max-w-3xl mx-auto leading-relaxed">
              Máme kvalifikovaných pracovníkov, vlastné montážne tímy a vlastnú
              výrobu – vždy načúvame želaniam klientov a ich predstavy
              premieňame na skutočnosť.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurServices;
