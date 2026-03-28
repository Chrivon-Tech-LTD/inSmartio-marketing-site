import React from 'react';
import { Wallet, Briefcase, TrendingUp } from 'lucide-react';
import { Card } from '../../ui/Card';

const tiers = [
  {
    level: "Tier 1",
    requirements: "NIN only",
    limit: "Jobs up to ₦20,000",
    color: "bg-blue-50 text-blue-600"
  },
  {
    level: "Tier 2",
    requirements: "NIN + BVN",
    limit: "Jobs up to ₦100,000",
    color: "bg-purple-50 text-purple-600"
  },
  {
    level: "Tier 3",
    requirements: "Expert+",
    limit: "Unlimited job value",
    color: "bg-green-50 text-green-600 font-bold"
  }
];

export const ExpertTab: React.FC = () => {
  return (
    <div className="space-y-20">
      
      {/* Step 1: Verification Tiers */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
          <h3 className="text-2xl font-bold text-primary">Register & Verify</h3>
        </div>
        <p className="text-gray-500 mb-8 max-w-2xl">
          Sign up and choose your verification tier to unlock higher-value opportunities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <Card key={tier.level} className="p-6 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold ${tier.color}`}>
                {tier.level}
              </span>
              <h4 className="mt-4 font-bold text-lg text-primary">{tier.requirements}</h4>
              <p className="text-sm text-gray-500 mt-2">{tier.limit}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Step 2: Payment Models */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
            <h3 className="text-2xl font-bold text-primary">Choose Your Payment Model</h3>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border-2 border-secondary bg-secondary/5">
              <p className="font-bold text-primary mb-2">Model 1 (Subscription)</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                ₦10,000/month, 0% commission on jobs. Cash payments allowed. Best for full-time professionals.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-100 bg-white">
              <p className="font-bold text-primary mb-2">Model 2 (Commission)</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                ₦0/month, 10% commission on jobs. Digital payments only. Start earning with zero upfront costs.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Callout for Remaining Steps */}
        <div className="bg-primary rounded-4xl p-10 text-white relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <div className="flex gap-6">
              <Briefcase className="shrink-0 text-secondary" />
              <div>
                <p className="font-bold">3. Find Jobs</p>
                <p className="text-sm text-white/70">Browse jobs matching your skills and location. Place bids with your price and timeline.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <Wallet className="shrink-0 text-secondary" />
              <div>
                <p className="font-bold">4. Get Hired & Paid</p>
                <p className="text-sm text-white/70">Client hires you. Complete the work. Get paid within 24 hours of client approval.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <TrendingUp className="shrink-0 text-secondary" />
              <div>
                <p className="font-bold">5. Build Your Reputation</p>
                <p className="text-sm text-white/70">Good ratings = more jobs. Build your profile and become a trusted expert.</p>
              </div>
            </div>
          </div>
          {/* Decorative Background Element */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>
      </div>

    </div>
  );
};