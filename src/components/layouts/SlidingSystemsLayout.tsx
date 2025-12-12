import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductHero from "@/components/product/ProductHero";
import TechnologyGrid from "@/components/product/TechnologyGrid";

import ProductGallery from "@/components/product/ProductGallery";

const SlidingSystemsLayout = () => {
  const title = "Posuvné systémy";

  const description =
    "Moderné posuvné systémy pre terasy a balkóny, ktoré spájajú eleganciu s funkčnosťou. Ideálne riešenie pre maximalizáciu priestoru a vytvorenie plynulého prechodu medzi interiérom a exteriérom. Posuvné systémy umožňujú maximálne presvetlenie a otvorenie priestoru.";

  const features = [
    "Posuvné steny",
    "Terasové systémy",
    "Balkónové zasklenie",
    "Zimné záhrady",
  ];

  const technologies = [
    {
      name: "WDS 60SL okná",
      description: "",
      image: "/src/assets/product_imgs/sliding_systems/wds_60sl_window.png",
    },
    {
      name: "WDS 60SL dvere",
      description: "",

      image: "/src/assets/product_imgs/sliding_systems/wds_60sl_door.png",
    },
    {
      name: "WDS 76SL okná",
      description: "",

      image: "/src/assets/product_imgs/sliding_systems/wds_76sl_window.png",
    },
    {
      name: "WDS 76SL dvere",
      description: "",

      image: "/src/assets/product_imgs/sliding_systems/wds_76sl_door.png",
    },
  ];

  const images = [
    "https://vesnyanka.com.ua/wp-content/uploads/2025/03/83d2470a-7357-4e2a-a0fc-3524bcc91433.webp",
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
                  Posuvné Systémy
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Posuvné systémy predstavujú{" "}
                  <strong>estetický a zároveň mimoriadne praktický</strong>{" "}
                  spôsob zasklenia budov a miestností. Tieto konštrukcie sa
                  ľahko otvárajú a zatvárajú, pričom si zachovávajú relatívne
                  nízku hmotnosť aj pri rozsiahlej zasklenej ploche.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8">
                  Materiály a Profily WDS
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Naša spoločnosť vyrába posuvné systémy z{" "}
                  <strong>PVC (plastových)</strong> a{" "}
                  <strong>hliníkových</strong> profilov. Ponúkame predovšetkým
                  posuvné PVC systémy <strong>WDS 60SL</strong> a{" "}
                  <strong>WDS 76SL</strong>.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Posuvné konštrukcie <strong>WDS</strong> sú ideálnym spojením
                  funkčnosti, ergonómie a moderného dizajnu. Umožňujú efektívne
                  organizovať priestor, zabezpečujú vysokú úroveň{" "}
                  <strong>tepelnej a zvukovej izolácie</strong> a dodávajú
                  interiéru ľahkosť a štýl.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6">
                  WDS 60SL – Optimálne riešenie pre ľahké konštrukcie
                </h3>

                <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed ml-4">
                  <li>Montážna hĺbka: 60 mm</li>
                  <li>Počet komôr profilu: 3</li>
                  <li>
                    Maximálna hrúbka izolačného skla (sklopketu): do 24 mm
                  </li>
                  <li>Kovanie: Špecializované pre posuvné systémy</li>
                  <li>
                    Určenie: Loggie, balkóny, medzizariadenia a interiérové
                    priečky
                  </li>
                </ul>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>WDS 60SL</strong> je kompaktný systém pre priestory,
                  kde je kľúčová úspora miesta. Poskytuje základnú úroveň
                  tepelnej izolácie a je vynikajúci na zasklenie{" "}
                  <strong>
                    nevykurovaných alebo čiastočne zateplených zón
                  </strong>
                  .
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6">
                  WDS 76SL – Vylepšená Energetická Účinnosť a Komfort
                </h3>

                <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed ml-4">
                  <li>Montážna hĺbka: 76 mm</li>
                  <li>Počet komôr profilu: 5</li>
                  <li>
                    Maximálna hrúbka izolačného skla (sklopketu): do 42 mm
                  </li>
                  <li>
                    Zlepšená tepelná izolácia: Koeficient prestupu tepla
                    zodpovedá moderným štandardom
                  </li>
                  <li>Možnosť laminácie: Rôzne farebné varianty a textúry</li>
                </ul>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>WDS 76SL</strong> je energeticky úsporný posuvný
                  systém pre <strong>obytné priestory</strong>. Vďaka hlbšej
                  montážnej základni a možnosti inštalácie hrubého izolačného
                  skla je systém ideálny pre rodinné domy, byty a kancelárie.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8">
                  Hlavné Výhody Posuvných Systémov WDS
                </h2>

                <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed ml-4">
                  <li>
                    <strong>Úspora priestoru:</strong> Krídla sa posúvajú pozdĺž
                    seba a nezaberajú žiadne miesto pri otváraní.
                  </li>
                  <li>
                    <strong>Moderný vzhľad:</strong> Poskytujú elegantný a
                    súčasný dizajn.
                  </li>
                  <li>
                    <strong>Spoľahlivé kovanie:</strong> Zaručuje ľahký chod a
                    dlhú životnosť celej konštrukcie.
                  </li>
                  <li>
                    <strong>Vysoká tesnosť:</strong> Dosiahnutá vďaka
                    špeciálnemu tesneniu.
                  </li>
                  <li>
                    <strong>Flexibilná výroba:</strong> Možnosť zhotovenia
                    konštrukcií v rôznych rozmeroch.
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mt-8">
                  Hliníkové Posuvné Systémy
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hliníkové posuvné systémy sú ďalším estetickým a zároveň
                  pohodlným riešením pre zasklenie. Ich hlavnou prednosťou je{" "}
                  <strong>mimoriadna ľahkosť a jednoduchosť používania</strong>.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Konštrukcie sa ľahko otvárajú a zatvárajú, majú nízku hmotnosť
                  aj na veľkých plochách a hliník v zatvorenom stave zároveň
                  zabezpečuje <strong>dobrú zvukovú izoláciu</strong>.
                </p>
              </div>
              <TechnologyGrid technologies={technologies} />

              
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

export default SlidingSystemsLayout;
