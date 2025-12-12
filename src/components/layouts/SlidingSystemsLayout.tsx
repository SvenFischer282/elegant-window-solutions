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

const SlidingSystemsLayout = () => {
  const title = "Posuvné systémy";
  
  const description = "Moderné posuvné systémy pre terasy a balkóny, ktoré spájajú eleganciu s funkčnosťou. Ideálne riešenie pre maximalizáciu priestoru a vytvorenie plynulého prechodu medzi interiérom a exteriérom. Posuvné systémy umožňujú maximálne presvetlenie a otvorenie priestoru.";
  
  const features = [
    "Posuvné steny",
    "Terasové systémy",
    "Balkónové zasklenie",
    "Zimné záhrady"
  ];

  const technologies = [
    {
      name: "HST systém",
      description: "Zdvíhavo-posuvný | Maximálna stabilita",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "PSK systém",
      description: "Otočno-posuvný | Ventilácia + posun",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Skladacie systémy",
      description: "Harmonikové | Úplne otvorená fasáda",
      image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Panoramatické posuvné",
      description: "Minimálny rám | Maximálny výhľad",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80"
    }
  ];
  
  const certifications = [
    "STN EN 14351-1 - Posuvné systémy - Norma výrobku",
    "CE certifikát - Zhoda s európskymi normami",
    "Veterná odolnosť trieda C5 - Vysoká odolnosť",
    "Vodotesnosť trieda E1500 - Maximálna ochrana",
    "Tepelná izolácia Uf až 1.3 W/m²K",
    "Záťažový test 50 000 cyklov"
  ];

  const downloadableDocuments = [
    {
      name: "Posuvné systémy - katalóg",
      description: "Prehľad posuvných systémov pre terasy a balkóny",
      pdfUrl: "/documents/katalog-posuvne-systemy.pdf"
    },
    {
      name: "Technické riešenia",
      description: "Detailné technické výkresy a riešenia",
      pdfUrl: "/documents/technicke-riesenia-posuvne.pdf"
    }
  ];
  
  const images = [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80",
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

export default SlidingSystemsLayout;
