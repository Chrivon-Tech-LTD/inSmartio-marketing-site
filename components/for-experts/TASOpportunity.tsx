import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { Users, BadgePercent, ArrowRight } from 'lucide-react';

export const TASOpportunity: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-background transition-colors duration-300 overflow-hidden">
      
      {/* --- Background Image Column (Desktop Right / Mobile Top-ish) --- */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0">
        <Image 
          src="https://i.pinimg.com/1200x/41/df/1d/41df1d25cd9d6b931b40af70c6f863b3.jpg" 
          alt="Professional TAS Supervisor"
          fill
          className="object-cover object-center grayscale-30 lg:grayscale-0 brightness-50 lg:brightness-100"
          priority
        />
        {/* Advanced Gradient: Clears the text area for 100% readability */}
        <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-r from-background via-background/90 lg:via-background/40 to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="w-full lg:w-1/2">
          
          {/* Opportunity Badge - Preserving your original text */}
          <div className="mb-8">
            <span className="bg-secondary/20 text-secondary px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-sm border border-secondary/10">
              Exclusive Opportunity
            </span>
          </div>

          {/* Headline - Preserving your original text */}
          <h2 className="text-text-main text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] font-display tracking-tight">
            Master the Marketplace <br /> 
            <span className="text-primary italic">with TAS.</span>
          </h2>

          {/* Description - Preserving your original text */}
          <p className="text-text-muted text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-medium">
            Become a <span className="text-text-main font-black">Technical Account Supervisor (TAS)</span>. 
            Earn passive income by vetting new experts, managing service quality, and leading regional growth. 
            Help us maintain the gold standard.
          </p>

          {/* Stats Grid - Using Glassmorphism for a "Premium" feel */}
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 mb-16">
             <div className="group/stat flex items-center gap-5 p-4 rounded-2xl bg-surface/50 backdrop-blur-md border border-text-muted/10 transition-all hover:border-secondary/50">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-white shadow-lg shadow-secondary/20">
                  <BadgePercent size={24} />
                </div>
                <span className="text-text-main text-sm font-black uppercase tracking-wider leading-tight">
                  1% lifetime commission <br /> on recruits
                </span>
             </div>

             <div className="group/stat flex items-center gap-5 p-4 rounded-2xl bg-surface/50 backdrop-blur-md border border-text-muted/10 transition-all hover:border-secondary/50">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <Users size={24} />
                </div>
                <span className="text-text-main text-sm font-black uppercase tracking-wider leading-tight">
                  ₦7,000 instant <br /> verification bonus
                </span>
             </div>
          </div>
          
          {/* CTA Group - Preserving your original text */}
          <div className="flex flex-wrap gap-5">
            <Button variant="primary" size="lg" className="px-10 py-7 text-lg font-black uppercase tracking-widest shadow-2xl shadow-secondary/20 transition-all hover:scale-105 active:scale-95">
              Learn About TAS
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-7 border-text-muted/20 text-text-main font-bold hover:bg-surface transition-all group"
            >
              Compare Roles
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

        </div>
      </div>

      {/* Subtle bottom glow for atmosphere */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};