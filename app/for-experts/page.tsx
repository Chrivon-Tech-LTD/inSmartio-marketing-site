import React from 'react';
import { ExpertHero } from '@/components/for-experts/ExpertHero';
import { ExpertBenefits } from '@/components/for-experts/ExpertBenefits';
import { VerificationFramework } from '@/components/for-experts/VerificationFramework';
import { ExpertPaymentModels } from '@/components/for-experts/ExpertPaymentModels';
import { EarningsCalculator } from '@/components/for-experts/EarningsCalculator';
import { TASOpportunity } from '@/components/for-experts/TASOpportunity';


export default function ForExpertsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 5.1 Hero */}
      <ExpertHero />

      {/* 5.2 Benefits Grid */}
      <ExpertBenefits />

      {/* 5.3 Verification Table */}
      <VerificationFramework />

      {/* 5.4 Payment Models */}
      <ExpertPaymentModels />

      {/* 5.5 Calculator */}
      <EarningsCalculator />

      {/* 5.6 TAS Path Cross-sell */}
      <TASOpportunity />

      
    </main>
  );
}