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

interface DownloadableDocument {
  name: string;
  description: string;
  pdfUrl: string;
}

interface TechnologyItem {
  name: string;
  description: string;
  image: string;
}

interface ProductLayoutProps {
  title: string;
  description: string;
  technology: string;
  images: string[];
  features?: string[];
  certifications?: string[];
  downloadableDocuments?: DownloadableDocument[];
  technologies?: TechnologyItem[];
  children?: ReactNode;
}

const ProductLayout = ({ 
  title, 
  description, 
  technology, 
  images, 
  features, 
  certifications, 
  downloadableDocuments,
  technologies 
}: ProductLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 animate-fade-in">
        <div className="container mx-auto px-4 py-8">
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
              {/* Hero Image - Full width, large */}
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src={images[0]}
                  alt={title}
                  className="w-full h-[600px] object-cover"
                />
              </div>

              {/* Title and Description */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">{title}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {description}
                </p>
                
                {features && features.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      Naša spoločnosť sa zaoberá:
                    </p>
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

              {/* Technologies Grid - Visual cards like reference site */}
              {technologies && technologies.length > 0 && (
                <div className="space-y-8">
                  {/* Technology Cards Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {technologies.map((tech, index) => (
                      <div 
                        key={index} 
                        className="bg-background rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                      >
                        <div className="aspect-square mb-4 flex items-center justify-center">
                          <img
                            src={tech.image}
                            alt={tech.name}
                            className="max-h-32 object-contain"
                          />
                        </div>
                        <h4 className="font-bold text-foreground text-sm md:text-base">{tech.name}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1">{tech.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technology Descriptions */}
                  <div className="space-y-6">
                    {technologies.map((tech, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-bold text-foreground">{tech.name}</h4>
                        <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technology Section - Simple text version if no technologies array */}
              {!technologies && technology && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Technológie a materiály</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {technology}
                  </p>
                </div>
              )}

              {/* Certifications Section */}
              {certifications && certifications.length > 0 && (
                <div className="bg-background p-8 rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Certifikáty a normy</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                        <span className="text-primary text-xl mt-0.5">✓</span>
                        <span className="text-muted-foreground">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Downloadable Documents Section */}
              {downloadableDocuments && downloadableDocuments.length > 0 && (
                <div className="bg-background p-8 rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Dokumenty na stiahnutie</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {downloadableDocuments.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{doc.name}</h3>
                          <p className="text-sm text-muted-foreground">{doc.description}</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="shrink-0"
                        >
                          <a href={doc.pdfUrl} download target="_blank" rel="noopener noreferrer">
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
