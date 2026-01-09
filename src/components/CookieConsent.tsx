import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Settings, Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  initConsentMode, 
  updateConsent, 
  type ConsentState 
} from "@/lib/gtm";

const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(defaultConsent);

  useEffect(() => {
    // Initialize Consent Mode on first load
    initConsentMode();
    
    // Check if user already made a choice
    const savedConsent = localStorage.getItem("cookie-consent");
    if (savedConsent) {
      const parsedConsent = JSON.parse(savedConsent);
      setConsent(parsedConsent);
      updateConsent(parsedConsent);
    } else {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const fullConsent: ConsentState = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setConsent(fullConsent);
    localStorage.setItem("cookie-consent", JSON.stringify(fullConsent));
    updateConsent(fullConsent);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const minimalConsent: ConsentState = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setConsent(minimalConsent);
    localStorage.setItem("cookie-consent", JSON.stringify(minimalConsent));
    updateConsent(minimalConsent);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    updateConsent(consent);
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:p-6 pointer-events-none">
      <div className="bg-background border border-border shadow-xl w-full max-w-2xl pointer-events-auto">
        {/* Main Banner */}
        {!showSettings ? (
          <div className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <Cookie className="w-6 h-6 text-foreground flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div className="flex-1">
                <h3 className="text-lg font-normal text-foreground mb-2">
                  Táto stránka používa cookies
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Používame cookies na zlepšenie vášho zážitku, analýzu návštevnosti a personalizáciu obsahu. 
                  Niektoré cookies sú nevyhnutné pre fungovanie stránky, iné nám pomáhajú pochopiť, 
                  ako stránku používate, alebo slúžia na zobrazovanie relevantnej reklamy.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Viac informácií nájdete v našich{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline">
                    Zásadách ochrany osobných údajov
                  </Link>.
                </p>
              </div>
              <button
                onClick={handleRejectAll}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Zavrieť"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button
                onClick={handleRejectAll}
                variant="outline"
                className="flex-1 rounded-none border-border hover:bg-muted"
              >
                Odmietnuť všetko
              </Button>
              <Button
                onClick={() => setShowSettings(true)}
                variant="outline"
                className="flex-1 rounded-none border-border hover:bg-muted"
              >
                <Settings className="w-4 h-4 mr-2" />
                Nastavenia
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="flex-1 rounded-none bg-foreground text-background hover:bg-foreground/90"
              >
                Prijať všetko
              </Button>
            </div>
          </div>
        ) : (
          /* Settings Panel */
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-normal text-foreground">Nastavenia cookies</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Necessary */}
              <div className="p-4 bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">Nevyhnutné cookies</span>
                  <span className="text-sm text-muted-foreground">Vždy aktívne</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tieto cookies sú nevyhnutné pre základné fungovanie webovej stránky. 
                  Bez nich by stránka nefungovala správne.
                </p>
              </div>

              {/* Analytics */}
              <div className="p-4 bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">Analytické cookies</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent.analytics}
                      onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-muted-foreground/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-foreground"></div>
                  </label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pomáhajú nám pochopiť, ako návštevníci používajú stránku. 
                  Zhromažďujú anonymné štatistické údaje (Google Analytics).
                </p>
              </div>

              {/* Marketing */}
              <div className="p-4 bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">Marketingové cookies</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent.marketing}
                      onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-muted-foreground/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-foreground"></div>
                  </label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Používajú sa na sledovanie návštevníkov naprieč webovými stránkami 
                  za účelom zobrazovania relevantnej reklamy (Google Ads).
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                onClick={() => setShowSettings(false)}
                variant="outline"
                className="flex-1 rounded-none border-border"
              >
                Späť
              </Button>
              <Button
                onClick={handleSavePreferences}
                className="flex-1 rounded-none bg-foreground text-background hover:bg-foreground/90"
              >
                Uložiť nastavenia
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
