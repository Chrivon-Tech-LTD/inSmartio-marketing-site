// src/components/blog/BlogHero.tsx
import React from "react";

export function BlogHero() {
  return (
    <section className="relative pt-24 md:pt-32 lg:pt-40 pb-20 px-4 md:px-6 bg-white dark:bg-background transition-colors duration-300 border-b border-text-muted/10 overflow-hidden">
      
      {/* Strategic Ambient Glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Editorial Label */}
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="h-px w-8 bg-secondary" />
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.4em] block">
            Our Journal
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-text-main text-4xl md:text-6xl lg:text-7xl font-black mb-8 max-w-4xl leading-[1.1] font-display tracking-tight">
          Insights from the <br className="hidden sm:block" />
          <span className="text-primary italic font-light">HelpMe NG Team</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-text-muted text-base md:text-xl max-w-2xl leading-relaxed font-medium">
          Strategy, design, and engineering lessons from building Nigeria&apos;s 
          most trusted service marketplace. Explore our journey in engineering accountability.
        </p>

        {/* Decorative Grid Indicator */}
        <div className="mt-12 md:mt-16 flex items-center gap-6 opacity-30">
          <div className="flex gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-1 h-1 bg-text-muted rounded-full" />
            ))}
          </div>
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-text-muted">
            Est. 2026
          </span>
        </div>
      </div>
    </section>
  );
}