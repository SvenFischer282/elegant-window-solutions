import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductHero from "@/components/product/ProductHero";
import TechnologyGrid from "@/components/product/TechnologyGrid";

const WindowsLayout = () => {
  const title = "Okná";

  const features = [
    "Plastové okná",
    "Drevené okná",
    "Hliníkové okná",
    "Energeticky úsporné okná",
  ];

  const technologies = [
    {
      name: "WDS 5S",
      description: "60 mm | Klasické okná s optimálnou komfortnou výbavou",
      descriptionDetailed:
        "Klasické okná s optimálnou kompletáciou. Päť komôr v profile zaisťuje vysoké tepelnoizolačné vlastnosti pre konštrukcie danej triedy.",
      image: "src/assets/product_imgs/windows/WDS_5S.png",
    },
    {
      name: "WDS 6S",
      description: "70 mm | Vyššia tepelná izolácia a úspora energie",
      descriptionDetailed:
        "6-komorový profilový systém WDS 6S má menšiu výšku a prepúšťa viac svetla. Je vyvinutý na zasklenie obytných budov. Šesť vzduchových komôr zaisťuje spoľahlivú tepelnú izoláciu.",
      image: "src/assets/product_imgs/windows/WDS_6S.png",
    },
    {
      name: "WDS 7S",
      description: "76 mm | Prémiová tepelná a zvuková izolácia",
      descriptionDetailed:
        "6-komorový profilový systém pre výrobu okien a dverí s vysokými tepelnoizolačnými parametrami. Umožňuje výrobu klasických aj neštandardných konštrukcií (trojuholníkové, oblúkové, kruhové).",
      image: "src/assets/product_imgs/windows/WDS_7S.png",
    },
    {
      name: "WDS 8S",
      description: "82 mm | Najvyššia energetická účinnosť",
      descriptionDetailed:
        "6-komorový profilový systém s tromi tesniacimi okruhmi a bezchybným dizajnom – je jedným z najúspornejších okenných systémov. Vhodný pre budovy so zvýšenými nárokmi na úsporu tepla.",
      image: "src/assets/product_imgs/windows/WDS_8S.png",
    },
    {
      name: "WDS 76 AD",
      description: "76 mm | Maximálne presvetlenie interiéru",
      descriptionDetailed:
        "WDS 76 AD má komory na armovanie väčšie ako iné systémy WDS. Okná prepúšťajú viac svetla a umožňujú vytvárať veľkorozmerné konštrukcie. Ideálny na zasklenie domov, terás, veránd.",
      image: "src/assets/product_imgs/windows/WDS_76_AD.png",
    },
    {
      name: "WDS 76 MD",
      description: "90 mm | Pre pasívne a nízkoenergetické domy",
      descriptionDetailed:
        "WDS 76 MD má komory na armovanie väčšie ako iné systémy WDS. Okná prepúšťajú viac svetla, umožňujú veľkorozmerné konštrukcie a sú ideálne pre panoramatické zasklenie. Má vysokú úroveň energetickej úspornosti.",
      image: "src/assets/product_imgs/windows/WDS_76_MD.png",
    },
  ];

  const images = [
    "https://vesnyanka.com.ua/wp-content/uploads/2022/10/valeriy-lobanov-sCFjj3evA1s-unsplash-1-scaled.jpg",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-muted/30 pt-16">
      <Navigation />

      <main className="flex-1 animate-fade-in">
        <div className="container mx-auto px-4 py-8">
          <ProductBreadcrumb title={title} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ProductHero image={images[0]} alt={title} />
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
                  Okná
                </h1>

                <div className="prose prose-lg max-w-none">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Plastové okná sú veľmi obľúbené vďaka svojmu modernému dizajnu
                    a vysokej praktickosti. Nie je ich potrebné natierať a zároveň pôsobia esteticky a
                    elegantne.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Spolupracujeme s výrobcom profilových systémov <strong className="text-foreground font-medium">WDS</strong>, ktorého
                    produkty prechádzajú dôslednou kontrolou kvality v každom
                    kroku výroby.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Profilové systémy <strong className="text-foreground font-medium">WDS</strong> sú vyrábané podľa
                    medzinárodných a slovenských štandardov kvality, priamo pre
                    klimatické podmienky Slovenska a slovenské domácnosti.
                  </p>
                </div>
              </div>
              <TechnologyGrid technologies={technologies} />
              {/* Technology Descriptions */}
              <div className="space-y-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="text-lg font-medium text-foreground">{tech.name}</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {tech.descriptionDetailed}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ContactSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WindowsLayout;
