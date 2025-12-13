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
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Naše produkty
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {products.map((product) => (
            <Link
              key={product.path}
              to={product.path}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg md:text-xl font-semibold text-white">
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
