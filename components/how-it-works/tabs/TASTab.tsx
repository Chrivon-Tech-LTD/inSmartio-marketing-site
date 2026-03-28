import React from 'react';
import { UserPlus, UserCheck, Share2, LineChart, Users } from 'lucide-react';

const tasSteps = [
  {
    id: 1,
    title: "Apply for TAS Program",
    desc: "Whether you're an existing expert or new to HelpMe NG, you can apply to become a Talent Acquisition Specialist.",
    icon: <UserPlus className="text-secondary" />
  },
  {
    id: 2,
    title: "Get Approved",
    desc: "Our team reviews your application. Once approved, you get your unique TAS ID and dashboard access.",
    icon: <UserCheck className="text-secondary" />
  },
  {
    id: 3,
    title: "Share Your Referral Link",
    desc: "Share your unique referral link via WhatsApp, SMS, or social media. Hand out physical referral cards to local pros.",
    icon: <Share2 className="text-secondary" />
  }
];

export const TASTab: React.FC = () => {
  return (
    <div className="space-y-24">
      
      {/* Onboarding Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {tasSteps.map((step) => (
          <div key={step.id} className="relative">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-xl">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">{step.id}. {step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Earnings Logic (Step 4 & 5) */}
      <div className="bg-[#F8F9FB] rounded-[3rem] p-8 md:p-16 border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label mb-4 block">Passive Income Stream</span>
            <h3 className="text-3xl font-bold text-primary mb-6">Earn Ongoing Commissions</h3>
            <p className="text-gray-600 mb-10">
              When experts register using your link and get verified, you earn **₦7,000 instantly**. But it doesn&apos;t stop there—you earn as they work.
            </p>
            
            <div className="space-y-4">
              {[
                { label: "Model 2 Experts", value: "1% of every job they complete" },
                { label: "Model 1 Experts", value: "₦1,000 per month they stay subscribed" },
                { label: "Performance Bonus", value: "Tier bonuses up to 15% on ALL earnings" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-gray-50">
                  <span className="text-sm font-bold text-primary">{item.label}</span>
                  <span className="text-sm text-secondary font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 3+ Build Your Team (Step 6) */}
          <div className="bg-primary text-white p-10 rounded-4xl shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
               <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                 <Users className="text-secondary" />
               </div>
               <h4 className="text-2xl font-bold mb-4">Step 6: Build Your Team (Tier 3+)</h4>
               <p className="text-white/70 text-sm leading-relaxed mb-8">
                 Recruit other TAS agents as your sub-TAS. Earn overrides on their recruitment and their experts&apos; performance. Scale your agency within HelpMe NG.
               </p>
               <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                 <LineChart className="text-secondary" />
                 <span className="text-xs font-medium">Overrides: +2% to +5% on sub-TAS activity</span>
               </div>
             </div>
             <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full -mr-16 -mt-16 blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};