import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const products = [
    { label: "Okná", path: "/windows" },
    { label: "Dvere", path: "/doors" },
    { label: "Posuvné systémy", path: "/sliding-systems" },
    { label: "Hliník", path: "/aluminum" },
    { label: "Fasády", path: "/facades" },
    { label: "Garážové brány a žalúzie", path: "/garage-systems" },
    { label: "Doplnkové prvky", path: "/additional-elements" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            company
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              Domov
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-primary-foreground hover:bg-primary-hover font-medium"
                >
                  Produkty
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-56 bg-background border-border shadow-lg z-50"
              >
                {products.map((product) => (
                  <DropdownMenuItem key={product.path} asChild>
                    <Link
                      to={product.path}
                      className="w-full cursor-pointer hover:bg-accent"
                    >
                      {product.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/contact"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary-hover"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link
              to="/"
              className="block px-4 py-2 text-sm font-medium hover:bg-primary-hover rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Domov
            </Link>
            <div className="px-4 py-2 text-sm font-semibold text-primary-foreground/80">
              Produkty
            </div>
            {products.map((product) => (
              <Link
                key={product.path}
                to={product.path}
                className="block px-4 py-2 pl-8 text-sm font-medium hover:bg-primary-hover rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {product.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-4 py-2 text-sm font-medium hover:bg-primary-hover rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
