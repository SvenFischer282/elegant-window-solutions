import { useState, useEffect } from 'react';
import { Flame, ChevronLeft, ChevronRight } from 'lucide-react';

const FloatingCTAs = () => {
  const [leftExpanded, setLeftExpanded] = useState(true);
  const [rightExpanded, setRightExpanded] = useState(true);
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateLeft(true), 100);
    setTimeout(() => setAnimateRight(true), 200);
  }, []);

  const toggleLeft = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLeftExpanded(!leftExpanded);
  };

  const toggleRight = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setRightExpanded(!rightExpanded);
  };

  // Custom wood/log icon
  const WoodIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
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
      <div
        className={`fixed bottom-4 z-50 transition-all duration-300 ${
          animateLeft ? 'opacity-100' : 'opacity-0 translate-y-8'
        }`}
        style={{
          left: leftExpanded ? '8px' : '0',
          transform: animateLeft 
            ? `translateX(${leftExpanded ? '0' : '-100%'})` 
            : 'translateY(32px)'
        }}
      >
        <div className="flex items-stretch">
      <a
            href="https://kotlynapelety.sk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 bg-primary text-primary-foreground pl-3 sm:pl-5 pr-2 sm:pr-4 py-2 sm:py-3 shadow-sm transition-all duration-300 hover:bg-primary/90"
          >
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 opacity-80" strokeWidth={1.5} />
            <span className="font-light text-xs sm:text-sm tracking-wide whitespace-nowrap">
              Kotly na pelety
            </span>
          </a>
          <button
            onClick={toggleLeft}
            className="bg-primary/90 text-primary-foreground px-1.5 shadow-sm transition-all duration-300 hover:bg-primary/80 flex items-center"
            aria-label={leftExpanded ? "Skryť" : "Zobraziť"}
          >
            <ChevronLeft className="w-4 h-4 opacity-60" strokeWidth={1.5} />
          </button>
        </div>
        {/* Collapsed state toggle */}
        {!leftExpanded && (
          <button
            onClick={toggleLeft}
            className="absolute right-0 top-0 translate-x-full bg-primary text-primary-foreground p-3 shadow-sm transition-all duration-300 hover:bg-primary/90"
            aria-label="Zobraziť"
          >
            <ChevronRight className="w-5 h-5 opacity-80" strokeWidth={1.5} />
          </button>
        )}
      </div>

      {/* Right CTA - Brikety RUF */}
      <div
        className={`fixed bottom-4 z-50 transition-all duration-300 ${
          animateRight ? 'opacity-100' : 'opacity-0 translate-y-8'
        }`}
        style={{
          right: rightExpanded ? '8px' : '0',
          transform: animateRight 
            ? `translateX(${rightExpanded ? '0' : '100%'})` 
            : 'translateY(32px)'
        }}
      >
        <div className="flex items-stretch">
          <button
            onClick={toggleRight}
            className="bg-foreground/90 text-background px-1.5 shadow-sm transition-all duration-300 hover:bg-foreground/80 flex items-center"
            aria-label={rightExpanded ? "Skryť" : "Zobraziť"}
          >
            <ChevronRight className="w-4 h-4 opacity-60" strokeWidth={1.5} />
          </button>
          <a
            href="https://briketyruf.sk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 bg-foreground text-background pl-2 sm:pl-4 pr-3 sm:pr-5 py-2 sm:py-3 shadow-sm transition-all duration-300 hover:bg-foreground/90"
          >
            <WoodIcon />
            <span className="font-light text-xs sm:text-sm tracking-wide whitespace-nowrap">
              Brikety RUF
            </span>
          </a>
        </div>
        {/* Collapsed state toggle */}
        {!rightExpanded && (
          <button
            onClick={toggleRight}
            className="absolute left-0 top-0 -translate-x-full bg-foreground text-background p-3 shadow-sm transition-all duration-300 hover:bg-foreground/90"
            aria-label="Zobraziť"
          >
            <ChevronLeft className="w-5 h-5 opacity-80" strokeWidth={1.5} />
          </button>
        )}
      </div>
    </>
  );
};

export default FloatingCTAs;
