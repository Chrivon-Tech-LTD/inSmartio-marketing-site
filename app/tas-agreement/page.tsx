"use client";

import React from 'react';
import { 
  ShieldCheck, 
  UserRound, 
  CreditCard, 
  Gavel, 
  Scale,
  CheckCircle2,
  TrendingUp,
  Users,
  Ban,
  Clock,
  Handshake,
  AlertOctagon,
  Zap
} from "lucide-react";

/**
 * HelpMe NG Talent Acquisition Specialist (TAS) Agreement
 * Full Legal Content Component v1.0
 */
const TASAgreement = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-6 transition-colors duration-300">
      
      {/* ── HEADER ────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <span className="text-primary font-bold tracking-widest text-[10px] md:text-xs uppercase bg-primary/10 px-4 py-1.5 rounded-full">
          Independent Contractor Agreement v1.0
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold text-text-main tracking-tight font-display">
          TAS Agreement
        </h1>
        <p className="mt-4 text-text-muted max-w-2xl mx-auto font-sans leading-relaxed">
          CHRIVON TECH SOLUTIONS LIMITED (&quot;Company&ldquo;) & TAS Agent (&quot;Contractor&#34;). <br />
          Effective Date: April 1, 2026 | Document Control v1.0
        </p>

        <div className="mt-8 inline-flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest font-bold text-text-muted bg-surface p-4 rounded-2xl border border-border">
          <div className="flex flex-col gap-1"><span>Jurisdiction</span><span className="text-primary">Federal Republic of Nigeria</span></div>
          <div className="w-px bg-border h-8 hidden md:block"></div>
          <div className="flex flex-col gap-1"><span>Status</span><span className="text-primary">Independent Contractor</span></div>
          <div className="w-px bg-border h-8 hidden md:block"></div>
          <div className="flex flex-col gap-1"><span>Compliance</span><span className="text-primary">Legal & Audit Ready</span></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* 1. INTRODUCTION & RELATIONSHIP */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300 group">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <Handshake className="text-primary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">1. Relationship</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            This agreement establishes an independent contractor relationship. You are NOT an employee, partner, or agent. You are free to set your own schedule and methods while remaining responsible for your own taxes and expenses.
          </p>
        </div>

        {/* 2. ELIGIBILITY */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300 group">
          <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
            <UserRound className="text-secondary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">3. Eligibility</h3>
          <div className="space-y-2 text-xs text-text-muted font-sans">
            <p>• Must be at least 18 years old with valid Nigerian ID.</p>
            <p>• Must provide NIN and a valid Nigerian bank account.</p>
            <p>• No convictions for fraud or violent crimes.</p>
            <p>• Background verification and application review within 72 hours.</p>
          </div>
        </div>

        {/* 3. COMPENSATION STRUCTURE */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300 group">
          <div className="w-12 h-12 bg-success/10 rounded-2xl flex items-center justify-center mb-6">
            <CreditCard className="text-success" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">5. Compensation</h3>
          <div className="space-y-3 font-sans text-[11px]">
            <div className="flex justify-between border-b border-border pb-1">
              <span className="text-text-muted uppercase">Expert Registration</span>
              <span className="text-text-main font-bold">₦7,000</span>
            </div>
            <div className="flex justify-between border-b border-border pb-1">
              <span className="text-text-muted uppercase">Model 2 Job Commission</span>
              <span className="text-text-main font-bold">1% / Job</span>
            </div>
            <div className="flex justify-between border-b border-border pb-1">
              <span className="text-text-muted uppercase">Model 1 Subscription</span>
              <span className="text-text-main font-bold">₦1,000 / Month</span>
            </div>
          </div>
        </div>

        {/* 4. PROGRESSION TIERS */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300 group">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <TrendingUp className="text-primary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">6. Progression</h3>
          <div className="space-y-3 font-sans text-[11px]">
            <div className="flex justify-between border-b border-border pb-1">
              <span className="text-text-muted uppercase">Tier 2: 10-24 Experts</span>
              <span className="text-text-main font-bold">+5% Bonus</span>
            </div>
            <div className="flex justify-between border-b border-border pb-1">
              <span className="text-text-muted uppercase">Tier 3: 25-49 Experts</span>
              <span className="text-secondary font-bold">+10% Bonus</span>
            </div>
            <div className="flex justify-between font-bold text-primary uppercase">
              <span>Tier 4: 50+ Experts</span>
              <span>+15% Bonus</span>
            </div>
          </div>
        </div>

        {/* 5. SUB-TAS (TIER 3+) */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300 group">
          <div className="w-12 h-12 bg-tas/10 rounded-2xl flex items-center justify-center mb-6">
            <Users className="text-tas" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">7. Sub-TAS Teams</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            Tier 3+ Agents may recruit Sub-TAS agents. Earn overrides (0.1%–0.2%) on their team&#39;s job commissions and one-time bonuses up to ₦1,000 for every expert they verify.
          </p>
        </div>

        {/* 6. REFERRAL TOOLS */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300 group">
          <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
            <Zap className="text-secondary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">8. Recruitment Tools</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            Access unique referral links, codes, and digital cards via the TAS Dashboard. Tier 3+ agents are eligible for personalized physical cards. Modification of brand assets is strictly prohibited.
          </p>
        </div>

        {/* 7. PAYOUT TERMS */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300 group">
          <div className="w-12 h-12 bg-success/10 rounded-2xl flex items-center justify-center mb-6">
            <Clock className="text-success" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">9. Payout Schedule</h3>
          <div className="space-y-2 text-xs text-text-muted font-sans">
            <p className="flex justify-between border-b border-border pb-1"><span>Verification Bonus</span><span>Within 7 Days</span></p>
            <p className="flex justify-between border-b border-border pb-1"><span>Monthly Commissions</span><span>By 10th</span></p>
            <p className="flex justify-between font-bold text-secondary"><span>Minimum Payout</span><span>₦2,000</span></p>
          </div>
        </div>

        {/* 8. CODE OF CONDUCT */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300 group">
          <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6">
            <Ban className="text-red-500" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">10. Conduct & Ban</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            Grounds for blacklisting: creating fake accounts, misrepresenting earnings, harassment, or selling referral links. Blacklisting results in permanent platform bans and forfeiture of all earnings.
          </p>
        </div>

        {/* 9. CONFIDENTIALITY */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300 group">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <ShieldCheck className="text-primary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">11. Confidentiality</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            You must protect Expert personal data and Company strategies. Disclosure of internal platform data or commission structures to third parties is strictly prohibited.
          </p>
        </div>

        {/* 10. TERMINATION */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300 group">
          <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6">
            <AlertOctagon className="text-red-500" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">13. Termination</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            Immediate termination for fraud or 6 months of inactivity. Termination for fraud triggers a clawback of all registration bonuses paid to the agent.
          </p>
        </div>

        {/* 11. LIABILITY & INDEMNITY */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300 group">
          <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
            <Scale className="text-secondary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">16. Liability Limits</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            Total liability is capped at ₦100,000 or the total commissions paid in the previous 6 months. HelpMe NG does not guarantee minimum earnings; results depend on individual effort.
          </p>
        </div>

        {/* 12. DISPUTE RESOLUTION */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300 group">
          <div className="w-12 h-12 bg-tas/10 rounded-2xl flex items-center justify-center mb-6">
            <Gavel className="text-tas" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">17. Legal Disputes</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            Governed by Nigerian law. Disputes undergo internal resolution (14 days), mediation in Lagos, and finally binding arbitration under the Arbitration and Conciliation Act.
          </p>
        </div>

      </div>

      {/* ── QUICK REFERENCE SUMMARY ─────────────────────────────── */}
      <div className="max-w-4xl mx-auto mt-20 bg-surface border border-border p-8 md:p-12 rounded-[2.5rem] shadow-ambient">
        <h4 className="text-center text-xl font-bold text-text-main mb-8 font-display uppercase tracking-widest italic">TAS Program Quick Guide</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-sans">
          <div className="space-y-4">
            <div className="bg-background p-4 rounded-2xl border border-border">
              <p className="font-bold text-primary mb-1 uppercase text-[10px] tracking-widest">Earnings Policy</p>
              <ul className="text-text-muted text-[10px] leading-relaxed space-y-1 font-medium">
                <li>• ₦7,000 per verified expert (one-time)</li>
                <li>• 1% recurring job commission (Model 2)</li>
                <li>• ₦1,000 per active expert (Model 1)</li>
                <li>• Performance bonuses up to +15%</li>
              </ul>
            </div>
            <div className="bg-background p-4 rounded-2xl border border-border">
              <p className="font-bold text-secondary mb-1 uppercase text-[10px] tracking-widest">Hierarchy</p>
              <ul className="text-text-muted text-[10px] leading-relaxed space-y-1 font-medium">
                <li>• Tier 1: 0-9 experts (Associate)</li>
                <li>• Tier 2: 10-24 experts (Senior)</li>
                <li>• Tier 3: 25-49 experts (Master)</li>
                <li>• Tier 4: 50+ experts (Lead)</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-background p-4 rounded-2xl border border-border">
              <p className="font-bold text-tas mb-1 uppercase text-[10px] tracking-widest">Tools & Support</p>
              <ul className="text-text-muted text-[10px] leading-relaxed space-y-1 font-medium">
                <li>• Personalized dashboard & analytics</li>
                <li>• Pitch decks & video tutorials</li>
                <li>• Invite-only WhatsApp support group</li>
                <li>• Physical cards for Tier 3+</li>
              </ul>
            </div>
            <div className="bg-background p-4 rounded-2xl border border-border">
              <p className="font-bold text-text-main mb-1 uppercase text-[10px] tracking-widest">Contact Support</p>
              <div className="text-[10px] text-text-muted leading-relaxed font-bold uppercase">
                <p>Support: tas@helpme.ng</p>
                <p>Payments: tas-payments@helpme.ng</p>
                <p>Compliance: tas-compliance@helpme.ng</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ACKNOWLEDGMENT ───────────────────────────────────── */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <div className="inline-flex flex-wrap justify-center gap-4 mb-8">
          <span className="flex items-center gap-2 text-[10px] font-bold text-success uppercase"><CheckCircle2 size={12}/> Contractor Relationship</span>
          <span className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase"><CheckCircle2 size={12}/> Background Verified</span>
          <span className="flex items-center gap-2 text-[10px] font-bold text-tas uppercase"><CheckCircle2 size={12}/> Arbitration Agreement</span>
        </div>
        <p className="text-[10px] text-text-muted font-sans leading-relaxed px-6">
          © 2026 CHRIVON TECH SOLUTIONS LIMITED. All rights reserved. <br />
          Acceptance of this agreement through application constitutes an electronic signature and a waiver of class action proceedings.
        </p>
      </div>
    </div>
  );
};

export default TASAgreement;