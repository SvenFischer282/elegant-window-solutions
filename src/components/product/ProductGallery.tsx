interface ProductGalleryProps {
  images: string[];
  title: string;
}

const ProductGallery = ({ images, title }: ProductGalleryProps) => {
  if (images.length <= 1) return null;
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Galéria</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.slice(1).map((image, index) => (
          <div
            key={index}
            className="aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src={image}
              alt={`${title} ${index + 2}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
