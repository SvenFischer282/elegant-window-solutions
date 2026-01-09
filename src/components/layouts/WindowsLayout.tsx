import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductHero from "@/components/product/ProductHero";
import TechnologyGrid from "@/components/product/TechnologyGrid";
import { AnimatedSection } from "@/components/AnimatedSection";

const WindowsLayout = () => {
  const title = "Okná";

  const technologies = [
    {
      name: "WDS 5S",
      description: "60 mm | Klasické okná s optimálnou komfortnou výbavou",
      descriptionDetailed:
        "Klasické okná s optimálnou kompletáciou. Päť komôr v profile zaisťuje vysoké tepelnoizolačné vlastnosti pre konštrukcie danej triedy.",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/WDS_5S.png",
    },
    {
      name: "WDS 6S",
      description: "70 mm | Vyššia tepelná izolácia a úspora energie",
      descriptionDetailed:
        "6-komorový profilový systém WDS 6S má menšiu výšku a prepúšťa viac svetla. Je vyvinutý na zasklenie obytných budov. Šesť vzduchových komôr zaisťuje spoľahlivú tepelnú izoláciu.",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/WDS_6S.png",
    },
    {
      name: "WDS 7S",
      description: "76 mm | Prémiová tepelná a zvuková izolácia",
      descriptionDetailed:
        "6-komorový profilový systém pre výrobu okien a dverí s vysokými tepelnoizolačnými parametrami. Umožňuje výrobu klasických aj neštandardných konštrukcií (trojuholníkové, oblúkové, kruhové).",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/WDS_7S.png",
    },
    {
      name: "WDS 8S",
      description: "82 mm | Najvyššia energetická účinnosť",
      descriptionDetailed:
        "6-komorový profilový systém s tromi tesniacimi okruhmi a bezchybným dizajnom – je jedným z najúspornejších okenných systémov. Vhodný pre budovy so zvýšenými nárokmi na úsporu tepla.",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/WDS_8S.png",
    },
    {
      name: "WDS 76 AD",
      description: "76 mm | Maximálne presvetlenie interiéru",
      descriptionDetailed:
        "WDS 76 AD má komory na armovanie väčšie ako iné systémy WDS. Okná prepúšťajú viac svetla a umožňujú vytvárať veľkorozmerné konštrukcie. Ideálny na zasklenie domov, terás, veránd.",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/WDS_76_AD.png",
    },
    {
      name: "WDS 76 MD",
      description: "90 mm | Pre pasívne a nízkoenergetické domy",
      descriptionDetailed:
        "WDS 76 MD má komory na armovanie väčšie ako iné systémy WDS. Okná prepúšťajú viac svetla, umožňujú veľkorozmerné konštrukcie a sú ideálne pre panoramatické zasklenie. Má vysokú úroveň energetickej úspornosti.",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/WDS_76_MD.png",
    },
  ];

  const images = [
    "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/okno.jpg",
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
                  Moderné plastové okná s vysokou energetickou účinnosťou
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
                    Plastové okná sú veľmi obľúbené vďaka svojmu modernému
                    dizajnu a vysokej praktickosti. Nie je ich potrebné natierať
                    a zároveň pôsobia esteticky a elegantne.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Spolupracujeme s výrobcom profilových systémov{" "}
                    <span className="text-foreground font-medium">WDS</span>
                    , ktorého produkty prechádzajú dôslednou kontrolou kvality v
                    každom kroku výroby.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Technology Grid Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection delay={200}>
              <h2 className="text-center mb-16 text-foreground">
                Profilové systémy
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <TechnologyGrid technologies={technologies} />
            </AnimatedSection>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection delay={400}>
                <h2 className="mb-12 text-foreground">Technické špecifikácie</h2>
              </AnimatedSection>
              <div className="space-y-12">
                {technologies.map((tech, index) => (
                  <AnimatedSection key={index} delay={450 + index * 50}>
                    <div className="border-b border-border pb-8 last:border-0">
                      <h3 className="text-foreground mb-3">{tech.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {tech.descriptionDetailed}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WindowsLayout;
