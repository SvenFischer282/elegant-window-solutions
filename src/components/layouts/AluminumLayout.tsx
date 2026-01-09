import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import TechnologyGrid from "@/components/product/TechnologyGrid";
import { AnimatedSection } from "@/components/AnimatedSection";

const AluminumLayout = () => {
  const title = "Hliník";

  const technologies1 = [
    {
      name: "Framex 38",
      description:
        "Montážna hĺbka rámu: 38 mm. Inštalačná (montážna) hĺbka krídla: 46 mm",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/framex_38.png",
    },
  ];

  const technologies2 = [
    {
      name: "Framex FT 72",
      description: "Montážna hĺbka 72 mm.",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/framex_ft72.png",
    },
  ];

  const images = [
    "https://vesnyanka.com.ua/wp-content/uploads/2025/03/DALL%C2%B7E-2025-03-31-21.43.31-A-modern-aluminum-and-glass-door-designed-for-contemporary-homes-and-commercial-spaces.-The-door-features-a-sleek-minimalistic-frame-with-a-large-gla.webp",
  ];

  const products = [
    "Fasády",
    "Kancelárske priečky",
    "Okná",
    "Dvere a iné hliníkové výrobky"
  ];

  const framexFeatures = [
    { name: "Ľahkosť a pevnosť", description: "Ideálne pre trvanlivé a ľahké konštrukcie" },
    { name: "Odolnosť proti korózii", description: "Eloxácia alebo práškové lakovanie" },
    { name: "Estetický vzhľad", description: "Rozmanitosť farieb a textúr" },
    { name: "Ekologickosť", description: "Plne recyklovateľný materiál" },
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
                  Hliníkové konštrukcie
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
                    Ľahké hliníkové systémy sú ideálnou voľbou, ak potrebujete zabezpečiť maximálne prirodzené osvetlenie a nemáte prísne požiadavky na tepelnú izoláciu.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection delay={200}>
              <h2 className="text-center mb-16 text-foreground">
                Náš sortiment
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {products.map((product, index) => (
                <AnimatedSection key={index} delay={250 + index * 50}>
                  <div className="text-center p-6 bg-background">
                    <p className="text-foreground font-medium">{product}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Cold vs Warm Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection delay={300}>
                <h2 className="text-center mb-16 text-foreground">
                  Studený vs. Teplý hliník
                </h2>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12">
                <AnimatedSection delay={350}>
                  <div className="p-8 bg-muted/30 border-l-2 border-primary h-full">
                    <h3 className="text-foreground mb-4">„Studený" hliník</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ideálny pre balkóny, verandy, altánky a terasy. Cenovo dostupné klasické posuvné systémy.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={400}>
                  <div className="p-8 bg-muted/30 border-l-2 border-primary h-full">
                    <h3 className="text-foreground mb-4">„Teplý" hliník</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Vysoké tepelno- a zvukovoizolačné vlastnosti. Najlepšie riešenie pre vykurované miestnosti.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Framex Features Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection delay={450}>
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="mb-8 text-foreground">Hliníkový profil Framex</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Pracujeme s hliníkovým profilom Framex – kvalitný konštrukčný profil certifikovaný podľa európskych noriem.
                </p>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {framexFeatures.map((feature, index) => (
                <AnimatedSection key={index} delay={500 + index * 50}>
                  <div className="text-center">
                    <h3 className="text-foreground mb-2">{feature.name}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Framex 38 Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection delay={550}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="mb-6 text-foreground">Framex 38</h2>
                    <p className="text-sm uppercase tracking-wider text-primary mb-4">Studený hliníkový systém</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Studený hliníkový systém určený pre konštrukcie s nízkymi požiadavkami na tepelnú izoláciu – nevykurované miestnosti, interiérové priečky alebo výklady.
                    </p>
                  </div>
                  <TechnologyGrid technologies={technologies1} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Framex FT 72 Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection delay={600}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <TechnologyGrid technologies={technologies2} />
                  </div>
                  <div className="order-1 md:order-2">
                    <h2 className="mb-6 text-foreground">Framex FT 72</h2>
                    <p className="text-sm uppercase tracking-wider text-primary mb-4">Teplý hliníkový systém</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Framex FT 72 je spoľahlivý a energeticky účinný teplý hliníkový okenný a dverový systém s vysokou tepelnou a zvukovou izoláciou.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AluminumLayout;
