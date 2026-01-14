import { useState, useEffect } from 'react';
import { Flame, X } from 'lucide-react';

const FloatingCTAs = () => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    const leftDismissed = localStorage.getItem('cta-kotly-dismissed');
    const rightDismissed = localStorage.getItem('cta-brikety-dismissed');
    
    if (!leftDismissed) setShowLeft(true);
    if (!rightDismissed) setShowRight(true);
  }, []);

  const dismissLeft = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.setItem('cta-kotly-dismissed', 'true');
    setShowLeft(false);
  };

  const dismissRight = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.setItem('cta-brikety-dismissed', 'true');
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
          className="fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 group max-w-[calc(50vw-24px)] md:max-w-none"
        >
          <Flame className="w-5 h-5 shrink-0 text-orange-200" strokeWidth={1.5} />
          <span className="font-medium text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
            Kotly na pelety
          </span>
          <button
            onClick={dismissLeft}
            className="ml-1 p-1 hover:bg-orange-800 rounded-full transition-colors"
            aria-label="Zavrieť"
          >
            <X className="w-4 h-4" strokeWidth={2} />
          </button>
        </a>
      )}

      {/* Right CTA - Brikety RUF */}
      {showRight && (
        <a
          href="https://briketyruf.sk"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-4 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 group max-w-[calc(50vw-24px)] md:max-w-none"
        >
          <WoodIcon />
          <span className="font-medium text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
            Brikety RUF
          </span>
          <button
            onClick={dismissRight}
            className="ml-1 p-1 hover:bg-amber-900 rounded-full transition-colors"
            aria-label="Zavrieť"
          >
            <X className="w-4 h-4" strokeWidth={2} />
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
