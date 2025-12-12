import ProductLayout from "@/components/ProductLayout";

const GarageSystems = () => {
  const description = "Kvalitné garážové brány a žalúzie pre rodinné domy aj komerčné objekty. Ponúkame široký výber dizajnov a farieb, ktoré sa prispôsobia architektonickému štýlu vašej budovy. Naše systémy sú vybavené modernými bezpečnostnými prvkami.";
  
  const technology = "Moderné pohony s automatickým ovládaním a bezpečnostnými prvkami.";
  
  const features = [
    "Sekčné garážové brány",
    "Rolovateľné brány",
    "Vonkajšie žalúzie",
    "Automatické ovládanie"
  ];

  const technologies = [
    {
      name: "Sekčná brána",
      description: "Vertikálne otváranie | Úspora priestoru",
      image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Rolovacia brána",
      description: "Kompaktný systém | Priemyselné využitie",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Vonkajšie žalúzie",
      description: "Tienenie + ochrana | Automatické ovládanie",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Bočná brána",
      description: "Horizontálne otváranie | Jednoduché použitie",
      image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=400&q=80"
    }
  ];
  
  const certifications = [
    "STN EN 13241-1 - Garážové brány - Norma výrobku",
    "CE certifikát - Zhoda s európskymi normami",
    "Bezpečnostné snímače - Ochrana osôb",
    "Automatika s nouzovým odblokovaním",
    "Tepelná izolácia až 1.0 W/m²K",
    "Veterná odolnosť trieda 3"
  ];

  const downloadableDocuments = [
    {
      name: "Garážové brány - katalóg",
      description: "Kompletný sortiment garážových brán a žalúzií",
      pdfUrl: "/documents/katalog-garazove-brany.pdf"
    },
    {
      name: "Návod na obsluhu",
      description: "Návod na použitie a údržbu automatických brán",
      pdfUrl: "/documents/navod-garazove-brany.pdf"
    }
  ];
  
  const images = [
    "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <ProductLayout
      title="Garážové brány a žalúzie"
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

export default GarageSystems;
