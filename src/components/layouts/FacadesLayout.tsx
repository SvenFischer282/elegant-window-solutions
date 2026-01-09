import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";

const FacadesLayout = () => {
  const title = "Fasády";

  const images = [
    "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/luxury-holiday-home.jpg",
  ];

  const benefits = [
    { title: "Krásny vonkajší vzhľad", description: "Originálny a unikátny dizajn budovy" },
    { title: "Vizuálne zväčšenie priestoru", description: "Optické rozšírenie interiéru" },
    { title: "Maximálne presvetlenie", description: "Lepšie prepúšťanie svetla do miestnosti" },
    { title: "Úspora energie", description: "Zníženie spotreby elektrickej energie" },
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
                    Pri výstavbe budov sa fasádne zasklenie používa čoraz častejšie. Fasáda nielenže umožňuje dosiahnuť krásny vonkajší vzhľad stavby, ale je aj praktická zvnútra.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection delay={200}>
              <h2 className="text-center mb-16 text-foreground">
                Výhody fasádneho zasklenia
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {benefits.map((item, index) => (
                <AnimatedSection key={index} delay={250 + index * 50}>
                  <div className="text-center">
                    <h3 className="text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection delay={300}>
                <h2 className="mb-8 text-foreground">Široké uplatnenie</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Takéto zasklenie sa široko používa ako v obytných domoch, tak aj v biznis centrách, verejných a administratívnych budovách, ako aj v podnikoch.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Vysoké okná a sklené strechy úplne menia budovu zvonka i zvnútra a premieňajú ju na unikátnu a neopakovateľnú stavbu.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection delay={350}>
                <blockquote className="text-xl md:text-2xl text-foreground/80 italic leading-relaxed">
                  "Výberom fasádneho zasklenia majitelia nehnuteľností dosahujú dvojitý výsledok – originalitu budovy navonok a exkluzivitu interiéru zvnútra."
                </blockquote>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Materials Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection delay={400}>
                <h2 className="mb-8 text-foreground">Materiály a alternatívy</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 bg-muted/30 border-l-2 border-primary">
                    <h3 className="text-foreground mb-3">Hliníkové fasádne systémy</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Vynikajúca alternatíva k oceľovým konštrukciám s vysokou odolnosťou a moderným vzhľadom.
                    </p>
                  </div>
                  <div className="p-8 bg-muted/30 border-l-2 border-primary">
                    <h3 className="text-foreground mb-3">PVC panely</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Špeciálne panely z plastu, ktoré sa používajú pre súkromné domy.
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

export default FacadesLayout;
