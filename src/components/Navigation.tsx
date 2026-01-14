import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "recharts";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isProductActive = () =>
    products.some((p) => location.pathname === p.path);
  const isHomeDropdownActive = () =>
    homeLinks.some((l) => location.pathname === l.path);

  const products = [
    { label: "Okná", path: "/windows" },
    { label: "Dvere", path: "/doors" },
    { label: "Posuvné systémy", path: "/sliding-systems" },
    { label: "Hliník", path: "/aluminum" },
    { label: "Fasády", path: "/facades" },
  ];

  const homeLinks = [
    { label: "O nás", path: "/about-us" },
    { label: "Naše služby", path: "/our-services" },
    { label: "Produkcia", path: "/production" },
    { label: "Často kladené otázky", path: "/faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link to="/" className="text-xl sm:text-2xl font-bold tracking-tight">
              ARGO SNV
            </Link>
            <a 
              href="tel:+421903468472" 
              className="flex items-center gap-1.5 text-primary-foreground/90 hover:text-primary-foreground transition-colors text-xs sm:text-sm"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={1.5} />
              <span className="hidden xs:inline">0903 468 472</span>
              <span className="xs:hidden">0903...</span>
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Home Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHomeDropdownOpen(true)}
              onMouseLeave={() => setHomeDropdownOpen(false)}
            >
              <Link
                to="/"
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                  isActive("/") || isHomeDropdownActive()
                    ? "text-primary-foreground after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-primary-foreground/70 after:rounded-full"
                    : "hover:bg-primary-foreground/10"
                }`}
              >
                Domov
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ease-out ${
                    homeDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </Link>
              <div
                className={`absolute top-full left-0 w-56 bg-background border border-border shadow-lg rounded-md py-1 z-50 transition-all duration-300 ease-out origin-top ${
                  homeDropdownOpen
                    ? "opacity-100 scale-y-100 translate-y-0"
                    : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                }`}
              >
                {homeLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center px-4 py-2 text-sm transition-colors duration-200 ${
                      isActive(link.path)
                        ? "text-primary font-medium bg-accent/50 border-l-2 border-primary"
                        : "text-foreground hover:bg-accent"
                    }`}
                    style={{
                      transitionDelay: homeDropdownOpen
                        ? `${index * 50}ms`
                        : "0ms",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <Link
                to="/products"
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                  isActive("/products") || isProductActive()
                    ? "text-primary-foreground after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-primary-foreground/70 after:rounded-full"
                    : "hover:bg-primary-foreground/10"
                }`}
              >
                Produkty
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ease-out ${
                    productsDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </Link>
              <div
                className={`absolute top-full left-0 w-56 bg-background border border-border shadow-lg rounded-md py-1 z-50 transition-all duration-300 ease-out origin-top ${
                  productsDropdownOpen
                    ? "opacity-100 scale-y-100 translate-y-0"
                    : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                }`}
              >
                {products.map((product, index) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className={`flex items-center px-4 py-2 text-sm transition-colors duration-200 ${
                      isActive(product.path)
                        ? "text-primary font-medium bg-accent/50 border-l-2 border-primary"
                        : "text-foreground hover:bg-accent"
                    }`}
                    style={{
                      transitionDelay: productsDropdownOpen
                        ? `${index * 50}ms`
                        : "0ms",
                    }}
                  >
                    {product.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                isActive("/contact")
                  ? "text-primary-foreground after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-primary-foreground/70 after:rounded-full"
                  : "hover:bg-primary-foreground/10"
              }`}
            >
              Kontakt
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary-hover transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "max-h-[600px] opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-2 space-y-1 border-t border-primary-foreground/20 pt-4">
            <Link
              to="/"
              className={`flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                isActive("/")
                  ? "bg-primary-foreground/20 border-l-4 border-primary-foreground"
                  : "hover:bg-primary-foreground/10"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isActive("/")
                    ? "bg-primary-foreground"
                    : "bg-primary-foreground/60"
                }`}
              ></span>
              Domov
            </Link>

            {homeLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-2.5 pl-8 text-sm rounded-lg transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-primary-foreground/20 text-primary-foreground font-medium border-l-4 border-primary-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2">
              <div className="flex items-center gap-3 px-4 py-3 text-base font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60"></span>
                Produkty
              </div>
              {products.map((product) => (
                <Link
                  key={product.path}
                  to={product.path}
                  className={`flex items-center gap-3 px-4 py-2.5 pl-8 text-sm rounded-lg transition-all duration-200 ${
                    isActive(product.path)
                      ? "bg-primary-foreground/20 text-primary-foreground font-medium border-l-4 border-primary-foreground"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {product.label}
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-primary-foreground/20 mt-2">
              <Link
                to="/contact"
                className={`flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  isActive("/contact")
                    ? "bg-primary-foreground/20 border-l-4 border-primary-foreground"
                    : "hover:bg-primary-foreground/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isActive("/contact")
                      ? "bg-primary-foreground"
                      : "bg-primary-foreground/60"
                  }`}
                ></span>
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
