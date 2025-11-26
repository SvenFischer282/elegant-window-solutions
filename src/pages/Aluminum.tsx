import ProductLayout from "@/components/ProductLayout";

const Aluminum = () => {
  const description = "Ľahké hliníkové konštrukcie – optimálny variant, ak potrebujete zabezpečiť maximálne prirodzené osvetlenie a nie sú prísne požiadavky na tepelnú izoláciu. Hliníkové konštrukcie sa vyznačujú vysokou odolnosťou proti korózii, sú dlhovekové a praktické.";
  
  const technology = "Využívame moderné hliníkové profily s najnovšími technológiami. Naše hliníkové systémy zabezpečujú vysokú pevnosť konštrukcie pri minimálnej hmotnosti. Profesionálne spracovanie povrchu zaručuje dlhodobú ochranu proti poveternostným vplyvom a korózii. Všetky konštrukcie prechádzajú prísnou kontrolou kvality.";
  
  const features = [
    "Fasády",
    "Kancelárske priečky",
    "Okná",
    "Dvere a ďalšie výrobky z hliníka"
  ];
  
  const certifications = [
    "STN EN 13830 - Vonkajšie steny - Norma výrobku",
    "CE certifikát - Zhoda s európskymi normami",
    "ISO 9001:2015 - Systém manažérstva kvality",
    "Veterná záťaž do 2.5 kN/m²",
    "Povrchová úprava RAL certifikovaná",
    "Korózia odolnosť C5-M - Vysoká ochrana"
  ];
  
  const images = [
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <ProductLayout
      title="Hliník"
      description={description}
      technology={technology}
      images={images}
      features={features}
      certifications={certifications}
    />
  );
};

export default Aluminum;
