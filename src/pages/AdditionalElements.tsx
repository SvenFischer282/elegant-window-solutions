import ProductLayout from "@/components/ProductLayout";

const AdditionalElements = () => {
  const description = "Kompletný sortiment doplnkových prvkov a príslušenstva pre okenné a dverové systémy. Od parapetov po tesnenia - všetko potrebné pre dokončenie vašej stavby.";
  
  const technology = "Vysoká kvalita materiálov a presné spracovanie zabezpečujú dokonalú funkčnosť a dlhú životnosť. Všetky doplnkové prvky sú navrhnuté tak, aby dokonale ladili s hlavnými produktmi a vytvárali komplexné riešenie.";
  
  const features = [
    "Parapety",
    "Sieťové systémy",
    "Tesnenia",
    "Kovanie a príslušenstvo"
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
    />
  );
};

export default AdditionalElements;
