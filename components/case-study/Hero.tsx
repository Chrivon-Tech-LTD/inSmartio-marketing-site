// src/components/case-study/Hero.tsx
import React from "react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 lg:pt-40 pb-20 px-4 md:px-6 overflow-hidden bg-white dark:bg-background transition-colors duration-300">
      
      {/* Strategic Background Accents */}
      <div className="absolute top-0 right-0 w-75 md:w-150 h-75 md:h-150 bg-primary/5 blur-[80px] md:blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
        
        {/* TOP: Visual (On Mobile) / RIGHT (On Desktop) */}
        {/* We use 'order-1' to ensure image stays at top on mobile */}
        <div className="relative w-full order-1 lg:order-2 group px-2 md:px-0">
          <div className="relative z-10 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-ambient transition-all duration-700 hover:scale-[1.02] border border-text-muted/10 bg-surface">
            <Image 
              src="/case-study-hero.png" 
              alt="HelpMe NG Case Study"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Floating Trust Badge - Adjusted positioning for small screens */}
          <div className="absolute -bottom-4 left-4 md:-bottom-10 md:-left-10 glass-panel backdrop-blur-xl bg-surface/80 dark:bg-surface/40 p-4 md:p-8 rounded-2xl md:rounded-4xl shadow-ambient z-20 flex items-center gap-3 md:gap-5 border border-text-main/10 animate-float">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-success rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg">
              <svg width="20" height="20" className="md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>
            <div>
              <p className="font-black text-xs md:text-base text-text-main font-display tracking-tight leading-none">Partner Verified</p>
              <p className="text-[9px] md:text-[11px] font-black text-text-muted uppercase tracking-[0.2em] mt-1 opacity-70">
                Secure Platform
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM: Content (On Mobile) / LEFT (On Desktop) */}
        <div className="text-center lg:text-left order-2 lg:order-1 px-2 md:px-0">
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
            Product Case Study
          </span>
          
          <h1 className="text-text-main text-3xl md:text-5xl lg:text-7xl font-black leading-[1.2] lg:leading-[1.1] mb-6 font-display tracking-tight">
            Case Study: <br className="hidden sm:block" /> 
            <span className="text-primary italic">HelpMe NG</span>
          </h1>

          <p className="text-text-muted text-sm md:text-xl leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0 font-medium px-1 md:px-0">
            Nigeria&apos;s Trusted Service Marketplace. A strategic exploration into building 
            trust, efficiency, and professional accountability in a fragmented digital economy.
          </p>
          
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="h-px w-8 md:w-12 bg-primary/30 hidden sm:block" />
            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-text-muted opacity-60">
              Published April 2026 • 6 Min Read
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}