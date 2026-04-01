"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, ShieldCheck, BadgeCheck, Lock, User } from "lucide-react";

const verificationTiers = [
  {
    tier: "Tier 1 – Basic",
    meaning: "NIN verified.",
    limit: "Jobs up to ₦20,000",
    badges: 1,
    theme: "border-blue-500/20 bg-blue-500/5 text-blue-500",
  },
  {
    tier: "Tier 2 – Verified",
    meaning: "NIN + BVN verified.",
    limit: "Jobs up to ₦100,000",
    badges: 2,
    theme: "border-purple-500/20 bg-purple-500/5 text-purple-500",
  },
  {
    tier: "Tier 3 – Expert+",
    meaning: "Background check + Guarantor + Police clearance.",
    limit: "Unlimited jobs",
    badges: 3,
    theme: "border-success/20 bg-success/5 text-success",
  },
];

export const VerificationTiers: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="py-28 bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* LEFT: Content Section */}
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="text-secondary" size={20} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted">
              Security Architecture
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-text-main mb-8 leading-[1.1] tracking-tight font-display">
            Built on a <br />
            <span className="text-primary italic">Multi-Tier</span> Trust System
          </h2>

          <p className="text-text-muted mb-12 max-w-lg leading-relaxed font-medium">
            Every professional goes through a structured verification process.
            The more verified they are, the higher the trust — and the bigger
            the jobs they can handle.
          </p>

          <div className="space-y-4">
            {verificationTiers.map((tier, i) => (
              <div
                key={i}
                className={`p-6 rounded-[2.5rem] border transition-all duration-500 flex items-center justify-between group hover:bg-surface hover:shadow-ambient hover:border-transparent ${tier.theme}`}
              >
                <div>
                  <h4 className="font-black text-text-main group-hover:text-primary transition-colors font-display">
                    {tier.tier}
                  </h4>
                  <p className="text-xs opacity-70 mt-1 font-bold">
                    {tier.meaning}
                  </p>
                  <div className="flex items-center gap-2 mt-4 opacity-60">
                    <div className="h-1 w-8 bg-current rounded-full" />
                    <p className="text-[10px] font-black uppercase tracking-widest">
                      {tier.limit}
                    </p>
                  </div>
                </div>

                <div className="flex -space-x-3">
                  {[...Array(tier.badges)].map((_, b) => (
                    <div
                      key={b}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border-2 border-current shadow-sm text-primary transition-transform group-hover:scale-110"
                    >
                      <BadgeCheck className="w-5 h-5" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: High-Fidelity Glassmorphism Verification Card */}
        <div className="lg:col-span-6 relative flex justify-center">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />

          <div className="relative w-full max-w-md">
            {/* Glass Container */}
            <div className="relative z-10 backdrop-blur-2xl bg-surface/40 dark:bg-surface/20 border border-text-main/10 rounded-[3rem] p-8 md:p-10 shadow-ambient overflow-hidden transition-all duration-500">
              
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
                  <ShieldCheck size={32} />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-text-muted uppercase tracking-widest">System Status</p>
                  <div className="text-sm font-black text-success flex items-center gap-1.5 justify-end">
                    {mounted && <div className="w-2 h-2 bg-success rounded-full animate-pulse" />}
                    Verified Expert
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-surface border-2 border-text-muted/10 flex items-center justify-center text-text-muted shadow-sm overflow-hidden">
                    <User size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-text-main tracking-tight font-display">Enitan F.</h4>
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mt-1">Lagos, NG</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-text-muted/10 space-y-4">
                   <VerificationLine label="NIN Verification" />
                   <VerificationLine label="BVN Confirmation" />
                   <VerificationLine label="Police Clearance" />
                </div>

                {/* Constant Brand Card Inside Glass */}
                <div className="mt-10 bg-primary text-white p-6 rounded-4xl shadow-xl flex items-center justify-between group">
                   <div>
                      <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Current Limit</p>
                      <p className="text-2xl font-black font-display">Unlimited Jobs</p>
                   </div>
                   <Lock className="opacity-20 transition-transform group-hover:scale-110" size={28} />
                </div>
              </div>

              {/* Decorative Shield Watermark */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.05] pointer-events-none text-text-main">
                 <ShieldCheck size={220} />
              </div>
            </div>

            {/* Floating Banner */}
            <div className="absolute -top-6 -right-2 md:-right-6 bg-secondary text-primary px-6 py-3 rounded-2xl shadow-ambient font-black text-xs tracking-widest rotate-12 flex items-center gap-2 border-2 border-surface select-none z-20">
              <BadgeCheck size={18} />
              VERIFIED Expert+
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const VerificationLine = ({ label }: { label: string }) => (
  <div className="flex justify-between items-center bg-surface/50 p-3.5 rounded-xl border border-text-muted/5">
    <span className="text-[10px] font-black text-text-main uppercase tracking-tight">{label}</span>
    <CheckCircle2 className="text-success" size={16} />
  </div>
);