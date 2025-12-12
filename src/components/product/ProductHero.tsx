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
        className="w-full h-[600px] object-cover"
      />
    </div>
  );
};

export default ProductHero;
