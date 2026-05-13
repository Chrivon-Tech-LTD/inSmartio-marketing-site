"use client";

import { useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Users, ChevronDown, Check, X, Menu } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const sections = [
  { id: "intro", number: "01", title: "Introduction & Relationship" },
  { id: "definitions", number: "02", title: "Definitions" },
  { id: "eligibility", number: "03", title: "TAS Eligibility & Application" },
  { id: "contractor", number: "04", title: "Independent Contractor Status" },
  { id: "compensation", number: "05", title: "TAS Compensation Structure" },
  { id: "tiers", number: "06", title: "TAS Tiers & Progression" },
  { id: "sub-tas", number: "07", title: "Sub-TAS Recruitment (Tier 3+)" },
  { id: "tools", number: "08", title: "Referral Tools & Materials" },
  { id: "payment", number: "09", title: "Payment Terms & Schedule" },
  { id: "conduct", number: "10", title: "Obligations & Code of Conduct" },
  { id: "confidentiality", number: "11", title: "Confidentiality" },
  { id: "ip", number: "12", title: "Intellectual Property" },
  { id: "termination", number: "13", title: "Term & Termination" },
  { id: "effects", number: "14", title: "Effects of Termination" },
  { id: "indemnification", number: "15", title: "Indemnification" },
  { id: "liability", number: "16", title: "Limitation of Liability" },
  { id: "governing-law", number: "17", title: "Governing Law & Disputes" },
  { id: "general", number: "18–29", title: "General Provisions" },
  { id: "contact", number: "22", title: "Contact Information" },
];

// ── Reusable Components ───────────────────────────────────────────

function SectionHeading({ id, number, title }: { id: string; number: string; title: string }) {
  return (
    <div id={id} className="flex items-baseline gap-4 mb-6 pt-2 scroll-mt-28">
      <span className="text-[10px] font-black text-text-muted/30 tabular-nums tracking-widest shrink-0">
        {number}
      </span>
      <h2 className="font-display font-bold text-text-main text-xl md:text-2xl tracking-tight">
        {title}
      </h2>
    </div>
  );
}

