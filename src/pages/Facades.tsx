import ProductLayout from "@/components/ProductLayout";

const Facades = () => {
  const description = "Moderné fasádne systémy pre komerčné a administratívne budovy. Kombinácia estetiky a funkčnosti, ktorá vytvára impozantný vzhľad budovy pri zachovaní vynikajúcich tepelno-izolačných vlastností.";
  
  const technology = "Používame pokročilé fasádne systémy z hliníka a skla. Naše riešenia zabezpečujú vynikajúcu tepelnú izoláciu, odolnosť voči poveternostným vplyvom a jednoduchú údržbu. Každý projekt je navrhnutý s ohľadom na energetickú efektívnosť a architektonické požiadavky.";
  
  const features = [
    "Skeleto-oblúkové fasády",
    "Hliníkové fasády",
    "Ventilované fasády",
    "Atypické riešenia"
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
    />
  );
};

export default Facades;
