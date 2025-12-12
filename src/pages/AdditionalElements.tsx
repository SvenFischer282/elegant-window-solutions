import ProductLayout from "@/components/ProductLayout";

const AdditionalElements = () => {
  const description = "Kompletný sortiment doplnkových prvkov a príslušenstva pre okenné a dverové systémy. Od parapetov po tesnenia - všetko potrebné pre dokončenie vašej stavby. Ponúkame kvalitné produkty, ktoré dokonale dopĺňajú naše hlavné systémy.";
  
  const technology = "Vysoká kvalita materiálov a presné spracovanie zabezpečujú dokonalú funkčnosť.";
  
  const features = [
    "Parapety",
    "Sieťové systémy",
    "Tesnenia",
    "Kovanie a príslušenstvo"
  ];

  const technologies = [
    {
      name: "Parapety",
      description: "Vnútorné aj vonkajšie | Rôzne materiály",
      image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sieťky proti hmyzu",
      description: "Pevné aj rolovacie | Diskrétny dizajn",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Kovanie",
      description: "Prémiová kvalita | Dlhá životnosť",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Rolety a tienenie",
      description: "Elektrické ovládanie | Moderný dizajn",
      image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=400&q=80"
    }
  ];
  
  const certifications = [
    "CE certifikát - Zhoda s európskymi normami",
    "ISO 9001 - Systém manažérstva kvality",
    "STN EN 13659 - Vonkajšie žalúzie",
    "Certifikované tesnenia EPDM",
    "Korózia odolnosť RAL certifikovaná",
    "Záručná doba až 10 rokov"
  ];

  const downloadableDocuments = [
    {
      name: "Doplnkové prvky - katalóg",
      description: "Kompletný prehľad príslušenstva a doplnkov",
      pdfUrl: "/documents/katalog-doplnky.pdf"
    },
    {
      name: "Montážne pokyny",
      description: "Inštrukcie pre montáž parapetov a doplnkov",
      pdfUrl: "/documents/montaz-doplnky.pdf"
    }
  ];
  
  const images = [
    "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <ProductLayout
      title="Doplnkové prvky"
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

export default AdditionalElements;
