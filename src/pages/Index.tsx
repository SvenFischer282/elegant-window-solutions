import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import HeroCarousel from "@/components/HeroCarousel";
import OurProducts from "@/components/OurProducts";

const STORAGE_URL = "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Správa odoslaná",
      description: "Čoskoro vás budeme kontaktovať.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Meno"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="bg-background"
      />
      <Input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="bg-background"
      />
      <Textarea
        placeholder="Správa"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
        rows={4}
        className="bg-background"
      />
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary-hover"
      >
        Odoslať
      </Button>
    </form>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Navigation />

      {/* Hero Carousel Section */}
      <HeroCarousel
        images={[
          { src: `${STORAGE_URL}/1.jpg`, alt: "" },
          { src: `${STORAGE_URL}/2.jpg`, alt: "" },
          { src: `${STORAGE_URL}/3.jpg`, alt: "" },
        ]}
        height="calc(100vh - 4rem)"
        staticText={{
          title: "Okná a dvere bez starostí",
          subtitle:
            "Viac ako 20 rokov skúseností s výrobou a montážou okien, dverí a fasád",
        }}
      />

      {/* About Section */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gradient">O nás</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </section> */}

      <OurProducts />

      {/* References Section */}
      {/* <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient">
              Naše referencie
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pozrite si naše realizované projekty a presvedčte sa o kvalite
              našej práce
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-scale group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="text-xs font-semibold mb-1 text-primary-foreground/80">
                      {project.category}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
              Často kladené otázky
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem
                value="item-1"
                className="border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  Aké typy okien ponúkate?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ponúkame širokú škálu okien vrátane plastových, hliníkových a
                  drevených okien. Každý typ má svoje špecifické výhody a je
                  vhodný pre rôzne typy budov a klimatické podmienky.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  Aká je záruka na vaše produkty?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Poskytujeme 5-ročnú záruku na všetky naše výrobky. Záruka
                  pokrýva výrobné chyby a defekty materiálu. Montáž vykonávaná
                  našimi certifikovanými technikmi je zaručená na 2 roky.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  Ako dlho trvá montáž?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Montáž štandardných okien alebo dverí trvá zvyčajne 1-2 dni v
                  závislosti od počtu kusov. Väčšie projekty ako fasády alebo
                  garážové brány môžu trvať dlhšie. Presný časový rámec vám
                  poskytneme pri obhliadke.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  Poskytujete bezplatnú obhliadku a cenový odhad?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Áno, ponúkame bezplatnú obhliadku a vypracovanie cenovej
                  ponuky. Náš technik príde na miesto, vykoná potrebné merania a
                  poradí vám s výberom najvhodnejšieho riešenia pre vaše
                  potreby.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  Aké certifikáty majú vaše produkty?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Všetky naše produkty spĺňajú európske normy kvality a
                  bezpečnosti vrátane STN EN 14351-1, ISO 9001 a ďalších
                  relevantných certifikácií. Detailné informácie o certifikátoch
                  nájdete na stránkach jednotlivých produktov, kde si môžete aj
                  stiahnuť potrebnú dokumentáciu.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  Ponúkate financovanie alebo platbu na splátky?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Áno, spolupracujeme s viacerými finančnými inštitúciami a
                  ponúkame rôzne možnosti financovania vrátane splátok s
                  výhodným úročením. Kontaktujte nás pre viac informácií o
                  aktuálnych možnostiach financovania.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
              Kontaktujte nás
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="border-2 shadow-md">
                <CardHeader className="bg-primary text-primary-foreground">
                  <CardTitle className="text-xl">Napíšte nám</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ContactForm />
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="border-2 shadow-md">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin
                        className="text-primary mt-1 flex-shrink-0"
                        size={20}
                      />
                      <div>
                        <p className="font-semibold">Adresa</p>
                        <p className="text-sm text-muted-foreground">
                          Slovenská 256, 05 321 Markušovce
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail
                        className="text-primary mt-1 flex-shrink-0"
                        size={20}
                      />
                      <div>
                        <p className="font-semibold">Email</p>
                        <a
                          href="mailto:info@company.sk"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@company.sk
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone
                        className="text-primary mt-1 flex-shrink-0"
                        size={20}
                      />
                      <div>
                        <p className="font-semibold">Telefón</p>
                        <a
                          href="tel:+421903468472"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          +421 903 468 472
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
