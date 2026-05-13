import React from 'react';
import { TASHero } from '@/components/for-tas/TASHero';
import { TASEarningsGrid } from '@/components/for-tas/TASEarningGrid';
import { TASCalculator } from '@/components/for-tas/TASCalculator';
import { GrowthPathways } from '@/components/for-tas/GrowthPathways';
import { TASSteps } from '@/components/for-tas/TASSteps';
import { TASTestimonials } from '@/components/for-tas/TASTestimonials';

import { Metadata } from 'next';
import { ReferralTools } from '@/components/for-tas/ReferalTools';

export const metadata: Metadata = {
  title: "inSmartio TAS Program – Earn by Recruiting Experts",
  description: "Refer skilled professionals and earn ₦7,000 per expert plus ongoing commissions. Join the TAS program today.",
};

export default function ForTASPage() {
  return (
    <main className="min-h-screen bg-white">
      <TASHero />
      <TASEarningsGrid />
     <div id="calculator">
      <TASCalculator />
      </div>
      <div id="tiers">
      <GrowthPathways />
      </div>
      <div id="apply">
      <TASSteps />
      </div>
      <ReferralTools/>
      <TASTestimonials />
      
    </main>
  );
}