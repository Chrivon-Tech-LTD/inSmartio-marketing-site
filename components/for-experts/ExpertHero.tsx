import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';

const EXPERT_HERO = "https://i.pinimg.com/736x/d6/ac/6d/d6ac6d5bd234d8676a7fb99d1d02eb42.jpg";

export const ExpertHero: React.FC = () => {
  return (
    <section className="relative pt-24 md:pt-32 lg:pt-40 pb-20 bg-white transition-colors duration-300 dark:bg-background overflow-hidden">
      
      {/* Decorative Brand Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT: Content Section */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 inline-block shadow-sm">
            Opportunities Await
          </span>
          
          <h1 className="text-primary text-4xl md:text-7xl font-black leading-[1.1] mb-8 font-display">
            Grow Your Business <br />
            with <span className="text-secondary italic">HelpMe NG.</span>
          </h1>

          <p className="text-text-muted text-base md:text-xl leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0 font-medium">
            Join Nigeria&apos;s most trusted ecosystem of skilled professionals. Get more clients, get paid on time, and build your reputation as a verified professional.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button variant="primary" size="lg" className="px-10 shadow-xl group">
              Become an Expert
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </div>
        </div>

        {/* RIGHT: Image & Floating Badge */}
        <div className="relative order-1 lg:order-2">
          <div className="relative w-full aspect-square rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-ambient border border-text-muted/10">
            <Image 
              src={EXPERT_HERO} 
              alt="Professional Expert" 
              fill 
              className="object-cover transition-transform duration-700 hover:scale-105" 
              unoptimized
              priority
            />
          </div>

          {/* Floating Verified Expert Card */}
          <div className="absolute -bottom-4 -left-2 md:-bottom-8 md:-left-8 bg-surface/90 backdrop-blur-md p-5 rounded-2xl shadow-ambient border border-text-muted/10 flex items-center gap-4 animate-float z-20">
            <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center text-white font-black shadow-lg">
              ✓
            </div>
            <div>
              <p className="text-xs md:text-sm font-black text-text-main font-display">Verified Expert</p>
              <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Top 5% providers in Lagos</p>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl hidden md:block" />
        </div>

      </div>
    </section>
  );
};