function SubHeading({ title }: { title: string }) {
  return (
    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-3 mt-6">
      {title}
    </p>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="overflow-x-auto my-5 -mx-4 px-4 sm:mx-0 sm:px-0">
      <table className="w-full text-sm border-collapse min-w-95">
        <thead>
          <tr className="border-b border-text-muted/15">
            {headers.map((h) => (
              <th key={h} className="text-left py-2 pr-4 text-[10px] font-black uppercase tracking-[0.25em] text-text-muted/50 pb-3">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-text-muted/8">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-primary/2 transition-colors duration-150">
              {row.map((cell, j) => (
                <td key={j} className="py-3 pr-4 text-text-muted leading-relaxed align-top text-sm">
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

function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-text-muted/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors duration-200 pr-4">
          {title}
        </span>
        <ChevronDown
          size={14}
          className={`text-text-muted/40 transition-transform duration-300 shrink-0 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-5 text-text-muted text-sm leading-relaxed">{children}</div>
      )}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 text-sm text-text-muted">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="w-1 h-1 rounded-full bg-primary/50 shrink-0 mt-2" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function StatusRow({ label, keep }: { label: string; keep: boolean }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-text-muted/10 last:border-0">
      <span className="text-sm text-text-muted">{label}</span>
      <span className={`flex items-center gap-1.5 text-xs font-semibold ${keep ? "text-green-600" : "text-red-500"}`}>
        {keep ? <Check size={12} /> : <X size={12} />}
        {keep ? "Keep / Paid" : "Forfeit"}
      </span>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────

export default function TASAgreementPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [activeSection, setActiveSection] = useState("intro");
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background transition-colors duration-300">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <div ref={heroRef} className="border-b border-text-muted/10 pt-24 md:pt-36 pb-16 px-4 md:px-6">
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
                  Legal — TAS Agreement
                </span>
              </motion.div>

              <motion.h1
                custom={1} variants={fadeInUp} initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="font-display font-bold text-text-main text-4xl md:text-6xl lg:text-7xl leading-[1.06] tracking-tight mb-6"
              >
                TAS <br />
                <span className="text-primary italic">Agreement.</span>
              </motion.h1>

              <motion.p
                custom={2} variants={fadeInUp} initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="text-text-muted text-base md:text-lg leading-relaxed max-w-xl font-medium"
              >
                This Independent Contractor Agreement governs your participation in the
                inSmartio Talent Acquisition Specialist Program — covering compensation,
                tiers, obligations, and your rights as a TAS agent.
              </motion.p>
            </div>

            <motion.div
              custom={3} variants={fadeInUp} initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              className="lg:col-span-4 flex flex-row flex-wrap lg:flex-col gap-5 lg:items-end"
            >
              <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-2">
                <Users size={13} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                  Independent Contractor
                </span>
              </div>
              {[
                ["Effective Date", "April 1, 2026"],
                ["Last Updated", "March 2026"],
                ["Jurisdiction", "Federal Republic of Nigeria"],
                ["Version", "1.0"],
              ].map(([label, value]) => (
                <div key={label} className="space-y-0.5">
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-text-muted/40">{label}</p>
                  <p className="font-semibold text-text-main text-sm">{value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Parties + related docs */}
          <motion.div
            custom={4} variants={fadeInUp} initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="mt-10 pt-10 border-t border-text-muted/10"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/40">Parties:</span>
              <span className="text-sm text-text-muted">inSmartio (CHRIVON TECH SOLUTIONS LIMITED)</span>
              <span className="text-text-muted/30">×</span>
              <span className="text-sm text-text-muted">TAS Agent (Contractor)</span>
            </div>
           
          </motion.div>
        </div>
      </div>

      {/* ── MOBILE TOC ────────────────────────────────────────────── */}
      <div className="lg:hidden border-b border-text-muted/10 px-4 py-3 sticky top-16 z-20 bg-background/95 backdrop-blur-sm">
        <button
          onClick={() => setTocOpen(!tocOpen)}
          className="flex items-center justify-between w-full text-sm font-semibold text-text-main"
        >
          <span className="flex items-center gap-2">
            <Menu size={15} className="text-primary" />
            Table of Contents
          </span>
          <ChevronDown size={14} className={`text-text-muted/40 transition-transform duration-300 ${tocOpen ? "rotate-180" : ""}`} />
        </button>
        {tocOpen && (
          <nav className="mt-3 space-y-0 max-h-64 overflow-y-auto">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => { setActiveSection(s.id); setTocOpen(false); }}
                className="flex items-center gap-3 py-2 text-xs border-l-2 pl-3 border-transparent text-text-muted/60 hover:text-primary hover:border-primary transition-colors duration-200"
              >
                <span className="tabular-nums text-[9px] text-text-muted/30 shrink-0">{s.number}</span>
                <span className="leading-snug">{s.title}</span>
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* ── BODY ──────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Desktop sticky TOC */}
          <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-28">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-text-muted/40 mb-5">
              Table of Contents
            </p>
            <nav className="space-y-0 max-h-[70vh] overflow-y-auto pr-2">
              {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setActiveSection(s.id)}
                    className={`flex items-center gap-3 py-2 text-xs transition-colors duration-200 border-l-2 pl-3 ${
                      activeSection === s.id
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
          <div className="lg:col-span-9 space-y-12 md:space-y-16 w-full max-w-70 mx-auto sm:max-w-7xl">

            {/* Quick Reference Banner */}
            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5 md:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-primary mb-6">
                TAS Program — Quick Reference
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Registration Bonus", value: "₦7,000", sub: "per verified Expert" },
                  { label: "Job Commission", value: "1%", sub: "of every job (Model 2)" },
                  { label: "Subscription", value: "₦1,000", sub: "per month (Model 1)" },
                  { label: "Tier Bonus", value: "+15%", sub: "max on all earnings" },
                ].map(({ label, value, sub }) => (
                  <div key={label} className="border border-primary/10 rounded-xl p-4 bg-background">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-1">{label}</p>
                    <p className="font-display font-black text-2xl text-primary tracking-tight leading-none mb-1">{value}</p>
                    <p className="text-xs text-text-muted/60">{sub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-primary/15 flex flex-wrap gap-6 text-sm">
                <span className="text-text-muted">Min. payout: <span className="text-text-main font-semibold">₦2,000</span></span>
                <span className="text-text-muted">Paid by: <span className="text-text-main font-semibold">10th of each month</span></span>
                <span className="text-text-muted">Support: <span className="text-primary font-semibold">tas@insmartio.io</span></span>
              </div>
            </div>

            {/* 01 Introduction */}
            <div id="intro" className="scroll-mt-28">
              <SectionHeading id="intro" number="01" title="Introduction & Relationship" />
              <div className="space-y-4 text-text-muted text-[0.95rem] leading-relaxed">
                <p>This Talent Acquisition Specialist Agreement (&quot;Agreement&quot;) is entered into between <span className="font-semibold text-text-main">inSmartio (CHRIVON TECH SOLUTIONS LIMITED)</span>, a company registered in Nigeria with its principal office at Avacado Estate, Abijo, G.R.A, Ibeju Lekki Epe, Express way, Lagos — and the individual or entity approved to participate in the TAS Program (&quot;TAS Agent&quot;, &quot;Contractor&quot;, &quot;you&quot;).</p>
                <p>This Agreement sets forth the terms under which you agree to recruit verified Experts to the inSmartio platform in exchange for commissions and bonuses as described herein.</p>
                <div className="border-l-2 border-primary pl-5 py-1 my-5">
                  <p className="text-text-main font-medium italic">
                    IMPORTANT: This Agreement establishes an independent contractor relationship. Nothing herein shall be construed to create an employment, partnership, joint venture, or agency relationship between you and inSmartio.
                  </p>
                </div>
              </div>
            </div>

            {/* 02 Definitions */}
            <div id="definitions" className="scroll-mt-28">
              <SectionHeading id="definitions" number="02" title="Definitions" />
              <Table
                headers={["Term", "Definition"]}
                rows={[
                  ["Company", "inSmartio (CHRIVON TECH SOLUTIONS LIMITED)"],
                  ["TAS Agent", "You – the individual or entity approved to recruit Experts"],
                  ["Expert", "A verified service provider registered on the inSmartio platform"],
                  ["Sub-TAS", "A TAS agent recruited by another TAS agent (Tier 3+ only)"],
                  ["Referral Link", "Unique URL assigned to each TAS Agent for tracking referrals"],
                  ["Referral Code", "Unique alphanumeric code assigned to each TAS Agent"],
                  ["Active Expert", "An Expert who has completed at least one job in the last 30 days"],
                  ["Model 1 Expert", "An Expert on subscription payment model (₦10,000/month)"],
                  ["Model 2 Expert", "An Expert on commission payment model (10% per job)"],
                  ["Registration Bonus", "₦7,000 paid per verified Expert recruited"],
                  ["Job Commission", "1% of job value for Model 2 Experts recruited"],
                  ["Subscription Commission", "₦1,000 per month for each active Model 1 Expert recruited"],
                  ["Tier Bonus", "Percentage bonus on all earnings based on active expert count"],
                  ["Override Commission", "Commission earned from Sub-TAS recruitment (Tier 3+ only)"],
                  ["TAS ID", "Unique identifier assigned to each approved TAS Agent"],
                ]}
              />
            </div>

            {/* 03 Eligibility */}
            <div id="eligibility" className="scroll-mt-28">
              <SectionHeading id="eligibility" number="03" title="TAS Eligibility & Application" />
              <SubHeading title="3.1 Eligibility Requirements" />
              <Table
                headers={["Requirement", "Description"]}
                rows={[
                  ["Age", "Be at least 18 years old"],
                  ["Identity", "Provide valid government-issued identification"],
                  ["NIN", "Provide National Identification Number"],
                  ["Bank Account", "Have a valid Nigerian bank account"],
                  ["Network", "Have access to skilled professionals in your community"],
                  ["Background", "Pass basic background check (no fraud or violent crime convictions)"],
                ]}
              />
              <SubHeading title="3.2 Application Process" />
              <div className="space-y-3 mb-6">
                {[
                  ["Complete TAS application form", "Day 1"],
                  ["Submit required documents (ID, NIN)", "Day 1"],
                  ["Background verification", "24–48 hours"],
                  ["Application review", "24–48 hours"],
                  ["Approval or rejection notification", "Within 72 hours"],
                ].map(([step, timing], i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="shrink-0 w-7 h-7 rounded-full border border-primary/20 flex items-center justify-center">
                      <span className="text-[9px] font-black text-primary">{i + 1}</span>
                    </div>
                    <p className="text-sm text-text-muted flex-1">{step}</p>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted/40 shrink-0">{timing}</span>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800/30 rounded-xl p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green-700 dark:text-green-400 mb-3">Upon Approval</p>
                  <BulletList items={["You receive a unique TAS ID", "You are assigned Tier 1 status", "You gain access to the TAS Dashboard", "You receive onboarding materials"]} />
                </div>
                <div className="border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800/30 rounded-xl p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 dark:text-red-400 mb-3">Upon Rejection</p>
                  <BulletList items={["You receive written explanation", "You may reapply after 30 days", "You may appeal the decision within 14 days"]} />
                </div>
              </div>
            </div>

            {/* 04 Contractor Status */}
            <div id="contractor" className="scroll-mt-28">
              <SectionHeading id="contractor" number="04" title="Independent Contractor Status" />
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800/30 rounded-xl p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green-700 dark:text-green-400 mb-3">You ARE</p>
                  <BulletList items={["An independent contractor", "Responsible for your own taxes", "Free to set your own schedule", "Free to recruit using your own methods", "Responsible for your own expenses"]} />
                </div>
                <div className="border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800/30 rounded-xl p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 dark:text-red-400 mb-3">You Are NOT</p>
                  <BulletList items={["An employee of inSmartio", "Entitled to employee benefits", "Required to work specific hours", "Required to use specific recruitment methods", "Entitled to expense reimbursement"]} />
                </div>
              </div>
              <div className="space-y-3 text-sm text-text-muted leading-relaxed">
                <p><span className="font-semibold text-text-main">4.2 Tax Responsibility: </span>You are solely responsible for declaring and paying all applicable taxes on commissions earned. inSmartio may provide earnings reports but does not withhold taxes (unless required by law). Consult a tax professional regarding your obligations.</p>
                <p><span className="font-semibold text-text-main">4.3 No Benefits: </span>You are not entitled to health insurance, pension contributions, paid time off, sick leave, or any other employee benefits.</p>
              </div>
            </div>

            {/* 05 Compensation */}
            <div id="compensation" className="scroll-mt-28">
              <SectionHeading id="compensation" number="05" title="TAS Compensation Structure" />
              <SubHeading title="5.1 Compensation Overview" />
              <Table
                headers={["Compensation Type", "Amount", "Payment Timing", "Duration"]}
                rows={[
                  ["Registration Bonus", "₦7,000 per verified Expert", "Within 7 days of verification", "One-time"],
                  ["Model 2 Job Commission", "1% of each Job value", "Monthly by 10th", "Lifetime of Expert"],
                  ["Model 1 Subscription Commission", "₦1,000 per month", "Monthly by 10th", "Duration of active subscription"],
                  ["Tier Bonus", "+5% to +15% on ALL earnings", "Monthly by 10th", "Monthly"],
                ]}
              />

              <div className="space-y-2 mt-4">
                <AccordionItem title="5.2 Registration Bonus (₦7,000) — Conditions">
                  <div className="space-y-3">
                    <BulletList items={["The referred Expert completes full verification (Tier 1, 2, or 3)", "The Expert's registration form includes your TAS ID or referral link", "The Expert is not already registered on the platform", "No fraud or manipulation is detected"]} />
                    <div className="bg-surface border border-text-muted/10 rounded-xl p-4 mt-3">
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-text-muted/50 mb-2">Example</p>
                      <p>You recruit 10 Experts in one month → 10 × ₦7,000 = <span className="font-semibold text-text-main">₦70,000</span> registration bonus</p>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem title="5.3 Model 2 Job Commission (1%)">
                  <div className="space-y-3">
                    <p>Your Commission = Job Value × 1%</p>
                    <div className="bg-surface border border-text-muted/10 rounded-xl p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-text-muted/50 mb-2">Example</p>
                      <p>Your recruited Expert completes a job worth ₦50,000 → Your commission = ₦50,000 × 1% = <span className="font-semibold text-text-main">₦500</span></p>
                    </div>
                    <p className="text-xs text-text-muted/60">You earn this commission for EVERY job your recruited Model 2 Expert completes, for as long as they remain active.</p>
                  </div>
                </AccordionItem>
                <AccordionItem title="5.4 Model 1 Subscription Commission (₦1,000/month)">
                  <div className="space-y-3">
                    <p>Your Commission = ₦1,000 × (Number of active Model 1 Experts)</p>
                    <div className="bg-surface border border-text-muted/10 rounded-xl p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-text-muted/50 mb-2">Example</p>
                      <p>8 active Model 1 Experts → 8 × ₦1,000 = <span className="font-semibold text-text-main">₦8,000/month</span></p>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem title="5.5 Tier Bonus — Full Example Calculation">
                  <div className="space-y-3">
                    <p>Your Tier Bonus = (Registration Bonuses + Job Commissions + Subscription Commissions) × Bonus Percentage</p>
                    <div className="bg-surface border border-text-muted/10 rounded-xl p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-text-muted/50 mb-3">Example — Tier 3 (10% bonus)</p>
                      <div className="space-y-1 text-sm">
                        {[
                          ["Registration Bonuses", "₦70,000"],
                          ["Job Commissions", "₦18,300"],
                          ["Subscription Commissions", "₦8,000"],
                          ["Subtotal", "₦96,300"],
                          ["Tier Bonus (10%)", "₦9,630"],
                        ].map(([label, val]) => (
                          <div key={label} className="flex justify-between py-1 border-b border-text-muted/8 last:border-0">
                            <span className="text-text-muted">{label}</span>
                            <span className="font-semibold text-text-main">{val}</span>
                          </div>
                        ))}
                        <div className="flex justify-between pt-2">
                          <span className="font-bold text-text-main">TOTAL</span>
                          <span className="font-black text-primary">₦105,930</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionItem>
              </div>
            </div>

            {/* 06 Tiers */}
            <div id="tiers" className="scroll-mt-28">
              <SectionHeading id="tiers" number="06" title="TAS Tiers & Progression" />
              <SubHeading title="6.1 Tier Requirements" />
              <Table
                headers={["Tier", "Title", "Active Experts", "Bonus", "Additional Benefits"]}
                rows={[
                  ["Tier 1", "Associate", "0–9", "0%", "Base rates"],
                  ["Tier 2", "Senior", "10–24", "+5%", "Priority support, monthly recognition"],
                  ["Tier 3", "Master", "25–49", "+10%", "Recruit sub-TAS, team dashboard"],
                  ["Tier 4", "Regional Lead", "50+", "+15%", "Higher overrides, leaderboard access"],
                ]}
              />
              <SubHeading title="6.2 Tier Recalculation" />
              <div className="space-y-3 text-sm text-text-muted leading-relaxed mb-5">
                <p>Tiers are recalculated monthly using a <span className="font-semibold text-text-main">trailing 3-month average</span> of active experts. An Active Expert has completed at least one job in the last 30 days. Tier changes take effect on the 1st of each month.</p>
                <div className="bg-surface border border-text-muted/10 rounded-xl p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-text-muted/50 mb-2">Example</p>
                  <p>Month 1: 22 | Month 2: 24 | Month 3: 26 → Average = (22+24+26) ÷ 3 = <span className="font-semibold text-text-main">24 → Tier 2</span></p>
                </div>
              </div>
              <SubHeading title="6.3 Tier Benefits Detailed" />
              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="w-full text-sm border-collapse min-w-120">
                  <thead>
                    <tr className="border-b border-text-muted/15">
                      <th className="text-left py-2 pr-4 text-[10px] font-black uppercase tracking-[0.25em] text-text-muted/50 pb-3">Benefit</th>
                      {["Tier 1", "Tier 2", "Tier 3", "Tier 4"].map((t) => (
                        <th key={t} className="text-center py-2 pr-4 text-[10px] font-black uppercase tracking-[0.25em] text-text-muted/50 pb-3">{t}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-text-muted/8">
                    {[
                      ["Base commission rates", true, true, true, true],
                      ["Performance bonus", "❌", "+5%", "+10%", "+15%"],
                      ["Priority support", false, true, true, true],
                      ["Monthly recognition", false, true, true, true],
                      ["Recruit sub-TAS", false, false, true, true],
                      ["Team dashboard", false, false, true, true],
                      ["Sub-TAS overrides", "❌", "❌", "0.1%", "0.2%"],
                      ["Sub-TAS one-time bonus", "❌", "❌", "₦500", "₦1,000"],
                      ["Leaderboard access", false, false, false, true],
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-primary/2 transition-colors duration-150">
                        <td className="py-3 pr-4 font-semibold text-text-main">{row[0] as string}</td>
                        {[row[1], row[2], row[3], row[4]].map((cell, j) => (
                          <td key={j} className="py-3 pr-4 text-center">
                            {typeof cell === "boolean" ? (
                              cell
                                ? <Check size={14} className="text-green-600 mx-auto" />
                                : <X size={14} className="text-red-400 mx-auto" />
                            ) : (
                              <span className="text-text-muted text-sm">{cell as string}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 07 Sub-TAS */}
            <div id="sub-tas" className="scroll-mt-28">
              <SectionHeading id="sub-tas" number="07" title="Sub-TAS Recruitment (Tier 3+ Only)" />
              <p className="text-sm text-text-muted leading-relaxed mb-5">Only Tier 3 (Master TAS) and Tier 4 (Regional Lead) TAS agents may recruit Sub-TAS agents.</p>
              <SubHeading title="7.2 Sub-TAS Override Compensation" />
              <Table
                headers={["Your Tier", "Override Rate", "One-Time Bonus", "Calculation Basis"]}
                rows={[
                  ["Tier 3 (Master)", "0.1%", "₦500 per expert recruited by Sub-TAS", "Sub-TAS's job commissions"],
                  ["Tier 4 (Regional Lead)", "0.2%", "₦1,000 per expert recruited by Sub-TAS", "Sub-TAS's job commissions"],
                ]}
              />
              <SubHeading title="7.3 Override Calculation Example — Tier 4 with 5 Sub-TAS" />
              <div className="border border-text-muted/10 rounded-xl p-5 mb-5">
                {[
                  ["Sub-TAS agents", "5"],
                  ["Total experts recruited by Sub-TAS", "40"],
                  ["One-time override (₦1,000 × 40)", "₦40,000"],
                  ["Monthly job value from Sub-TAS experts", "₦2,000,000"],
                  ["Ongoing override (0.2% × ₦2,000,000)", "₦4,000/month"],
                  ["Total monthly override", "₦4,000"],
                ].map(([label, val], i) => (
                  <div key={i} className={`flex justify-between py-2.5 text-sm ${i < 5 ? "border-b border-text-muted/8" : "font-bold"}`}>
                    <span className={i === 5 ? "text-text-main font-bold" : "text-text-muted"}>{label}</span>
                    <span className={i === 5 ? "text-primary font-black" : "font-semibold text-text-main"}>{val}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <AccordionItem title="7.4 Sub-TAS Relationship Terms">
                  <BulletList items={["Sub-TAS must agree to be associated with you", "Sub-TAS may terminate the association at any time with 7 days' notice", "You may terminate a Sub-TAS association for violation of this Agreement", "Upon termination, you cease earning overrides from that Sub-TAS"]} />
                </AccordionItem>
                <AccordionItem title="7.5 Sub-TAS Prohibitions">
                  <BulletList items={["You may not charge Sub-TAS fees to join your team", "You may not require Sub-TAS to share their commissions", "You may not mislead Sub-TAS about potential earnings"]} />
                </AccordionItem>
              </div>
            </div>

            {/* 08 Referral Tools */}
            <div id="tools" className="scroll-mt-28">
              <SectionHeading id="tools" number="08" title="Referral Tools & Materials" />
              <SubHeading title="8.1 Provided Tools" />
              <Table
                headers={["Tool", "Description", "Access"]}
                rows={[
                  ["Referral Link", "Unique URL (insmartio.io/join/TAS-XXXXX)", "TAS Dashboard"],
                  ["Referral Code", "Unique alphanumeric code", "TAS Dashboard"],
                  ["Digital Referral Cards", "Customizable images for social media", "TAS Dashboard"],
                  ["Physical Referral Cards", "Printed cards (Tier 3+ only, upon request)", "Order via TAS Dashboard"],
                  ["Message Templates", "Pre-written recruitment messages", "TAS Dashboard"],
                  ["Analytics Dashboard", "Click and conversion tracking", "TAS Dashboard"],
                ]}
              />
              <div className="space-y-2 mt-4">
                <AccordionItem title="8.2 Permitted Use of Tools">
                  <BulletList items={["Share referral link via WhatsApp, SMS, email, and social media", "Distribute physical referral cards in person", "Use message templates to recruit potential Experts", "Display referral QR code at events or in your business"]} />
                </AccordionItem>
                <AccordionItem title="8.3 Prohibited Use of Tools">
                  <BulletList items={["Do NOT spam referral links", "Do NOT post on unrelated websites or forums", "Do NOT use misleading tactics to generate clicks", "Do NOT sell or transfer referral cards", "Do NOT create fake accounts using your own referral link"]} />
                </AccordionItem>
                <AccordionItem title="8.5 TAS Referral Code Validation">
                  <div className="space-y-3">
                    <BulletList items={["Each TAS receives a unique referral code (format: TAS-XXXXX)", "Experts must enter this code during registration (required field)", "The system validates the code against active TAS agents", "Invalid codes display an error message"]} />
                    <Table
                      headers={["Scenario", "Result"]}
                      rows={[
                        ["Valid code from active TAS", <span key="v1" className="flex items-center gap-1 text-green-600"><Check size={12} />Code accepted, expert linked</span>],
                        ["Valid code from inactive TAS", <span key="v2" className="text-amber-600">⚠ Warning: This TAS is inactive. You can still register.</span>],
                        ["Invalid code (does not exist)", <span key="v3" className="flex items-center gap-1 text-red-500"><X size={12} />Error: Invalid TAS code. Please check and try again.</span>],
                        ["No code entered", "User selects 'I don't have a code' → registered without TAS link"],
                      ]}
                    />
                  </div>
                </AccordionItem>
                <AccordionItem title="8.6 TAS Referral Link Expiry">
                  <BulletList items={["Referral links never expire", "Links remain active for the duration of your TAS status", "Upon termination, your referral link is deactivated", "Experts who click a terminated TAS's link will see: 'This TAS is no longer active. You can still register.'"]} />
                </AccordionItem>
                <AccordionItem title="8.7 TAS Physical Card Ordering Process">
                  <div className="space-y-3">
                    <p className="font-semibold text-text-main text-xs">Eligibility: Tier 3+ TAS only</p>
                    <div className="space-y-2">
                      {["Navigate to TAS Dashboard → Referral Tools → Physical Cards", "Select quantity (50, 100, or 200 cards)", "Preview your personalized card (includes name, TAS ID, QR code)", "Enter shipping address (must be within Nigeria)", "Confirm order"].map((step, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <span className="text-[9px] font-black text-primary shrink-0 mt-0.5">{i + 1}.</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3 mt-3">
                      <div className="bg-surface border border-text-muted/10 rounded-lg p-3">
                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-text-muted/50 mb-1">Delivery</p>
                        <p>Processing: 5–7 days + Delivery: 3–5 days = 8–12 business days total</p>
                      </div>
                      <div className="bg-surface border border-text-muted/10 rounded-lg p-3">
                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-text-muted/50 mb-1">Cost</p>
                        <p>First order (50 cards): FREE. Subsequent: ₦5,000 per 50 cards</p>
                      </div>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem title="8.8 TAS Training & Support">
                  <div className="space-y-3">
                    <Table
                      headers={["Material", "Format", "Access"]}
                      rows={[
                        ["TAS Handbook", "PDF", "TAS Dashboard"],
                        ["Video tutorials", "MP4", "TAS Dashboard"],
                        ["Pitch deck", "PDF/PPT", "TAS Dashboard"],
                        ["FAQ document", "PDF", "TAS Dashboard"],
                        ["Message templates", "Text", "TAS Dashboard"],
                      ]}
                    />
                    <p className="font-semibold text-text-main text-xs mt-2">Live Support:</p>
                    <BulletList items={["TAS WhatsApp Group (invite-only)", "Monthly training calls (1 hour, recorded)", "Dedicated TAS support line: +234 800 INSMARTIO (ext. 2)"]} />
                  </div>
                </AccordionItem>
                <AccordionItem title="8.9 TAS Leaderboard">
                  <div className="space-y-3">
                    <Table
                      headers={["Feature", "Description"]}
                      rows={[
                        ["National Leaderboard", "Ranks all TAS agents by monthly earnings"],
                        ["Regional Leaderboard", "Ranks TAS agents by region (Lagos, Abuja, PH, etc.)"],
                        ["All-Time Leaderboard", "Lifetime earnings rankings"],
                        ["Weekly Reset", "National leaderboard resets weekly"],
                        ["Monthly Prizes", "Top 3 earners receive bonus payments"],
                      ]}
                    />
                    <Table
                      headers={["Rank", "Prize"]}
                      rows={[
                        ["1st Place", "₦50,000 + Super TAS Badge"],
                        ["2nd Place", "₦30,000 + Gold TAS Badge"],
                        ["3rd Place", "₦20,000 + Silver TAS Badge"],
                      ]}
                    />
                  </div>
                </AccordionItem>
                <AccordionItem title="8.10 TAS Blacklist Policy">
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-text-main text-xs mb-2">Grounds for Blacklisting:</p>
                      <BulletList items={["Creating fake Expert accounts", "Fraudulent verification documents", "Harassment of potential Experts", "Selling referral links or cards", "Multiple policy violations"]} />
                    </div>
                    <div>
                      <p className="font-semibold text-text-main text-xs mb-2">Consequences:</p>
                      <BulletList items={["Permanent ban from TAS Program", "Forfeiture of all unpaid commissions", "Clawback of registration bonuses (fraud cases)", "Ban from inSmartio platform (all user types)"]} />
                    </div>
                    <p className="text-xs text-text-muted/60">Appeal must be submitted within 14 days. Appeal decision is final.</p>
                  </div>
                </AccordionItem>
              </div>
            </div>

            {/* 09 Payment Terms */}
            <div id="payment" className="scroll-mt-28">
              <SectionHeading id="payment" number="09" title="Payment Terms & Schedule" />
              <SubHeading title="9.1 Payment Schedule" />
              <Table
                headers={["Payment Type", "Calculation Period", "Payment Date"]}
                rows={[
                  ["Registration Bonus", "Upon Expert verification", "Within 7 days"],
                  ["Model 2 Commissions", "Previous month (1st–last)", "By 10th of following month"],
                  ["Model 1 Commissions", "Previous month (1st–last)", "By 10th of following month"],
                  ["Tier Bonus", "Previous month (1st–last)", "By 10th of following month"],
                  ["Sub-TAS Overrides", "Previous month (1st–last)", "By 10th of following month"],
                ]}
              />
              <div className="space-y-3 mt-5 text-sm text-text-muted leading-relaxed">
                <p><span className="font-semibold text-text-main">9.2 Payment Method: </span>All payments are made via bank transfer to your registered bank account in Nigerian Naira (₦). Bank details must match your registered name (for BVN verification).</p>
                <p><span className="font-semibold text-text-main">9.3 Minimum Payout: </span>Minimum payout amount is ₦2,000. Amounts below roll over to the next month. No maximum payout limit.</p>
                <p><span className="font-semibold text-text-main">9.4 Payment Statement: </span>You receive a monthly earnings statement including total earnings, breakdown by type, number of active experts, and pending vs. paid amounts.</p>
                <p><span className="font-semibold text-text-main">9.5 Payment Disputes: </span>Disputes must be submitted within 30 days of payment date to <span className="text-primary">tas-payments@insmartio.io</span>. We will investigate and respond within 14 days.</p>
              </div>
            </div>

            {/* 10 Code of Conduct */}
            <div id="conduct" className="scroll-mt-28">
              <SectionHeading id="conduct" number="10" title="TAS Obligations & Code of Conduct" />
              <SubHeading title="10.1 Required Conduct" />
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800/30 rounded-xl p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green-700 dark:text-green-400 mb-3">Do&apos;s</p>
                  <BulletList items={["Honestly represent inSmartio", "Provide accurate information", "Assist Experts with registration", "Maintain professional communication", "Protect Expert privacy", "Follow platform guidelines", "Encourage Experts to perform quality work", "Report suspicious activity to inSmartio"]} />
                </div>
                <div className="border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800/30 rounded-xl p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 dark:text-red-400 mb-3">Don&apos;ts</p>
                  <BulletList items={["Mislead potential Experts about earnings", "Guarantee specific income amounts", "Fill out forms for Experts", "Harass or pressure anyone to join", "Share Expert information without consent", "Recruit through misleading tactics", "Recruit unqualified individuals just for bonus", "Create fake Expert accounts"]} />
                </div>
              </div>
              <SubHeading title="10.2 Specific Prohibitions & Consequences" />
              <Table
                headers={["Prohibited Activity", "Consequence"]}
                rows={[
                  ["Fake Referrals (creating fake Expert accounts)", "Immediate termination, forfeit all commissions, legal action"],
                  ["Poaching (encouraging Experts to leave platform)", "Termination"],
                  ["Misrepresentation (claiming to be inSmartio employee)", "Warning → Termination"],
                  ["Harassment of potential Experts", "Warning → Termination"],
                  ["Spamming", "Warning → Termination"],
                  ["Registering same Expert multiple times", "Immediate termination, clawback of all bonuses"],
                  ["Selling referral links or cards", "Immediate termination"],
                ]}
              />
              <p className="text-sm text-text-muted mt-4 leading-relaxed">
                <span className="font-semibold text-text-main">10.3 Reporting Violations: </span>
                Report unethical behavior to <span className="text-primary">tas-compliance@insmartio.io</span> or WhatsApp: +234 800 INSMARTIO. Reports are confidential.
              </p>
            </div>

            {/* 11 Confidentiality */}
            <div id="confidentiality" className="scroll-mt-28">
              <SectionHeading id="confidentiality" number="11" title="Confidentiality" />
              <div className="space-y-4 text-sm text-text-muted leading-relaxed">
                <p><span className="font-semibold text-text-main">11.1 Confidential Information includes: </span>Expert personal information, inSmartio business strategies, commission structures and rates, and internal platform data.</p>
                <p><span className="font-semibold text-text-main">11.2 Your Obligations: </span>Do not disclose confidential information to third parties. Use it only for TAS activities. Protect it with reasonable security measures. Return or destroy upon termination.</p>
                <p><span className="font-semibold text-text-main">11.3 Exceptions: </span>Information that is or becomes publicly available through no fault of yours, was already in your possession, was independently developed by you, or is required by law to be disclosed.</p>
              </div>
            </div>

            {/* 12 IP */}
            <div id="ip" className="scroll-mt-28">
              <SectionHeading id="ip" number="12" title="Intellectual Property" />
              <div className="space-y-4 text-sm text-text-muted leading-relaxed">
                <p><span className="font-semibold text-text-main">12.1 Company IP: </span>The inSmartio name, logo, brand assets, and referral materials are exclusively owned by inSmartio. You may not use, modify, reproduce, or distribute inSmartio IP except as authorized.</p>
                <p><span className="font-semibold text-text-main">12.2 Your IP: </span>You retain ownership of your own marketing materials. You grant inSmartio a license to use your success stories for marketing purposes.</p>
                <p><span className="font-semibold text-text-main">12.3 TAS Badge: </span>You may display your TAS badge on social media and marketing materials. You may not modify it. The badge must be removed upon termination.</p>
              </div>
            </div>

            {/* 13 Term & Termination */}
            <div id="termination" className="scroll-mt-28">
              <SectionHeading id="termination" number="13" title="Term & Termination" />
              <div className="space-y-4 text-sm text-text-muted leading-relaxed">
                <p><span className="font-semibold text-text-main">13.1 Term: </span>This Agreement begins on the date you are approved as a TAS Agent and continues until terminated.</p>
                <p><span className="font-semibold text-text-main">13.2 Termination by You: </span>You may terminate at any time by providing 7 days&apos; written notice to <span className="text-primary">tas@insmartio.io</span> or deleting your TAS account via app settings.</p>
                <div>
                  <p className="mb-2"><span className="font-semibold text-text-main">13.3 Termination by Company: </span>We may terminate immediately for:</p>
                  <BulletList items={["Violation of Code of Conduct (Section 10)", "Fraudulent activity", "Criminal conviction", "Extended inactivity (no recruitment for 6+ months)"]} />
                </div>
                <p><span className="font-semibold text-text-main">13.4 Suspension: </span>We may temporarily suspend your TAS account pending investigation of suspected fraud, policy violations, or complaints from Experts.</p>
              </div>
            </div>

            {/* 14 Effects of Termination */}
            <div id="effects" className="scroll-mt-28">
              <SectionHeading id="effects" number="14" title="Effects of Termination" />
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    title: "Voluntary Termination",
                    rows: [
                      ["Registration bonuses already paid", true],
                      ["Pending registration bonuses", false],
                      ["Future job commissions", false],
                      ["Future subscription commissions", false],
                      ["Accrued but unpaid (legitimate)", true],
                    ],
                  },
                  {
                    title: "By Company (Non-Fraud)",
                    rows: [
                      ["Registration bonuses already paid", true],
                      ["Pending registration bonuses", false],
                      ["Future job commissions", false],
                      ["Accrued but unpaid commissions", true],
                    ],
                  },
                  {
                    title: "Termination for Fraud",
                    rows: [
                      ["Registration bonuses already paid", false],
                      ["Pending registration bonuses", false],
                      ["Future job commissions", false],
                      ["Accrued but unpaid commissions", false],
                    ],
                  },
                ].map(({ title, rows }) => (
                  <div key={title} className="border border-text-muted/10 rounded-xl p-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-4">{title}</p>
                    {rows.map(([label, keep]) => (
                      <StatusRow key={label as string} label={label as string} keep={keep as boolean} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-text-muted leading-relaxed">
                <span className="font-semibold text-text-main">14.4 Post-Termination: </span>
                Return or destroy confidential information. Stop using inSmartio trademarks and TAS badge. Remove any inSmartio branding from your materials. Cease all TAS activities.
              </div>
            </div>

            {/* 15 Indemnification */}
            <div id="indemnification" className="scroll-mt-28">
              <SectionHeading id="indemnification" number="15" title="Indemnification" />
              <p className="text-sm text-text-muted leading-relaxed mb-4">You agree to indemnify, defend, and hold harmless inSmartio, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from:</p>
              <BulletList items={["Your breach of this Agreement", "Your violation of any law or third-party rights", "Your negligent or fraudulent acts", "Your recruitment activities", "Any misrepresentation you make to potential Experts"]} />
            </div>

            {/* 16 Liability */}
            <div id="liability" className="scroll-mt-28">
              <SectionHeading id="liability" number="16" title="Limitation of Liability" />
              <div className="space-y-4 text-sm text-text-muted leading-relaxed">
                <p><span className="font-semibold text-text-main">16.1 Our Liability: </span>inSmartio&apos;s total liability for any claim arising from this Agreement shall not exceed the total commissions paid to you in the 6 months preceding the claim, or ₦100,000, whichever is lower.</p>
                <p><span className="font-semibold text-text-main">16.2 No Consequential Damages: </span>Neither party shall be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, even if advised of the possibility of such damages.</p>
                <div className="border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/30 rounded-xl p-5">
                  <p className="font-semibold text-amber-800 dark:text-amber-300 text-sm mb-1">16.3 TAS Earnings Disclaimer</p>
                  <p className="text-amber-800/80 dark:text-amber-300/80">We do not guarantee any minimum earnings. Your earnings depend entirely on your recruitment efforts. Past performance does not guarantee future results.</p>
                </div>
              </div>
            </div>

            {/* 17 Governing Law */}
            <div id="governing-law" className="scroll-mt-28">
              <SectionHeading id="governing-law" number="17" title="Governing Law & Dispute Resolution" />
              <p className="text-sm text-text-muted leading-relaxed mb-5">This Agreement shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.</p>
              <div className="space-y-3">
                {[
                  ["Step 1 — Internal Resolution", "Contact tas-support@insmartio.io with a detailed description of the dispute. We will respond within 14 days."],
                  ["Step 2 — Mediation", "If internal resolution fails, either party may request mediation in Lagos, Nigeria. Costs are shared equally."],
                  ["Step 3 — Arbitration", "If mediation fails, disputes shall be resolved by binding arbitration in accordance with the Arbitration and Conciliation Act, Cap A18, Laws of the Federation of Nigeria, 2004. Decision is final and binding."],
                ].map(([title, desc], i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="shrink-0 w-7 h-7 rounded-full border border-primary/20 flex items-center justify-center mt-0.5">
                      <span className="text-[9px] font-black text-primary">{i + 1}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-text-main text-sm mb-1">{title}</p>
                      <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-text-muted mt-4 leading-relaxed">
                <span className="font-semibold text-text-main">17.3 Small Claims: </span>
                Either party may bring claims in small claims court in Lagos, Nigeria, for disputes under ₦500,000.
              </p>
            </div>

            {/* 18–29 General Provisions */}
            <div id="general" className="scroll-mt-28">
              <SectionHeading id="general" number="18–29" title="General Provisions" />
              <div className="space-y-2">
                {[
                  { title: "18. Entire Agreement", desc: "This Agreement constitutes the entire agreement between you and inSmartio regarding the TAS Program. In the event of a conflict between this Agreement and the general Terms of Service, this Agreement shall control for TAS-specific matters." },
                  { title: "19. Amendments", desc: "We may amend this Agreement from time to time. Material changes will be notified via email, in-app notification, or TAS Dashboard announcement. If you do not agree, you may terminate within 30 days of notice. Continued participation after 30 days constitutes acceptance." },
                  { title: "20. Notices", desc: "To inSmartio: legal@insmartio.io, tas@insmartio.io, or disputes@insmartio.io, or Avacado Estate, Abijo, G.R.A, Ibeju Lekki Epe, Lagos. To you: via email, in-app notification, or SMS. Notices deemed received 24 hours after sending (email/SMS) or 5 days after mailing." },
                  { title: "21. Counterparts", desc: "This Agreement may be executed electronically. Your submission of a TAS application and acceptance of these terms constitutes your electronic signature." },
                  { title: "24. Force Majeure", desc: "Neither party shall be liable for failure or delay caused by Acts of God, war, terrorism, government sanction, labor disputes, electricity or internet failure, or pandemics and public health emergencies. The affected party must give prompt notice." },
                  { title: "25. Severability", desc: "If any provision of this Agreement is found to be invalid, illegal, or unenforceable, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect." },
                  { title: "26. Waiver", desc: "Our failure to enforce any right or provision shall not constitute a waiver. Any waiver must be in writing and signed by an authorized representative of inSmartio." },
                  { title: "27. Assignment", desc: "You may not assign or transfer this Agreement without our prior written consent. We may assign or transfer this Agreement, in whole or in part, without your consent." },
                  { title: "28. No Third-Party Beneficiaries", desc: "This Agreement is for the benefit of you and inSmartio only. No third party (including any Expert recruited by you) shall have any rights under this Agreement." },
                  { title: "29. Survival", desc: "The following sections shall survive termination: Section 11 (Confidentiality), Section 12 (Intellectual Property), Section 14 (Effects of Termination), Section 15 (Indemnification), Section 16 (Limitation of Liability), and Section 17 (Governing Law)." },
                ].map(({ title, desc }) => (
                  <AccordionItem key={title} title={title}>
                    <p>{desc}</p>
                  </AccordionItem>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div id="contact" className="scroll-mt-28">
              <div className="flex items-baseline gap-4 mb-6 pt-2">
                <span className="text-[10px] font-black text-text-muted/30 tracking-widest shrink-0">22</span>
                <h2 className="font-display font-bold text-text-main text-xl md:text-2xl tracking-tight">Contact Information</h2>
              </div>
              <div className="bg-surface border border-text-muted/10 rounded-2xl p-5 md:p-8">
                <p className="font-semibold text-text-main mb-4">inSmartio Services Limited</p>
                <div className="grid sm:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-2">Address</p>
                    <p className="text-text-muted">Avacado Estate, Abijo, G.R.A, Ibeju Lekki Epe, Express way, Lagos, Nigeria</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-2">TAS Email Contacts</p>
                    <div className="space-y-1.5">
                      {[
                        ["Applications", "tas-apply@insmartio.io"],
                        ["Support", "tas@insmartio.io"],
                        ["Payments", "tas-payments@insmartio.io"],
                        ["Compliance", "tas-compliance@insmartio.io"],
                      ].map(([label, email]) => (
                        <div key={label} className="flex flex-wrap gap-2">
                          <span className="text-text-muted/50 shrink-0">{label}:</span>
                          <span className="text-primary font-semibold">{email}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-2">Phone</p>
                    <p className="text-text-main font-semibold">+234 800 INSMARTIO (0800 435763)</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-2">Hours</p>
                    <p className="text-text-muted">Monday – Saturday, 9 AM – 6 PM WAT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5 md:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-primary mb-5">
                Acknowledgment & Signature
              </p>
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                By applying for and participating in the inSmartio TAS Program, you acknowledge that:
              </p>
              <div className="space-y-3">
                {[
                  "You have read and understood this entire Agreement",
                  "You agree to be bound by all terms and conditions",
                  "You understand that you are an independent contractor, not an employee",
                  "You understand that earnings are not guaranteed",
                  "You consent to background verification",
                  "You agree to the dispute resolution process",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-primary" />
                    </div>
                    <p className="text-text-main text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-text-muted/10 pt-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-text-muted/40 mb-1">Document Control</p>
                  <p className="text-sm text-text-muted">Version 1.0 — Initial release by inSmartio Legal, March 2026</p>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/40 sm:text-right">
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