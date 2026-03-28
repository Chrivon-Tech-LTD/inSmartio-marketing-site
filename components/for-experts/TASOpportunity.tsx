import React from 'react';
import { Button } from '../ui/Button';
import { Users, BadgePercent } from 'lucide-react';

export const TASOpportunity: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-linear-to-br from-[#0A0A2E] to-[#2D0A5E] rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          {/* Decorative background image overlay as seen in design */}
          <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-30 mix-blend-overlay">
             <div className="relative w-full h-full bg-[url('https://i.pinimg.com/1200x/41/df/1d/41df1d25cd9d6b931b40af70c6f863b3.jpg')] bg-cover bg-center" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">
              Exclusive Opportunity
            </span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Master the Marketplace <br /> with TAS.
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Become a **Technical Account Supervisor (TAS)**. Earn passive income by vetting new experts, managing service quality, and leading regional growth. Help us maintain the gold standard.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
               <div className="flex items-center gap-3 text-white/80">
                  <BadgePercent className="text-secondary" size={20} />
                  <span className="text-sm">1% lifetime commission on recruits</span>
               </div>
               <div className="flex items-center gap-3 text-white/80">
                  <Users className="text-secondary" size={20} />
                  <span className="text-sm">₦7,000 instant verification bonus</span>
               </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" size="lg" className="px-10">
                Learn About TAS
              </Button>
              <Button variant="outline" size="lg" className="px-10 border-white/20 text-white hover:bg-white/10">
                Compare Roles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};