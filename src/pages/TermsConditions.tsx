import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-light tracking-wide mb-12">Obchodné podmienky</h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-8">
          <section>
            <h2 className="text-2xl font-light mb-4">1. Všeobecné ustanovenia</h2>
            <p>
              Tieto obchodné podmienky upravujú práva a povinnosti medzi spoločnosťou ARGO SNV 
              (ďalej len "predávajúci") a zákazníkom (ďalej len "kupujúci") pri predaji tovaru 
              a poskytovaní služieb.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">2. Objednávka a uzavretie zmluvy</h2>
            <p>
              Objednávka kupujúceho je návrhom kúpnej zmluvy. Kúpna zmluva vzniká potvrdením 
              objednávky predávajúcim. Predávajúci si vyhradzuje právo odmietnuť objednávku 
              alebo jej časť.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">3. Ceny a platobné podmienky</h2>
            <p>
              Ceny produktov a služieb sú uvedené vrátane DPH. Predávajúci si vyhradzuje právo 
              na zmenu cien. Platba sa vykonáva na základe faktúry alebo v hotovosti pri prevzatí.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">4. Dodacie podmienky</h2>
            <p>
              Dodacia lehota je dohodnutá individuálne pri každej objednávke. 
              Predávajúci nezodpovedá za oneskorenie dodávky spôsobené vyššou mocou 
              alebo okolnosťami na strane kupujúceho.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">5. Záručné podmienky</h2>
            <p>
              Na všetky produkty poskytujeme záruku v súlade s platnými právnymi predpismi. 
              Záručná doba začína plynúť dňom prevzatia tovaru kupujúcim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">6. Reklamácie</h2>
            <p>
              Reklamácie je potrebné uplatniť písomne na adrese predávajúceho alebo e-mailom. 
              Reklamácia bude vybavená v zákonnej lehote 30 dní od jej uplatnenia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">7. Odstúpenie od zmluvy</h2>
            <p>
              Kupujúci má právo odstúpiť od zmluvy v súlade s platnými právnymi predpismi. 
              Odstúpenie od zmluvy je potrebné uplatniť písomne.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">8. Ochrana osobných údajov</h2>
            <p>
              Spracovanie osobných údajov sa riadi našimi Zásadami ochrany osobných údajov, 
              ktoré sú dostupné na tejto webovej stránke.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">9. Záverečné ustanovenia</h2>
            <p>
              Tieto obchodné podmienky nadobúdajú účinnosť dňom ich zverejnenia. 
              Predávajúci si vyhradzuje právo na ich zmenu. Vzťahy neupravené týmito podmienkami 
              sa riadia právnym poriadkom Slovenskej republiky.
            </p>
            <p className="mt-4 text-sm text-foreground/60">
              Posledná aktualizácia: {new Date().toLocaleDateString('sk-SK')}
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;
