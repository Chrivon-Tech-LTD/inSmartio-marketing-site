"use client";

import React from 'react';
import { 
  Download, 
  UserCheck, 
  FileEdit, 
  ShieldCheck, 
  Clock, 
  Coins,
  ArrowRight,
  UserRoundCheck,
  Briefcase,
  LucideIcon
} from 'lucide-react';
import { Button } from '../ui/Button';

// 1. Define the interface for our steps
interface Step {
  title: string;
  icon: LucideIcon; // Expecting the component itself, not <Icon />
  desc: string;
}

const steps: Step[] = [
  { 
    title: "Download the App", 
    icon: Download, 
    desc: "Get the HelpMe NG app on your iOS or Android device to begin your journey." 
  },
  { 
    title: "Select TAS Role", 
    icon: UserCheck, 
    desc: "Choose 'TAS' during registration or apply via 'Expert Mode' in your profile settings." 
  },
  { 
    title: "Application Form", 
    icon: FileEdit, 
    desc: "Complete the detailed application form with your professional recruitment background." 
  },
  { 
    title: "Submit Documents", 
    icon: ShieldCheck, 
    desc: "Upload your mandatory NIN and a valid ID for our trust-based verification process." 
  },
  { 
    title: "Wait for Approval", 
    icon: Clock, 
    desc: "Our verification team will review your application and documents within 24–48 hours." 
  },
  { 
    title: "Start Recruiting", 
    icon: Coins, 
    desc: "Once approved, access your dashboard tools and start earning recruitment commissions." 
  }
];

export const TASSteps: React.FC = () => {
  return (
    <section className="py-24 bg-background px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION 6.5: TWO PATHS (THE ENTRY POINTS) --- */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="section-label block mb-2 font-bold text-secondary uppercase tracking-[0.2em] text-[10px]">6.5 Onboarding Paths</span>
            <h2 className="text-text-main font-display text-4xl font-bold">How to Become a TAS</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Path 1: Existing Expert */}
            <div className="editorial-card group border-t-4! border-t-primary! hover:shadow-ambient transition-all p-10 bg-surface">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                  <UserRoundCheck size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-text-main">Existing Expert</h3>
              </div>
              <p className="text-text-muted leading-relaxed mb-8 text-sm">
                Already providing services? Apply in-app. Your expert history helps your application. 
                We leverage your existing trust score to fast-track your agent status.
              </p>
              <Button variant="ghost" className="px-0! group-hover:text-primary transition-colors font-bold text-xs uppercase tracking-widest">
                Apply in-app <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Path 2: Dedicated TAS */}
            <div className="editorial-card group border-t-4! border-t-secondary! hover:shadow-ambient transition-all p-10 bg-surface">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/10 rounded-2xl text-secondary">
                  <Briefcase size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-text-main">Dedicated TAS</h3>
              </div>
              <p className="text-text-muted leading-relaxed mb-8 text-sm">
                Register as TAS directly. Focus solely on recruitment and network building. 
                Ideal for business developers looking to manage a fleet of high-quality professionals.
              </p>
              <Button variant="ghost" className="px-0! group-hover:text-secondary transition-colors font-bold text-xs uppercase tracking-widest">
                Register Directly <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* --- SECTION 6.5: STEPS (THE JOURNEY) --- */}
        <div className="bg-surface rounded-[3.5rem] p-10 md:p-16 border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="mb-16 relative z-10">
             <h3 className="font-display text-2xl font-bold text-text-main mb-2">The Enrollment Process</h3>
             <p className="text-text-muted text-[10px] uppercase tracking-[0.25em] font-bold">Standard 6-Step Verification</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 relative z-10">
            {steps.map((step, i) => {
              // Assign the component to a variable for rendering
              const Icon = step.icon;
              
              return (
                <div key={i} className="flex gap-6 group items-start">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 bg-background border border-slate-100 rounded-2xl flex items-center justify-center text-primary relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon size={24} />
                    </div>
                    {/* Visual Step Number Backdrop */}
                    <span className="absolute -top-6 -left-3 text-6xl font-display font-black text-slate-50 z-0 select-none group-hover:text-primary/5 transition-colors">
                      {i + 1}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h4 className="text-text-main font-bold mb-2 font-display text-lg">{step.title}</h4>
                    <p className="text-xs text-text-muted leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Subtle Decorative Background Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};