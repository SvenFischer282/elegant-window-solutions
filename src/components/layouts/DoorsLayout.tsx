import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductHero from "@/components/product/ProductHero";
import ProductDescription from "@/components/product/ProductDescription";
import TechnologyGrid from "@/components/product/TechnologyGrid";
import CertificationsSection from "@/components/product/CertificationsSection";
import DocumentsSection from "@/components/product/DocumentsSection";
import ProductGallery from "@/components/product/ProductGallery";

const DoorsLayout = () => {
  const title = "Dvere";
  
  const description = "Kvalitné vstupné a interiérové dvere, ktoré spájajú funkčnosť, bezpečnosť a estetiku. Ponúkame široký výber dverí pre rôzne typy objektov - od rodinných domov až po komerčné priestory. Naše dvere nevyžadujú špeciálnu údržbu a zachovávajú si dlhodobo estetický vzhľad.";
  
  const features = [
    "Vstupné dvere",
    "Interiérové dvere",
    "Bezpečnostné dvere",
    "Protipožiarne dvere"
  ];

  const technologies = [
    {
      name: "Vstupné dvere",
      description: "Plastové aj hliníkové | Vysoká bezpečnosť",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Bezpečnostné dvere",
      description: "RC2/RC3 trieda | Certifikovaná ochrana",
      image: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Protipožiarne dvere",
      description: "EI30 - EI90 | Požiarna odolnosť",
      image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Interiérové dvere",
      description: "Elegantný dizajn | Tichý chod",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=400&q=80"
    }
  ];
  
  const certifications = [
    "STN EN 14351-1 - Dvere - Norma výrobku",
    "CE certifikát - Zhoda s európskymi normami",
    "Bezpečnostná trieda RC2/RC3 - Ochrana proti vlámaniu",
    "STN EN 1627 - Odolnosť proti násilnému vniknutiu",
    "STN 92 0201 - Protipožiarna ochrana",
    "Akustická izolácia až 42 dB"
  ];

  const downloadableDocuments = [
    {
      name: "Katalóg dverí",
      description: "Kompletný sortiment vstupných a interiérových dverí",
      pdfUrl: "/documents/katalog-dveri.pdf"
    },
    {
      name: "Bezpečnostné parametre",
      description: "Detailné informácie o bezpečnostných prvkoch",
      pdfUrl: "/documents/bezpecnost-dveri.pdf"
    },
    {
      name: "Farebné vzorkovníky",
      description: "Dostupné farby a povrchové úpravy dverí",
      pdfUrl: "/documents/farby-dveri.pdf"
    }
  ];
  
  const images = [
    "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=800&q=80",
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
              <ProductDescription title={title} description={description} features={features} />
              <TechnologyGrid technologies={technologies} />
              <CertificationsSection certifications={certifications} />
              <DocumentsSection documents={downloadableDocuments} />
              <ProductGallery images={images} title={title} />
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
