import React from 'react';
import { TASHero } from '@/components/for-tas/TASHero';
import { TASEarningsGrid } from '@/components/for-tas/TASEarningGrid';
import { TASCalculator } from '@/components/for-tas/TASCalculator';
import { GrowthPathways } from '@/components/for-tas/GrowthPathways';
import { MarketingTools } from '@/components/for-tas/MarketingTools';
import { TASSteps } from '@/components/for-tas/TASSteps';
import { TASTestimonials } from '@/components/for-tas/TASTestimonials';
import { TASFinalCTA } from '@/components/for-tas/TASFinalCTA';
import { Footer } from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "HelpMe NG TAS Program – Earn by Recruiting Experts",
  description: "Refer skilled professionals and earn ₦7,000 per expert plus ongoing commissions. Join the TAS program today.",
};

export default function ForTASPage() {
  return (
    <main className="min-h-screen bg-white">
      <TASHero />
      <TASEarningsGrid />
      <TASCalculator />
      <GrowthPathways />
      <MarketingTools />
      <TASSteps />
      <TASTestimonials />
      <TASFinalCTA />
      <Footer />
    </main>
  );
}