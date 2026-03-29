"use client";

import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Check } from 'lucide-react';

interface PricingTier {
  plan: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  category?: string; // Added to label the cards internally
}

const clientPlan: PricingTier = {
  plan: "Free Client",
  price: "₦0",
  category: "For Clients",
  features: ["Post jobs", "Receive bids", "Negotiate", "Hire", "Review"]
};

const expertPlans: PricingTier[] = [
  {
    plan: "Starter Expert",
    price: "₦0/month",
    category: "For Experts",
    features: ["Model 2: 10% commission", "Unlimited bids", "Digital payments only"]
  },
  {
    plan: "Pro Expert",
    price: "₦10,000/month",
    category: "For Experts",
    isPopular: true,
    features: ["Model 1: 0% commission", "10 bids/month", "Cash allowed", "Max ₦50,000/job"]
  }
];

const tasPlans: PricingTier[] = [
  { plan: "Associate TAS", price: "Free", features: ["Base commission rates", "0-9 experts"] },
  { plan: "Senior TAS", price: "Free", features: ["+5% bonus", "10-24 experts"] },
  { plan: "Master TAS", price: "Free", features: ["+10% bonus", "Recruit sub-TAS", "25-49 experts"] },
  { plan: "Regional Lead", price: "Free", features: ["+15% bonus", "Higher overrides", "50+ experts"] }
];

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            Choose Your Perfect Plan
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Flexible options for clients, experts, and businesses. Start with what you need and scale as you grow.
          </p>
        </div>

        {/* ══ CLIENT & EXPERT ROW (3 COLS) ══ */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {/* Client Card */}
            <div className="flex flex-col">
              <h3 className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-6 text-center lg:text-left">
                Free Always
              </h3>
              <PricingCard tier={clientPlan} />
            </div>

            {/* Expert Cards */}
            {expertPlans.map((tier, index) => (
              <div key={tier.plan} className="flex flex-col">
                <h3 className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-6 text-center lg:text-left">
                  {index === 0 ? "For Experts" : "\u00A0"} {/* Keeps alignment even if label is empty */}
                </h3>
                <PricingCard tier={tier} />
              </div>
            ))}
          </div>
        </div>

        {/* ══ TAS SECTION (4 COLS) ══ */}
        <div className="pt-16 border-t border-gray-100">
          <h3 className="text-xl font-bold mb-10 text-center text-primary">
            TAS Growth Tiers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tasPlans.map((tier) => (
              <PricingCard key={tier.plan} tier={tier} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const PricingCard: React.FC<{ tier: PricingTier }> = ({ tier }) => (
  <Card className={`p-8 flex flex-col h-full border-2 transition-all duration-500 hover:shadow-xl ${tier.isPopular ? 'border-secondary shadow-2xl relative bg-white' : 'border-gray-100 bg-white/50'}`}>
    {tier.isPopular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
        Recommended
      </span>
    )}
    
    <div className="mb-8">
      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{tier.plan}</h4>
      <div className="text-4xl font-bold text-primary">{tier.price}</div>
    </div>

    <ul className="space-y-4 mb-10 flex-1">
      {tier.features.map((feature) => (
        <li key={feature} className="flex gap-3 text-sm text-gray-500 items-start">
          <Check size={16} className="text-secondary shrink-0 mt-0.5" />
          <span className="leading-tight">{feature}</span>
        </li>
      ))}
    </ul>

    <Button 
      variant={tier.isPopular ? "primary" : "outline"} 
      className="w-full py-6 font-bold"
    >
      Get Started
    </Button>
  </Card>
);