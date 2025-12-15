import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const STORAGE_URL = "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna";

const AboutUs = () => {
  const features = [
    {
      title: "Oficiálny partner WDS",
      description:
        "Získate kvalitné produkty z plastových profilov, ktoré vám budú slúžiť dlhé roky.",
    },
    {
      title: "Vlastné montážne tímy",
      description:
        "Nesieme zodpovednosť za prácu našich zamestnancov a dbáme na dodržiavanie priemyselných štandardov pri montáži.",
    },
    {
      title: "Profesionálne poradenstvo",
      description:
        "Ak máte otázky, naši manažéri vám vždy radi poradia a nájdu odpoveď.",
    },
    {
      title: "Viac ako 20 rokov na trhu",
      description:
        "Naša spoločnosť sa neustále zdokonaľuje počas celej doby svojej existencie.",
    },
    {
      title: "Vlastná výroba okien",
      description:
        "Automatizované linky s minimálnou pravdepodobnosťou ľudskej chyby. Kvalitné okná v najkratšom čase.",
    },
    {
      title: "Zodpovednosť voči zákazníkovi",
      description:
        "Vážime si vašu dôveru. Zmluva chráni vaše práva a zaväzuje nás k plneniu záväzkov v plnom rozsahu.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${STORAGE_URL}/1.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-background">
            <h1 className="mb-4">O nás</h1>
            <p className="text-xl md:text-2xl font-light tracking-wide opacity-90">
              Od roku 2004 pre váš komfort
            </p>
          </div>
        </div>
      </section>

      <main className="flex-grow">
        {/* About Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Naša spoločnosť pôsobí na trhu od roku 2004. Od momentu
                založenia je našou hlavnou prioritou{" "}
                <span className="text-foreground">komfort zákazníka</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Naši zamestnanci vám pomôžu určiť, aké produkty potrebujete, a
                vyberú riešenie podľa vášho rozpočtu.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Počúvame vaše priania a vytvárame presne také konštrukcie, aké
                potrebujete. Na to máme spoľahlivého partnera WDS, vlastnú
                výrobu a kvalifikovaných zamestnancov.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-16 text-foreground">
              Prečo si vybrať nás
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <h3 className="text-lg font-normal mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-8 text-foreground">
                Pracujeme pre vás
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Spokojní zákazníci sú pre nás tou najväčšou pochvalou.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
