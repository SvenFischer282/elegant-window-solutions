import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface Certification {
  name: string;
  pdfUrl: string;
}

interface ProductLayoutProps {
  title: string;
  description: string;
  technology: string;
  images: string[];
  features?: string[];
  certifications?: Certification[];
  children?: ReactNode;
}

const ProductLayout = ({ title, description, technology, images, features, certifications }: ProductLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 py-12 animate-fade-in">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Domov</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Featured Image */}
              <div className="rounded-lg overflow-hidden shadow-lg hover-scale transition-all duration-300">
                <img
                  src={images[0]}
                  alt={title}
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Title and Description */}
              <div className="bg-background p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
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
              <div className="bg-background p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Technológie a materiály</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {technology}
                </p>
              </div>

              {/* Certifications Section */}
              {certifications && certifications.length > 0 && (
                <div className="bg-background p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Certifikáty a normy</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center justify-between gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-start gap-3 flex-1">
                          <span className="text-primary text-xl mt-0.5">✓</span>
                          <span className="text-muted-foreground">{cert.name}</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="shrink-0"
                        >
                          <a href={cert.pdfUrl} download target="_blank" rel="noopener noreferrer">
                            <Download className="w-4 h-4 mr-2" />
                            Stiahnuť PDF
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery */}
              {images.length > 1 && (
                <div className="bg-background p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Galéria</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {images.slice(1).map((image, index) => (
                      <div
                        key={index}
                        className="aspect-video rounded-lg overflow-hidden hover-scale transition-all duration-300"
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
