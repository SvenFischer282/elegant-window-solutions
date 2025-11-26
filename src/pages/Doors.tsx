import ProductLayout from "@/components/ProductLayout";

const Doors = () => {
  const description = "Kvalitné vstupné a interiérové dvere, ktoré spájajú funkčnosť, bezpečnosť a estetiku. Ponúkame široký výber dverí pre rôzne typy objektov - od rodinných domov až po komerčné priestory.";
  
  const technology = "Moderné dverové systémy s vysokou bezpečnosťou a tepelnou izoláciou. Používame kvalitné materiály a kovanie od preverených výrobcov. Každé dvere sú vybavené moderným zámkovým systémom a presnými tesnieniami pre maximálnu ochranu proti poveternostným vplyvom.";
  
  const features = [
    "Vstupné dvere",
    "Interiérové dvere",
    "Bezpečnostné dvere",
    "Protipožiarne dvere"
  ];
  
  const images = [
    "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <ProductLayout
      title="Dvere"
      description={description}
      technology={technology}
      images={images}
      features={features}
    />
  );
};

export default Doors;
