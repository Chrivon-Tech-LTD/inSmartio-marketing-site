import React from 'react';
import { ExpertHero } from '@/components/for-experts/ExpertHero';
import { ExpertBenefits } from '@/components/for-experts/ExpertBenefits';
import { VerificationFramework } from '@/components/for-experts/VerificationFramework';
import { ExpertPaymentModels } from '@/components/for-experts/ExpertPaymentModels';
import { EarningsCalculator } from '@/components/for-experts/EarningsCalculator';
import { TASOpportunity } from '@/components/for-experts/TASOpportunity';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "inSmartio for Experts – Grow Your Business",
  description: "Become a verified expert. Get more clients, get paid on time, and build your reputation. Join thousands of professionals.",
};

export default function ForExpertsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 5.1 Hero */}
      <ExpertHero />

      {/* 5.2 Benefits Grid */}
      <ExpertBenefits />

      {/* 5.3 Verification Table */}
      <div id="tiers">
        <VerificationFramework />
      </div>

      {/* 5.6 TAS Path Cross-sell */}
      <TASOpportunity />

      {/* 5.5 Calculator */}
      <div id="earnings">
        <EarningsCalculator />
      </div>

      {/* 5.4 Payment Models */}
      <div id="payment">
        <ExpertPaymentModels />
      </div>





    </main>
  );
}