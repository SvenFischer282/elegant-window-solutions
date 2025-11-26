import ProductLayout from "@/components/ProductLayout";

const SlidingSystems = () => {
  const description = "Moderné posuvné systémy pre terasy a balkóny, ktoré spájajú eleganciu s funkčnosťou. Ideálne riešenie pre maximalizáciu priestoru a vytvorenie plynulého prechodu medzi interiérom a exteriérom.";
  
  const technology = "Vysoko kvalitné posuvné koľajnice s plynulým a tichým chodom. Systémy sú navrhnuté pre jednoduché použitie a dlhodobú spoľahlivosť. Vybavené moderným zasklením a tesneniami pre vynikajúcu tepelnú izoláciu.";
  
  const features = [
    "Posuvné steny",
    "Terasové systémy",
    "Balkónové zasklenie",
    "Zimné záhrady"
  ];
  
  const certifications = [
    "STN EN 14351-1 - Posuvné systémy - Norma výrobku",
    "CE certifikát - Zhoda s európskymi normami",
    "Veterná odolnosť trieda C5 - Vysoká odolnosť",
    "Vodotesnosť trieda E1500 - Maximálna ochrana",
    "Tepelná izolácia Uf až 1.3 W/m²K",
    "Záťažový test 50 000 cyklov"
  ];
  
  const images = [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <ProductLayout
      title="Posuvné systémy"
      description={description}
      technology={technology}
      images={images}
      features={features}
      certifications={certifications}
    />
  );
};

export default SlidingSystems;
