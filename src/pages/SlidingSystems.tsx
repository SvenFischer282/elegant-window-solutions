import ProductLayout from "@/components/ProductLayout";

const SlidingSystems = () => {
  const description = "Moderné posuvné systémy pre terasy a balkóny, ktoré spájajú eleganciu s funkčnosťou. Ideálne riešenie pre maximalizáciu priestoru a vytvorenie plynulého prechodu medzi interiérom a exteriérom. Posuvné systémy umožňujú maximálne presvetlenie a otvorenie priestoru.";
  
  const technology = "Vysoko kvalitné posuvné koľajnice s plynulým a tichým chodom.";
  
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
    <ProductLayout
      title="Posuvné systémy"
      description={description}
      technology={technology}
      images={images}
      features={features}
      technologies={technologies}
      certifications={certifications}
      downloadableDocuments={downloadableDocuments}
    />
  );
};

export default SlidingSystems;
