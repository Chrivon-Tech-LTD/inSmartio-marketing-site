import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';

const EXPERT_HERO = "https://i.pinimg.com/1200x/41/df/1d/41df1d25cd9d6b931b40af70c6f863b3.jpg";

export const ExpertHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <span className="bg-blue-50 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">
            Key Security Awaits
          </span>
          <h1 className="text-primary text-5xl md:text-7xl font-bold leading-tight mb-8">
            Grow Your Business <br />
            with <span className="text-secondary">HelpMe NG.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
            Join Nigeria&apos;s most trusted ecosystem of skilled professionals. Get more clients, get paid on time, and build your reputation as a verified professional.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" className="px-10">
              Become an Expert
            </Button>
            
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <Image 
              src={EXPERT_HERO} 
              alt="Professional Expert" 
              fill 
              className="object-cover"
              unoptimized
            />
          </div>
          {/* Floating Verified Expert Card from Design */}
          <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white flex items-center gap-4 animate-float">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
            <div>
              <p className="text-xs font-bold text-primary">Verified Expert</p>
              <p className="text-[10px] text-gray-400">Top 5% of service providers in Lagos</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};