import React from 'react';
import { HowItWorksHero } from '@/components/how-it-works/HowItWorksHero';
import { HowItWorksTabs } from '@/components/how-it-works/HowItWorksTabs';
import { HowItWorksCTA } from '@/components/how-it-works/HowItWorkCTA';


export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation should be here */}
      
      <HowItWorksHero />
      
      <div className="pb-24">
        <HowItWorksTabs />
      </div>

      <HowItWorksCTA />
      
      
    </main>
  );
}