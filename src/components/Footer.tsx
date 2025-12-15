import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-light tracking-wide mb-6">ARGO SNV</h3>
            <p className="text-background/70 leading-relaxed text-sm">
              Sme slovenská spoločnosť s viac ako 20-ročnými skúsenosťami vo výrobe a montáži okien, dverí a fasádnych systémov.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-light tracking-wide mb-6">Kontakt</h3>
            <div className="space-y-4 text-background/70 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={16} strokeWidth={1.5} />
                <a href="tel:+421903468472" className="hover:text-background transition-colors">+421 903 468 472</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} strokeWidth={1.5} />
                <a href="mailto:info@company.sk" className="hover:text-background transition-colors">info@company.sk</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} strokeWidth={1.5} />
                <span>Slovenská 256, 05 321 Markušovce</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-light tracking-wide mb-6">Navigácia</h3>
            <div className="space-y-3 text-background/70 text-sm">
              <a href="/about-us" className="block hover:text-background transition-colors">O nás</a>
              <a href="/our-services" className="block hover:text-background transition-colors">Naše služby</a>
              <a href="/production" className="block hover:text-background transition-colors">Produkcia</a>
              <a href="/contact" className="block hover:text-background transition-colors">Kontakt</a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/50 text-sm">
          <p>&copy; {new Date().getFullYear()} ARGO SNV</p>
          <p className="mt-2">
            Created by{" "}
            <a 
              href="https://svenfischer.sk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background/70 hover:text-background transition-colors"
            >
              Sven Fischer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
