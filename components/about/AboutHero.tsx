import React from "react";

export function AboutHero() {
  return (
    <section className="relative pt-24 md:pt-40 pb-20 px-6 bg-background transition-colors duration-300 overflow-hidden">
      
      {/* Strategic Background Accents for Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Editorial Label - Centered with symmetrical lines */}
        <div className="flex items-center justify-center gap-4 mb-8 md:mb-10">
          <div className="h-px w-8 md:w-12 bg-secondary/50" />
          <span className="text-secondary text-[10px] md:text-xs font-black uppercase tracking-[0.4em] block">
            The Chrivon Standard
          </span>
          <div className="h-px w-8 md:w-12 bg-secondary/50" />
        </div>
        
        {/* Main Headline - Using your 7xl scale for impact */}
        <h1 className="text-text-main mb-8 leading-[1.15] md:leading-[1.1] font-bold font-display text-4xl md:text-6xl lg:text-7xl tracking-tight max-w-4xl">
          Bridging the gap between <br className="hidden md:block" />
          <span className="text-primary font-black italic">Talent and Trust.</span>
        </h1>

        {/* Supporting Text - Preserving your original copy */}
        <p className="text-text-muted text-base md:text-xl max-w-2xl leading-relaxed font-medium mb-12">
          We are creating a marketplace where Nigerian professionalism meets 
          global standards through verification and integrity. 
          Ensuring that every connection is built on a foundation of accountability.
        </p>

        {/* Optional Stats or Decorative Indicator */}
        <div className="flex flex-col items-center gap-6 opacity-40">
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-1.5 h-1.5 bg-text-muted rounded-full" />
            ))}
          </div>
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-text-muted">
            Founded on Integrity
          </span>
        </div>

      </div>
    </section>
  );
}