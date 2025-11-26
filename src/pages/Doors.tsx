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
  
  const certifications = [
    { name: "STN EN 14351-1 - Dvere - Norma výrobku", pdfUrl: "/certificates/doors-stn-en-14351-1.pdf" },
    { name: "CE certifikát - Zhoda s európskymi normami", pdfUrl: "/certificates/doors-ce-certificate.pdf" },
    { name: "Bezpečnostná trieda RC2/RC3 - Ochrana proti vlámaniu", pdfUrl: "/certificates/security-rc2-rc3.pdf" },
    { name: "STN EN 1627 - Odolnosť proti násilnému vniknutiu", pdfUrl: "/certificates/stn-en-1627.pdf" },
    { name: "STN 92 0201 - Protipožiarna ochrana", pdfUrl: "/certificates/fire-protection.pdf" },
    { name: "Akustická izolácia až 42 dB", pdfUrl: "/certificates/acoustic-insulation.pdf" }
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
      certifications={certifications}
    />
  );
};

export default Doors;
