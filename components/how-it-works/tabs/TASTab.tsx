import React from 'react';
import { UserPlus, UserCheck, Share2, LineChart, Users } from 'lucide-react';

const tasSteps = [
  {
    id: 1,
    title: "Apply for TAS Program",
    desc: "Whether you're an existing expert or new to HelpMe NG, you can apply to become a Talent Acquisition Specialist.",
    icon: <UserPlus className="text-secondary w-7 h-7" />
  },
  {
    id: 2,
    title: "Get Approved",
    desc: "Our team reviews your application. Once approved, you get your unique TAS ID and dashboard access.",
    icon: <UserCheck className="text-secondary w-7 h-7" />
  },
  {
    id: 3,
    title: "Share Your Referral Link",
    desc: "Share your unique referral link via WhatsApp, SMS, or social media. Hand out physical referral cards to local pros.",
    icon: <Share2 className="text-secondary w-7 h-7" />
  }
];

export const TASTab: React.FC = () => {
  return (
    <div className="space-y-24 transition-colors duration-300">
      
      {/* Onboarding Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {tasSteps.map((step) => (
          <div key={step.id} className="relative group">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-8 shadow-lg transition-transform group-hover:-rotate-6">
              {step.icon}
            </div>
            <h3 className="text-2xl font-black text-text-main mb-4 font-display">
              <span className="text-primary mr-2">{step.id}.</span>
              {step.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed font-medium">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Earnings Logic Panel */}
      <div className="bg-surface rounded-[3rem] px-8 py-12 md:p-16 border border-text-muted/10 shadow-ambient">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
              Passive Income Stream
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-primary mb-6 font-display">
              Earn Ongoing Commissions
            </h3>
            <p className="text-text-muted mb-10 font-medium leading-relaxed">
              When experts register using your link and get verified, you earn <span className="text-text-main font-bold">₦7,000 instantly</span>. But it doesn&apos;t stop there—you earn as they work.
            </p>
            
            <div className="space-y-4">
              {[
                { label: "Model 2 Experts", value: "1% of every job they complete" },
                { label: "Model 1 Experts", value: "₦1,000 per month they stay subscribed" },
                { label: "Performance Bonus", value: "Tier bonuses up to 15% on ALL earnings" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row md:justify-between md:items-center p-5 bg-background rounded-2xl shadow-sm border border-text-muted/5 transition-all hover:border-primary/20">
                  <span className="text-sm font-black text-text-main mb-2 md:mb-0">{item.label}</span>
                  <span className="text-sm text-secondary font-black">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 3+ Build Your Team (Step 6) */}
          <div className="bg-primary text-white px-4 py-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
             <div className="relative z-10">
               <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
                 <Users className="text-secondary w-7 h-7" />
               </div>
               <h4 className="text-2xl md:text-3xl text-white font-black mb-6 font-display">Step 6: Build Your Team <br /> (Tier 3+)</h4>
               <p className="text-white/80 text-sm leading-relaxed mb-10 font-medium">
                 Recruit other TAS agents as your sub-TAS. Earn overrides on their recruitment and their experts&apos; performance. Scale your agency within HelpMe NG.
               </p>
               <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                 <LineChart className="text-secondary shrink-0" />
                 <span className="text-xs font-black uppercase tracking-widest leading-none">
                    Overrides: +2% to +5% on sub-TAS activity
                 </span>
               </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 w-48 h-48 bg-secondary opacity-20 rounded-full -mr-24 -mt-24 blur-3xl" />
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -ml-16 -mb-16 blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};