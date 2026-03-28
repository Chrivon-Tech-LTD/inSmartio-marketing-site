import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Check } from 'lucide-react';

interface PricingTier {
  plan: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const clientPlan: PricingTier = {
  plan: "Free Client",
  price: "₦0",
  features: ["Post jobs", "Receive bids", "Negotiate", "Hire", "Review"]
};

const expertPlans: PricingTier[] = [
  {
    plan: "Starter Expert",
    price: "₦0/month",
    features: ["Model 2: 10% commission", "Unlimited bids", "Digital payments only"]
  },
  {
    plan: "Pro Expert",
    price: "₦10,000/month",
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Choose Your Perfect Plan</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Flexible options for clients, experts, and businesses. Start with what you need and scale as you grow.
          </p>
        </div>

        {/* Clients Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-center text-secondary uppercase tracking-widest">For Clients (Free Always)</h3>
          <div className="max-w-md mx-auto">
            <PricingCard tier={clientPlan} />
          </div>
        </div>

        {/* Experts Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-center text-secondary uppercase tracking-widest">For Experts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {expertPlans.map((tier) => <PricingCard key={tier.plan} tier={tier} />)}
          </div>
        </div>

        {/* TAS Section */}
        <div>
          <h3 className="text-xl font-bold mb-8 text-center text-secondary uppercase tracking-widest">For TAS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tasPlans.map((tier) => <PricingCard key={tier.plan} tier={tier} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingCard: React.FC<{ tier: PricingTier }> = ({ tier }) => (
  <Card className={`p-8 flex flex-col h-full border-2 transition-all duration-300 ${tier.isPopular ? 'border-secondary shadow-2xl relative' : 'border-gray-100'}`}>
    {tier.isPopular && (
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-[10px] font-bold">
        RECOMMENDED
      </span>
    )}
    <h4 className="text-lg font-bold text-primary mb-2">{tier.plan}</h4>
    <div className="text-3xl font-bold mb-6">{tier.price}</div>
    <ul className="space-y-4 mb-8 flex-1">
      {tier.features.map((feature) => (
        <li key={feature} className="flex gap-3 text-sm text-text-muted">
          <Check size={16} className="text-secondary shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button variant={tier.isPopular ? "primary" : "outline"} className="w-full">
      Get Started
    </Button>
  </Card>
);