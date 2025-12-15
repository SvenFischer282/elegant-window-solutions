import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Mail, Phone } from "lucide-react";
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        placeholder="Meno"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="bg-background border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground transition-colors"
      />
      <Input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="bg-background border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground transition-colors"
      />
      <Textarea
        placeholder="Správa"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
        rows={4}
        className="bg-background border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground transition-colors resize-none"
      />
      <Button
        type="submit"
        className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none h-12 text-sm tracking-wider uppercase"
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

      <OurProducts />

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-16 text-foreground">
              Často kladené otázky
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-0">
              <AccordionItem
                value="item-1"
                className="border-b border-border py-6"
              >
                <AccordionTrigger className="text-left hover:no-underline text-lg font-normal">
                  Aké typy okien ponúkate?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 text-base leading-relaxed">
                  Ponúkame širokú škálu okien vrátane plastových, hliníkových a
                  drevených okien. Každý typ má svoje špecifické výhody a je
                  vhodný pre rôzne typy budov a klimatické podmienky.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-b border-border py-6"
              >
                <AccordionTrigger className="text-left hover:no-underline text-lg font-normal">
                  Aká je záruka na vaše produkty?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 text-base leading-relaxed">
                  Poskytujeme 5-ročnú záruku na všetky naše výrobky. Záruka
                  pokrýva výrobné chyby a defekty materiálu. Montáž vykonávaná
                  našimi certifikovanými technikmi je zaručená na 2 roky.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-b border-border py-6"
              >
                <AccordionTrigger className="text-left hover:no-underline text-lg font-normal">
                  Ako dlho trvá montáž?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 text-base leading-relaxed">
                  Montáž štandardných okien alebo dverí trvá zvyčajne 1-2 dni v
                  závislosti od počtu kusov. Väčšie projekty ako fasády alebo
                  garážové brány môžu trvať dlhšie. Presný časový rámec vám
                  poskytneme pri obhliadke.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-b border-border py-6"
              >
                <AccordionTrigger className="text-left hover:no-underline text-lg font-normal">
                  Poskytujete bezplatnú obhliadku a cenový odhad?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 text-base leading-relaxed">
                  Áno, ponúkame bezplatnú obhliadku a vypracovanie cenovej
                  ponuky. Náš technik príde na miesto, vykoná potrebné merania a
                  poradí vám s výberom najvhodnejšieho riešenia pre vaše
                  potreby.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border-b border-border py-6"
              >
                <AccordionTrigger className="text-left hover:no-underline text-lg font-normal">
                  Aké certifikáty majú vaše produkty?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 text-base leading-relaxed">
                  Všetky naše produkty spĺňajú európske normy kvality a
                  bezpečnosti vrátane STN EN 14351-1, ISO 9001 a ďalších
                  relevantných certifikácií. Detailné informácie o certifikátoch
                  nájdete na stránkach jednotlivých produktov.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="border-b border-border py-6"
              >
                <AccordionTrigger className="text-left hover:no-underline text-lg font-normal">
                  Ponúkate financovanie alebo platbu na splátky?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 text-base leading-relaxed">
                  Áno, spolupracujeme s viacerými finančnými inštitúciami a
                  ponúkame rôzne možnosti financovania vrátane splátok s
                  výhodným úročením. Kontaktujte nás pre viac informácií.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-16 text-foreground">
              Kontaktujte nás
            </h2>
            <div className="grid md:grid-cols-2 gap-16 md:gap-24">
              {/* Contact Form */}
              <div>
                <h3 className="mb-8 text-foreground">Napíšte nám</h3>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="mb-8 text-foreground">Kontaktné údaje</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin
                      className="text-foreground mt-1 flex-shrink-0"
                      size={20}
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Adresa</p>
                      <p className="text-foreground">
                        Slovenská 256, 05 321 Markušovce
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail
                      className="text-foreground mt-1 flex-shrink-0"
                      size={20}
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Email</p>
                      <a
                        href="mailto:info@company.sk"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        info@company.sk
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone
                      className="text-foreground mt-1 flex-shrink-0"
                      size={20}
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Telefón</p>
                      <a
                        href="tel:+421903468472"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        +421 903 468 472
                      </a>
                    </div>
                  </div>
                </div>
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
