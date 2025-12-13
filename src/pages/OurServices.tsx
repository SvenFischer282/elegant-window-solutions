import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import { Ruler, Wrench, Truck, Shield, HeadphonesIcon, FileCheck } from "lucide-react";

const OurServices = () => {
  const services = [
    {
      icon: Ruler,
      title: "Bezplatné zameranie",
      description: "Náš technik príde k vám domov a bezplatne zameria všetky otvory pre presný výpočet.",
    },
    {
      icon: FileCheck,
      title: "Odborné poradenstvo",
      description: "Pomôžeme vám vybrať správny typ okien a dverí pre vaše potreby a rozpočet.",
    },
    {
      icon: Wrench,
      title: "Profesionálna montáž",
      description: "Vlastné montážne tímy zabezpečujú kvalitný a rýchly montáž podľa najnovších štandardov.",
    },
    {
      icon: Truck,
      title: "Doprava po celom Slovensku",
      description: "Zabezpečujeme dopravu hotových výrobkov priamo k vám domov.",
    },
    {
      icon: Shield,
      title: "Záruka kvality",
      description: "Na všetky naše produkty a montážne práce poskytujeme rozšírenú záruku.",
    },
    {
      icon: HeadphonesIcon,
      title: "Pozáručný servis",
      description: "Aj po skončení záruky sa o vás postaráme a zabezpečíme potrebné opravy.",
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
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')`,
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
              {/* Services Header */}
              <section className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
                  Naše služby
                </h1>
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Poskytujeme komplexné služby od poradenstva cez zameranie, výrobu, dopravu až po 
                    profesionálnu montáž. Všetko pod jednou strechou, aby ste mali istotu kvality 
                    v každom kroku procesu.
                  </p>
                </div>
              </section>

              {/* Services Grid */}
              <section className="mb-16">
                <div className="grid md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                    <div 
                      key={index}
                      className="p-6 bg-background border border-border rounded-lg hover-lift hover:border-primary/30 transition-colors"
                    >
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4">
                        <service.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Process Section */}
              <section className="bg-primary/5 rounded-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                  Ako to funguje
                </h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: "1", title: "Konzultácia", desc: "Preberieme vaše požiadavky" },
                    { step: "2", title: "Zameranie", desc: "Príjdeme k vám zadarmo" },
                    { step: "3", title: "Výroba", desc: "Vyrobíme na mieru" },
                    { step: "4", title: "Montáž", desc: "Profesionálna inštalácia" },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
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

export default OurServices;
