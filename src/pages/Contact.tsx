import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "@/components/AnimatedSection";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Meno je povinné")
    .max(100, "Meno je príliš dlhé"),
  email: z
    .string()
    .trim()
    .email("Neplatná emailová adresa")
    .max(255, "Email je príliš dlhý"),
  phone: z
    .string()
    .trim()
    .min(1, "Telefón je povinný")
    .max(20, "Telefón je príliš dlhý"),
  message: z
    .string()
    .trim()
    .min(1, "Správa je povinná")
    .max(1000, "Správa je príliš dlhá"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Contact form data:", data);

    toast({
      title: "Správa odoslaná!",
      description: "Ďakujeme za váš dotaz. Čoskoro vás budeme kontaktovať.",
    });

    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <Navigation />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-foreground mb-6">Kontaktujte nás</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Máte otázky? Radi vám pomôžeme s výberom správnych riešení pre
                váš projekt.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <AnimatedSection delay={100}>
              <div className="space-y-8">
                <h3 className="text-foreground">Kontaktný formulár</h3>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">
                            Meno a priezvisko *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Vaše meno"
                              className="bg-background border-border/50 focus:border-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">
                            Email *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="vas@email.sk"
                              className="bg-background border-border/50 focus:border-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">
                            Telefón *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+421 XXX XXX XXX"
                              className="bg-background border-border/50 focus:border-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">
                            Správa *
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Napíšte nám vašu správu..."
                              className="min-h-[150px] bg-background border-border/50 focus:border-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-hover text-primary-foreground transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      <Send className="w-4 h-4 mr-2" strokeWidth={1.5} />
                      {isSubmitting ? "Odosielam..." : "Odoslať správu"}
                    </Button>
                  </form>
                </Form>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection delay={200} direction="right">
              <div className="space-y-12">
                <div className="space-y-8">
                  <h3 className="text-foreground">Kontaktné informácie</h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin
                        className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                        strokeWidth={1.5}
                      />
                      <div>
                        <p className="font-medium text-foreground mb-1">
                          Adresa
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          Slovenská 256
                          <br />
                          05 321 Markušovce
                          <br />
                          Slovenská republika
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone
                        className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                        strokeWidth={1.5}
                      />
                      <div>
                        <p className="font-medium text-foreground mb-1">
                          Telefón
                        </p>
                        <a
                          href="tel:+421903468472"
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          +421 903 468 472
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail
                        className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                        strokeWidth={1.5}
                      />
                      <div>
                        <p className="font-medium text-foreground mb-1">
                          Email
                        </p>
                        <a
                          href="mailto:info@company.sk"
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          info@company.sk
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/30 pt-12">
                  <h3 className="text-foreground mb-6">Otváracie hodiny</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Pondelok - Piatok</span>
                      <span className="text-foreground">8:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sobota</span>
                      <span className="text-foreground">9:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nedeľa</span>
                      <span className="text-foreground">Zatvorené</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
