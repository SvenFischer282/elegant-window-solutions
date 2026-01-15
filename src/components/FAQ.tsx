import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "./Navigation";
import Footer from "./Footer";
const FAQ = () => {
  return (
    <>
      <Navigation />
      <AnimatedSection>
        <section className="section-padding mt-6 bg-background">
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
                    Ponúkame širokú škálu okien vrátane plastových, hliníkových
                    a drevených okien. Každý typ má svoje špecifické výhody a je
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
                    Montáž štandardných okien alebo dverí trvá zvyčajne 1-2 dni
                    v závislosti od počtu kusov. Väčšie projekty ako fasády
                    alebo garážové brány môžu trvať dlhšie. Presný časový rámec
                    vám poskytneme pri obhliadke.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border-b border-border py-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline text-lg font-normal">
                    Prečo si vybrať dvere z PVC profilu?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4 text-base leading-relaxed">
                    <p className="mb-3">
                      PVC konštrukcie sú osvedčené časom a vyskúšané prakticky každým. 
                      Kovovo-plastové dvere majú celý rad výhod:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5">
                      <li>Ochrana proti hluku, prachu a chladu</li>
                      <li>Vysoká pevnosť</li>
                      <li>Odolnosť voči rozličným poveternostným podmienkam</li>
                      <li>Tepelná izolácia</li>
                      <li>Vlastnosti proti vlámaniu</li>
                      <li>Estetický vzhľad</li>
                      <li>Dobrá cena</li>
                    </ul>
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
                    relevantných certifikácií. Detailné informácie o
                    certifikátoch nájdete na stránkach jednotlivých produktov.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </AnimatedSection>
      <Footer />
    </>
  );
};

export default FAQ;
