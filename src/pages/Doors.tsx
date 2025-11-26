import ProductLayout from "@/components/ProductLayout";

const Doors = () => {
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  
  const technology = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Nulla porttitor massa id neque aliquam vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.";
  
  const images = [
    "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <ProductLayout
      title="Doors"
      description={description}
      technology={technology}
      images={images}
    />
  );
};

export default Doors;
