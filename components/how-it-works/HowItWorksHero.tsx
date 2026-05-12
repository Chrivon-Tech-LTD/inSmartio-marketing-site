import React from 'react';

export const HowItWorksHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 bg-background transition-colors duration-300 overflow-hidden">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Breadcrumb / Label - Matches "The Chrivon Standard" style */}
        <span className="text-secondary text-[10px] md:text-xs font-medium uppercase tracking-[0.3em] mb-6 block drop-shadow-sm">
          How It Works
        </span>

        {/* Main Headline */}
        <h1 className="text-text-main text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-8 font-display">
          How inSmartio Works <br />
          <span className="text-primary">— Simple, Safe, and Fair.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-text-muted text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto font-sans font-medium">
          Whether you need a service or offer one, we make it simple, safe, and fair. 
          We&apos;ve designed a seamless path for you to get things done, grow your business, 
          or earn through recruitment.
        </p>

        {/* Optional: Add a subtle downward arrow or scroll indicator here if desired */}
      </div>
    </section>
  );
};