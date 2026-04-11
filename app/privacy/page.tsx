"use client";

import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  Mail,
  Scale,
  CheckCircle2,
  UserCheck,
  Zap,
  MapPin,
  Clock,
  Users,
  ShieldAlert
} from "lucide-react";

/**
 * HelpMe NG Privacy Policy - Full Content Component
 * Formatted for CHRIVON TECH SOLUTIONS LIMITED (NDPA/GAID Compliant).
 */
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-6 transition-colors duration-300">
      
      {/* ── HEADER & COMPLIANCE ──────────────────────────────────── */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <span className="text-primary font-bold tracking-widest text-[10px] md:text-xs uppercase bg-primary/10 px-4 py-1.5 rounded-full">
          NDPA & GAID Compliant
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold text-text-main tracking-tight font-display">
          Privacy Policy
        </h1>
        <p className="mt-4 text-text-muted max-w-2xl mx-auto font-sans leading-relaxed">
          At HelpMe NG, we treat your privacy as a fundamental right. [cite: 489] <br />
          Effective Date: April 1, 2026 | Last Updated: March 2026 [cite: 452]
        </p>
        
        <div className="mt-8 inline-flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest font-bold text-text-muted bg-surface p-4 rounded-2xl border border-border">
          <div className="flex flex-col gap-1"><span>Compliance</span><span className="text-primary">NDPA 2023 / GAID 2025</span> [cite: 454]</div>
          <div className="w-px bg-border h-8 hidden md:block"></div>
          <div className="flex flex-col gap-1"><span>Data Controller</span><span className="text-primary">CHRIVON TECH SOLUTIONS</span> [cite: 493]</div>
          <div className="w-px bg-border h-8 hidden md:block"></div>
          <div className="flex flex-col gap-1"><span>Jurisdiction</span><span className="text-primary">Nigeria</span> [cite: 495]</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* 1. INTRODUCTION */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <ShieldCheck className="text-primary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">1. Our Commitment</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            We are committed to protecting the privacy and security of your personal data in compliance with the Nigeria Data Protection Act (NDPA) and the Constitution of the Federal Republic of Nigeria. [cite: 481, 485, 487]
          </p>
        </div>

        {/* 2. GUIDING PRINCIPLES */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
            <Scale className="text-secondary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">4. Guiding Principles</h3>
          <div className="space-y-2 text-xs text-text-muted font-sans overflow-y-auto max-h-40 pr-2">
            <p><strong className="text-text-main">Lawfulness:</strong> Processed fairly and transparently. [cite: 509]</p>
            <p><strong className="text-text-main">Minimization:</strong> Limited to what is strictly necessary. [cite: 509]</p>
            <p><strong className="text-text-main">Accuracy:</strong> Kept up to date or erased if inaccurate. [cite: 509]</p>
            <p><strong className="text-text-main">Confidentiality:</strong> Secured against unauthorized access. [cite: 509]</p>
          </div>
        </div>

        {/* 3. DATA WE COLLECT */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-success/10 rounded-2xl flex items-center justify-center mb-6">
            <Database className="text-success" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">5. Data Categories</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans mb-3">
            We collect identity information (full name, DOB, ID numbers), contact info (phone, email, address), and verification data (NIN, BVN, Police Clearance). [cite: 512, 521, 526, 527, 528]
          </p>
        </div>

        {/* 4. LAWFUL BASIS */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <UserCheck className="text-primary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">7. Lawful Basis</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            We rely on Performance of a Contract for registration, Legal Obligation for NIN/BVN verification, and Consent for marketing and location tracking. [cite: 576, 613, 614]
          </p>
        </div>

        {/* 5. SENSITIVE DATA */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
            <Lock className="text-secondary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">8. Sensitive Data</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            Biometric data (photos, NIN) is collected only for verification. [cite: 594] Police Clearance is collected for Tier 3 Experts under strict safeguards. [cite: 593] Explicit consent is required for any other sensitive processing. [cite: 614]
          </p>
        </div>

        {/* 6. AUTOMATED DECISIONS */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-tas/10 rounded-2xl flex items-center justify-center mb-6">
            <Zap className="text-tas" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">8.2 Automation</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            Algorithms are used for Job matching and Fraud detection. [cite: 599] You have the right to request human intervention, express your view, or contest these decisions. [cite: 601, 602, 603]
          </p>
        </div>

        {/* 7. DATA SUBJECT RIGHTS */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-success/10 rounded-2xl flex items-center justify-center mb-6">
            <Eye className="text-success" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">10. Your Rights</h3>
          <div className="space-y-1 text-[11px] font-sans text-text-muted">
            <p className="border-b border-border pb-1">• Right of Access (DSAR) [cite: 619]</p>
            <p className="border-b border-border pb-1">• Right to Erasure (Forgotten) [cite: 619]</p>
            <p className="border-b border-border pb-1">• Right to Portability [cite: 619]</p>
            <p className="border-b border-border pb-1">• Right to Withdraw Consent [cite: 619]</p>
          </div>
        </div>

        {/* 8. DATA SHARING */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
            <Users className="text-secondary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">12. Data Sharing</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            We share data with Users (facilitate delivery), Payment Processors (Paystack/Flutterwave), and Verification Partners (NIMC). [cite: 648] We do NOT sell your data for marketing. [cite: 653]
          </p>
        </div>

        {/* 9. DATA SECURITY */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6">
            <ShieldAlert className="text-red-500" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">14. Security</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            Sensitive data is protected via AES-256 encryption at rest and SSL/TLS in transit. [cite: 677, 678] Breach notifications will be sent to the NDPC within 72 hours. [cite: 685]
          </p>
        </div>

        {/* 10. RETENTION PERIODS */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <Clock className="text-primary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">15. Data Retention</h3>
          <div className="space-y-2 text-[11px] font-sans text-text-muted">
            <div className="flex justify-between border-b border-border pb-1"><span>Financial Records</span><span>7 Years</span> [cite: 690]</div>
            <div className="flex justify-between border-b border-border pb-1"><span>Verification Docs</span><span>Account + 2 Years</span> [cite: 690]</div>
            <div className="flex justify-between font-bold text-secondary"><span>Usage Analytics</span><span>36 Months</span> [cite: 690]</div>
          </div>
        </div>

        {/* 11. CROSS-BORDER TRANSFER */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-tas/10 rounded-2xl flex items-center justify-center mb-6">
            <Globe className="text-tas" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">13. Global Transfers</h3>
          <p className="text-text-muted text-sm leading-relaxed font-sans">
            Data may be transferred to cloud providers (AWS) outside Nigeria. [cite: 661] We use Standard Contractual Clauses or Adequacy Decisions to ensure safeguards. [cite: 666, 667]
          </p>
        </div>

        {/* 12. DPO CONTACT */}
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-ambient transition-all duration-300">
          <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
            <Mail className="text-secondary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-4 font-display">17. Contact DPO</h3>
          <div className="space-y-2 text-xs text-text-muted font-sans">
            <p className="flex items-center gap-2"><MapPin size={12}/> Admiralty Way, Lekki Phase 1, Lagos [cite: 725]</p>
            <p className="flex items-center gap-2 font-bold text-text-main"><Mail size={12}/> dpo@helpme.ng [cite: 723]</p>
            <p className="flex items-center gap-2 uppercase tracking-tighter"><Clock size={12}/> Mon-Fri, 9AM-5PM WAT [cite: 726]</p>
          </div>
        </div>

      </div>

      {/* ── INTERNAL COMPLAINT PROCESS ────────────────────────────── */}
      <div className="max-w-4xl mx-auto mt-20 bg-surface border border-border p-8 md:p-12 rounded-[2.5rem] shadow-ambient">
        <h4 className="text-center text-xl font-bold text-text-main mb-8 font-display uppercase tracking-widest">Exercise Your Rights (DSAR)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-sans">
          <div className="space-y-4">
            <div className="bg-background p-4 rounded-2xl border border-border">
              <p className="font-bold text-primary mb-1 uppercase text-[10px] tracking-wider">Internal Complaints</p>
              <p className="text-text-muted text-xs leading-relaxed">Contact our DPO. We acknowledge receipt within 48 hours and resolve findings within 7 working days. [cite: 740, 744]</p>
            </div>
            <div className="bg-background p-4 rounded-2xl border border-border">
              <p className="font-bold text-secondary mb-1 uppercase text-[10px] tracking-wider">DSAR Process</p>
              <p className="text-text-muted text-xs leading-relaxed">Submit a DSAR form with two forms of ID. We respond fully within one month. [cite: 627, 632, 635]</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-background p-4 rounded-2xl border border-border">
              <p className="font-bold text-tas mb-1 uppercase text-[10px] tracking-wider">External Remedy</p>
              <p className="text-text-muted text-xs leading-relaxed">If unsatisfied, lodge a complaint with the Nigeria Data Protection Commission (NDPC) at info@ndpc.gov.ng. [cite: 749, 750, 752]</p>
            </div>
            <div className="bg-background p-4 rounded-2xl border border-border">
              <p className="font-bold text-text-main mb-1 uppercase text-[10px] tracking-wider">Opt-Out</p>
              <p className="text-text-muted text-xs leading-relaxed">Opt out of marketing via app settings or by clicking &quot;Unsubscribe&quot; in emails. [cite: 801, 802]</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ACKNOWLEDGMENT ───────────────────────────────────── */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <div className="inline-flex flex-wrap justify-center gap-4 mb-8">
          <span className="flex items-center gap-2 text-[10px] font-bold text-success uppercase"><CheckCircle2 size={12}/> NDPA 2023 [cite: 485]</span>
          <span className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase"><CheckCircle2 size={12}/> AES-256 Secured [cite: 678]</span>
          <span className="flex items-center gap-2 text-[10px] font-bold text-tas uppercase"><CheckCircle2 size={12}/> GAID 2025 [cite: 486]</span>
        </div>
        <p className="text-[10px] text-text-muted font-sans leading-relaxed px-6">
          © 2026 CHRIVON TECH SOLUTIONS LIMITED. HelpMe NG is not intended for children under 18 years of age. [cite: 793] <br />
          By using our platform, you signify acceptance of these policies. [cite: 771]
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;