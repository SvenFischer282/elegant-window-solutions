import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import TechnologyGrid from "@/components/product/TechnologyGrid";
import { AnimatedSection } from "@/components/AnimatedSection";

const DoorsLayout = () => {
  const title = "Dvere";

  const technologies = [
    {
      name: "WDS 60mm",
      description: "Montážna šírka - 60mm",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/wds_60mm.png",
    },
    {
      name: "WDS 70mm",
      description: "Montážna šírka - 70mm",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/wds_70mm.png",
    },
    {
      name: "WDS 76mm",
      description: "Montážna šírka - 76mm",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/wds_76mm.png",
    },
  ];

  const images = [
    "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/dvere.jpg",
  ];

  const doorTypes = [
    {
      name: "Balkónové plastové dvere",
      description: "Vyrábajú sa z okenného PVC profilu. Odporúčajú sa do vnútorných priestorov alebo na oddelenie interiéru od balkóna."
    },
    {
      name: "Vchodové plastové dvere",
      description: "Spoľahlivé dvere pre zabezpečenie obytných a komerčných priestorov."
    },
    {
      name: "Interiérové plastové dvere",
      description: "Ideálne do kancelárií a priestorov vyžadujúcich zvýšenú zvukovú izoláciu."
    },
    {
      name: "Posuvné plastové dvere",
      description: "Vybavené spoľahlivým mechanizmom, šetria úžitkovú plochu v miestnosti."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background pt-16">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh]">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12 md:pb-16">
              <AnimatedSection>
                <ProductBreadcrumb title={title} />
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mt-4">
                  {title}
                </h1>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection delay={100}>
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Dvere vytvárajú prvý dojem o budove. Rozmanitá ponuka dverí z profilov WDS – vrátane vchodových, interiérových, balkónových a posuvných dverí – dokáže uspokojiť požiadavky aj tých najnáročnejších majiteľov domov.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Naši klienti sa môžu spoľahnúť na vynikajúcu kvalitu a optimálnu tepelnú izoláciu dverí vyrobených z profilov{" "}
                    <span className="text-foreground font-medium">WDS</span>.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Profiles Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection delay={200}>
              <div className="max-w-4xl mx-auto mb-16">
                <h2 className="text-center mb-8 text-foreground">
                  Profily WDS
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  Portfólio dverových systémov WDS zahŕňa systémy s montážnou hĺbkou 60 mm a 70 mm. Tieto systémy poskytujú skvelú zvukovú izoláciu, vyznačujú sa vysokou energetickou účinnosťou.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <TechnologyGrid technologies={technologies} />
            </AnimatedSection>
          </div>
        </section>

        {/* WDS 76 Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection delay={350}>
                <h2 className="mb-8 text-foreground">
                  WDS 76 – Nový štandard plastových dverí
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Moderné vchodové dvere WDS 76 zabezpečujú špičkovú tepelnú a zvukovú izoláciu vďaka:
                </p>
                <ul className="text-lg text-muted-foreground leading-relaxed space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                    5-komorovému profilu
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                    Trom kontúram tesnenia
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                    Pevnej kovovej výstuži
                  </li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  S montážnou hĺbkou 76 mm a možnosťou 4-krídlového riešenia sú ideálne pre rodinné domy, byty a kancelárie.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Door Types Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection delay={400}>
              <h2 className="text-center mb-16 text-foreground">
                Typy dverí v našej ponuke
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {doorTypes.map((type, index) => (
                <AnimatedSection key={index} delay={450 + index * 50}>
                  <div className="p-8 bg-background border-l-2 border-primary">
                    <h3 className="text-foreground mb-3">{type.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DoorsLayout;
