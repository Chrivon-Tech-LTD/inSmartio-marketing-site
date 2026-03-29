import React from 'react';
import Image from 'next/image';
import { AppStoreButtons } from '../ui/AppStoreButtons';

const DEFAULT_IMAGE = "https://i.pinimg.com/1200x/71/99/57/71995749daeafee5e253d4e39b53c9e9.jpg";

export const ClientHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div className="z-10">
          <span className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-6 block">
            Nigeria&apos;s Service Marketplace
          </span>
          <h1 className="text-primary text-5xl md:text-7xl font-bold leading-tight mb-8">
            Find Trusted <br />
            Professionals in <br />
            <span className="text-secondary">Minutes.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
            No more searching endlessly. No more overpaying. Just reliable, verified experts at fair prices. Experience a curated marketplace where quality meets reliability.
          </p>
          
          <AppStoreButtons align='left'/>
        </div>

        {/* Right: Asymmetric Image Card */}
        <div className="relative h-125 lg:h-150 w-full">
          <div className="absolute right-0 top-0 w-[90%] h-[90%] rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-2">
            <Image 
              src={DEFAULT_IMAGE} 
              alt="Trusted Professional" 
              fill 
              className="object-cover -rotate-2 scale-110"
              unoptimized
            />
          </div>
          {/* Decorative floating element */}
          <div className="absolute bottom-4 left-4 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block animate-float">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">✓</div>
              <div>
                <p className="text-xs font-bold text-primary">Verification System</p>
                <p className="text-[10px] text-gray-400">NIN & BVN Background Checks</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};