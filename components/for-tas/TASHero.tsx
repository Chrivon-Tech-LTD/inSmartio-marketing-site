import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';

const TAS_HERO = "https://i.pinimg.com/1200x/41/df/1d/41df1d25cd9d6b931b40af70c6f863b3.jpg";

export const TASHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div>
          <span className="bg-blue-50 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">
            Partner Program
          </span>
          <h1 className="text-primary text-5xl md:text-7xl font-bold leading-tight mb-8">
            Earn Money by <br />
            Recruiting Experts. <br />
            <span className="text-secondary">Join the TAS Program.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
            Become a Talent Acquisition Specialist and build a high-income stream by connecting Nigeria&apos;s top professionals with the HelpMe ecosystem.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" className="px-10">
              Apply as TAS Agent
            </Button>
            <Button variant="ghost" size="lg" className="text-gray-400">
              View Commission Structure
            </Button>
          </div>
        </div>

        {/* Right: Visual with Income Proof */}
        <div className="relative">
          <div className="relative w-full aspect-4/5 rounded-[3.5rem] overflow-hidden shadow-2xl">
            <Image 
              src={TAS_HERO} 
              alt="TAS Professional" 
              fill 
              className="object-cover"
              unoptimized
            />
          </div>
          
          {/* Social Proof Badge from Design */}
          <div className="absolute bottom-10 -left-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white max-w-50 animate-float">
            <p className="text-3xl font-bold text-primary mb-1">₦2.5M+</p>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter leading-tight">
              Paid to agents last month
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};