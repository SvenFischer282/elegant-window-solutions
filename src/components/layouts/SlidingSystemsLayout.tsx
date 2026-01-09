import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import TechnologyGrid from "@/components/product/TechnologyGrid";
import { AnimatedSection } from "@/components/AnimatedSection";

const SlidingSystemsLayout = () => {
  const title = "Posuvné systémy";

  const technologies = [
    {
      name: "WDS 60SL okná",
      description: "",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/wds_60sl_window.png",
    },
    {
      name: "WDS 60SL dvere",
      description: "",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/wds_60sl_door.png",
    },
    {
      name: "WDS 76SL okná",
      description: "",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/wds_76sl_window.png",
    },
    {
      name: "WDS 76SL dvere",
      description: "",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/wds_76sl_door.png",
    },
  ];

  const images = [
    "https://vesnyanka.com.ua/wp-content/uploads/2025/03/83d2470a-7357-4e2a-a0fc-3524bcc91433.webp",
  ];

  const advantages = [
    { name: "Úspora priestoru", description: "Krídla sa posúvajú pozdĺž seba" },
    { name: "Moderný vzhľad", description: "Elegantný a súčasný dizajn" },
    { name: "Spoľahlivé kovanie", description: "Ľahký chod a dlhá životnosť" },
    { name: "Vysoká tesnosť", description: "Špeciálne tesnenie" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background pt-16">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section - Full Screen */}
        <section className="relative" style={{ height: "calc(100vh - 4rem)" }}>
          <img
            src={images[0]}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-background px-4">
              <AnimatedSection>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                  {title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
                  Elegantné a praktické riešenie pre moderné interiéry
                </p>
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
                    Posuvné systémy predstavujú estetický a zároveň mimoriadne praktický spôsob zasklenia budov a miestností.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Tieto konštrukcie sa ľahko otvárajú a zatvárajú, pričom si zachovávajú relatívne nízku hmotnosť aj pri rozsiahlej zasklenej ploche.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection delay={200}>
              <h2 className="text-center mb-16 text-foreground">
                Hlavné výhody
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {advantages.map((item, index) => (
                <AnimatedSection key={index} delay={250 + index * 50}>
                  <div className="text-center">
                    <h3 className="text-foreground mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Systems Comparison */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection delay={300}>
                <h2 className="text-center mb-16 text-foreground">
                  Naše systémy
                </h2>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12">
                <AnimatedSection delay={350}>
                  <div className="space-y-6">
                    <h3 className="text-foreground">WDS 60SL</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Optimálne riešenie pre ľahké konštrukcie
                    </p>
                    <ul className="text-muted-foreground space-y-3">
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        Montážna hĺbka: 60 mm
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        Počet komôr profilu: 3
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        Max. hrúbka izolačného skla: do 24 mm
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        Určenie: Loggie, balkóny, interiérové priečky
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={400}>
                  <div className="space-y-6">
                    <h3 className="text-foreground">WDS 76SL</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Vylepšená energetická účinnosť
                    </p>
                    <ul className="text-muted-foreground space-y-3">
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        Montážna hĺbka: 76 mm
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        Počet komôr profilu: 5
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        Max. hrúbka izolačného skla: do 42 mm
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        Možnosť laminácie: Rôzne farebné varianty
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Grid Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection delay={450}>
              <h2 className="text-center mb-16 text-foreground">
                Produktová rada
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={500}>
              <TechnologyGrid technologies={technologies} />
            </AnimatedSection>
          </div>
        </section>

        {/* Aluminum Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection delay={550}>
                <h2 className="mb-8 text-foreground">Hliníkové posuvné systémy</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hliníkové posuvné systémy sú estetickým a pohodlným riešením pre zasklenie. Vyznačujú sa mimoriadnou ľahkosťou, jednoduchým používaním a dobrou zvukovou izoláciou.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SlidingSystemsLayout;
