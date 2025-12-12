import ProductLayout from "@/components/ProductLayout";

const Facades = () => {
  const description = "Moderné fasádne systémy pre komerčné a administratívne budovy. Kombinácia estetiky a funkčnosti, ktorá vytvára impozantný vzhľad budovy pri zachovaní vynikajúcich tepelno-izolačných vlastností. Naše fasádne systémy sú navrhnuté pre maximálnu energetickú účinnosť.";
  
  const technology = "Používame pokročilé fasádne systémy z hliníka a skla.";
  
  const features = [
    "Skeleto-oblúkové fasády",
    "Hliníkové fasády",
    "Ventilované fasády",
    "Atypické riešenia"
  ];

  const technologies = [
    {
      name: "Modulová fasáda",
      description: "Predpripravené moduly | Rýchla montáž",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Rasterová fasáda",
      description: "Klasická konštrukcia | Flexibilita",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Štrukturálna fasáda",
      description: "Skryté rámy | Čisté línie",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dvojplášťová fasáda",
      description: "Najvyššia efektivita | Prémiová kvalita",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80"
    }
  ];
  
  const certifications = [
    "STN EN 13830 - Fasádne systémy - Norma výrobku",
    "CE certifikát - Zhoda s európskymi normami",
    "Tepelná izolácia Uf od 0.8 W/m²K",
    "Veterná odolnosť do triedy E",
    "Protipožiarna ochrana EI 30-90",
    "Akustická izolácia až 48 dB"
  ];

  const downloadableDocuments = [
    {
      name: "Fasádne systémy - katalóg",
      description: "Prehľad fasádnych riešení pre komerčné budovy",
      pdfUrl: "/documents/katalog-fasady.pdf"
    },
    {
      name: "Energetická efektívnosť",
      description: "Tepelno-technické parametre fasádnych systémov",
      pdfUrl: "/documents/energeticka-efektivnost-fasady.pdf"
    }
  ];
  
  const images = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <ProductLayout
      title="Fasády"
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

export default Facades;
