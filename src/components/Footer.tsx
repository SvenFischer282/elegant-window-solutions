import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info - Impressum */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-light tracking-wide mb-6">ARGO SNV s.r.o.</h3>
            <div className="text-background/70 text-sm space-y-1">
              <p>Slovenská 256, 053 21 Markušovce</p>
              <p>IČO: 50314262</p>
              <p>DIČ: 2120281427</p>
              <p>IČ DPH: SK2120281427</p>
              <p className="pt-2 text-background/50 text-xs">
                Zapísaná v Obchodnom registri Mestského súdu Košice, oddiel: Sro, vložka č.: 39196/V
              </p>
            </div>
            <p className="text-background/70 leading-relaxed text-sm mt-4">
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
              <Link to="/about-us" className="block hover:text-background transition-colors">O nás</Link>
              <Link to="/our-services" className="block hover:text-background transition-colors">Naše služby</Link>
              <Link to="/production" className="block hover:text-background transition-colors">Produkcia</Link>
              <Link to="/contact" className="block hover:text-background transition-colors">Kontakt</Link>
            </div>
            
            {/* Legal Links */}
            <div className="mt-6 pt-6 border-t border-background/20">
              <h4 className="text-sm font-light tracking-wide mb-3 text-background/50">Právne informácie</h4>
              <div className="space-y-2 text-background/60 text-xs">
                <Link to="/privacy-policy" className="block hover:text-background transition-colors">
                  Zásady ochrany osobných údajov
                </Link>
                <Link to="/terms-conditions" className="block hover:text-background transition-colors">
                  Všeobecné obchodné podmienky
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/50 text-sm">
          <p>&copy; {new Date().getFullYear()} ARGO SNV s.r.o. Všetky práva vyhradené.</p>
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
