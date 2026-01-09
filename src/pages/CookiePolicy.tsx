import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-light tracking-wide mb-12">Zásady používania cookies</h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-8">
          <section>
            <h2 className="text-2xl font-light mb-4">1. Čo sú cookies?</h2>
            <p>
              Cookies sú malé textové súbory, ktoré sa ukladajú do vášho zariadenia pri návšteve webovej stránky. 
              Pomáhajú nám zlepšovať vaše používateľské skúsenosti a poskytovať lepšie služby.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">2. Typy cookies, ktoré používame</h2>
            
            <h3 className="text-xl font-light mb-3 mt-6">Nevyhnutné cookies</h3>
            <p>
              Tieto cookies sú nevyhnutné pre správne fungovanie webovej stránky. 
              Bez nich by niektoré časti stránky nefungovali správne.
            </p>

            <h3 className="text-xl font-light mb-3 mt-6">Analytické cookies</h3>
            <p>
              Tieto cookies nám pomáhajú pochopiť, ako návštevníci používajú našu stránku. 
              Zhromažďujú anonymné informácie, ktoré nám pomáhajú zlepšovať naše služby.
            </p>

            <h3 className="text-xl font-light mb-3 mt-6">Funkčné cookies</h3>
            <p>
              Tieto cookies umožňujú stránke zapamätať si vaše voľby (ako je jazyk alebo región) 
              a poskytovať vylepšené, personalizované funkcie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">3. Ako spravovať cookies</h2>
            <p>
              Väčšina webových prehliadačov umožňuje kontrolovať cookies prostredníctvom nastavení. 
              Môžete nastaviť svoj prehliadač tak, aby:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Blokoval všetky cookies</li>
              <li>Prijímal iba cookies z navštívených stránok</li>
              <li>Vymazal všetky cookies pri zatvorení prehliadača</li>
              <li>Upozornil vás pred uložením cookie</li>
            </ul>
            <p className="mt-4">
              Upozorňujeme, že blokovanie niektorých cookies môže ovplyvniť funkčnosť našej webovej stránky.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">4. Cookies tretích strán</h2>
            <p>
              Na našej stránke môžeme používať služby tretích strán, ktoré môžu tiež ukladať cookies. 
              Tieto cookies sa riadia zásadami ochrany osobných údajov príslušných tretích strán.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">5. Váš súhlas</h2>
            <p>
              Pri prvej návšteve našej stránky vás požiadame o súhlas s používaním cookies. 
              Svoj súhlas môžete kedykoľvek zmeniť alebo odvolať.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">6. Kontakt</h2>
            <p>
              Ak máte otázky týkajúce sa našich zásad používania cookies, kontaktujte nás:
            </p>
            <p className="mt-4">
              <strong>ARGO SNV</strong><br />
              E-mail: info@company.sk<br />
              Telefón: +421 903 468 472
            </p>
          </section>

          <section>
            <p className="text-sm text-foreground/60">
              Posledná aktualizácia: {new Date().toLocaleDateString('sk-SK')}
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
