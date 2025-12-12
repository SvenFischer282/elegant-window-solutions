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

const AluminumLayout = () => {
  const title = "Hliník";
  
  const description = "Ľahké hliníkové konštrukcie – optimálny variant, ak potrebujete zabezpečiť maximálne prirodzené osvetlenie a nie sú prísne požiadavky na tepelnú izoláciu. Hliníkové konštrukcie sa vyznačujú vysokou odolnosťou proti korózii, sú dlhovekové a praktické.";
  
  const features = [
    "Fasády",
    "Kancelárske priečky",
    "Okná",
    "Dvere a ďalšie výrobky z hliníka"
  ];

  const technologies = [
    {
      name: "Hliníkové okná",
      description: "Úzke profily | Maximálne svetlo",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Hliníkové dvere",
      description: "Vysoká bezpečnosť | Elegantný dizajn",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Kancelárske priečky",
      description: "Flexibilné riešenia | Moderný vzhľad",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Zimné záhrady",
      description: "Celoročné využitie | Tepelná izolácia",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80"
    }
  ];
  
  const certifications = [
    "STN EN 13830 - Vonkajšie steny - Norma výrobku",
    "CE certifikát - Zhoda s európskymi normami",
    "ISO 9001:2015 - Systém manažérstva kvality",
    "Veterná záťaž do 2.5 kN/m²",
    "Povrchová úprava RAL certifikovaná",
    "Korózia odolnosť C5-M - Vysoká ochrana"
  ];

  const downloadableDocuments = [
    {
      name: "Hliníkové profily - katalóg",
      description: "Kompletný prehľad hliníkových profilov a systémov",
      pdfUrl: "/documents/katalog-hlinik.pdf"
    },
    {
      name: "Farebné možnosti",
      description: "RAL farebná paleta pre hliníkové konštrukcie",
      pdfUrl: "/documents/farby-hlinik.pdf"
    },
    {
      name: "Referenčné projekty",
      description: "Realizované projekty s hliníkovými konštrukciami",
      pdfUrl: "/documents/referencie-hlinik.pdf"
    }
  ];
  
  const images = [
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
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

export default AluminumLayout;
