// src/components/blog/BlogHero.tsx
import React from "react";

export function BlogHero() {
  return (
    <section className="relative pt-24 md:pt-32 lg:pt-44 pb-20 px-6 bg-white dark:bg-background transition-colors duration-300 border-b border-text-muted/10 overflow-hidden">
      
      {/* Strategic Ambient Glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Main Content Container - Using flex-col items-center for perfect centering */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Editorial Label - Centered by adding justify-center */}
        <div className="flex items-center justify-center gap-3 mb-6 md:mb-10">
          <div className="h-px w-8 bg-secondary" />
          <span className="text-secondary text-[10px] md:text-xs font-black uppercase tracking-[0.4em] block">
            Our Journal
          </span>
          <div className="h-px w-8 bg-secondary" />
        </div>

        {/* Main Headline */}
        <h1 className="text-text-main text-4xl md:text-6xl lg:text-7xl font-black mb-8 max-w-5xl leading-[1.1] font-display tracking-tight px-2">
          Insights from the <br className="hidden sm:block" />
          <span className="text-primary italic font-light">HelpMe NG Team</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-text-muted text-base md:text-xl max-w-2xl leading-relaxed font-medium mx-auto px-4">
          Strategy, design, and engineering lessons from building Nigeria&apos;s 
          most trusted service marketplace. Explore our journey in engineering accountability.
        </p>

        {/* Decorative Grid Indicator - Centered */}
        <div className="mt-12 md:mt-16 flex flex-col items-center gap-4 opacity-40">
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-1.5 h-1.5 bg-text-muted/50 rounded-full" />
            ))}
          </div>
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-text-muted">
            Est. 2026
          </span>
        </div>
      </div>
    </section>
  );
}