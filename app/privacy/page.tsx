"use client";

import { useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Shield, ChevronDown, ChevronRight } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const sections = [
  { id: "intro", number: "01", title: "Introduction & Commitment" },
  { id: "definitions", number: "02", title: "Definitions" },
  { id: "who-we-are", number: "03", title: "Who We Are" },
  { id: "principles", number: "04", title: "Our Guiding Principles" },
  { id: "what-we-collect", number: "05", title: "What Personal Data We Collect" },
  { id: "how-we-collect", number: "06", title: "How We Collect Your Data" },
  { id: "purpose", number: "07", title: "Purpose of Collection & Lawful Basis" },
  { id: "sensitive", number: "08", title: "Sensitive Personal Data" },
  { id: "consent", number: "09", title: "Consent and Your Rights" },
  { id: "rights", number: "10", title: "Detailed Rights of Data Subjects" },
  { id: "dsar", number: "11", title: "How to Exercise Your Rights (DSAR)" },
  { id: "sharing", number: "12", title: "Data Sharing & Third Parties" },
  { id: "cross-border", number: "13", title: "Cross-Border Data Transfers" },
  { id: "security", number: "14", title: "Data Security Measures" },
  { id: "retention", number: "15", title: "Data Retention Period" },
  { id: "cookies", number: "16", title: "Cookies & Technical Information" },
  { id: "dpo", number: "17", title: "Data Protection Officer" },
  { id: "complaints", number: "18", title: "Complaint Handling" },
  { id: "changes", number: "19", title: "Changes to This Policy" },
  { id: "acceptance", number: "20", title: "Acceptance of Policy" },
  { id: "children", number: "23", title: "Children's Data" },
  { id: "marketing", number: "24", title: "Marketing Communications" },
  { id: "third-party", number: "25", title: "Third-Party Links" },
  { id: "tas-retention", number: "26", title: "TAS Data Retention" },
];

