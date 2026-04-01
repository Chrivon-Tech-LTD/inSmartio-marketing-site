import React from 'react';
import { Button } from '../ui/Button';
import { Users, BadgePercent, ArrowRight } from 'lucide-react';

export const TASOpportunity: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Banner Container */}
        <div className="bg-linear-to-br from-[#0A0A2E] to-[#1A4B8C] rounded-[3rem] p-6 md:p-10 md:p-20 relative overflow-hidden shadow-ambient group">
          
          {/* Background Image Overlay with enhanced blending */}
          <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-20 lg:opacity-40 mix-blend-luminosity pointer-events-none">
             <div className="relative w-full h-full bg-[url('https://i.pinimg.com/1200x/41/df/1d/41df1d25cd9d6b931b40af70c6f863b3.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
          </div>

          {/* Radial Gradient for text readability */}
          <div className="absolute inset-0 bg-radial-at-l from-[#0A0A2E] via-[#0A0A2E]/80 to-transparent lg:w-3/4" />

          <div className="relative z-10 max-w-2xl">
            {/* Opportunity Badge */}
            <span className="bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 inline-block shadow-sm">
              Exclusive Opportunity
            </span>

            <h2 className="text-white text-4xl md:text-6xl font-black mb-8 leading-[1.1] font-display">
              Master the Marketplace <br /> 
              <span className="text-secondary italic">with TAS.</span>
            </h2>

            <p className="text-white/80 text-lg md:text-xl mb-12 leading-relaxed font-medium">
              Become a <span className="text-white font-black">Technical Account Supervisor (TAS)</span>. 
              Earn passive income by vetting new experts, managing service quality, and leading regional growth. 
              Help us maintain the gold standard.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-14">
               <div className="flex items-center gap-4 text-white/90 group/stat">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-secondary transition-transform group-hover/stat:scale-110">
                    <BadgePercent size={22} />
                  </div>
                  <span className="text-sm font-black uppercase tracking-wider leading-tight">
                    1% lifetime commission <br /> on recruits
                  </span>
               </div>
               <div className="flex items-center gap-4 text-white/90 group/stat">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-secondary transition-transform group-hover/stat:scale-110">
                    <Users size={22} />
                  </div>
                  <span className="text-sm font-black uppercase tracking-wider leading-tight">
                    ₦7,000 instant <br /> verification bonus
                  </span>
               </div>
            </div>
            
            {/* CTA Group */}
            <div className="flex flex-wrap gap-6">
              <Button variant="secondary" size="lg" className="px-10 shadow-xl">
                Learn About TAS
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-10 border-white/20 text-white hover:bg-white/10 hover:border-white transition-all group"
              >
                Compare Roles
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Bottom Accent Glow */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/10 blur-[100px] rounded-full" />
        </div>
      </div>
    </section>
  );
};