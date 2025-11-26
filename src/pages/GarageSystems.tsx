import ProductLayout from "@/components/ProductLayout";

const GarageSystems = () => {
  const description = "Kvalitné garážové brány a žalúzie pre rodinné domy aj komerčné objekty. Ponúkame široký výber dizajnov a farieb, ktoré sa prispôsobia architektonickému štýlu vašej budovy.";
  
  const technology = "Moderné pohony s automatickým ovládaním a bezpečnostnými prvkami. Naše systémy sú navrhnuté pre tichý chod a dlhodobú bezporuchovú prevádzku. Vysoká kvalita materiálov zabezpečuje odolnosť proti poveternostným vplyvom.";
  
  const features = [
    "Sekčné garážové brány",
    "Rolovateľné brány",
    "Vonkajšie žalúzie",
    "Automatické ovládanie"
  ];
  
  const certifications = [
    "STN EN 13241-1 - Garážové brány - Norma výrobku",
    "CE certifikát - Zhoda s európskymi normami",
    "Bezpečnostné snímače - Ochrana osôb",
    "Automatika s nouzovým odblokovaním",
    "Tepelná izolácia až 1.0 W/m²K",
    "Veterná odolnosť trieda 3"
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
      certifications={certifications}
    />
  );
};

export default GarageSystems;
