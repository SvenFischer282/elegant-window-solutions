import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductHero from "@/components/product/ProductHero";
import ProductDescription from "@/components/product/ProductDescription";
import TechnologyGrid from "@/components/product/TechnologyGrid";

import ProductGallery from "@/components/product/ProductGallery";

const AluminumLayout = () => {
  const title = "Hliník";

  const technologies1 = [
    {
      name: "Framex 38",
      description:
        "Montážna hĺbka rámu: 38 mm. Inštalačná (montážna) hĺbka krídla: 46 mm",
      image: "/src/assets/product_imgs/aluminium/framex_38.png",
    },
  ];
  const technologies2 = [
    {
      name: "Framex FT 72",
      description: "Montážna hĺbka 72 mm.",

      image: "/src/assets/product_imgs/aluminium/framex_ft72.png",
    },
  ];

  const images = [
    "https://vesnyanka.com.ua/wp-content/uploads/2025/03/DALL%C2%B7E-2025-03-31-21.43.31-A-modern-aluminum-and-glass-door-designed-for-contemporary-homes-and-commercial-spaces.-The-door-features-a-sleek-minimalistic-frame-with-a-large-gla.webp",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Navigation />

      <main className="flex-1 animate-fade-in">
        <div className="container mx-auto px-4 py-8">
          <ProductBreadcrumb title={title} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ProductHero image={images[0]} alt={title} />
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Hliníkové Konštrukcie
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Ľahké hliníkové systémy</strong> sú ideálnou voľbou,
                  ak potrebujete zabezpečiť{" "}
                  <strong>maximálne prirodzené osvetlenie</strong> a nemáte
                  prísne požiadavky na tepelnú izoláciu.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8">
                  Náš Sortiment Hliníkových Produktov
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Naša spoločnosť vyrába a dodáva široký rad hliníkových
                  konštrukcií, vrátane:
                </p>

                <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed ml-4">
                  <li>Fasády</li>
                  <li>Kancelárske priečky</li>
                  <li>Okná</li>
                  <li>Dvere a iné hliníkové výrobky</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6">
                  Hliníkové Okná
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hliníkové okná patria k <strong>najobľúbenejším</strong> typom
                  okenných konštrukcií, ktoré sa často volia na zasklievanie
                  kancelárií, obytných a priemyselných priestorov.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Tieto okná sa vyznačujú{" "}
                  <strong>vysokou odolnosťou proti korózii</strong>, sú{" "}
                  <strong>trvácne</strong> a <strong>praktické</strong>. V
                  porovnaní s inými konštrukciami sú vhodnejšie pre stavby so
                  zvýšenými prevádzkovými požiadavkami.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-6">
                  Rozdiel medzi „Studeným“ a „Teplým“ Hliníkom
                </h4>

                <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed ml-4 space-y-3">
                  <li>
                    <strong>„Studený“ hliník:</strong>
                    <p className="ml-6 mt-1">
                      Ideálny pre zasklievanie balkónov, ktoré nie sú rozšírením
                      obytného priestoru, ako aj pre verandy, altánky a terasy.
                      V zime poskytne len mierne vyššiu teplotu ako vonku, ale v
                      lete sa priestor dá využiť ako oddychová miestnosť, malá
                      záhrada, telocvičňa či pracovňa. Sú to{" "}
                      <strong>cenovo dostupné klasické posuvné systémy</strong>,
                      ktoré šetria priestor.
                    </p>
                  </li>
                  <li>
                    <strong>„Teplý“ hliník:</strong>
                    <p className="ml-6 mt-1">
                      Má{" "}
                      <strong>
                        vysoké tepelno- a zvukovoizolačné vlastnosti
                      </strong>
                      . Volí sa pre rodinné domy,{" "}
                      <strong>panoramatické okná</strong> a komerčné priestory.
                      Je to najlepšie riešenie zasklenia pre{" "}
                      <strong>vykurované miestnosti</strong>.
                    </p>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6">
                  Hliníkové Dvere a Priečky
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hliníkové dvere majú množstvo výhod:{" "}
                  <strong>odolnosť proti poškodeniu</strong>,{" "}
                  <strong>minimalistický vzhľad</strong>, nenáročnosť na údržbu
                  a možnosť farebného spracovania.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hliníkové dvere sa často inštalujú:
                </p>

                <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed ml-4">
                  <li>Pri vchode do obchodných centier</li>
                  <li>V zdravotníckych zariadeniach</li>
                  <li>Na terasách kaviarní a reštaurácií</li>
                  <li>V priemyselných priestoroch</li>
                  <li>V bytoch a rodinných domoch</li>
                </ul>

                <h4 className="text-xl font-semibold text-foreground mt-6">
                  Hliníkové Priečky
                </h4>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Rozdelenie priestoru na zóny, regulácia osvetlenia, zníženie
                  úrovne hluku a vytvorenie pracovnej atmosféry – to všetko
                  ľahko dosiahnete inštaláciou{" "}
                  <strong>hliníkových priečok</strong>.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ide o populárnu a finančne <strong>nenáročnú možnosť</strong>,
                  ako vytvoriť nové pracovné zóny bez potreby stavania pevných
                  (kapitálových) stien.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8">
                  Hliníkový Profil Framex
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Naša spoločnosť pracuje s hliníkovým profilom{" "}
                  <strong>Framex</strong> – čo je kvalitný konštrukčný hliníkový
                  profil používaný v stavebníctve, architektúre, nábytkárstve,
                  fasádnych systémoch a reklamných konštrukciách. Výrobky sú
                  certifikované v súlade s <strong>európskymi normami</strong>,
                  čo zaručuje spoľahlivosť, trvácnosť a atraktívny vzhľad.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-6">
                  Hlavné Výhody Hliníka Framex
                </h4>

                <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed ml-4 space-y-3">
                  <li>
                    <strong>Ľahkosť a pevnosť:</strong> Vďaka vysokému pomeru
                    pevnosti a hmotnosti je hliník ideálnou voľbou pre trvanlivé
                    a ľahké konštrukcie.
                  </li>
                  <li>
                    <strong>Odolnosť proti korózii:</strong> Špeciálna eloxácia
                    (anodizácia) alebo práškové lakovanie poskytuje ochranu pred
                    vlhkosťou a agresívnym prostredím.
                  </li>
                  <li>
                    <strong>Estetický vzhľad:</strong> Hladký povrch,
                    rozmanitosť farieb a textúr umožňujú vytvárať moderné a
                    štýlové riešenia.
                  </li>
                  <li>
                    <strong>Jednoduchá inštalácia:</strong> Hliníkové profily sa
                    ľahko spracovávajú, rýchlo montujú a nevyžadujú špeciálnu
                    starostlivosť.
                  </li>
                  <li>
                    <strong>Ekologickosť:</strong> Hliník je plne
                    recyklovateľný, čo ho robí šetrným k životnému prostrediu.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground pt-10">
                  Framex 38 – Studený Hliníkový Systém
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Jedná sa o studený hliníkový systém (bez tepelnej bariéry),
                  ktorý je určený pre konštrukcie s{" "}
                  <strong>
                    nízkymi požiadavkami na tepelnú a zvukovú izoláciu
                  </strong>{" "}
                  – napríklad pre nevykurované miestnosti, interiérové priečky
                  alebo výklady.
                </p>
                <TechnologyGrid technologies={technologies1} />
                <h3 className="text-xl font-semibold text-foreground pt-10">
                  Framex FT 72 – Teplý Hliníkový Systém
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Framex FT 72</strong> je spoľahlivý a energeticky
                  účinný{" "}
                  <strong>teplý hliníkový okenný a dverový systém</strong>. Je
                  určený na výrobu okien, dverí a výkladov, ktoré vyžadujú{" "}
                  <strong>vysokú tepelnú a zvukovú izoláciu</strong>, moderný
                  dizajn a štýlový vzhľad.
                </p>
                <TechnologyGrid technologies={technologies2} />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ContactSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AluminumLayout;
