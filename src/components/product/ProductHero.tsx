interface ProductHeroProps {
  image: string;
  alt: string;
}

const ProductHero = ({ image, alt }: ProductHeroProps) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-xl">
      <img
        src={image}
        alt={alt}
        className="w-full h-[70vh] min-h-[500px] max-h-[800px] object-cover"
      />
    </div>
  );
};

export default ProductHero;
