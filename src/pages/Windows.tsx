import ProductLayout from "@/components/ProductLayout";
import heroImage from "@/assets/hero-windows.jpg";

const Windows = () => {
  const description = "Plastové okná majú veľký dopyt vďaka svojmu atraktívnemu dizajnu a praktickosti. Nevyžadujú natieranie, majú veľmi estetický a pekný vzhľad. Spolupracujeme s výrobcami kvalitných profilových systémov, ktorých produkcia prechádza kontrolou kvality na všetkých etapách výroby.";
  
  const technology = "Používame kvalitné viackomôrkové profily s vynikajúcimi izolačnými vlastnosťami. Naše okná sú vybavené moderným zasklením s nízkou emisivitou pre maximálnu energetickú úsporu.";
  
  const features = [
    "Plastové okná",
    "Drevené okná", 
    "Hliníkové okná",
    "Energeticky úsporné okná"
  ];

  const technologies = [
    {
      name: "5-komorový systém",
      description: "60 mm | Klasické okná s optimálnou komfortnou výbavou",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "6-komorový systém",
      description: "70 mm | Vyššia tepelná izolácia a úspora energie",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "7-komorový systém",
      description: "76 mm | Prémiová tepelná a zvuková izolácia",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "8-komorový systém",
      description: "82 mm | Najvyššia energetická účinnosť",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Panoramatický systém",
      description: "76 mm | Maximálne presvetlenie interiéru",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Pasívny dom",
      description: "90 mm | Pre pasívne a nízkoenergetické domy",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
    }
  ];
  
  const certifications = [
    "STN EN 14351-1 - Okná a dvere - Norma výrobku",
    "CE certifikát - Zhoda s európskymi normami",
    "Energetická trieda A+ - Vysoká energetická účinnosť",
    "ISO 9001 - Systém manažérstva kvality",
    "STN 73 0540 - Tepelná ochrana budov",
    "RAL certifikát - Garancia kvality montáže"
  ];

  const downloadableDocuments = [
    {
      name: "Technický katalóg okien",
      description: "Kompletný prehľad našich okenných systémov s technickými parametrami",
      pdfUrl: "/documents/katalog-okien.pdf"
    },
    {
      name: "Návod na údržbu",
      description: "Odporúčania pre správnu údržbu a čistenie okien",
      pdfUrl: "/documents/udrzba-okien.pdf"
    },
    {
      name: "Montážny manuál",
      description: "Profesionálny návod pre montáž okenných systémov",
      pdfUrl: "/documents/montaz-okien.pdf"
    }
  ];
  
  const images = [
    heroImage,
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <ProductLayout
      title="Okná"
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

export default Windows;
