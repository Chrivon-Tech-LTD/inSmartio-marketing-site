"use client";

import React from 'react';
import { 
  ShieldCheck, 
  UserRound, 
  Users, 
  Hammer, 
  Briefcase, 
  CreditCard, 
  Gavel, 
  ShieldAlert, 
  Mail,
  Ban,
  CheckCircle2,
  FileText,
  Clock,
  MapPin,
  Phone,
  AlertTriangle,
  FileSignature,
  Lock,
  Globe} from "lucide-react";

/**
 * HelpMe NG Terms of Service - Full Content Component
 * Designed with the official theme for CHRIVON TECH SOLUTIONS LIMITED.
 */
const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-6 transition-colors duration-300">
      
      {/* ── HEADER & DOCUMENT CONTROL ────────────────────────────── */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <span className="text-primary font-bold tracking-widest text-[10px] md:text-xs uppercase bg-primary/10 px-4 py-1.5 rounded-full">
          Official Terms & Conditions v1.0
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold text-text-main tracking-tight font-display">
          Terms of Service
        </h1>
        <p className="mt-4 text-text-muted max-w-2xl mx-auto font-sans leading-relaxed">
          HelpMe NG (CHRIVON TECH SOLUTIONS LIMITED). <br />
          Effective Date: April 1, 2026 | Jurisdiction: Federal Republic of Nigeria
        </p>
        
        <div className="mt-8 inline-flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest font-bold text-text-muted bg-surface p-4 rounded-2xl border border-border">
          <div className="flex flex-col gap-1"><span>Last Updated</span><span className="text-primary">March 2026</span></div>
          <div className="w-px bg-border h-8 hidden md:block"></div>
          <div className="flex flex-col gap-1"><span>Version</span><span className="text-primary">1.0</span></div>
          <div className="w-px bg-border h-8 hidden md:block"></div>
          <div className="flex flex-col gap-1"><span>Jurisdiction</span><span className="text-primary">Nigeria</span></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* 1. INTRODUCTION & ACCEPTANCE */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <ShieldCheck className="text-primary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">1. Introduction</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            Welcome to HelpMe NG. These Terms govern your access to the mobile application, website, and related services. By registering, you acknowledge that you have read and agree to be bound by this legally binding agreement with CHRIVON TECH SOLUTIONS Limited.
          </p>
        </div>

        {/* 2. DEFINITIONS */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
            <FileSignature className="text-secondary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">2. Definitions</h3>
          <div className="space-y-2 text-xs text-text-muted font-sans overflow-y-auto max-h-40 pr-2">
            <p><strong className="text-text-main">Platform:</strong> The HelpMe NG app, website, and services.</p>
            <p><strong className="text-text-main">Expert:</strong> A verified service provider on the Platform.</p>
            <p><strong className="text-text-main">TAS:</strong> Talent Acquisition Specialist recruiting Experts.</p>
            <p><strong className="text-text-main">Payment Protected:</strong> Escrow method where funds are held until completion.</p>
            <p><strong className="text-text-main">Sub-TAS:</strong> Agent recruited by a Tier 3+ TAS.</p>
          </div>
        </div>

        {/* 3. ELIGIBILITY */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-success/10 rounded-2xl flex items-center justify-center mb-6">
            <UserRound className="text-success" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">3. Eligibility</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans mb-3">
            You must be at least 18 years old and possess legal capacity in Nigeria. You are prohibited from use if you have prior suspensions, reside in sanctioned regions, or have felony convictions involving fraud or violence.
          </p>
        </div>

        {/* 4. ACCOUNTS & SECURITY */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <Lock className="text-primary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">4. User Accounts</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            Users may switch between Client, Expert, and TAS modes. You are responsible for account security and confidentiality. Phone verification via OTP is mandatory for all registration.
          </p>
        </div>

        {/* 5. CLIENT TERMS */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-success/10 rounded-2xl flex items-center justify-center mb-6">
            <Users className="text-success" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">5. Client Terms</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans overflow-y-auto max-h-40 pr-2">
            Clients must provide accurate job info and clear photos. You agree to pay the agreed amount upon completion, provide site access, and treat Experts with dignity. Taking transactions off-platform is strictly prohibited.
          </p>
        </div>

        {/* 6. EXPERT VERIFICATION */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
            <Hammer className="text-secondary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">6. Expert Tiers</h3>
          <div className="space-y-3 font-sans text-[11px]">
            <div className="flex justify-between border-b border-border pb-1">
              <span className="text-text-muted uppercase">Tier 1: NIN Only</span>
              <span className="text-text-main">₦20,000 Max</span>
            </div>
            <div className="flex justify-between border-b border-border pb-1">
              <span className="text-text-muted uppercase">Tier 2: NIN + BVN</span>
              <span className="text-text-main">₦100,000 Max</span>
            </div>
            <div className="flex justify-between font-bold text-primary">
              <span className="uppercase">Tier 3: Full Clearance</span>
              <span>Unlimited Job Value</span>
            </div>
          </div>
        </div>

        {/* 7. TAS COMPENSATION */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-tas/10 rounded-2xl flex items-center justify-center mb-6">
            <Briefcase className="text-tas" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">7. TAS Program</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            Earn ₦7,000 per verified expert. Master TAS (Tier 3+) earn overrides (0.1%–0.2%) on Sub-TAS recruitment. Earnings include a 1% commission on Model 2 jobs and Monthly active Expert bonuses.
          </p>
        </div>

        {/* 8. PAYMENT & ESCROW */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-success/10 rounded-2xl flex items-center justify-center mb-6">
            <CreditCard className="text-success" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">8. Payment Terms</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            Escrow (Payment Protected) funds are held by HelpMe NG and released within 24 hours of approval. A 10% commission applies to Model 2. Cash payments carry zero platform protection.
          </p>
        </div>

        {/* 9. DISPUTE RESOLUTION */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
            <Gavel className="text-secondary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">13. Disputes</h3>
          <div className="space-y-1 font-sans text-xs text-text-muted">
            <p>1. Direct Resolution (48h)</p>
            <p>2. Escalate to Dispute Team (48h)</p>
            <p>3. Evidence Collection & Mediation</p>
            <p>4. Binding decision by HelpMe NG (72h)</p>
          </div>
        </div>

        {/* 10. PROHIBITED ACTIVITIES */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6">
            <Ban className="text-red-500" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">15. Prohibitions</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            Strictly prohibited: Fraud, harassment, discrimination, illegal activities, off-platform transactions, misrepresentation, spam, and unauthorized data scraping.
          </p>
        </div>

        {/* 11. LIABILITY & INDEMNITY */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <ShieldAlert className="text-primary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">17. Liability</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            HelpMe NG is not liable for work quality, theft, or injury. Maximum liability is capped at ₦50,000 or total fees paid in the preceding 3 months, whichever is lower.
          </p>
        </div>

        {/* 12. GOVERNING LAW */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-tas/10 rounded-2xl flex items-center justify-center mb-6">
            <Globe className="text-tas" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">22. Governance</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            Governed by Nigerian law. Unresolved disputes go to arbitration in Lagos under the Arbitration and Conciliation Act. Small claims under ₦500k may use Lagos small claims court.
          </p>
        </div>

        {/* 13. INTELLECTUAL PROPERTY */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <FileText className="text-primary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">16. IP Rights</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            HelpMe NG owns all brand assets, code, and design. Users retain ownership of uploaded content but grant the platform a license to use and display it.
          </p>
        </div>

        {/* 14. CLASS ACTION WAIVER */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
            <AlertTriangle className="text-secondary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">28. Legal Waiver</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            You agree that all dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
          </p>
        </div>

        {/* 15. CONTACT & NOTICES */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-success/10 rounded-2xl flex items-center justify-center mb-6">
            <Mail className="text-success" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">32. Notices</h3>
          <div className="space-y-2 text-[10px] text-text-muted font-sans">
            <p className="flex items-center gap-2"><MapPin size={12}/> Admiralty Way, Lekki Phase 1, Lagos</p>
            <p className="flex items-center gap-2"><Mail size={12}/> legal@helpme.ng</p>
            <p className="flex items-center gap-2"><Phone size={12}/> +234 800 HELPME</p>
            <p className="flex items-center gap-2 uppercase tracking-tighter"><Clock size={12}/> Mon-Sat, 9AM-6PM WAT</p>
          </div>
        </div>

      </div>

      {/* ── FOOTER SUMMARY & ACKNOWLEDGMENT ────────────────────────── */}
      <div className="max-w-4xl mx-auto mt-20 bg-surface border border-border p-8 md:p-12 rounded-[2.5rem] shadow-ambient">
        <h4 className="text-center text-xl font-bold text-text-main mb-8 font-display uppercase tracking-widest">Quick Reference Summary</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-sans">
          <div className="space-y-4">
            <div className="bg-background p-4 rounded-2xl">
              <p className="font-bold text-primary mb-1 uppercase text-xs">For Clients</p>
              <p className="text-text-muted text-xs leading-relaxed">Post jobs free, compare verified experts, pay via escrow, and access dispute resolution.</p>
            </div>
            <div className="bg-background p-4 rounded-2xl">
              <p className="font-bold text-secondary mb-1 uppercase text-xs">For Experts</p>
              <p className="text-text-muted text-xs leading-relaxed">Tiered verification (1-3), choose subscription or commission, 24h payout approval.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-background p-4 rounded-2xl">
              <p className="font-bold text-tas mb-1 uppercase text-xs">For TAS Agents</p>
              <p className="text-text-muted text-xs leading-relaxed">₦7k per verified expert, 1% job commission, recruitment overrides at Tier 3+.</p>
            </div>
            <div className="bg-background p-4 rounded-2xl">
              <p className="font-bold text-text-main mb-1 uppercase text-xs">Acknowledgment</p>
              <p className="text-text-muted text-[10px] leading-relaxed italic">By using HelpMe NG, you confirm you have read, understood, and accept all terms above.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center">
        <div className="inline-flex flex-wrap justify-center gap-4 mb-8">
          <span className="flex items-center gap-2 text-[10px] font-bold text-success uppercase"><CheckCircle2 size={12}/> NIN Secured</span>
          <span className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase"><CheckCircle2 size={12}/> Escrow Protected</span>
          <span className="flex items-center gap-2 text-[10px] font-bold text-tas uppercase"><CheckCircle2 size={12}/> Nigeria Governing Law</span>
        </div>
        <p className="text-[10px] text-text-muted font-sans leading-relaxed px-6">
          © 2026 CHRIVON TECH SOLUTIONS LIMITED. All rights reserved. <br />
          HelpMe NG: Trusted Services, Verified Professionals.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;