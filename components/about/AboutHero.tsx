import React from "react";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 px-6 bg-background transition-colors duration-300 overflow-hidden">
      
      {/* Subtle Background Glow for Dark Mode Depth */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* TEXT CONTENT */}
        <div className="relative z-10 order-2 lg:order-1 text-center lg:text-left">
          <span className="text-secondary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block drop-shadow-sm">
            The Chrivon Standard
          </span>
          
          <h1 className="text-text-main mb-6 leading-[1.1] font-display text-4xl md:text-6xl lg:text-7xl">
            
            <span className="text-primary font-medium block mt-2">
              Trusted Services. Verified Professionals.
            </span>
          </h1>

          <p className="text-text-muted text-base md:text-lg max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0 font-sans">
            We are bridging the gap between talent and trust, creating a marketplace 
            where Nigerian professionalism meets global standards through verification and integrity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             {/* Add a CTA here if needed, like "See our impact" */}
          </div>
        </div>

        {/* IMAGE COMPOSITION */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end py-10">
          
          {/* Main Hero Image */}
          <div className="relative z-10 rounded-4xl overflow-hidden shadow-ambient w-full max-w-112.5 aspect-4/5 border border-text-muted/10">
            <Image 
              src="/about-hero-main.jpg" 
              alt="Professional using HelpMe NG" 
              fill 
              className="object-cover"
              priority
            />
          </div>

          {/* Overlapping small image */}
          <div className="absolute -bottom-4 -left-4 md:-bottom-10 md:-left-12 z-20 w-3/4 md:w-1/2 aspect-video rounded-2xl overflow-hidden border-[6px] md:border-10 border-surface shadow-ambient transition-transform duration-500 hover:scale-105">
            <Image 
              src="/about-hero-sub.jpg" 
              alt="Team working" 
              fill 
              className="object-cover"
            />
          </div>

          {/* Decorative Shape (Hidden on Mobile) */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl hidden md:block" />
        </div>

      </div>
    </section>
  );
}