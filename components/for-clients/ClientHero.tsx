import React from 'react';
import Image from 'next/image';
import { AppStoreButtons } from '../ui/AppStoreButtons';

const DEFAULT_IMAGE = "https://i.pinimg.com/1200x/71/99/57/71995749daeafee5e253d4e39b53c9e9.jpg";

export const ClientHero: React.FC = () => {
  return (
    <section className="relative pt-24 md:pt-32 lg:pt-40 pb-20 bg-background transition-colors duration-300 overflow-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <span className="text-secondary text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-6 block">
            Nigeria&apos;s Service Marketplace
          </span>
          
          <h1 className="text-text-main text-4xl md:text-7xl font-black leading-[1.1] mb-8 font-display">
            Find Trusted <br />
            <span className="hidden lg:inline">Professionals in</span> <br className="hidden lg:block" />
            <span className="text-primary lg:text-text-main">Professionals </span> 
            in <span className="text-secondary">Minutes.</span>
          </h1>
          
          <p className="text-text-muted text-base md:text-xl leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0 font-medium">
            No more searching endlessly. No more overpaying. Just reliable, verified experts at fair prices. Experience a curated marketplace where quality meets reliability.
          </p>
          
          <div className="flex justify-center lg:justify-start">
            <AppStoreButtons align='left' />
          </div>
        </div>

        {/* Right: Asymmetric Image Card */}
        <div className="relative h-100 md:h-125 lg:h-150 w-full order-1 lg:order-2">
          {/* Main Image Frame */}
          <div className="absolute right-0 top-0 w-[95%] lg:w-[90%] h-[95%] lg:h-[90%] rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-ambient transform rotate-2 border border-text-muted/10">
            <Image 
              src={DEFAULT_IMAGE} 
              alt="Trusted Professional" 
              fill 
              className="object-cover -rotate-2 scale-110"
              unoptimized
              priority
            />
          </div>
          
          {/* Floating Verification Badge */}
          <div className="absolute -bottom-2 lg:bottom-4 left-0 lg:left-4 bg-surface p-5 lg:p-6 rounded-2xl shadow-ambient border border-text-muted/10 animate-float z-20">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-success/10 rounded-full flex items-center justify-center text-success font-black text-lg">
                ✓
              </div>
              <div>
                <p className="text-xs lg:text-sm font-black text-text-main font-display">Verification System</p>
                <p className="text-[9px] lg:text-[10px] text-text-muted font-bold uppercase tracking-wider">NIN & BVN Background Checks</p>
              </div>
            </div>
          </div>

          {/* Decorative Corner Element */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl hidden lg:block" />
        </div>

      </div>
    </section>
  );
};