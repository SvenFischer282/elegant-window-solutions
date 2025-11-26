import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { ChevronRight, RectangleHorizontal, DoorOpen, ArrowRightLeft, Box, Building2, Warehouse, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-windows.jpg";

const Index = () => {
  const products = [
    { title: "Windows", icon: RectangleHorizontal, path: "/windows" },
    { title: "Doors", icon: DoorOpen, path: "/doors" },
    { title: "Sliding systems", icon: ArrowRightLeft, path: "/sliding-systems" },
    { title: "Aluminum", icon: Box, path: "/aluminum" },
    { title: "Facades", icon: Building2, path: "/facades" },
    { title: "Garage systems", icon: Warehouse, path: "/garage-systems" },
    { title: "Additional elements", icon: Plus, path: "/additional-elements" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
          <Link to="/windows">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold animate-fade-in">
              Zistite viac o našich produktoch
              <ChevronRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gradient">O nás</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Naše produkty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.path}
                title={product.title}
                icon={product.icon}
                path={product.path}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
