import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductHero from "@/components/product/ProductHero";

const FacadesLayout = () => {
  const title = "Fasády";

  const technologies = [
    {
      name: "Modulová fasáda",
      description: "Predpripravené moduly | Rýchla montáž",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Rasterová fasáda",
      description: "Klasická konštrukcia | Flexibilita",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Štrukturálna fasáda",
      description: "Skryté rámy | Čisté línie",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Dvojplášťová fasáda",
      description: "Najvyššia efektivita | Prémiová kvalita",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const images = ["/src/assets/product_imgs/facades/luxury-holiday-home.jpg"];

  return (
    <div className="min-h-screen flex flex-col bg-muted/30 pt-16">
      <Navigation />

      <main className="flex-1 animate-fade-in">
        <div className="container mx-auto px-4 py-8">
          <ProductBreadcrumb title={title} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ProductHero image={images[0]} alt={title} />

              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
                  Fasádne Zasklenie
                </h1>

                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Pri výstavbe budov sa{" "}
                    <strong className="text-foreground font-medium">
                      fasádne zasklenie
                    </strong>{" "}
                    používa čoraz častejšie.
                  </p>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    Dôvodom je, že fasáda nielenže umožňuje dosiahnuť{" "}
                    <strong className="text-foreground font-medium">
                      krásny vonkajší vzhľad
                    </strong>{" "}
                    stavby, ale je aj praktická zvnútra:{" "}
                    <strong className="text-foreground font-medium">
                      vizuálne zväčšuje priestor
                    </strong>
                    , lepšie prepúšťa svetlo do miestnosti a{" "}
                    <strong className="text-foreground font-medium">
                      šetrí elektrickú energiu
                    </strong>
                    .
                  </p>

                  <h2 className="text-xl font-medium text-foreground pt-6">
                    Široké Uplatnenie
                  </h2>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    Takéto zasklenie sa široko používa ako v{" "}
                    <strong className="text-foreground font-medium">
                      obytných domoch
                    </strong>
                    , tak aj v{" "}
                    <strong className="text-foreground font-medium">
                      biznis centrách
                    </strong>
                    ,{" "}
                    <strong className="text-foreground font-medium">
                      verejných
                    </strong>{" "}
                    a{" "}
                    <strong className="text-foreground font-medium">
                      administratívnych budovách
                    </strong>
                    , ako aj v podnikoch.
                  </p>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    Vysoké okná a{" "}
                    <strong className="text-foreground font-medium">
                      sklené strechy
                    </strong>{" "}
                    úplne menia budovu zvonka i zvnútra a premieňajú ju na{" "}
                    <strong className="text-foreground font-medium">
                      unikátnu a neopakovateľnú stavbu
                    </strong>
                    .
                  </p>

                  <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-lg text-foreground/80">
                    Výberom fasádneho zasklenia majitelia nehnuteľností dosahujú
                    dvojitý výsledok – originalitu budovy navonok a exkluzivitu
                    interiéru zvnútra.
                  </blockquote>

                  <h2 className="text-xl font-medium text-foreground pt-6">
                    Materiály a Alternatívy
                  </h2>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    <strong className="text-foreground font-medium">
                      Hliníkové fasádne systémy
                    </strong>{" "}
                    sú vynikajúcou alternatívou k oceľovým konštrukciám.
                  </p>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    Taktiež vyrábame{" "}
                    <strong className="text-foreground font-medium">
                      panely z plastu
                    </strong>{" "}
                    – špeciálne{" "}
                    <strong className="text-foreground font-medium">
                      PVC panely
                    </strong>
                    , ktoré sa používajú pre{" "}
                    <strong className="text-foreground font-medium">
                      súkromné domy
                    </strong>
                    .
                  </p>
                </div>
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

export default FacadesLayout;
