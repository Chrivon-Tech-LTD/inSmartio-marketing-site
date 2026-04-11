"use client";

import React, { useState } from 'react';
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
  LucideIcon,
  Check
} from 'lucide-react';
import { Button } from '../ui/Button';

interface Step {
  title: string;
  icon: LucideIcon;
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
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-background px-6">
      <div className="max-w-7xl mx-auto">

        {/* ── ONBOARDING PATHS ── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="block mb-3 font-bold text-secondary uppercase tracking-[0.2em] text-[10px]">
              Onboarding Paths
            </span>
            <h2 className="text-text-main font-display text-4xl font-bold">
              How to Become a TAS
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group hover:shadow-ambient transition-all p-6 md:p-10 bg-surface rounded-3xl border border-border">
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

            <div className="group hover:shadow-ambient transition-all p-6 md:p-10 bg-surface rounded-3xl border border-border">
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

        {/* ── STEPPER ── */}
        <div className="bg-surface rounded-[3rem] px-6 py-10 md:p-16 shadow-sm relative overflow-hidden">

          {/* Header */}
          <div className="mb-12 relative z-10">
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-secondary mb-2">
              Standard 6-Step Verification
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-text-main">
              The Enrollment Process
            </h3>
          </div>

          {/* ── Desktop: horizontal stepper ── */}
          <div className="hidden md:block relative z-10">

            {/* Progress track */}
            <div className="relative flex items-start justify-between mb-10">
              {/* Background line */}
              <div className="absolute top-7 left-0 right-0 h-0.5 bg-border z-0" />
              {/* Active fill line */}
              <div
                className="absolute top-7 left-0 h-0.5 bg-primary z-0 transition-all duration-500"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />

              {steps.map((step, i) => {
                const Icon = step.icon;
                const done = i < activeStep;
                const active = i === activeStep;

                return (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className="relative z-10 flex flex-col items-center gap-3 group/step cursor-pointer"
                    style={{ width: `${100 / steps.length}%` }}
                  >
                    {/* Circle */}
                    <div
                      className={`
                        w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-sm
                        ${done
                          ? 'bg-primary border-primary text-white'
                          : active
                            ? 'bg-primary border-primary text-white scale-110 shadow-lg shadow-primary/25'
                            : 'bg-background border-border text-text-muted group-hover/step:border-primary/40'
                        }
                      `}
                    >
                      {done ? <Check size={20} /> : <Icon size={20} />}
                    </div>

                    {/* Step label */}
                    <span
                      className={`text-xs font-bold text-center leading-tight transition-colors px-1
                        ${active ? 'text-primary' : done ? 'text-text-main' : 'text-text-muted'}
                      `}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active step detail panel */}
            <div className="mt-4 p-8 rounded-2xl bg-background border border-border flex items-start gap-6 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20">
                {React.createElement(steps[activeStep].icon, { size: 24 })}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-black uppercase tracking-widest text-secondary">
                    Step {activeStep + 1} of {steps.length}
                  </span>
                </div>
                <h4 className="font-display text-xl font-bold text-text-main mb-2">
                  {steps[activeStep].title}
                </h4>
                <p className="text-text-muted text-sm leading-relaxed max-w-xl">
                  {steps[activeStep].desc}
                </p>
              </div>
              <div className="ml-auto flex gap-3 shrink-0">
                <button
                  onClick={() => setActiveStep(s => Math.max(0, s - 1))}
                  disabled={activeStep === 0}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-muted hover:border-primary hover:text-primary disabled:opacity-30 transition-all"
                >
                  <ArrowRight size={16} className="rotate-180" />
                </button>
                <button
                  onClick={() => setActiveStep(s => Math.min(steps.length - 1, s + 1))}
                  disabled={activeStep === steps.length - 1}
                  className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white hover:brightness-110 disabled:opacity-30 transition-all"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* ── Mobile: vertical stepper ── */}
          <div className="md:hidden relative z-10 flex flex-col gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const done = i < activeStep;
              const active = i === activeStep;
              const last = i === steps.length - 1;

              return (
                <div key={i} className="flex gap-5" onClick={() => setActiveStep(i)}>
                  {/* Track column */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center border-2 shrink-0 transition-all duration-300
                        ${done
                          ? 'bg-primary border-primary text-white'
                          : active
                            ? 'bg-primary border-primary text-white shadow-lg shadow-primary/25'
                            : 'bg-background border-border text-text-muted'
                        }
                      `}
                    >
                      {done ? <Check size={16} /> : <Icon size={16} />}
                    </div>
                    {!last && (
                      <div className={`w-0.5 flex-1 my-1 min-h-8 transition-colors ${done ? 'bg-primary' : 'bg-border'}`} />
                    )}
                  </div>

                  {/* Content column */}
                  <div className={`pb-8 flex-1 ${last ? 'pb-0' : ''}`}>
                    <h4
                      className={`font-display font-bold text-base mb-1 transition-colors
                        ${active ? 'text-primary' : 'text-text-main'}
                      `}
                    >
                      {step.title}
                    </h4>
                    <p
                      className={`text-sm leading-relaxed transition-all duration-300
                        ${active ? 'text-text-muted max-h-40 opacity-100' : 'text-transparent max-h-0 overflow-hidden opacity-0 select-none'}
                      `}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Decorative blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
        </div>

      </div>
    </section>
  );
};