import React from 'react';
import { AppStoreButtons } from '../ui/AppStoreButtons';
import { FaApple, FaGooglePlay } from "react-icons/fa6";

export const ClientCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle Background Rings for Texture */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[40px] border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border-[60px] border-white rounded-full" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to find your perfect professional?
            </h2>
            <p className="text-white/70 text-lg mb-12">
              Download the HelpMe NG app today and get <span className="text-secondary font-bold">10% off</span> your first Escrow-protected booking.
            </p>
            
            <AppStoreButtons align='center'/>
          </div>
        </div>
      </div>
    </section>
  );
};