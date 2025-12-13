import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import { Factory, Cog, CheckCircle, Zap } from "lucide-react";

const Production = () => {
  const capabilities = [
    {
      icon: Factory,
      title: "Moderná výroba",
      description: "Disponujeme moderným strojovým parkom pre presné a efektívne spracovanie profilov.",
    },
    {
      icon: Cog,
      title: "Automatizované procesy",
      description: "Využívame najnovšie CNC technológie pre maximálnu presnosť výroby.",
    },
    {
      icon: CheckCircle,
      title: "Kontrola kvality",
      description: "Každý výrobok prechádza dôkladnou kontrolou pred expedíciou.",
    },
    {
      icon: Zap,
      title: "Rýchla výroba",
      description: "Štandardné zákazky dokážeme vyrobiť do 2-3 týždňov.",
    },
  ];

  const stats = [
    { number: "15+", label: "Rokov skúseností" },
    { number: "10 000+", label: "Spokojných zákazníkov" },
    { number: "50 000+", label: "Vyrobených okien" },
    { number: "100%", label: "Kontrola kvality" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80')`,
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
              {/* Production Header */}
              <section className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
                  Produkcia
                </h1>
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Naša výrobná hala je vybavená najmodernejšími technológiami pre výrobu plastových 
                    a hliníkových okien, dverí a fasádnych systémov. Vďaka vlastnej výrobe vám garantujeme 
                    najvyššiu kvalitu a flexibilitu pri realizácii vašich projektov.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Spracovávame profily od renomovaných výrobcov ako WDS a ďalších európskych značiek, 
                    čo zabezpečuje dlhú životnosť a spoľahlivosť našich výrobkov.
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

              {/* Capabilities Grid */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                  Naše výrobné kapacity
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {capabilities.map((capability, index) => (
                    <div 
                      key={index}
                      className="p-6 bg-accent/30 rounded-lg hover-lift"
                    >
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4">
                        <capability.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {capability.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {capability.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Materials Section */}
              <section className="bg-primary/5 rounded-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
                  Používané materiály
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">PVC profily</h3>
                    <p className="text-muted-foreground">WDS, Salamander, VEKA</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Hliníkové systémy</h3>
                    <p className="text-muted-foreground">Framex, Aluprof, Schüco</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Zasklenie</h3>
                    <p className="text-muted-foreground">AGC, Guardian, Pilkington</p>
                  </div>
                </div>
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

export default Production;
