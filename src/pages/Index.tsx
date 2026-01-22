import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import GDPRFormConsent from "@/components/GDPRFormConsent";

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

import { STORAGE_URL } from "@/lib/constants";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [gdprConsent, setGdprConsent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gdprConsent) {
      toast({
        title: "Súhlas je povinný",
        description:
          "Pre odoslanie formulára musíte súhlasiť so spracovaním osobných údajov.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Správa odoslaná",
      description: "Čoskoro vás budeme kontaktovať.",
    });
    setFormData({ name: "", email: "", message: "" });
    setGdprConsent(false);
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
      <GDPRFormConsent
        checked={gdprConsent}
        onCheckedChange={(checked) => setGdprConsent(checked as boolean)}
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
      <Helmet>
        <title>ARGO SNV - Domov</title>
        <meta
          name="description"
          content="ARGO SNV - výroba a montáž kvalitných okien, dverí a fasádnych systémov. Zistite viac o našich produktoch a službách."
        />
      </Helmet>
      <Navigation />
      {/* Hero Carousel Section */}
      <HeroCarousel
        images={[
          { src: `${STORAGE_URL}/1.webp`, alt: "" },
          { src: `${STORAGE_URL}/2.webp`, alt: "" },
          { src: `${STORAGE_URL}/3.webp`, alt: "" },
        ]}
        height="calc(100vh - 4rem)"
        staticText={{
          title: "Okná a dvere bez starostí",
          subtitle:
            "Viac ako 20 rokov skúseností s výrobou a montážou okien, dverí a fasád",
        }}
      />
      <AnimatedSection>
        <OurProducts />
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-center mb-16 text-foreground">
                Kontaktujte nás
              </h2>
              <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                {/* Contact Information */}
                <AnimatedSection delay={200} direction="right">
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
                          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                            Adresa
                          </p>
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
                          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                            Email
                          </p>
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
                          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                            Telefón
                          </p>
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
                </AnimatedSection>
                {/* Contact Form */}
                <AnimatedSection delay={100} direction="left">
                  <div>
                    <h3 className="mb-8 text-foreground">Napíšte nám</h3>
                    <ContactForm />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
