import React from 'react';
import type { Metadata } from "next";
import { HowItWorksHero } from '@/components/how-it-works/HowItWorksHero';
import { HowItWorksTabs } from '@/components/how-it-works/HowItWorksTabs';

export const metadata: Metadata = {
  title: "How HelpMe NG Works – Step by Step Guide",
  description: "Learn how to post a job, receive bids, hire experts, and pay securely. Simple 4-step process for clients, experts, and TAS.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation should be here */}
      
      <HowItWorksHero />
      
      <div className="pb-24">
        <HowItWorksTabs />
      </div>

      
      
      
    </main>
  );
}