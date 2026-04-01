import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { ArrowRight, TrendingUp } from 'lucide-react';

const TAS_HERO = "https://i.pinimg.com/1200x/41/df/1d/41df1d25cd9d6b931b40af70c6f863b3.jpg";

export const TASHero: React.FC = () => {
  return (
    <section className="relative pt-24 md:pt-32 lg:pt-40 pb-20 bg-white transition-colors duration-300 dark:bg-background overflow-hidden">
      
      {/* Brand Background Accents */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT: Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 inline-block shadow-sm">
            TAS Partner Program
          </span>
          
          <h1 className="text-primary text-4xl md:text-7xl font-black leading-[1.1] mb-8 font-display">
            Earn Money by <br />
            Recruiting Experts. <br />
            <span className="text-secondary italic">Join the TAS Program.</span>
          </h1>

          <p className="text-text-muted text-base md:text-xl leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0 font-medium">
            Know skilled professionals? Refer them to HelpMe NG and earn <span className="text-text-main font-black">₦7,000 per expert</span>, plus ongoing commissions. Build a team and scale your earnings.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button variant="primary" size="lg" className="px-10 shadow-xl group">
              Apply for TAS Program
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* RIGHT: Visual with Income Proof */}
        <div className="relative order-1 lg:order-2">
          {/* Main Hero Image */}
          <div className="relative w-full aspect-4/5 rounded-[3rem] lg:rounded-[4.5rem] overflow-hidden shadow-ambient border border-text-muted/10">
            <Image 
              src={TAS_HERO} 
              alt="TAS Professional" 
              fill 
              className="object-cover transition-transform duration-1000 hover:scale-110"
              unoptimized
              priority
            />
          </div>
          
          {/* Social Proof Badge - Responsive Positioning */}
          <div className="absolute -bottom-6 left-4 md:-bottom-10 md:-left-10 bg-surface/95 backdrop-blur-xl p-6 md:p-8 rounded-4xl shadow-ambient border border-text-muted/10 max-w-50 md:max-w-60 animate-float z-20">
            <div className="flex items-center gap-2 mb-2">
               <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                 <TrendingUp size={14} className="text-success" />
               </div>
               <span className="text-[9px] font-black text-success uppercase tracking-widest">Payout Growth</span>
            </div>
            
            <p className="text-3xl md:text-4xl font-black text-text-main mb-2 font-display tracking-tighter">₦2.5M+</p>
            
            <p className="text-[10px] text-text-muted font-black uppercase tracking-widest leading-tight opacity-70">
              Paid to agents <br /> last month
            </p>
            
            {/* Subtle progress line */}
            <div className="mt-4 h-1 w-full bg-text-muted/10 rounded-full overflow-hidden">
               <div className="h-full w-3/4 bg-success rounded-full" />
            </div>
          </div>

          {/* Decorative Corner Element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl hidden lg:block" />
        </div>

      </div>
    </section>
  );
};