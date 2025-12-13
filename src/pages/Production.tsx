import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Factory, Cog, CheckCircle, Zap } from "lucide-react";

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
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </section>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div>
            {/* Main Content */}
            <div>
              {/* Production Header */}
              <section className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
                  Produkcia
                </h1>
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Pôsobíme v oblasti výroby a montáže okien od roku 2004, naša
                    spoločnosť si získala zaslúžené uznanie a dôveru mnohých
                    klientov.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
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
              </section>

              {/* Stats Section */}
              <section className="mb-16 bg-primary rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                        {stat.number}
                      </div>
                      <div className="text-primary-foreground/80 text-sm md:text-base">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Advantages Grid */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                  Naše výhody
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {advantages.map((advantage, index) => (
                    <div
                      key={index}
                      className="p-6 bg-accent/30 rounded-lg hover-lift"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {advantage.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Services Section */}
              <section className="bg-primary/5 rounded-xl p-8 md:p-12 mb-16">
                <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
                  S nami pohodlne a výhodne
                </h2>
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
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
              </section>

              {/* Materials Section */}
              <section className="bg-accent/30 rounded-xl p-8 md:p-12 mb-16">
                <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
                  Používané materiály
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      PVC profily
                    </h3>
                    <p className="text-muted-foreground">
                      WDS, Salamander, VEKA
                    </p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Hliníkové systémy
                    </h3>
                    <p className="text-muted-foreground">
                      Framex, Aluprof, Schüco
                    </p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Zasklenie
                    </h3>
                    <p className="text-muted-foreground">
                      AGC, Guardian, Pilkington
                    </p>
                  </div>
                </div>
              </section>

              {/* YouTube Video Section */}
              <section>
                <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
                  Pozrite si našu výrobu
                </h2>
                <div className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/x2H0ciFu61Q"
                    title="Výroba okien"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
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

export default Production;
