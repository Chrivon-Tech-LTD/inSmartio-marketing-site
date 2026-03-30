import React from 'react';
import { Button } from '../ui/Button';

export const TASFinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-white text-3xl md:text-6xl font-bold mb-8 leading-tight">
              Start Your Recruitment Empire Today.
            </h2>
            <p className="text-white/70 text-lg mb-12">
              Join 2,500+ agents across Nigeria helping the best talent find work. 
              Application takes less than 2 minutes.
            </p>
            <Button variant="secondary" size="lg" className="px-12 py-5 text-primary font-bold shadow-xl">
              Create TAS Account
            </Button>
          </div>
          
          {/* Subtle Background Texture */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
             <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -mr-20 -mt-20" />
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -ml-20 -mb-20" />
          </div>
        </div>
      </div>
    </section>
  );
};