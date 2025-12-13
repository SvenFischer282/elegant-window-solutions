import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import { Users, Award, Handshake, Clock } from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: Award,
      title: "Kvalita na prvom mieste",
      description: "Používame len overené materiály a technológie od popredných európskych výrobcov.",
    },
    {
      icon: Users,
      title: "Skúsený tím",
      description: "Naši odborníci majú viac ako 15-ročné skúsenosti v oblasti okien a dverí.",
    },
    {
      icon: Handshake,
      title: "Individuálny prístup",
      description: "Každý projekt riešime individuálne podľa potrieb a požiadaviek zákazníka.",
    },
    {
      icon: Clock,
      title: "Rýchla realizácia",
      description: "Dodržiavame dohodnuté termíny a zabezpečujeme efektívnu realizáciu.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-background/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
            <div className="w-0 h-0 border-l-[20px] border-l-primary border-y-[12px] border-y-transparent ml-1" />
          </div>
        </div>
      </section>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* About Section */}
              <section className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
                  O nás
                </h1>
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Naša spoločnosť pôsobí na trhu od roku 2008. Od momentu založenia je našou hlavnou prioritou 
                    komfort a spokojnosť zákazníka. Náš tím odborníkov vám pomôže vybrať produkty, ktoré 
                    najlepšie vyhovujú vašim potrebám a rozpočtu.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Počúvame vaše priania a vytvárame presne také konštrukcie, aké potrebujete. Na to máme 
                    spoľahlivého partnera WDS, vlastnú výrobu a kvalifikovaných zamestnancov s dlhoročnými 
                    skúsenosťami v obore.
                  </p>
                </div>
              </section>

              {/* Why Choose Us Section */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                  Prečo si vybrať nás
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="p-6 bg-accent/30 rounded-lg hover-lift"
                    >
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4">
                        <feature.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Mission Section */}
              <section className="bg-primary/5 rounded-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
                  Naša misia
                </h2>
                <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
                  Prinášame do vašich domovov a kancelárií kvalitné okná a dvere, ktoré kombinujú moderný dizajn, 
                  vynikajúcu tepelnú izoláciu a dlhú životnosť. Naším cieľom je vytvárať produkty, ktoré zlepšujú 
                  kvalitu života a znižujú náklady na energie.
                </p>
              </section>
            </div>

            {/* Contact Sidebar */}
            <div className="lg:w-1/3">
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

export default AboutUs;
