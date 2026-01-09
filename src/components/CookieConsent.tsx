import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-foreground text-background border-t border-background/20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-background/80">
            Táto webová stránka používa cookies na zlepšenie vašich skúseností. 
            Pokračovaním v prehliadaní súhlasíte s ich používaním.{" "}
            <Link to="/cookie-policy" className="underline hover:text-background">
              Zistiť viac
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDecline}
            className="bg-transparent border-background/30 text-background hover:bg-background/10"
          >
            Odmietnuť
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="bg-background text-foreground hover:bg-background/90"
          >
            Súhlasím
          </Button>
          <button
            onClick={handleDecline}
            className="p-1 hover:bg-background/10 rounded-full transition-colors"
            aria-label="Zavrieť"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
