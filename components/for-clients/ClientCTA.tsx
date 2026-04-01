import React from 'react';
import { AppStoreButtons } from '../ui/AppStoreButtons';

export const ClientCTA: React.FC = () => {
  return (
    <section className="py-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main CTA Banner - Brand Blue remains consistent */}
        <div className="bg-primary rounded-[3rem] px-6 py-12 md:p-24 text-center relative overflow-hidden shadow-ambient group">
          
          {/* Refined Background Rings for Texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none transition-transform duration-700 group-hover:scale-110">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border-40 border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-225 border-60 border-white rounded-full" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Header with font-display and black weight */}
            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] font-display">
              Ready to find your <br className="hidden md:block" /> perfect professional?
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl mb-12 font-medium max-w-2xl mx-auto">
              Download the HelpMe NG app today and get{" "}
              <span className="text-secondary font-black drop-shadow-sm">
                10% off
              </span>{" "}
              your first Escrow-protected booking.
            </p>
            
            <div className="flex justify-center transform transition-transform duration-500 hover:scale-105">
              <AppStoreButtons align='center' size='sm'/>
            </div>
          </div>

          {/* Additional Ambient Glow for Dark Mode */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/10 blur-[80px] rounded-full pointer-events-none" />
        </div>
        
      </div>
    </section>
  );
};