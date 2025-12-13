import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductHero from "@/components/product/ProductHero";
import TechnologyGrid from "@/components/product/TechnologyGrid";

const SlidingSystemsLayout = () => {
  const title = "Posuvné systémy";

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
                  Posuvné Systémy
                </h1>

                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Posuvné systémy predstavujú estetický a zároveň mimoriadne praktický
                    spôsob zasklenia budov a miestností. Tieto konštrukcie sa
                    ľahko otvárajú a zatvárajú, pričom si zachovávajú relatívne
                    nízku hmotnosť aj pri rozsiahlej zasklenej ploche.
                  </p>

                  <h2 className="text-xl font-medium text-foreground pt-4">
                    Materiály a Profily WDS
                  </h2>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    Naša spoločnosť vyrába posuvné systémy z <strong className="text-foreground font-medium">PVC</strong> a{" "}
                    <strong className="text-foreground font-medium">hliníkových</strong> profilov. Ponúkame predovšetkým
                    posuvné PVC systémy <strong className="text-foreground font-medium">WDS 60SL</strong> a{" "}
                    <strong className="text-foreground font-medium">WDS 76SL</strong>.
                  </p>

                  <h3 className="text-lg font-medium text-foreground pt-2">
                    WDS 60SL – Optimálne riešenie pre ľahké konštrukcie
                  </h3>

                  <ul className="list-disc list-outside text-base text-muted-foreground leading-relaxed ml-5 space-y-1">
                    <li>Montážna hĺbka: 60 mm</li>
                    <li>Počet komôr profilu: 3</li>
                    <li>Maximálna hrúbka izolačného skla: do 24 mm</li>
                    <li>Určenie: Loggie, balkóny, interiérové priečky</li>
                  </ul>

                  <h3 className="text-lg font-medium text-foreground pt-2">
                    WDS 76SL – Vylepšená Energetická Účinnosť
                  </h3>

                  <ul className="list-disc list-outside text-base text-muted-foreground leading-relaxed ml-5 space-y-1">
                    <li>Montážna hĺbka: 76 mm</li>
                    <li>Počet komôr profilu: 5</li>
                    <li>Maximálna hrúbka izolačného skla: do 42 mm</li>
                    <li>Možnosť laminácie: Rôzne farebné varianty</li>
                  </ul>

                  <h2 className="text-xl font-medium text-foreground pt-4">
                    Hlavné Výhody Posuvných Systémov
                  </h2>

                  <ul className="list-disc list-outside text-base text-muted-foreground leading-relaxed ml-5 space-y-1">
                    <li><strong className="text-foreground font-medium">Úspora priestoru</strong> – Krídla sa posúvajú pozdĺž seba</li>
                    <li><strong className="text-foreground font-medium">Moderný vzhľad</strong> – Elegantný a súčasný dizajn</li>
                    <li><strong className="text-foreground font-medium">Spoľahlivé kovanie</strong> – Ľahký chod a dlhá životnosť</li>
                    <li><strong className="text-foreground font-medium">Vysoká tesnosť</strong> – Špeciálne tesnenie</li>
                  </ul>

                  <h2 className="text-xl font-medium text-foreground pt-4">
                    Hliníkové Posuvné Systémy
                  </h2>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    Hliníkové posuvné systémy sú estetickým a pohodlným riešením pre zasklenie.
                    Vyznačujú sa mimoriadnou ľahkosťou, jednoduchým používaním a dobrou zvukovou izoláciou.
                  </p>
                </div>
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
