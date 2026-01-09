import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navigation />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl font-light mb-8 text-foreground">
              Zásady ochrany osobných údajov
            </h1>
            <p className="text-muted-foreground mb-12">
              Posledná aktualizácia: {new Date().toLocaleDateString("sk-SK")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-foreground">
                  1. Prevádzkovateľ osobných údajov
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Prevádzkovateľom vašich osobných údajov je:
                </p>
                <div className="bg-muted/30 p-6 mb-4">
                  <p className="text-foreground">
                    <strong>ARGO SNV s.r.o.</strong>
                    <br />
                    Slovenská 256, 053 21 Markušovce
                    <br />
                    IČO: 50314262
                    <br />
                    DIČ: 2120281427
                    <br />
                    IČ DPH: SK2120281427 (podľa §4, registrácia od 1.7.2021)
                    <br />
                    Zapísaná v Obchodnom registri Mestského súdu Košice, oddiel: Sro, vložka č.: 39196/V
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Email: info@argosnv.sk
                    <br />
                    Telefón: +421 903 468 472
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-foreground">
                  2. Aké osobné údaje spracúvame
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  V závislosti od účelu spracúvania zhromažďujeme nasledovné kategórie osobných údajov:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li><strong>Identifikačné údaje:</strong> meno, priezvisko</li>
                  <li><strong>Kontaktné údaje:</strong> e-mailová adresa, telefónne číslo, adresa</li>
                  <li><strong>Údaje z komunikácie:</strong> obsah správ zaslaných prostredníctvom kontaktného formulára</li>
                  <li><strong>Technické údaje:</strong> IP adresa, typ prehliadača, informácie o zariadení, cookies</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-foreground">
                  3. Účely spracúvania osobných údajov
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-normal mb-2 text-foreground">
                      a) Spracovanie dopytov z kontaktného formulára
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Účel:</strong> Odpovede na vaše otázky, spracovanie cenových ponúk, komunikácia ohľadom služieb.
                      <br />
                      <strong>Právny základ:</strong> Čl. 6 ods. 1 písm. b) GDPR – plnenie zmluvy alebo predzmluvné opatrenia na vašu žiadosť.
                      <br />
                      <strong>Doba uchovávania:</strong> 3 roky od poslednej komunikácie.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-normal mb-2 text-foreground">
                      b) Analytické účely (Google Analytics)
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Účel:</strong> Analýza návštevnosti a správania používateľov na webovej stránke za účelom zlepšovania služieb.
                      <br />
                      <strong>Právny základ:</strong> Čl. 6 ods. 1 písm. a) GDPR – váš súhlas udelený prostredníctvom cookie lišty.
                      <br />
                      <strong>Doba uchovávania:</strong> Podľa nastavení Google Analytics, maximálne 26 mesiacov.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-normal mb-2 text-foreground">
                      c) Marketingové účely (Google Ads, remarketingové kampane)
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Účel:</strong> Zobrazovanie relevantnej reklamy, meranie účinnosti reklamných kampaní.
                      <br />
                      <strong>Právny základ:</strong> Čl. 6 ods. 1 písm. a) GDPR – váš súhlas udelený prostredníctvom cookie lišty.
                      <br />
                      <strong>Doba uchovávania:</strong> Do odvolania súhlasu alebo podľa nastavení platformy.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-foreground">
                  4. Príjemcovia osobných údajov
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vaše osobné údaje môžu byť sprístupnené nasledujúcim kategóriám príjemcov:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Poskytovatelia IT a hostingových služieb</li>
                  <li>Google LLC (Google Analytics, Google Ads, Google Tag Manager) – USA</li>
                  <li>Orgány verejnej moci v súlade s platnými právnymi predpismi</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-foreground">
                  5. Prenos údajov do tretích krajín
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pri používaní služieb Google (Analytics, Ads, Tag Manager) môžu byť vaše údaje prenesené do USA. 
                  Spoločnosť Google je certifikovaná podľa rámca EU-U.S. Data Privacy Framework, ktorý zabezpečuje 
                  primeranú úroveň ochrany osobných údajov v súlade s rozhodnutím Európskej komisie.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Prenos údajov nastáva len v prípade, že ste udelili súhlas s analytickými alebo marketingovými cookies.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-foreground">
                  6. Vaše práva
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  V súvislosti so spracúvaním vašich osobných údajov máte nasledovné práva:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li><strong>Právo na prístup</strong> – máte právo získať potvrdenie o tom, či spracúvame vaše osobné údaje</li>
                  <li><strong>Právo na opravu</strong> – máte právo na opravu nesprávnych alebo neúplných údajov</li>
                  <li><strong>Právo na vymazanie</strong> – máte právo požiadať o vymazanie vašich údajov ("právo byť zabudnutý")</li>
                  <li><strong>Právo na obmedzenie spracúvania</strong> – máte právo požiadať o obmedzenie spracúvania údajov</li>
                  <li><strong>Právo na prenosnosť údajov</strong> – máte právo získať svoje údaje v štruktúrovanom formáte</li>
                  <li><strong>Právo namietať</strong> – máte právo namietať proti spracúvaniu založenému na oprávnenom záujme</li>
                  <li><strong>Právo odvolať súhlas</strong> – ak je spracúvanie založené na súhlase, môžete ho kedykoľvek odvolať</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Svoje práva môžete uplatniť zaslaním žiadosti na email: info@argosnv.sk
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-foreground">
                  7. Právo podať sťažnosť
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ak sa domnievate, že spracúvanie vašich osobných údajov porušuje GDPR, máte právo podať sťažnosť 
                  dozornému orgánu, ktorým je:
                </p>
                <div className="bg-muted/30 p-6 mt-4">
                  <p className="text-foreground">
                    <strong>Úrad na ochranu osobných údajov Slovenskej republiky</strong>
                    <br />
                    Hraničná 12, 820 07 Bratislava 27
                    <br />
                    Tel.: +421 2 3231 3214
                    <br />
                    Web: <a href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dataprotection.gov.sk</a>
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-foreground">
                  8. Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Naša webová stránka používa cookies. Podrobné informácie o používaní cookies a možnostiach ich nastavenia 
                  nájdete v našom cookie banneri, ktorý sa zobrazí pri prvej návšteve stránky.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Typy cookies:</strong>
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li><strong>Nevyhnutné cookies:</strong> Zabezpečujú základné funkcie webu (vždy aktívne)</li>
                  <li><strong>Analytické cookies:</strong> Pomáhajú nám pochopiť, ako používatelia používajú web (vyžadujú súhlas)</li>
                  <li><strong>Marketingové cookies:</strong> Používajú sa na zobrazovanie relevantnej reklamy (vyžadujú súhlas)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4 text-foreground">
                  9. Zmeny zásad ochrany osobných údajov
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tieto zásady môžeme priebežne aktualizovať. O významných zmenách vás budeme informovať 
                  prostredníctvom našej webovej stránky. Odporúčame pravidelne kontrolovať túto stránku.
                </p>
              </section>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
