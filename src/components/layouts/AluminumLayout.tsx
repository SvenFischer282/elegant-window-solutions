import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductHero from "@/components/product/ProductHero";
import TechnologyGrid from "@/components/product/TechnologyGrid";

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
    <div className="min-h-screen flex flex-col bg-muted/30 pt-16">
      <Navigation />

      <main className="flex-1 animate-fade-in">
        <div className="container mx-auto px-4 py-8">
          <ProductBreadcrumb title={title} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ProductHero image={images[0]} alt={title} />
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
                  Hliníkové Konštrukcie
                </h1>

                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    <strong className="text-foreground font-medium">Ľahké hliníkové systémy</strong> sú ideálnou voľbou,
                    ak potrebujete zabezpečiť maximálne prirodzené osvetlenie a nemáte
                    prísne požiadavky na tepelnú izoláciu.
                  </p>

                  <h2 className="text-xl font-medium text-foreground pt-4">
                    Náš Sortiment Hliníkových Produktov
                  </h2>

                  <ul className="list-disc list-outside text-base text-muted-foreground leading-relaxed ml-5 space-y-1">
                    <li>Fasády</li>
                    <li>Kancelárske priečky</li>
                    <li>Okná</li>
                    <li>Dvere a iné hliníkové výrobky</li>
                  </ul>

                  <h3 className="text-lg font-medium text-foreground pt-2">
                    Hliníkové Okná
                  </h3>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    Hliníkové okná patria k najobľúbenejším typom okenných konštrukcií.
                    Vyznačujú sa vysokou odolnosťou proti korózii, sú trvácne a praktické.
                  </p>

                  <h3 className="text-lg font-medium text-foreground pt-2">
                    Rozdiel medzi „Studeným" a „Teplým" Hliníkom
                  </h3>

                  <ul className="list-disc list-outside text-base text-muted-foreground leading-relaxed ml-5 space-y-2">
                    <li>
                      <strong className="text-foreground font-medium">„Studený" hliník</strong> – Ideálny pre balkóny, verandy, altánky a terasy. Cenovo dostupné klasické posuvné systémy.
                    </li>
                    <li>
                      <strong className="text-foreground font-medium">„Teplý" hliník</strong> – Vysoké tepelno- a zvukovoizolačné vlastnosti. Najlepšie riešenie pre vykurované miestnosti.
                    </li>
                  </ul>

                  <h3 className="text-lg font-medium text-foreground pt-2">
                    Hliníkové Dvere a Priečky
                  </h3>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    Hliníkové dvere majú množstvo výhod: odolnosť proti poškodeniu,
                    minimalistický vzhľad, nenáročnosť na údržbu a možnosť farebného spracovania.
                  </p>

                  <h2 className="text-xl font-medium text-foreground pt-4">
                    Hliníkový Profil Framex
                  </h2>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    Pracujeme s hliníkovým profilom <strong className="text-foreground font-medium">Framex</strong> –
                    kvalitný konštrukčný profil certifikovaný podľa európskych noriem.
                  </p>

                  <ul className="list-disc list-outside text-base text-muted-foreground leading-relaxed ml-5 space-y-1">
                    <li><strong className="text-foreground font-medium">Ľahkosť a pevnosť</strong> – Ideálne pre trvanlivé a ľahké konštrukcie</li>
                    <li><strong className="text-foreground font-medium">Odolnosť proti korózii</strong> – Eloxácia alebo práškové lakovanie</li>
                    <li><strong className="text-foreground font-medium">Estetický vzhľad</strong> – Rozmanitosť farieb a textúr</li>
                    <li><strong className="text-foreground font-medium">Ekologickosť</strong> – Plne recyklovateľný materiál</li>
                  </ul>

                  <h3 className="text-lg font-medium text-foreground pt-6">
                    Framex 38 – Studený Hliníkový Systém
                  </h3>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    Studený hliníkový systém určený pre konštrukcie s nízkymi požiadavkami
                    na tepelnú izoláciu – nevykurované miestnosti, interiérové priečky alebo výklady.
                  </p>
                </div>
                <TechnologyGrid technologies={technologies1} />
                
                <div className="prose prose-lg max-w-none space-y-4">
                  <h3 className="text-lg font-medium text-foreground pt-6">
                    Framex FT 72 – Teplý Hliníkový Systém
                  </h3>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    <strong className="text-foreground font-medium">Framex FT 72</strong> je spoľahlivý a energeticky
                    účinný teplý hliníkový okenný a dverový systém s vysokou tepelnou a zvukovou izoláciou.
                  </p>
                </div>
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
