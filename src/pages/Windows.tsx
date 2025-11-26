import ProductLayout from "@/components/ProductLayout";

const Windows = () => {
  const description = "Moderné plastové okná sú jedným z najobľúbenejších typov okenných konštrukcií, ktoré sa vyberajú pre zasklenie kancelárií, bytových a výrobných priestorov. Takéto okná sa vyznačujú vysokou odolnosťou proti korózii, sú dlhovekové a praktické.";
  
  const technology = "Používame kvalitné viackomôrkové profily s vynikajúcimi izolačnými vlastnosťami. Naše okná sú vybavené moderným zasklením s nízkou emisivitou pre maximálnu energetickú úsporu. Profesionálna montáž a tesniace systémy zabezpečujú dokonalú tepelnú a zvukovú izoláciu.";
  
  const features = [
    "Plastové okná",
    "Drevené okná",
    "Hliníkové okná",
    "Energeticky úsporné okná"
  ];
  
  const certifications = [
    { name: "STN EN 14351-1 - Okná a dvere - Norma výrobku", pdfUrl: "/certificates/stn-en-14351-1.pdf" },
    { name: "CE certifikát - Zhoda s európskymi normami", pdfUrl: "/certificates/ce-certificate.pdf" },
    { name: "Energetická trieda A+ - Vysoká energetická účinnosť", pdfUrl: "/certificates/energy-class-a.pdf" },
    { name: "ISO 9001 - Systém manažérstva kvality", pdfUrl: "/certificates/iso-9001.pdf" },
    { name: "STN 73 0540 - Tepelná ochrana budov", pdfUrl: "/certificates/stn-73-0540.pdf" },
    { name: "RAL certifikát - Garancia kvality montáže", pdfUrl: "/certificates/ral-certificate.pdf" }
  ];
  
  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
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
      certifications={certifications}
    />
  );
};

export default Windows;
