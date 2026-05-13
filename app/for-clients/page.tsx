import React from 'react';
import { ClientHero } from '@/components/for-clients/ClientHero';
import { WhyChooseHelpMe } from '@/components/for-clients/WhyChooseHelpMe';
import { PaymentComparison } from '@/components/for-clients/PaymentComparison';
import { VerificationTiers } from '@/components/for-clients/VerificationTiers';
import { ClientFAQ } from '@/components/for-clients/ClientFAQ';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "inSmartio for Clients – Find Trusted Professionals",
  description: "Need a reliable professional? Post a job, receive bids, and hire with confidence. Payment protection included. Free to use",
};


export default function ForClientsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section (4.1) */}
      <ClientHero />

      {/* Benefits Grid (4.2) */}
      <WhyChooseHelpMe />

      {/* Payment Comparison (4.3) */}
      <div id="payment">
      <PaymentComparison />
      </div>

      {/* Verification Tiers (4.4) */}
      <VerificationTiers />

      {/* FAQ Section (4.5) */}
      <div id="faq">
      <ClientFAQ />
      </div>
      

     

      
    </main>
  );
}