import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Domov", path: "/" },
    { label: "Windows", path: "/windows" },
    { label: "Doors", path: "/doors" },
    { label: "Sliding systems", path: "/sliding-systems" },
    { label: "Aluminum", path: "/aluminum" },
    { label: "Facades", path: "/facades" },
    { label: "Garage systems", path: "/garage-systems" },
    { label: "Additional elements", path: "/additional-elements" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            company
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                {item.label}
              </Link>
            ))}
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
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 text-sm font-medium hover:bg-primary-hover rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
