import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface ProductLayoutProps {
  title: string;
  description: string;
  technology: string;
  images: string[];
  children?: ReactNode;
}

const ProductLayout = ({ title, description, technology, images }: ProductLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center">{title}</h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">Technológie</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {technology}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Galéria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden hover-lift"
              >
                <img
                  src={image}
                  alt={`${title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Máte záujem?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kontaktujte nás pre viac informácií.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold">
            <Mail className="mr-2" size={20} />
            Kontaktujte nás
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductLayout;
