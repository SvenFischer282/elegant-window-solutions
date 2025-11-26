import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";

interface ProductLayoutProps {
  title: string;
  description: string;
  technology: string;
  images: string[];
  features?: string[];
  children?: ReactNode;
}

const ProductLayout = ({ title, description, technology, images, features }: ProductLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Featured Image */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={images[0]}
                  alt={title}
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Title and Description */}
              <div className="bg-background p-8 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold mb-6 text-foreground">{title}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {description}
                </p>
                
                {features && features.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Naša spoločnosť sa zaoberá:</h3>
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Technology Section */}
              <div className="bg-background p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Technológie a materiály</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {technology}
                </p>
              </div>

              {/* Gallery */}
              {images.length > 1 && (
                <div className="bg-background p-8 rounded-lg shadow-md">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Galéria</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {images.slice(1).map((image, index) => (
                      <div
                        key={index}
                        className="aspect-video rounded-lg overflow-hidden hover-lift"
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
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ContactSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductLayout;
