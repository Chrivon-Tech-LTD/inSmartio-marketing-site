"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, ShieldCheck, BadgeCheck, Lock, User } from "lucide-react";

const verificationTiers = [
  {
    tier: "Tier 1 – Basic",
    meaning: "NIN verified.",
    limit: "Jobs up to ₦20,000",
    badges: 1,
    color: "border-blue-100 bg-blue-50/50 text-blue-600",
  },
  {
    tier: "Tier 2 – Verified",
    meaning: "NIN + BVN verified.",
    limit: "Jobs up to ₦100,000",
    badges: 2,
    color: "border-purple-100 bg-purple-50/50 text-purple-600",
  },
  {
    tier: "Tier 3 – Expert+",
    meaning: "Background check + Guarantor + Police clearance.",
    limit: "Unlimited jobs",
    badges: 3,
    color: "border-green-100 bg-green-50/50 text-green-600",
  },
];

export const VerificationTiers: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Pushing to an animation frame satisfies the 'no synchronous setState in effect' rule
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* LEFT: Content Section */}
        <div className="lg:col-span-6">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="text-secondary" size={20} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
              Security Architecture
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight tracking-tight">
            Built on a <br />
            <span className="text-secondary italic">Multi-Tier</span> Trust System
          </h2>

          <p className="text-gray-500 mb-12 max-w-lg leading-relaxed">
            Every professional goes through a structured verification process.
            The more verified they are, the higher the trust — and the bigger
            the jobs they can handle.
          </p>

          <div className="space-y-4">
            {verificationTiers.map((tier, i) => (
              <div
                key={i}
                className={`p-6 rounded-[2.5rem] border transition-all duration-500 flex items-center justify-between group hover:bg-white hover:shadow-xl hover:border-transparent ${tier.color}`}
              >
                <div>
                  <h4 className="font-bold text-primary group-hover:text-secondary transition-colors">
                    {tier.tier}
                  </h4>
                  <p className="text-xs opacity-70 mt-1 font-medium">
                    {tier.meaning}
                  </p>
                  <div className="flex items-center gap-2 mt-3 opacity-60">
                    <div className="h-1 w-8 bg-current rounded-full" />
                    <p className="text-[10px] font-bold uppercase tracking-widest">
                      {tier.limit}
                    </p>
                  </div>
                </div>

                <div className="flex -space-x-2">
                  {[...Array(tier.badges)].map((_, b) => (
                    <div
                      key={b}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-current shadow-sm text-primary"
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />

          <div className="relative w-full max-w-md">
            <div className="relative z-10 backdrop-blur-xl bg-white/40 border border-white/60 rounded-[3rem] p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden">
              
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
                  <ShieldCheck size={32} />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-primary/40 uppercase tracking-widest">Status</p>
                  <div className="text-sm font-bold text-green-600 flex items-center gap-1.5 justify-end">
                    {mounted && <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />}
                    Verified Expert
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-gray-300 shadow-sm">
                    <User size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary tracking-tight">Enitan F.</h4>
                    <p className="text-xs font-bold text-primary/50 uppercase tracking-widest mt-1">Lagos, NG</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-primary/5 space-y-4">
                   <div className="flex justify-between items-center bg-white/30 p-3 rounded-xl border border-white/50">
                      <span className="text-xs font-bold text-primary/60 uppercase tracking-tight">NIN Verification</span>
                      <CheckCircle2 className="text-green-500" size={16} />
                   </div>
                   <div className="flex justify-between items-center bg-white/30 p-3 rounded-xl border border-white/50">
                      <span className="text-xs font-bold text-primary/60 uppercase tracking-tight">BVN Confirmation</span>
                      <CheckCircle2 className="text-green-500" size={16} />
                   </div>
                   <div className="flex justify-between items-center bg-white/30 p-3 rounded-xl border border-white/50">
                      <span className="text-xs font-bold text-primary/60 uppercase tracking-tight">Police Clearance</span>
                      <CheckCircle2 className="text-green-500" size={16} />
                   </div>
                </div>

                <div className="mt-10 bg-primary text-white p-6 rounded-2xl shadow-xl flex items-center justify-between">
                   <div>
                      <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Current Limit</p>
                      <p className="text-2xl font-bold">Unlimited Jobs</p>
                   </div>
                   <Lock className="opacity-20" size={28} />
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none">
                 <ShieldCheck size={200} />
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-secondary text-primary px-6 py-3 rounded-2xl shadow-2xl font-black text-xs tracking-widest rotate-12 flex items-center gap-2 border-2 border-white select-none">
              <BadgeCheck size={18} />
              VERIFIED Expert+
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};