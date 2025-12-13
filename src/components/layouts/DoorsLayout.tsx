import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductHero from "@/components/product/ProductHero";
import TechnologyGrid from "@/components/product/TechnologyGrid";

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
                  Dverové Systémy
                </h1>

                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Dvere vytvárajú{" "}
                    <strong className="text-foreground font-medium">
                      prvý dojem
                    </strong>{" "}
                    o budove. Rozmanitá ponuka dverí z profilov{" "}
                    <strong className="text-foreground font-medium">WDS</strong>{" "}
                    – vrátane vchodových, interiérových, balkónových a posuvných
                    dverí – dokáže uspokojiť požiadavky aj tých najnáročnejších
                    majiteľov domov.
                  </p>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    Naši klienti sa môžu spoľahnúť na{" "}
                    <strong className="text-foreground font-medium">
                      vynikajúcu kvalitu
                    </strong>{" "}
                    a{" "}
                    <strong className="text-foreground font-medium">
                      optimálnu tepelnú izoláciu
                    </strong>{" "}
                    dverí vyrobených z profilov{" "}
                    <strong className="text-foreground font-medium">WDS</strong>
                    .
                  </p>

                  <h2 className="text-xl font-medium text-foreground pt-4">
                    Profily WDS – Široký Výber pre Každý Priestor
                  </h2>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    Portfólio dverových systémov{" "}
                    <strong className="text-foreground font-medium">WDS</strong>{" "}
                    zahŕňa systémy s montážnou hĺbkou{" "}
                    <strong className="text-foreground font-medium">
                      60 mm
                    </strong>{" "}
                    a{" "}
                    <strong className="text-foreground font-medium">
                      70 mm
                    </strong>
                    . Tieto systémy poskytujú skvelú zvukovú izoláciu, vyznačujú
                    sa vysokou energetickou účinnosťou a sú určené na inštaláciu
                    v bytoch, rodinných domoch a kancelárskych priestoroch.
                  </p>

                  <h3 className="text-lg font-medium text-foreground pt-2">
                    WDS 76 – Nový Štandard Plastových Dverí
                  </h3>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    Okrem štandardných systémov ponúkame aj novú dverovú radu{" "}
                    <strong className="text-foreground font-medium">
                      WDS 76
                    </strong>
                    , ktorá predstavuje moderný štandard plastových dverí.
                  </p>

                  {/* <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-foreground/80">
                    Dvere WDS 76 – Teplo, Ticho, Spoľahlivosť.
                  </blockquote> */}

                  <p className="text-base text-muted-foreground leading-relaxed">
                    Moderné vchodové dvere{" "}
                    <strong className="text-foreground font-medium">
                      WDS 76
                    </strong>{" "}
                    zabezpečujú špičkovú tepelnú a zvukovú izoláciu vďaka:
                  </p>

                  <ul className="list-disc list-inside text-base text-muted-foreground leading-relaxed ml-2 space-y-1">
                    <li>5-komorovému profilu</li>
                    <li>Trom kontúram tesnenia</li>
                    <li>Pevnej kovovej výstuži (armovacej vložke)</li>
                  </ul>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    S montážnou hĺbkou 76 mm a možnosťou 4-krídlového riešenia
                    sú ideálne pre rodinné domy, byty a kancelárie.
                  </p>

                  <h3 className="text-lg font-medium text-foreground pt-2">
                    Flexibilita a Dizajn
                  </h3>

                  <ul className="list-disc list-inside text-base text-muted-foreground leading-relaxed ml-2 space-y-1">
                    <li>
                      <strong className="text-foreground font-medium">
                        Varianty otvárania:
                      </strong>{" "}
                      Dostupné dvere s vnútorným aj vonkajším otváraním.
                    </li>
                    <li>
                      <strong className="text-foreground font-medium">
                        Estetika:
                      </strong>{" "}
                      Široký výber laminovaných riešení pre dokonalé zladenie s
                      fasádou a interiérom.
                    </li>
                  </ul>
                </div>
              </div>
              <TechnologyGrid technologies={technologies} />

              <div className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">
                  Typy Dverí WDS v Našej Ponuke
                </h2>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Vyrábame dvere rôznych typov, aby sme pokryli všetky vaše
                  potreby, od jednoduchého prístupu na balkón až po robustné
                  vchodové systémy.
                </p>

                <ul className="list-disc list-outside text-base text-muted-foreground leading-relaxed ml-5 space-y-3">
                  <li>
                    <strong className="text-foreground font-medium">
                      Balkónové plastové dvere
                    </strong>{" "}
                    – Vyrábajú sa z okenného PVC profilu. Odporúčajú sa do
                    vnútorných priestorov alebo na oddelenie interiéru od
                    balkóna.
                  </li>
                  <li>
                    <strong className="text-foreground font-medium">
                      Vchodové plastové dvere
                    </strong>{" "}
                    – Spoľahlivé dvere pre zabezpečenie obytných a komerčných
                    priestorov.
                  </li>
                  <li>
                    <strong className="text-foreground font-medium">
                      Interiérové plastové dvere
                    </strong>{" "}
                    – Ideálne do kancelárií a priestorov vyžadujúcich zvýšenú
                    zvukovú izoláciu.
                  </li>
                  <li>
                    <strong className="text-foreground font-medium">
                      Posuvné plastové dvere
                    </strong>{" "}
                    – Vybavené spoľahlivým mechanizmom, šetria úžitkovú plochu v
                    miestnosti.
                  </li>
                </ul>
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

export default DoorsLayout;
