import { Link } from "react-router-dom";

const OurProducts = () => {
  const products = [
    {
      title: "Okná",
      path: "/windows",
      image:
        "https://vesnyanka.com.ua/wp-content/uploads/2022/10/valeriy-lobanov-sCFjj3evA1s-unsplash-1-scaled.jpg",
    },
    {
      title: "Dvere",
      path: "/doors",
      image: "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/glass_door_image.jpg",
    },
    {
      title: "Posuvné systémy",
      path: "/sliding-systems",
      image:
        "https://vesnyanka.com.ua/wp-content/uploads/2025/03/83d2470a-7357-4e2a-a0fc-3524bcc91433.webp",
    },
    {
      title: "Hliník",
      path: "/aluminum",
      image:
        "https://vesnyanka.com.ua/wp-content/uploads/2025/03/DALL%C2%B7E-2025-03-31-21.43.31-A-modern-aluminum-and-glass-door-designed-for-contemporary-homes-and-commercial-spaces.-The-door-features-a-sleek-minimalistic-frame-with-a-large-gla.webp",
    },
    {
      title: "Fasády",
      path: "/facades",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
  ];
  
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16 text-foreground">
          Naše produkty
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {products.map((product) => (
            <Link
              key={product.path}
              to={product.path}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-light tracking-wide text-background">
                  {product.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