function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-text-muted/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors duration-200">
          {title}
        </span>
        <ChevronDown
          size={14}
          className={`text-text-muted/40 transition-transform duration-300 shrink-0 ml-4 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-5 text-text-muted text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function SectionHeading({ id, number, title }: { id: string; number: string; title: string }) {
  return (
    <div id={id} className="flex items-baseline gap-4 mb-6 pt-2">
      <span className="text-[10px] font-black text-text-muted/30 tabular-nums tracking-widest shrink-0">
        {number}
      </span>
      <h2 className="font-display font-bold text-text-main text-xl md:text-2xl tracking-tight">
        {title}
      </h2>
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-5">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-text-muted/15">
            {headers.map((h) => (
              <th key={h} className="text-left py-2 pr-6 text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 pb-3">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-text-muted/8">
          {rows.map((row, i) => (
            <tr key={i} className="group hover:bg-primary/2 transition-colors duration-150">
              {row.map((cell, j) => (
                <td key={j} className="py-3 pr-6 text-text-muted leading-relaxed align-top">
                  {j === 0 ? <span className="font-semibold text-text-main">{cell}</span> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RightsBadge({ right, desc }: { right: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 py-4 border-b border-text-muted/10 last:border-0 group">
      <ChevronRight size={14} className="text-primary mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
      <div>
        <p className="font-semibold text-text-main text-sm mb-0.5">{right}</p>
        <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [activeSection, setActiveSection] = useState("intro");

  return (
    <main className="min-h-screen bg-background transition-colors duration-300">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <div ref={heroRef} className="border-b border-text-muted/10 pt-24 md:pt-36 pb-16 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <motion.div
                custom={0} variants={fadeInUp} initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="flex items-center gap-4 mb-7"
              >
                <motion.div
                  initial={{ width: 0 }} animate={{ width: 40 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-px bg-secondary/50"
                />
                <span className="text-secondary text-[10px] font-black uppercase tracking-[0.4em]">
                  Legal — Privacy
                </span>
              </motion.div>

              <motion.h1
                custom={1} variants={fadeInUp} initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="font-display font-bold text-text-main text-4xl md:text-6xl lg:text-7xl leading-[1.06] tracking-tight mb-6"
              >
                Privacy
                <span className="text-primary italic">Policy.</span>
              </motion.h1>

              <motion.p
                custom={2} variants={fadeInUp} initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="text-text-muted text-base md:text-lg leading-relaxed max-w-xl font-medium"
              >
                inSmartio is committed to protecting your personal data. This policy explains how we
                collect, use, and safeguard your information in full compliance with Nigerian law.
              </motion.p>
            </div>

            {/* Meta info */}
            <motion.div
              custom={3} variants={fadeInUp} initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              className="lg:col-span-4 lg:text-right flex flex-col gap-5"
            >
              <div className="inline-flex items-center gap-2 self-start lg:self-end bg-primary/8 border border-primary/15 rounded-full px-4 py-2">
                <Shield size={13} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                  NDPA / GAID Compliant
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-text-muted/40">Effective Date</p>
                <p className="font-semibold text-text-main text-sm">April 1, 2026</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-text-muted/40">Last Updated</p>
                <p className="font-semibold text-text-main text-sm">March 2026</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-text-muted/40">Version</p>
                <p className="font-semibold text-text-main text-sm">1.0</p>
              </div>
            </motion.div>
          </div>

          {/* Compliance badges */}
          <motion.div
            custom={4} variants={fadeInUp} initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="flex flex-wrap gap-3 mt-10 pt-10 border-t border-text-muted/10"
          >
            {["Nigeria Data Protection Act 2023 (NDPA)", "General Application & Implementation Directive 2025 (GAID)", "Section 37 — Constitution of FRN 1999"].map((label) => (
              <span key={label} className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted/50 border border-text-muted/15 rounded-full px-4 py-2">
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── BODY ──────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Sticky TOC sidebar */}
          <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-28">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-text-muted/40 mb-5">
              Table of Contents
            </p>
            <nav className="space-y-0">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setActiveSection(s.id)}
                  className={`flex items-center gap-3 py-2 text-xs transition-colors duration-200 group border-l-2 pl-3 ${activeSection === s.id
                      ? "border-primary text-primary font-semibold"
                      : "border-transparent text-text-muted/50 hover:text-text-main hover:border-text-muted/30"
                    }`}
                >
                  <span className="tabular-nums text-[9px] text-text-muted/30 shrink-0">{s.number}</span>
                  <span className="leading-snug">{s.title}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-9 space-y-16 w-full max-w-70 mx-auto sm:max-w-7xl">

            {/* Quick Reference Banner */}
            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6 md:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-primary mb-5">Quick Reference Summary</p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-3">What We Collect</p>
                  <ul className="space-y-1.5 text-sm text-text-muted">
                    {["Identity & Contact info", "Verification data (NIN, BVN)", "Financial & Transaction records", "Communications & Job details", "TAS recruitment data"].map(i => (
                      <li key={i} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary/50 shrink-0" />{i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-3">How We Protect You</p>
                  <ul className="space-y-1.5 text-sm text-text-muted">
                    {["Encryption for all sensitive data", "Strict access controls", "Regular audits & staff training", "Breach notification within 72 hours"].map(i => (
                      <li key={i} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary/50 shrink-0" />{i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-3">Your Rights</p>
                  <ul className="space-y-1.5 text-sm text-text-muted">
                    {["Access your data (DSAR)", "Correct inaccurate data", "Request deletion", "Withdraw consent", "Lodge complaint with NDPC"].map(i => (
                      <li key={i} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary/50 shrink-0" />{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-primary/15 flex flex-wrap gap-6 text-sm">
                <span className="text-text-muted">DPO Email: <span className="text-text-main font-semibold">dpo@insmartio.io</span></span>
                <span className="text-text-muted">Phone: <span className="text-text-main font-semibold">+234 800 INSMARTIO</span></span>
                <span className="text-text-muted">Compliance: <span className="text-text-main font-semibold">NDPA 2023 | GAID 2025 | NDPC</span></span>
              </div>
            </div>

            {/* 01 Introduction */}
            <div id="intro" className="scroll-mt-28">
              <SectionHeading id="intro" number="01" title="Introduction & Commitment" />
              <div className="space-y-4 text-text-muted text-[0.95rem] leading-relaxed">
                <p>At inSmartio (&quot;we&quot;, &quot;us&quot;, &quot;our&#34;), we are committed to protecting the privacy and security of your personal data. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our platform, whether as a Client, Expert, or Talent Acquisition Specialist (TAS).</p>
                <p>We process your personal data in compliance with the Nigeria Data Protection Act 2023 (NDPA), General Application and Implementation Directive (GAID) 2025, Section 37 of the Constitution of the Federal Republic of Nigeria 1999 (as amended), and other applicable data protection regulations.</p>
                <div className="border-l-2 border-primary pl-5 py-1 my-5">
                  <p className="text-text-main font-medium italic">
                    &#34;We treat your privacy as a fundamental right. This policy is designed to be transparent, simple to understand, and to give you control over your information.&#34;
                  </p>
                </div>
              </div>
            </div>

            {/* 02 Definitions */}
            <div id="definitions" className="scroll-mt-28">
              <SectionHeading id="definitions" number="02" title="Definitions" />
              <Table
                headers={["Term", "Meaning"]}
                rows={[
                  ["Personal Data", "Any information relating to an identified or identifiable natural person (\"Data Subject\")"],
                  ["Data Subject", "You – the individual whose personal data is being processed"],
                  ["Data Controller", "inSmartio – the entity that determines the purposes and means of processing your data"],
                  ["Data Processor", "Third parties who process data on our behalf (e.g., payment processors, cloud storage)"],
                  ["Processing", "Any operation performed on personal data (collection, storage, use, sharing, deletion)"],
                  ["Consent", "Freely given, specific, informed, and unambiguous agreement to process your data"],
                  ["DPO", "Data Protection Officer – our designated privacy expert"],
                  ["NDPC", "Nigeria Data Protection Commission – the regulatory authority"],
                  ["GAID", "General Application and Implementation Directive 2025"],
                  ["Client", "A user seeking services on inSmartio"],
                  ["Expert", "A verified service provider on inSmartio"],
                  ["TAS", "Talent Acquisition Specialist – a recruiter of experts"],
                ]}
              />
            </div>

            {/* 03 Who We Are */}
            <div id="who-we-are" className="scroll-mt-28">
              <SectionHeading id="who-we-are" number="03" title="Who We Are (Data Controller Information)" />
              <div className="overflow-x-auto w-full">
                <div className="bg-surface border border-text-muted/10 rounded-2xl p-6 md:p-8 space-y-3 text-sm min-w-120">
                  {[
                    ["Company Name", "inSmartio (CHRIVON TECH SOLUTIONS Limited)"],
                    ["Nature of Business", "Peer-to-peer service marketplace connecting Clients with verified Experts, and Talent Acquisition Specialists (TAS) who recruit Experts"],
                    ["Jurisdiction", "Nigeria"],
                    ["Contact Address", "Admiralty Way, Lekki Phase 1, Lagos, Nigeria"],
                    ["Email", "privacy@insmartio.io"],
                    ["Phone", "+234 800 INSMARTIO"],
                    ["Website", "www.insmartio.io"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex gap-4 py-2 border-b border-text-muted/8 last:border-0">
                      <span className="text-text-muted/50 font-semibold shrink-0 w-40">{label}</span>
                      <span className="text-text-main">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 04 Guiding Principles */}
            <div id="principles" className="scroll-mt-28">
              <SectionHeading id="principles" number="04" title="Our Guiding Principles" />
              <p className="text-text-muted text-sm leading-relaxed mb-5">In processing your personal data, we adhere strictly to the principles of data protection as required by the NDPA and GAID. We ensure that personal data shall be:</p>
              <Table
                headers={["Principle", "Our Commitment"]}
                rows={[
                  ["Lawfulness, Fairness & Transparency", "Processed lawfully, fairly, and in a transparent manner"],
                  ["Purpose Limitation", "Collected for specified, explicit, and legitimate purposes only"],
                  ["Data Minimization", "Adequate, relevant, and limited to what is necessary"],
                  ["Accuracy", "Accurate and kept up to date; inaccurate data corrected or erased"],
                  ["Storage Limitation", "Kept only as long as necessary for the purpose"],
                  ["Integrity & Confidentiality", "Secured against unauthorized access, loss, or damage"],
                  ["Accountability", "We demonstrate compliance with all principles"],
                ]}
              />
            </div>

            {/* 05 What We Collect */}
            <div id="what-we-collect" className="scroll-mt-28">
              <SectionHeading id="what-we-collect" number="05" title="What Personal Data We Collect" />
              <p className="text-text-muted text-sm leading-relaxed mb-6">Depending on your interaction with us (as Client, Expert, TAS, or visitor), we may collect the following categories of personal data:</p>
              <div className="space-y-2">
                {[
                  { title: "5.1 Identity Information", items: ["Full name", "Date of birth", "Gender", "Nationality", "Passport photograph", "Signature", "Government-issued ID numbers"] },
                  { title: "5.2 Contact Information", items: ["Phone number(s)", "Email address", "Residential/business address", "WhatsApp number"] },
                  { title: "5.3 Verification Information (Experts and TAS only)", items: ["National Identification Number (NIN)", "Bank Verification Number (BVN)", "Means of identification (National ID, Passport, Driver's License)", "Proof of address (utility bill, tenancy agreement)", "Guarantor information (Tier 3 Experts)", "Police Clearance Certificate (Tier 3 Experts)", "Educational certificates and professional qualifications", "TAS referral code (if applicable)"] },
                  { title: "5.4 Financial Information", items: ["Bank account details (for payouts)", "Transaction history", "Payment records", "Subscription payment history", "Escrow transaction details"] },
                  { title: "5.5 Service Information", items: ["Job postings and descriptions", "Bids and quotes", "Photos/videos of work", "Portfolio images", "Service categories and skills", "Work samples"] },
                  { title: "5.6 Communications", items: ["Chat messages between Clients and Experts", "Emails and SMS communications with inSmartio", "Call recordings (for quality assurance, with notice)", "Dispute resolution records"] },
                  { title: "5.7 Technical Information", items: ["IP address", "Device type and operating system", "Browser type and version", "App usage data", "Location data (with your permission)", "Cookies and tracking technologies"] },
                  { title: "5.8 TAS-Specific Information", items: ["TAS ID", "Recruitment network size", "Referral link clicks and conversions", "Sub-TAS relationships", "Override commission records"] },
                  { title: "5.9 Usage Information", items: ["Job history", "Ratings and reviews given/received", "Preferences and settings", "Mode selection (Client/Expert/TAS)"] },
                ].map((cat) => (
                  <AccordionItem key={cat.title} title={cat.title}>
                    <ul className="space-y-1.5 mt-1">
                      {cat.items.map(item => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary/50 shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionItem>
                ))}
              </div>
            </div>

            {/* 06 How We Collect */}
            <div id="how-we-collect" className="scroll-mt-28">
              <SectionHeading id="how-we-collect" number="06" title="How We Collect Your Data" />
              <Table
                headers={["Collection Method", "Description"]}
                rows={[
                  ["Direct Registration", "When you fill registration forms (paper or digital)"],
                  ["App/Website Usage", "When you use our platform, post jobs, place bids, or communicate"],
                  ["Verification Process", "When you submit NIN, BVN, and other verification documents"],
                  ["Communications", "When you contact us via phone, email, WhatsApp, or chat"],
                  ["Third-Party Sources", "Verification partners (NIMC, credit bureaus, guarantors)"],
                  ["Public Sources", "Public records and databases (for verification purposes only)"],
                  ["Automated Technologies", "Cookies, log files, and analytics tools"],
                  ["TAS Referral", "When you register using a TAS referral link or code"],
                ]}
              />
            </div>

            {/* 07 Purpose */}
            <div id="purpose" className="scroll-mt-28">
              <SectionHeading id="purpose" number="07" title="Purpose of Collection & Lawful Basis" />
              <p className="text-text-muted text-sm leading-relaxed mb-5">We process your personal data for specific purposes and rely on lawful bases as required by the NDPA and GAID:</p>
              <Table
                headers={["Purpose of Processing", "Categories of Data", "Lawful Basis"]}
                rows={[
                  ["Account Registration & Management", "Identity, Contact", "Performance of a contract; Consent"],
                  ["Service Provision (matching Clients & Experts)", "Identity, Contact, Service, Location", "Performance of a contract"],
                  ["Verification & Trust (NIN/BVN checks)", "Verification, Identity", "Legal obligation; Legitimate interest"],
                  ["TAS Program Administration", "TAS-specific, Bank details", "Performance of a contract; Legitimate interest"],
                  ["Commission Calculation & Payment", "Financial, Identity, TAS-specific", "Performance of a contract"],
                  ["Payment Processing", "Financial, Identity", "Performance of a contract"],
                  ["Communication about Jobs", "Contact, Communications", "Performance of a contract; Legitimate interest"],
                  ["Customer Support", "All relevant categories", "Legitimate interest; Legal obligation"],
                  ["Dispute Resolution", "All relevant categories", "Legal obligation; Legitimate interest"],
                  ["Fraud Prevention & Platform Security", "All relevant categories", "Legal obligation; Legitimate interest"],
                  ["Marketing & Promotions", "Contact, Usage", "Consent (opt-in required)"],
                  ["Analytics & Platform Improvement", "Usage, Technical", "Legitimate interest; Consent (where required)"],
                  ["Legal Compliance", "All relevant categories", "Legal obligation"],
                  ["Safety & Emergency Protocols", "Location, Identity", "Vital interest; Consent"],
                ]}
              />
              <div className="mt-4 bg-surface border border-text-muted/10 rounded-xl p-5 text-sm text-text-muted">
                <span className="font-semibold text-text-main">Note on Legitimate Interest: </span>
                Where we rely on legitimate interest, we have conducted a Legitimate Interest Assessment (LIA) as required by GAID, balancing our needs with your privacy rights.
              </div>
            </div>

            {/* 08 Sensitive Data */}
            <div id="sensitive" className="scroll-mt-28">
              <SectionHeading id="sensitive" number="08" title="Sensitive Personal Data" />
              <p className="text-text-muted text-sm leading-relaxed mb-5">The NDPA classifies certain data as &#34;sensitive personal data&#34; requiring extra protection. This includes: health information, genetic/biometric data, political opinions, religious/philosophical beliefs, trade union membership, sexual orientation, and criminal records.</p>
              <div className="space-y-3 text-sm text-text-muted">
                <p>We do not knowingly collect sensitive personal data unless voluntarily provided. If you provide such data, you explicitly consent to its processing.</p>
                <p>Criminal records (Police Clearance) are collected only for Tier 3 Experts under strict safeguards and legal obligation. Biometric data (photographs, NIN/BVN) is collected for verification purposes only.</p>
                <p>For sensitive data processing, we conduct a Data Protection Impact Assessment (DPIA) as mandated by GAID.</p>
              </div>
              <div className="mt-6">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-4">8.2 Automated Decision-Making & Profiling</p>
                <p className="text-sm text-text-muted leading-relaxed mb-4">We do not use automated decision-making or profiling that produces legal effects or significantly affects you. However, we use automated systems for:</p>
                <Table
                  headers={["Activity", "Description", "Your Rights"]}
                  rows={[
                    ["Job Matching", "Algorithm matches jobs with relevant experts based on category, location, and rating", "You can request human review"],
                    ["Fraud Detection", "Automated systems flag suspicious activity for human review", "You can appeal decisions"],
                    ["TAS Tier Calculation", "Automated calculation based on active expert count", "You can request manual review"],
                  ]}
                />
                <p className="text-sm text-text-muted mt-3">To request human review, contact <span className="text-primary font-semibold">dpo@insmartio.io</span>.</p>
              </div>
            </div>

            {/* 09 Consent */}
            <div id="consent" className="scroll-mt-28">
              <SectionHeading id="consent" number="09" title="Consent and Your Rights" />
              <div className="space-y-4 text-sm text-text-muted leading-relaxed">
                <p>Consent is your freely given, specific, informed, and unambiguous agreement to process your personal data. It is the entry point for most processing activities.</p>
                <p><span className="font-semibold text-text-main">How We Obtain Consent: </span>Explicit consent via checkboxes, signature on forms, or click-to-accept buttons. Constructive consent by using our platform. Consent can be withdrawn at any time.</p>
                <p><span className="font-semibold text-text-main">Special Situations: </span>Marketing communications require explicit opt-in consent. Location tracking is enabled only with your permission. Sensitive data requires explicit consent.</p>
                <div className="border border-red-200 bg-white  dark:border-red-800/30 rounded-xl p-4 text-red-600">
                  <span className="font-semibold">Important: </span>Withdrawing consent may affect our ability to provide certain services (e.g., verification requires NIN/BVN).
                </div>
              </div>
            </div>

            {/* 10 Rights */}
            <div id="rights" className="scroll-mt-28">
              <SectionHeading id="rights" number="10" title="Detailed Rights of Data Subjects" />
              <p className="text-sm text-text-muted leading-relaxed mb-6">Under the NDPA and GAID, you have the following rights regarding your personal data:</p>
              <div className="border border-text-muted/10 rounded-2xl p-6 divide-y divide-text-muted/8">
                {[
                  ["Right to be Informed", "To know what data we collect, why, and how we use it (this policy fulfills this right)"],
                  ["Right of Access (DSAR)", "To request a copy of your personal data we hold"],
                  ["Right to Rectification", "To correct inaccurate or incomplete data"],
                  ["Right to Erasure", "To request deletion of your data, subject to legal obligations"],
                  ["Right to Restrict Processing", "To limit how we use your data in certain circumstances"],
                  ["Right to Data Portability", "To receive your data in a structured, commonly used format and transfer it to another controller"],
                  ["Right to Object", "To object to processing based on legitimate interests or direct marketing"],
                  ["Right to Withdraw Consent", "To withdraw consent at any time (without affecting prior lawful processing)"],
                  ["Right to Lodge a Complaint", "To complain to the Nigeria Data Protection Commission (NDPC)"],
                ].map(([right, desc]) => (
                  <RightsBadge key={right} right={right} desc={desc} />
                ))}
              </div>
              <p className="text-xs text-text-muted/60 mt-4 leading-relaxed">Rights are not absolute and may be limited by legal obligations. We will respond to requests within one month, free of charge. Manifestly unfounded or excessive requests may incur a reasonable fee.</p>
            </div>

            {/* 11 DSAR */}
            <div id="dsar" className="scroll-mt-28">
              <SectionHeading id="dsar" number="11" title="How to Exercise Your Rights (DSAR Process)" />
              <p className="text-sm text-text-muted leading-relaxed mb-6">To exercise any of your rights, please follow this process:</p>
              <div className="space-y-4">
                {[
                  { step: "Step 1", title: "Complete a DSAR Form", desc: "Available at our office or request via email at dpo@insmartio.io" },
                  { step: "Step 2", title: "Submit to Our DPO", desc: "Via email: dpo@insmartio.io | WhatsApp: +234 800 INSMARTIO | In-person: Admiralty Way, Lekki Phase 1, Lagos" },
                  { step: "Step 3", title: "Provide Identification", desc: "Two forms of ID (one photo ID, one address verification) to confirm your identity" },
                  { step: "Step 4", title: "Acknowledgment", desc: "Our DPO will acknowledge receipt within 5 working days" },
                  { step: "Step 5", title: "Full Response", desc: "We will respond fully within one month of receiving your request" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="shrink-0 w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center">
                      <span className="text-[10px] font-black text-primary">{i + 1}</span>
                    </div>
                    <div className="pt-1.5">
                      <p className="font-semibold text-text-main text-sm mb-1">{item.title}</p>
                      <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 12 Data Sharing */}
            <div id="sharing" className="scroll-mt-28">
              <SectionHeading id="sharing" number="12" title="Data Sharing & Transfers to Third Parties" />
              <Table
                headers={["Third Party", "Purpose", "Data Shared"]}
                rows={[
                  ["Other Users (Clients/Experts/TAS)", "To facilitate service delivery", "Name, contact (when job accepted), ratings, verification badges, TAS ID"],
                  ["Payment Processors (Paystack, Flutterwave)", "Payment processing", "Financial data, transaction details"],
                  ["Verification Partners (NIMC, credit bureaus)", "Identity verification", "NIN, BVN, name, DOB"],
                  ["Cloud Service Providers (AWS, etc.)", "Data storage and hosting", "All data as applicable"],
                  ["Customer Support Tools", "Support ticketing", "Contact, communications"],
                  ["Legal/Regulatory Authorities", "Compliance with law", "As required by law"],
                  ["Dispute Resolution Partners", "Mediation services", "Relevant job and communication data"],
                  ["Analytics Providers", "Platform improvement", "Usage data (anonymized where possible)"],
                ]}
              />
              <div className="mt-4 space-y-2 text-sm text-text-muted">
                <p>We only share data necessary for the specific purpose. Third parties are contractually bound to protect your data (Data Processing Agreements). We do <span className="font-semibold text-text-main">NOT sell your personal data</span> to third parties for marketing.</p>
                <p><span className="font-semibold text-text-main">TAS-Specific: </span>TAS agents receive information about experts they recruited (name, performance metrics, commission earned). Experts see their TAS agent&apos;s name and contact information.</p>
              </div>
            </div>

            {/* 13 Cross-Border */}
            <div id="cross-border" className="scroll-mt-28">
              <SectionHeading id="cross-border" number="13" title="Cross-Border Data Transfers" />
              <p className="text-sm text-text-muted leading-relaxed mb-4">As a Nigerian platform, we primarily store data within Nigeria. However, some service providers may be located outside Nigeria (cloud infrastructure, payment processors, analytics tools).</p>
              <p className="text-sm text-text-muted leading-relaxed mb-5">Before transferring personal data outside Nigeria, we ensure one of the following safeguards:</p>
              <div className="space-y-3">
                {[
                  ["Adequacy Decision", "The recipient country has adequate data protection laws (as determined by NDPC)"],
                  ["Appropriate Safeguards", "Binding Corporate Rules, Standard Contractual Clauses (approved by NDPC), or other approved transfer instruments"],
                  ["Derogations", "Specific situations such as your consent, contract performance, or legal claims"],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-4 p-4 border border-text-muted/10 rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    <div>
                      <p className="font-semibold text-text-main text-sm mb-1">{title}</p>
                      <p className="text-text-muted text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 14 Security */}
            <div id="security" className="scroll-mt-28">
              <SectionHeading id="security" number="14" title="Data Security Measures" />
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border border-text-muted/10 rounded-2xl p-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-4">Technical Measures</p>
                  <ul className="space-y-2 text-sm text-text-muted">
                    {["End-to-end encryption for chat communications", "SSL/TLS encryption for all data in transit", "AES-256 encryption for sensitive data at rest", "Firewalls and intrusion detection systems", "Regular security patches and updates", "Multi-factor authentication for admin access"].map(i => (
                      <li key={i} className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary/50 shrink-0 mt-2" />{i}</li>
                    ))}
                  </ul>
                </div>
                <div className="border border-text-muted/10 rounded-2xl p-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-4">Organizational Measures</p>
                  <ul className="space-y-2 text-sm text-text-muted">
                    {["Strict access controls (role-based access)", "Regular staff training on data protection", "Data protection by design and by default", "Annual compliance audits (as required by GAID)", "Data Protection Impact Assessments (DPIAs) for high-risk processing"].map(i => (
                      <li key={i} className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary/50 shrink-0 mt-2" />{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-surface border border-text-muted/10 rounded-xl p-5 text-sm text-text-muted">
                <span className="font-semibold text-text-main">Breach Notification: </span>
                In the event of a data breach, we will notify the NDPC within 72 hours (as required by GAID), inform affected data subjects without undue delay, and take immediate steps to mitigate harm.
              </div>
              <div className="mt-5">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-4">Verification Document Storage</p>
                <Table
                  headers={["Security Measure", "Implementation"]}
                  rows={[
                    ["Encryption at rest", "AES-256"],
                    ["Encryption in transit", "TLS 1.3"],
                    ["Access control", "Admin only, with audit logging"],
                    ["Retention", "Account duration + 2 years"],
                    ["Deletion", "Anonymized after retention period"],
                    ["Third-party access", "Verification partners only (NIMC, etc.)"],
                  ]}
                />
              </div>
            </div>

            {/* 15 Retention */}
            <div id="retention" className="scroll-mt-28">
              <SectionHeading id="retention" number="15" title="Data Retention Period" />
              <Table
                headers={["Data Category", "Retention Period", "Reason"]}
                rows={[
                  ["Financial Records (transactions, payouts)", "7 years", "Regulatory compliance (tax, audit)"],
                  ["Verification Documents (NIN, BVN)", "Duration of account + 2 years", "Platform integrity, fraud prevention"],
                  ["Job Postings & Bids", "2 years post-completion", "Dispute resolution, platform improvement"],
                  ["Chat Logs & Communications", "2 years", "Dispute resolution, quality monitoring"],
                  ["User Profile Data", "Until account deletion + 24 months inactivity", "Service provision"],
                  ["TAS Recruitment Records", "Duration of TAS status + 2 years", "Commission tracking, dispute resolution"],
                  ["Usage Analytics", "Anonymized after 36 months", "Business intelligence"],
                  ["Marketing Preferences", "Until consent withdrawn", "Marketing compliance"],
                ]}
              />
              <div className="mt-4 text-sm text-text-muted leading-relaxed space-y-2">
                <p><span className="font-semibold text-text-main">Account Deletion: </span>When you delete your account, your profile becomes inaccessible and personal data is anonymized or deleted (subject to legal holds). Reviews and ratings may remain anonymized to preserve platform integrity. Financial records are retained for 7 years per legal requirement.</p>
                <p>To request account deletion, contact <span className="text-primary font-semibold">dpo@insmartio.io</span>.</p>
              </div>
            </div>

            {/* 16 Cookies */}
            <div id="cookies" className="scroll-mt-28">
              <SectionHeading id="cookies" number="16" title="Cookies & Technical Information" />
              <p className="text-sm text-text-muted leading-relaxed mb-5">Cookies are small text files stored on your device when you visit websites or use apps. They help us recognize you and remember your preferences.</p>
              <Table
                headers={["Cookie Type", "Purpose", "Duration"]}
                rows={[
                  ["Essential Cookies", "Required for platform operation (login, security)", "Session/permanent"],
                  ["Functional Cookies", "Remember preferences and settings", "Up to 1 year"],
                  ["Analytics Cookies", "Understand how users interact with our platform", "Up to 2 years"],
                  ["Marketing Cookies", "Deliver relevant ads (with consent only)", "Up to 1 year"],
                ]}
              />
              <p className="text-sm text-text-muted mt-4 leading-relaxed">You can manage cookies via your browser settings or app permissions. We obtain consent for all non-essential cookies. We may also automatically collect IP address, device type, operating system, app version, and browsing behavior to improve user experience and detect fraud.</p>
            </div>

            {/* 17 DPO */}
            <div id="dpo" className="scroll-mt-28">
              <SectionHeading id="dpo" number="17" title="Data Protection Officer (DPO) Contact" />
              <div className="bg-surface border border-text-muted/10 rounded-2xl p-6 md:p-8">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-4">Appointed DPO</p>
                <p className="font-display font-bold text-text-main text-xl mb-5">Eugene LOKO</p>
                <div className="space-y-3 text-sm">
                  {[
                    ["Email", "dpo@insmartio.io"],
                    ["Phone", "+234 800 INSMARTIO (0803 xxxxxxxx)"],
                    ["Address", "Admiralty Way, Lekki Phase 1, Attn: Data Protection Officer"],
                    ["Hours", "Monday – Friday, 9 AM – 5 PM WAT"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex gap-4 py-2 border-b border-text-muted/8 last:border-0">
                      <span className="text-text-muted/50 font-semibold shrink-0 w-20">{label}</span>
                      <span className="text-text-main">{value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-text-muted mt-5 leading-relaxed">The DPO monitors compliance with data protection laws, advises on DPIAs, cooperates with the NDPC, and handles all data subject requests and complaints.</p>
              </div>
            </div>

            {/* 18 Complaints */}
            <div id="complaints" className="scroll-mt-28">
              <SectionHeading id="complaints" number="18" title="Complaint Handling & Remediation" />
              <p className="text-sm text-text-muted leading-relaxed mb-6">If you believe your data protection rights have been violated, follow this internal process:</p>
              <div className="space-y-3 mb-8">
                {[
                  ["Contact Our DPO", "Submit your complaint in writing to dpo@insmartio.io with your full name, contact details, description of the issue, relevant dates and evidence, and desired resolution."],
                  ["Acknowledgment", "We will acknowledge receipt within 48 hours."],
                  ["Investigation", "Our DPO will investigate thoroughly, involving relevant departments."],
                  ["Response", "We will respond with our findings and proposed resolution within 7 working days."],
                  ["Escalation", "If unsatisfied, you may escalate within inSmartio for senior review."],
                ].map(([title, desc], i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="shrink-0 w-7 h-7 rounded-full border border-text-muted/20 flex items-center justify-center">
                      <span className="text-[9px] font-black text-text-muted/50">{i + 1}</span>
                    </div>
                    <div className="pt-0.5">
                      <p className="font-semibold text-text-main text-sm mb-1">{title}</p>
                      <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border border-text-muted/10 rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-4">External Remedies</p>
                <p className="text-sm text-text-muted leading-relaxed mb-3">If your complaint is not resolved internally, you have the right to lodge a complaint with:</p>
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-text-main">Nigeria Data Protection Commission (NDPC)</p>
                  <p className="text-text-muted">Website: <span className="text-primary">www.ndpc.gov.ng</span></p>
                  <p className="text-text-muted">Email: <span className="text-primary">info@ndpc.gov.ng</span></p>
                </div>
                <p className="text-sm text-text-muted mt-4">You also have the right to seek judicial remedy in a court of competent jurisdiction.</p>
              </div>
            </div>

            {/* 19 Changes */}
            <div id="changes" className="scroll-mt-28">
              <SectionHeading id="changes" number="19" title="Changes to This Policy" />
              <div className="space-y-3 text-sm text-text-muted leading-relaxed">
                <p>We may update this Privacy Policy to reflect changes in data protection laws (NDPA/GAID updates), changes in our data processing activities, new features or services, or regulatory guidance.</p>
                <p><span className="font-semibold text-text-main">Notification: </span>Material changes will be notified via email, SMS, or in-app notification. The &#34;Last Updated&#34; date at the top will be revised. We encourage you to review this policy periodically.</p>
                <p>If you continue to use inSmartio after changes take effect, you signify acceptance of the updated policy. If you do not agree, you may close your account.</p>
              </div>
            </div>

            {/* 20 Acceptance */}
            <div id="acceptance" className="scroll-mt-28">
              <SectionHeading id="acceptance" number="20" title="Acceptance of Policy" />
              <p className="text-sm text-text-muted leading-relaxed mb-5">By registering on inSmartio, using our platform, or submitting your personal data to us, you acknowledge that you have read, understood, and agree to this Privacy Policy.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  ["For Clients", "This policy applies to your use of Client Mode."],
                  ["For Experts", "This policy applies to your use of Expert Mode and the verification process."],
                  ["For TAS", "This policy applies to your use of TAS Mode, the application process, and commission tracking."],
                  ["For Visitors", "This policy applies to your browsing of our website/app."],
                ].map(([role, desc]) => (
                  <div key={role} className="border border-text-muted/10 rounded-xl p-4">
                    <p className="font-semibold text-text-main text-sm mb-1">{role}</p>
                    <p className="text-text-muted text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 23 Children */}
            <div id="children" className="scroll-mt-28">
              <SectionHeading id="children" number="23" title="Children's Data" />
              <p className="text-sm text-text-muted leading-relaxed mb-3">Our platform is not intended for children under 18 years of age. We do not knowingly collect personal data from children under 18.</p>
              <p className="text-sm text-text-muted leading-relaxed mb-3">If you are a parent or guardian and believe your child under 18 has provided personal data to us, please contact us immediately at <span className="text-primary font-semibold">dpo@insmartio.io</span>. We will take steps to delete such information.</p>
              <p className="text-sm text-text-muted leading-relaxed">For users under 18: You must have parental consent to use our platform.</p>
            </div>

            {/* 24 Marketing */}
            <div id="marketing" className="scroll-mt-28">
              <SectionHeading id="marketing" number="24" title="Marketing Communications & Opt-Out" />
              <p className="text-sm text-text-muted leading-relaxed mb-5">We may send you marketing communications only with your explicit consent. You can opt out at any time via:</p>
              <ul className="space-y-2 text-sm text-text-muted mb-6">
                {['Click "Unsubscribe" in any marketing email', 'Toggle off "Marketing Communications" in app settings', 'Reply "STOP" to any marketing SMS', 'Email dpo@insmartio.io with subject "Unsubscribe"'].map(i => (
                  <li key={i} className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary/50 shrink-0 mt-2" />{i}</li>
                ))}
              </ul>
              <div className="bg-surface border border-text-muted/10 rounded-xl p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-3">What you will still receive after opt-out</p>
                <ul className="space-y-1.5 text-sm text-text-muted">
                  {["Transactional emails (payment confirmations, job updates)", "Security alerts", "Legal notices", "Account-related communications"].map(i => (
                    <li key={i} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-text-muted/30 shrink-0" />{i}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 25 Third Party Links */}
            <div id="third-party" className="scroll-mt-28">
              <SectionHeading id="third-party" number="25" title="Third-Party Links Disclaimer" />
              <p className="text-sm text-text-muted leading-relaxed">Our platform may contain links to third-party websites or services (e.g., payment gateways, social media). This Privacy Policy does not apply to those third parties. We are not responsible for the privacy practices of third-party sites. We encourage you to read their privacy policies before providing any personal data.</p>
            </div>

            {/* 26 TAS Retention */}
            <div id="tas-retention" className="scroll-mt-28">
              <SectionHeading id="tas-retention" number="26" title="TAS Data Retention (Specific)" />
              <p className="text-sm text-text-muted leading-relaxed mb-5">For TAS agents, in addition to Section 15:</p>
              <Table
                headers={["TAS Data Category", "Retention Period", "Reason"]}
                rows={[
                  ["TAS application records", "Duration of TAS status + 3 years", "Audit, dispute resolution"],
                  ["Referral link click data", "2 years", "Analytics, commission verification"],
                  ["Sub-TAS relationships", "Duration of relationship + 3 years", "Override commission verification"],
                  ["Recruitment network data", "Anonymized after 2 years inactive", "Business intelligence"],
                ]}
              />
              <div className="mt-6">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-4">27. Sub-TAS Data Sharing Disclosure</p>
                <p className="text-sm text-text-muted leading-relaxed mb-4">If you are a Tier 3+ TAS recruiting sub-TAS agents, the following data is shared:</p>
                <Table
                  headers={["Data Shared", "With Whom", "Purpose"]}
                  rows={[
                    ["Sub-TAS name and TAS ID", "Master TAS", "Team management"],
                    ["Sub-TAS recruitment numbers", "Master TAS", "Override commission calculation"],
                    ["Sub-TAS performance metrics", "Master TAS", "Team performance tracking"],
                  ]}
                />
                <p className="text-sm text-text-muted mt-3">Sub-TAS agents consent to this sharing when they agree to join a master TAS&#39;s team.</p>
              </div>
            </div>

            {/* Glossary */}
            <div className="scroll-mt-28">
              <div className="flex items-baseline gap-4 mb-6 pt-2">
                <span className="text-[10px] font-black text-text-muted/30 tabular-nums tracking-widest shrink-0">GL</span>
                <h2 className="font-display font-bold text-text-main text-xl md:text-2xl tracking-tight">Glossary of Terms</h2>
              </div>
              <Table
                headers={["Term", "Definition"]}
                rows={[
                  ["NDPA", "Nigeria Data Protection Act 2023"],
                  ["GAID", "General Application and Implementation Directive 2025"],
                  ["NDPC", "Nigeria Data Protection Commission"],
                  ["DPO", "Data Protection Officer"],
                  ["DSAR", "Data Subject Access Request"],
                  ["DPIA", "Data Protection Impact Assessment"],
                  ["LIA", "Legitimate Interest Assessment"],
                  ["NIN", "National Identification Number"],
                  ["BVN", "Bank Verification Number"],
                  ["TAS", "Talent Acquisition Specialist"],
                ]}
              />
            </div>

            {/* Footer */}
            <div className="border-t border-text-muted/10 pt-10 mt-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-text-muted/40 mb-1">Document Control</p>
                  <p className="text-sm text-text-muted">Version 1.0 — Initial release by inSmartio Legal, March 2026</p>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/40 text-right">
                  inSmartio: Trusted Services,<br />Verified Professionals.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}