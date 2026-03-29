import React from 'react';
import { Button } from '../ui/Button';

export const HowItWorksCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          {/* Background Decorative Rings */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 border border-white rounded-full" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Ready to Experience HelpMe NG?
            </h2>
            <p className="text-white/70 text-lg mb-12">
              Join the fastest-growing professional marketplace in Nigeria. Safe payments, verified talent, and endless opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="secondary" size="lg" className="px-10">
                Get Started Now
              </Button>
              <Button variant="outline" size="lg" className="px-10 border-white/20 text-white hover:bg-white/10">
                Speak to an Agent
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};