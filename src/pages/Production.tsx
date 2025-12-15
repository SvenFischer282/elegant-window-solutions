import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const Production = () => {
  const advantages = [
    {
      title: "Bohaté skúsenosti",
      description: "Dlhoročné skúsenosti s montážou a silné výrobné kapacity.",
    },
    {
      title: "Vysoká úroveň vybavenia",
      description:
        "Robotizované zariadenia, laminačné linky, sklená linka, ohýbacie zariadenia, stanovisko kontroly kvality.",
    },
    {
      title: "Neustály rozvoj",
      description:
        "Každý rok zvyšujeme objem kvalitnej produkcie distribuovanej cez vlastnú a dílersku sieť.",
    },
    {
      title: "Široký sortiment",
      description:
        "Okná rôznych typov, ostenia, parapety, sieťky proti hmyzu, regulátory otvárania, detské zámky, materiály na údržbu.",
    },
  ];

  const stats = [
    { number: "20+", label: "Rokov skúseností" },
    { number: "10 000+", label: "Spokojných zákazníkov" },
    { number: "50 000+", label: "Vyrobených okien" },
    { number: "100%", label: "Európske štandardy" },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-background">
            <h1 className="mb-4">Produkcia</h1>
          </div>
        </div>
      </section>

      <main className="flex-grow">
        {/* Production Header */}
        <AnimatedSection>
          <section className="section-padding">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Pôsobíme v oblasti výroby a montáže okien od roku 2004, naša
                  spoločnosť si získala zaslúžené uznanie a dôveru mnohých
                  klientov.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Vysoká úroveň technického vybavenia nášho výrobného závodu
                  nám umožňuje inštalovať plastové okná v súlade s európskymi
                  normami.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Takýto arzenál moderného vybavenia nám umožňuje garantovať
                  vysokú kvalitu a dlhú životnosť všetkých produktov, ktoré
                  ponúkame.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection>
          <section className="py-16 bg-foreground">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <AnimatedSection key={index} delay={index * 100} direction="none">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-light text-background mb-2">
                        {stat.number}
                      </div>
                      <div className="text-background/70 text-sm tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Advantages Grid */}
        <AnimatedSection>
          <section className="section-padding">
            <div className="container mx-auto px-4">
              <h2 className="text-center mb-16 text-foreground">
                Naše výhody
              </h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 max-w-4xl mx-auto">
                {advantages.map((advantage, index) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="group">
                      <h3 className="text-lg font-normal mb-3 text-foreground">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection>
          <section className="section-padding bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="mb-8 text-foreground">
                  S nami pohodlne a výhodne
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Naša flexibilná cenová politika ponúka primerané ceny
                    zodpovedajúce kvalite produktov. Zľavy a akcie sú bonusom,
                    ktorý nám umožňuje rozširovať sieť našich zákazníkov.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Široká škála služieb zahŕňa zameranie, doručenie hotových
                    produktov a kvalifikovanú montáž okien. To umožňuje našim
                    klientom zbaviť sa zbytočných starostí a získať vynikajúci
                    konečný výsledok.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Materials Section */}
        <AnimatedSection>
          <section className="section-padding">
            <div className="container mx-auto px-4">
              <h2 className="text-center mb-16 text-foreground">
                Používané materiály
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
                {[
                  { title: "PVC profily", description: "WDS, Salamander, VEKA" },
                  { title: "Hliníkové systémy", description: "Framex, Aluprof, Schüco" },
                  { title: "Zasklenie", description: "AGC, Guardian, Pilkington" },
                ].map((material, index) => (
                  <AnimatedSection key={index} delay={index * 150}>
                    <div>
                      <h3 className="text-lg font-normal text-foreground mb-2">
                        {material.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {material.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* YouTube Video Section */}
        <AnimatedSection>
          <section className="section-padding bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-center mb-12 text-foreground">
                Pozrite si našu výrobu
              </h2>
              <div className="aspect-video w-full max-w-4xl mx-auto overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/x2H0ciFu61Q"
                  title="Výroba okien"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
};

export default Production;