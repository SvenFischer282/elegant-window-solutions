import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Award,
  Users,
  MessageCircle,
  Clock,
  Factory,
  FileCheck,
} from "lucide-react";
import heroImage from "@/assets/nase_sluzby/carousel_imgs/1.jpg";

const AboutUs = () => {
  const features = [
    {
      icon: Award,
      title: "Oficiálny partner WDS",
      description:
        "Získate kvalitné produkty z plastových profilov, ktoré vám budú slúžiť dlhé roky.",
    },
    {
      icon: Users,
      title: "Vlastné montážne tímy",
      description:
        "Nesieme zodpovednosť za prácu našich zamestnancov a dbáme na dodržiavanie priemyselných štandardov pri montáži.",
    },
    {
      icon: MessageCircle,
      title: "Profesionálne poradenstvo",
      description:
        "Ak máte otázky, naši manažéri vám vždy radi poradia a nájdu odpoveď.",
    },
    {
      icon: Clock,
      title: "Viac ako 20 rokov na trhu",
      description:
        "Naša spoločnosť sa neustále zdokonaľuje počas celej doby svojej existencie.",
    },
    {
      icon: Factory,
      title: "Vlastná výroba okien",
      description:
        "Automatizované linky s minimálnou pravdepodobnosťou ľudskej chyby. Kvalitné okná v najkratšom čase.",
    },
    {
      icon: FileCheck,
      title: "Zodpovednosť voči zákazníkovi",
      description:
        "Vážime si vašu dôveru. Zmluva chráni vaše práva a zaväzuje nás k plneniu záväzkov v plnom rozsahu.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-background">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">O nás</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Od roku 2004 pre váš komfort
            </p>
          </div>
        </div>
      </section>

      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 py-16">
          {/* About Section */}
          <section className="mb-16">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Naša spoločnosť pôsobí na trhu od roku 2004. Od momentu
                založenia je našou hlavnou prioritou{" "}
                <strong className="text-foreground">komfort zákazníka</strong>.
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
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Prečo si vybrať nás
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-accent/30 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mission Section */}
          <section className="bg-primary/5 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Pracujeme pre vás!
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Spokojní zákazníci sú pre nás tou najväčšou pochvalou!
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
