import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navigation />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl font-light mb-8 text-foreground">
              Všeobecné obchodné podmienky
            </h1>
            <p className="text-muted-foreground mb-12">
              Posledná aktualizácia: {new Date().toLocaleDateString("sk-SK")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-foreground">
                  1. Základné ustanovenia
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  1.1. Tieto Všeobecné obchodné podmienky (ďalej len „VOP") upravujú práva a povinnosti 
                  medzi predávajúcim a kupujúcim pri uzatváraní kúpnych zmlúv prostredníctvom webovej stránky 
                  alebo osobnej objednávky u predávajúceho.
                </p>
                <div className="bg-muted/30 p-6 mb-4">
                  <p className="text-foreground">
                    <strong>Predávajúci:</strong>
                    <br />
                    ARGO SNV s.r.o.
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
                    <br />
                    Bankové spojenie: [DOPLŇTE]
                    <br />
                    IBAN: [DOPLŇTE]
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  1.2. Kupujúcim je fyzická alebo právnická osoba, ktorá vstupuje do obchodného vzťahu 
                  s predávajúcim. Pre účely zákona o ochrane spotrebiteľa sa za spotrebiteľa považuje 
                  fyzická osoba, ktorá pri uzatváraní zmluvy nekoná v rámci predmetu svojej podnikateľskej činnosti.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-foreground">
                  2. Uzatvorenie zmluvy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  2.1. Zmluva medzi predávajúcim a kupujúcim vzniká na základe písomnej objednávky 
                  potvrdenej predávajúcim, alebo podpísaním zmluvy o dielo.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  2.2. Odoslaním objednávky (kontaktného formulára) kupujúci potvrdzuje, že sa oboznámil 
                  s týmito VOP a súhlasí s nimi.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  2.3. Predávajúci si vyhradzuje právo odmietnuť objednávku alebo jej časť v prípadoch, 
                  keď nie je možné z technických alebo iných dôvodov tovar dodať alebo službu vykonať.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-foreground">
                  3. Ceny a platobné podmienky
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  3.1. Ceny produktov a služieb sú uvedené v ponuke vyhotovenej predávajúcim. 
                  Záväzná cena je cena uvedená v potvrdenej objednávke alebo zmluve o dielo.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  3.2. Kupujúci je povinný uhradiť zálohu vo výške [DOPLŇTE %] z celkovej ceny 
                  pri podpise zmluvy. Zvyšná suma je splatná pred dodaním tovaru alebo pred montážou.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  3.3. Platbu je možné realizovať bankovým prevodom alebo v hotovosti (do zákonného limitu).
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-foreground">
                  4. Dodacie podmienky
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  4.1. Dodacia lehota je stanovená individuálne v zmluve o dielo alebo v potvrdení objednávky. 
                  Štandardná dodacia lehota je [DOPLŇTE] týždňov od potvrdenia objednávky a úhrady zálohy.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  4.2. Predávajúci si vyhradzuje právo na predĺženie dodacej lehoty v prípade nepredvídateľných 
                  okolností (výpadky dodávok materiálu, vyššia moc a pod.).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  4.3. Kupujúci je povinný prevziať tovar a poskytnúť súčinnosť pri montáži.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-foreground">
                  5. Reklamácie a záruka
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  5.1. Predávajúci poskytuje záruku na výrobky v trvaní 24 mesiacov od prevzatia, 
                  ak nie je pri konkrétnom výrobku uvedené inak.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  5.2. Reklamáciu je potrebné uplatniť písomne (e-mailom alebo poštou) s uvedením 
                  popisu vady a priložením fotodokumentácie.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  5.3. Predávajúci je povinný vybaviť reklamáciu do 30 dní od jej prijatia.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  5.4. Záruka sa nevzťahuje na vady spôsobené nesprávnym používaním, mechanickým poškodením, 
                  neodborným zásahom alebo bežným opotrebením.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-foreground">
                  6. Odstúpenie od zmluvy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  6.1. V prípade, že je kupujúci spotrebiteľ a zmluva bola uzatvorená na diaľku 
                  (bez fyzickej prítomnosti zmluvných strán), má právo odstúpiť od zmluvy bez udania 
                  dôvodu do 14 dní od prevzatia tovaru.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  6.2. Právo na odstúpenie od zmluvy sa nevzťahuje na tovar zhotovený podľa osobitných 
                  požiadaviek spotrebiteľa, tovar vyrobený na mieru, alebo tovar určený osobitne pre jedného spotrebiteľa.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  6.3. Vzhľadom na charakter produktov (okná, dvere a pod. vyrábané na mieru) sa právo 
                  na odstúpenie od zmluvy spravidla neuplatňuje.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-foreground">
                  7. Alternatívne riešenie sporov
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  7.1. Spotrebiteľ má právo obrátiť sa na predávajúceho so žiadosťou o nápravu, 
                  ak nie je spokojný so spôsobom vybavenia reklamácie alebo sa domnieva, že predávajúci 
                  porušil jeho práva.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  7.2. Ak predávajúci na žiadosť spotrebiteľa odpovie zamietavo alebo na ňu neodpovie 
                  do 30 dní, spotrebiteľ má právo podať návrh na začatie alternatívneho riešenia sporu 
                  subjektu alternatívneho riešenia sporov (subjekt ARS).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  7.3. Zoznam subjektov ARS je dostupný na stránke Ministerstva hospodárstva SR: 
                  <a href="https://www.mhsr.sk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">www.mhsr.sk</a>
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-foreground">
                  8. Orgán dozoru
                </h2>
                <div className="bg-muted/30 p-6">
                  <p className="text-foreground">
                    <strong>Slovenská obchodná inšpekcia (SOI)</strong>
                    <br />
                    Inšpektorát SOI pre [DOPLŇTE] kraj
                    <br />
                    [DOPLŇTE adresu]
                    <br />
                    Tel.: [DOPLŇTE]
                    <br />
                    Web: <a href="https://www.soi.sk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.soi.sk</a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4 text-foreground">
                  9. Záverečné ustanovenia
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  9.1. Tieto VOP sú platné a účinné od [DOPLŇTE dátum].
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  9.2. Predávajúci si vyhradzuje právo na zmenu týchto VOP. Zmena VOP je účinná 
                  dňom ich zverejnenia na webovej stránke predávajúceho.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  9.3. Vzťahy neupravené týmito VOP sa riadia príslušnými ustanoveniami Občianskeho 
                  zákonníka, Obchodného zákonníka a zákona č. 250/2007 Z. z. o ochrane spotrebiteľa.
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

export default TermsConditions;
