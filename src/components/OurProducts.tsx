import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";

import { STORAGE_URL } from "@/lib/constants";

const OurProducts = () => {
  const products = [
    {
      title: "Okná",
      path: "/windows",
      image: `${STORAGE_URL}/okno.jpg`,
    },
    {
      title: "Dvere",
      path: "/doors",
      image: `${STORAGE_URL}/dvere.jpg`,
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
      image: `${STORAGE_URL}/hlinik.webp`,
    },
    {
      title: "Fasády",
      path: "/facades",
      image: `${STORAGE_URL}/fasady.webp`,
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16 text-foreground">Naše produkty</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <AnimatedSection key={product.path} delay={index * 100}>
              <Link
                to={product.path}
                className="group relative aspect-[3/4] overflow-hidden block"
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
