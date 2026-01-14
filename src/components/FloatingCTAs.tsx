import { useState, useEffect } from 'react';
import { Flame, X } from 'lucide-react';

const DISMISS_DURATION_DAYS = 7;

const isDismissExpired = (key: string): boolean => {
  const dismissedAt = localStorage.getItem(key);
  if (!dismissedAt) return true;
  
  const dismissDate = new Date(parseInt(dismissedAt));
  const now = new Date();
  const daysDiff = (now.getTime() - dismissDate.getTime()) / (1000 * 60 * 60 * 24);
  
  return daysDiff >= DISMISS_DURATION_DAYS;
};

const FloatingCTAs = () => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    if (isDismissExpired('cta-kotly-dismissed')) {
      localStorage.removeItem('cta-kotly-dismissed');
      setShowLeft(true);
    }
    if (isDismissExpired('cta-brikety-dismissed')) {
      localStorage.removeItem('cta-brikety-dismissed');
      setShowRight(true);
    }
  }, []);

  const dismissLeft = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.setItem('cta-kotly-dismissed', Date.now().toString());
    setShowLeft(false);
  };

  const dismissRight = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.setItem('cta-brikety-dismissed', Date.now().toString());
    setShowRight(false);
  };

  // Custom wood/log icon
  const WoodIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M2 12c0-3.5 2.5-6 6-6h8c3.5 0 6 2.5 6 6s-2.5 6-6 6H8c-3.5 0-6-2.5-6-6z" />
      <circle cx="8" cy="12" r="2" />
      <circle cx="16" cy="12" r="1.5" />
      <path d="M12 6v12" />
    </svg>
  );

  return (
    <>
      {/* Left CTA - Kotly na pelety */}
      {showLeft && (
        <a
          href="https://kotlynapelety.sk"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 left-4 z-50 flex items-center gap-3 bg-primary text-primary-foreground px-5 py-3 shadow-sm transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 group max-w-[calc(50vw-24px)] md:max-w-none border border-primary/20"
        >
          <Flame className="w-5 h-5 shrink-0 opacity-80" strokeWidth={1.5} />
          <span className="font-light text-sm tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">
            Kotly na pelety
          </span>
          <button
            onClick={dismissLeft}
            className="ml-1 p-1 hover:bg-white/10 transition-colors"
            aria-label="Zavrieť"
          >
            <X className="w-3.5 h-3.5 opacity-70" strokeWidth={1.5} />
          </button>
        </a>
      )}

      {/* Right CTA - Brikety RUF */}
      {showRight && (
        <a
          href="https://briketyruf.sk"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50 flex items-center gap-3 bg-foreground text-background px-5 py-3 shadow-sm transition-all duration-300 hover:bg-foreground/90 hover:-translate-y-0.5 group max-w-[calc(50vw-24px)] md:max-w-none"
        >
          <WoodIcon />
          <span className="font-light text-sm tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">
            Brikety RUF
          </span>
          <button
            onClick={dismissRight}
            className="ml-1 p-1 hover:bg-white/10 transition-colors"
            aria-label="Zavrieť"
          >
            <X className="w-3.5 h-3.5 opacity-70" strokeWidth={1.5} />
          </button>
        </a>
      )}

      {/* Mobile stacking styles */}
      <style>{`
        @media (max-width: 480px) {
          .fixed.bottom-4.left-4,
          .fixed.bottom-4.right-4 {
            left: 50%;
            right: auto;
            transform: translateX(-50%);
          }
          .fixed.bottom-4.left-4 {
            bottom: 4.5rem;
          }
          .fixed.bottom-4.right-4 {
            bottom: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingCTAs;
