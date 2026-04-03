// src/components/case-study/Hero.tsx
import React from "react";

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-40 lg:pt-52 pb-20 px-6 overflow-hidden bg-white dark:bg-background transition-colors duration-300">
      
      {/* Strategic Background Accents - Centered for focus */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Label with Symmetrical Accents */}
        <div className="flex items-center justify-center gap-4 mb-8 md:mb-10">
          <div className="h-px w-8 md:w-12 bg-secondary/40" />
          <span className="text-secondary text-[10px] md:text-xs font-black uppercase tracking-[0.4em] block">
            Product Case Study
          </span>
          <div className="h-px w-8 md:w-12 bg-secondary/40" />
        </div>
        
        {/* Main Headline - Bold Montserrat Impact */}
        <h1 className="text-text-main text-4xl md:text-6xl lg:text-8xl font-black leading-[1.1] md:leading-[1.05] mb-8 font-display tracking-tight px-2">
          Case Study: <br /> 
          <span className="text-primary italic font-bold">HelpMe NG</span>
        </h1>

        {/* Supporting Text - Refined for centered balance */}
        <p className="text-text-muted text-base md:text-xl lg:text-2xl leading-relaxed max-w-3xl mb-12 font-medium px-4">
          Nigeria&apos;s Trusted Service Marketplace. A strategic exploration into building 
          trust, efficiency, and professional accountability in a fragmented digital economy.
        </p>
        
        {/* Meta Metadata - Clean & Balanced */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 pt-8 border-t border-text-muted/10 w-full max-w-2xl">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-success shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
             <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-text-main">
               Partner Verified
             </p>
          </div>
          <div className="hidden md:block w-px h-4 bg-text-muted/20" />
          <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-text-muted opacity-70">
            Published April 2026 • 6 Min Read
          </p>
          <div className="hidden md:block w-px h-4 bg-text-muted/20" />
          <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-text-muted opacity-70">
            Strategy & Engineering
          </p>
        </div>

        {/* Floating Decorative Elements (Small circles to add "Design" without "Pictures") */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl hidden lg:block" />
        <div className="absolute top-1/2 -right-20 w-48 h-48 bg-secondary/5 rounded-full blur-3xl hidden lg:block" />
      </div>
    </section>
  );
}