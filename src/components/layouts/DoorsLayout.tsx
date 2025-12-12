import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductHero from "@/components/product/ProductHero";
import ProductDescription from "@/components/product/ProductDescription";
import TechnologyGrid from "@/components/product/TechnologyGrid";

import ProductGallery from "@/components/product/ProductGallery";

const DoorsLayout = () => {
  const title = "Dvere";

  const technologies = [
    {
      name: "WDS 60mm",
      description: "Montážna šírka - 60mm",
      image: "/src/assets/product_imgs/doors/wds_60mm.png",
    },
    {
      name: "WDS 70mm",
      description: "Montážna šírka - 70mm",
      image: "/src/assets/product_imgs/doors/wds_70mm.png",
    },
    {
      name: "WDS 76mm",
      description: "Montážna šírka - 76mm",
      image: "/src/assets/product_imgs/doors/wds_76mm.png",
    },
  ];

  const images = ["/src/assets/product_imgs/doors/glass_door_image.jpg"];

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
                  Dverové Systémy
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dvere vytvárajú <strong>prvý dojem</strong> o budove.
                  Rozmanitá ponuka dverí z profilov <strong>WDS</strong> –
                  vrátane vchodových, interiérových, balkónových a posuvných
                  dverí – dokáže uspokojiť požiadavky aj tých najnáročnejších
                  majiteľov domov.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Naši klienti sa môžu spoľahnúť na{" "}
                  <strong>vynikajúcu kvalitu</strong> a{" "}
                  <strong>optimálnu tepelnú izoláciu</strong> dverí vyrobených z
                  profilov <strong>WDS</strong>.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8">
                  Profily WDS – Široký Výber pre Každý Priestor
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Portfólio dverových systémov <strong>WDS</strong> zahŕňa
                  systémy s montážnou hĺbkou <strong>60 mm</strong> a{" "}
                  <strong>70 mm</strong>. Tieto systémy poskytujú skvelú{" "}
                  <strong>zvukovú izoláciu</strong>, vyznačujú sa{" "}
                  <strong>vysokou energetickou účinnosťou</strong> a sú určené
                  na inštaláciu v bytoch, rodinných domoch a kancelárskych
                  priestoroch.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6">
                  WDS 76 – Nový Štandard Plastových Dverí
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Okrem štandardných systémov ponúkame aj novú dverovú radu{" "}
                  <strong>WDS 76</strong>, ktorá predstavuje{" "}
                  <strong>moderný štandard</strong> plastových dverí.
                </p>

                <blockquote className="border-l-4 border-primary pl-4 italic text-xl text-foreground">
                  Dvere WDS 76 – Teplo, Ticho, Spoľahlivosť.
                </blockquote>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Moderné vchodové dvere <strong>WDS 76</strong> zabezpečujú
                  špičkovú <strong>tepelnú a zvukovú izoláciu</strong>. Je to
                  dosiahnuté vďaka:
                </p>

                <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed ml-4">
                  <li>
                    <strong>5-komorovému profilu</strong>
                  </li>
                  <li>
                    <strong>Trom kontúram tesnenia</strong>
                  </li>
                  <li>
                    Pevnej <strong>kovovej výstuži (armovacej vložke)</strong>
                  </li>
                </ul>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  S montážnou hĺbkou <strong>76 mm</strong> a možnosťou
                  4-krídlového riešenia sú ideálne pre rodinné domy, byty a
                  kancelárie.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6">
                  Flexibilita a Dizajn
                </h3>

                <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed ml-4">
                  <li>
                    <strong>Varianty otvárania:</strong> Dostupné dvere s
                    vnútorným aj vonkajším otváraním.
                  </li>
                  <li>
                    <strong>Estetika:</strong> Široký výber{" "}
                    <strong>laminovaných riešení</strong> (farebné dekóry a
                    textúry) pre dokonalé zladenie s fasádou a interiérom.
                  </li>
                </ul>
              </div>
              <TechnologyGrid technologies={technologies} />

              <h2 className="text-2xl font-semibold text-foreground mt-8">
                Typy Dverí WDS v Našej Ponuke
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Vyrábame dvere rôznych typov, aby sme pokryli všetky vaše
                potreby, od jednoduchého prístupu na balkón až po robustné
                vchodové systémy.
              </p>

              <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed ml-4 space-y-3">
                <li>
                  <strong>Balkónové plastové dvere:</strong>
                  <p className="ml-6 mt-1">
                    Vyrábajú sa z okenného PVC profilu. Ich inštalácia sa
                    odporúča predovšetkým do{" "}
                    <strong>vnútorných priestorov</strong> alebo na oddelenie
                    interiéru od balkóna/lodžie.
                  </p>
                </li>
                <li>
                  <strong>Vchodové plastové dvere:</strong>
                  <p className="ml-6 mt-1">
                    Tieto dvere sú <strong>spoľahlivé</strong> a predstavujú
                    vynikajúcu voľbu pre zabezpečenie{" "}
                    <strong>obytných a komerčných priestorov</strong>.
                  </p>
                </li>
                <li>
                  <strong>Interiérové plastové dvere:</strong>
                  <p className="ml-6 mt-1">
                    Sú skvelé do kancelárií, na vytváranie priečok alebo do
                    priestorov, kde je potrebná{" "}
                    <strong>zvýšená zvuková izolácia</strong> a bežné drevené
                    dvere by nepostačovali.
                  </p>
                </li>
                <li>
                  <strong>Posuvné plastové dvere:</strong>
                  <p className="ml-6 mt-1">
                    Sú vybavené <strong>spoľahlivým mechanizmom</strong>, ktorý
                    umožňuje otváranie dverí do strany. Tým pádom sa pri
                    otváraní <strong>neuberá úžitková plocha</strong> v
                    miestnosti ani na terase či verande.
                  </p>
                </li>
              </ul>
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

export default DoorsLayout;
