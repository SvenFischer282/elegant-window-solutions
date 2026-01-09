import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-light tracking-wide mb-12">Zásady ochrany osobných údajov</h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-8">
          <section>
            <h2 className="text-2xl font-light mb-4">1. Úvod</h2>
            <p>
              Spoločnosť ARGO SNV (ďalej len "my" alebo "spoločnosť") sa zaväzuje chrániť vaše osobné údaje. 
              Tieto zásady ochrany osobných údajov vysvetľujú, ako zhromažďujeme, používame a chránime vaše údaje.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">2. Aké údaje zhromažďujeme</h2>
            <p>Môžeme zhromažďovať nasledujúce typy osobných údajov:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Meno a priezvisko</li>
              <li>E-mailová adresa</li>
              <li>Telefónne číslo</li>
              <li>Adresa</li>
              <li>Informácie o vašom prehliadaní našej webovej stránky</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">3. Ako používame vaše údaje</h2>
            <p>Vaše osobné údaje používame na:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Spracovanie vašich dopytov a objednávok</li>
              <li>Komunikáciu s vami ohľadom našich produktov a služieb</li>
              <li>Zlepšovanie našej webovej stránky a služieb</li>
              <li>Plnenie zákonných povinností</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">4. Právny základ spracovania</h2>
            <p>
              Vaše osobné údaje spracúvame na základe vášho súhlasu, plnenia zmluvy, 
              oprávnených záujmov spoločnosti alebo plnenia zákonných povinností.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">5. Doba uchovávania údajov</h2>
            <p>
              Vaše osobné údaje uchovávame len po dobu nevyhnutnú na splnenie účelov, 
              na ktoré boli zhromaždené, alebo po dobu vyžadovanú zákonom.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">6. Vaše práva</h2>
            <p>Máte právo:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Požiadať o prístup k vašim osobným údajom</li>
              <li>Požiadať o opravu nesprávnych údajov</li>
              <li>Požiadať o vymazanie vašich údajov</li>
              <li>Namietať proti spracovaniu vašich údajov</li>
              <li>Požiadať o prenos údajov</li>
              <li>Odvolať svoj súhlas kedykoľvek</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">7. Kontakt</h2>
            <p>
              Ak máte akékoľvek otázky týkajúce sa týchto zásad alebo spracovania vašich osobných údajov, 
              kontaktujte nás na:
            </p>
            <p className="mt-4">
              <strong>ARGO SNV</strong><br />
              Slovenská 256, 05 321 Markušovce<br />
              E-mail: info@company.sk<br />
              Telefón: +421 903 468 472
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">8. Zmeny zásad</h2>
            <p>
              Tieto zásady môžeme príležitostne aktualizovať. O všetkých zmenách vás budeme informovať 
              zverejnením nových zásad na tejto stránke.
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

export default PrivacyPolicy;
