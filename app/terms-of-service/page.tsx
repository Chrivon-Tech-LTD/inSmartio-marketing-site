"use client";

import { useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { FileText, ChevronDown, Check, X } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const sections = [
  { id: "intro", number: "01", title: "Introduction & Acceptance" },
  { id: "definitions", number: "02", title: "Definitions" },
  { id: "eligibility", number: "03", title: "Eligibility & Account Registration" },
  { id: "accounts", number: "04", title: "User Accounts & Security" },
  { id: "client-terms", number: "05", title: "Client Terms & Conditions" },
  { id: "expert-terms", number: "06", title: "Expert Terms & Conditions" },
  { id: "tas-terms", number: "07", title: "TAS Terms & Conditions" },
  { id: "payment", number: "08", title: "Payment Terms" },
  { id: "verification", number: "09", title: "Verification & Trust System" },
  { id: "bidding", number: "10", title: "Bidding & Negotiation" },
  { id: "completion", number: "11", title: "Job Completion & Payment Release" },
  { id: "cancellation", number: "12", title: "Cancellation & Refund Policy" },
  { id: "disputes", number: "13", title: "Dispute Resolution" },
  { id: "reviews", number: "14", title: "Reviews & Ratings" },
  { id: "prohibited", number: "15", title: "Prohibited Activities" },
  { id: "ip", number: "16", title: "Intellectual Property" },
  { id: "liability", number: "17", title: "Limitation of Liability" },
  { id: "indemnification", number: "18", title: "Indemnification" },
  { id: "termination", number: "19", title: "Termination & Suspension" },
  { id: "third-party", number: "20", title: "Third-Party Links & Services" },
  { id: "force-majeure", number: "21", title: "Force Majeure" },
  { id: "governing-law", number: "22", title: "Governing Law" },
  { id: "modifications", number: "23", title: "Modifications to Terms" },
  { id: "general", number: "24–32", title: "General Provisions" },
];

function SectionHeading({ id, number, title }: { id: string; number: string; title: string }) {
  return (
    <div id={id} className="flex items-baseline gap-3 mb-6 pt-2 scroll-mt-28">
      <span className="text-[10px] font-black text-text-muted/30 tabular-nums tracking-widest shrink-0">{number}</span>
      <h2 className="font-display font-bold text-text-main text-lg md:text-2xl tracking-tight">{title}</h2>
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="overflow-x-auto my-5 -mx-1">
      <table className="w-full text-xs md:text-sm border-collapse min-w-120">
        <thead>
          <tr className="border-b border-text-muted/15">
            {headers.map((h) => (
              <th key={h} className="text-left py-2 pr-4 md:pr-6 text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 pb-3">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-text-muted/8">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-primary/2 transition-colors duration-150">
              {row.map((cell, j) => (
                <td key={j} className="py-3 pr-4 md:pr-6 text-text-muted leading-relaxed align-top">
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
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left group">
        <span className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors duration-200 pr-4">{title}</span>
        <ChevronDown size={14} className={`text-text-muted/40 transition-transform duration-300 shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-5 text-text-muted text-sm leading-relaxed">{children}</div>}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 text-sm text-text-muted w-full">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 min-w-0">
          <span className="w-1 h-1 rounded-full bg-primary/50 shrink-0 mt-2" />
          <span className="wrap-break-word min-w-0 flex-1">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SubHeading({ title }: { title: string }) {
  return <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-3 mt-6">{title}</p>;
}

export default function TermsOfServicePage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [activeSection, setActiveSection] = useState("intro");

  return (
    <main className="min-h-screen bg-background transition-colors duration-300">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <div ref={heroRef} className="border-b border-text-muted/10 pt-20 md:pt-36 pb-12 md:pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <motion.div
                custom={0} variants={fadeInUp} initial="hidden" animate={heroInView ? "visible" : "hidden"}
                className="flex items-center gap-4 mb-7"
              >
                <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 1, delay: 0.2 }} className="h-px bg-secondary/50" />
                <span className="text-secondary text-[10px] font-black uppercase tracking-[0.4em]">Legal — Terms</span>
              </motion.div>

              <motion.h1
                custom={1} variants={fadeInUp} initial="hidden" animate={heroInView ? "visible" : "hidden"}
                className="font-display font-bold text-text-main text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.06] tracking-tight mb-6"
              >
                Terms of <br /><span className="text-primary italic">Service.</span>
              </motion.h1>

              <motion.p
                custom={2} variants={fadeInUp} initial="hidden" animate={heroInView ? "visible" : "hidden"}
                className="text-text-muted text-sm md:text-lg leading-relaxed max-w-xl font-medium"
              >
                These Terms govern your use of inSmartio as a Client, Expert, or Talent Acquisition Specialist.
                By using our platform, you agree to be bound by this legally binding agreement.
              </motion.p>
            </div>

            <motion.div
              custom={3} variants={fadeInUp} initial="hidden" animate={heroInView ? "visible" : "hidden"}
              className="lg:col-span-4 flex flex-col gap-4 lg:items-end"
            >
              <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-2 self-start lg:self-auto">
                <FileText size={13} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Legally Binding Agreement</span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-1 w-full lg:w-auto">
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
              </div>
            </motion.div>
          </div>

        
        </div>
      </div>

      {/* ── BODY ──────────────────────────────────────────────────── */}
      <div className=" max-w-7xl mx-auto px-4 md:px-6 py-12 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Sticky TOC */}
          <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-28">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-text-muted/40 mb-5">Table of Contents</p>
            <nav className="space-y-0 max-h-[70vh] overflow-y-auto pr-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-3 py-2 text-xs transition-colors duration-200 border-l-2 pl-3 ${activeSection === section.id
                    ? "border-primary text-primary font-semibold"
                    : "border-transparent text-text-muted/50 hover:text-text-main hover:border-text-muted/30"
                    }`}
                >
                  <span className="tabular-nums text-[9px] text-text-muted/30 shrink-0">{section.number}</span>
                  <span className="leading-snug">{section.title}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-9 space-y-12 md:space-y-16 w-full max-w-70 mx-auto sm:max-w-7xl">

            {/* Quick Reference Banner */}
            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5 md:p-8 w-fit sm:w-full overflow-hidden">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-primary mb-6 wrap-break-word">
                Terms Summary — Quick Reference
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-fit sm:w-full">
                {[
                  { role: "For Clients", items: ["Post jobs for free", "Compare bids from verified experts", "Pay via escrow (protected) or cash", "Funds held until you approve work", "Dispute resolution available"] },
                  { role: "For Experts", items: ["Must verify (Tier 1, 2, or 3)", "Choose subscription or commission model", "Get paid within 24hrs of approval", "Build reputation through reviews"] },
                  { role: "For TAS", items: ["Earn ₦7,000 per verified expert", "Earn 1% of jobs (Model 2) or ₦1,000/mo (Model 1)", "Tier bonuses up to +15%", "Recruit sub-TAS at Tier 3+"] },
                ].map(({ role, items }) => (
                  <div key={role} className="pb-4 sm:pb-0 border-b border-primary/10 last:border-b-0 sm:border-b-0 min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-3">{role}</p>
                    <BulletList items={items} />
                  </div>
                ))}
              </div>
            </div>

            {/* 01 Introduction */}
            <div id="intro" className="scroll-mt-28">
              <SectionHeading id="intro" number="01" title="Introduction & Acceptance" />
              <div className="space-y-4 text-text-muted text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                <p>Welcome to inSmartio (&quot;Platform&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of the inSmartio mobile application, website, and related services (collectively, the &quot;Services&quot;).</p>
                <p>By registering for, accessing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.</p>
                <div className="border-l-2 border-primary pl-5 py-1 my-5">
                  <p className="text-text-main font-medium italic">
                    These Terms constitute a legally binding agreement between you and inSmartio (CHRIVON TECH SOLUTIONS Limited).
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
                  ["Platform", "The inSmartio mobile application, website, and related services"],
                  ["Client", "A user who seeks services from Experts on the Platform"],
                  ["Expert", "A verified service provider who offers services on the Platform"],
                  ["TAS", "Talent Acquisition Specialist – a user who recruits Experts and earns commissions"],
                  ["User", "Any person who accesses or uses the Platform (Client, Expert, or TAS)"],
                  ["Job", "A service request posted by a Client"],
                  ["Bid", "A price quote submitted by an Expert for a Job"],
                  ["Contract", "The agreement between a Client and an Expert for a specific Job"],
                  ["Payment Protected", "Escrow payment method where funds are held by inSmartio until job completion"],
                  ["Cash Payment", "Direct payment from Client to Expert without Platform holding funds"],
                  ["Verification Tier", "The level of verification completed by an Expert (Tier 1, 2, or 3)"],
                  ["TAS ID", "Unique identifier assigned to each approved TAS agent"],
                  ["Sub-TAS", "A TAS agent recruited by another TAS agent (Tier 3+ only)"],
                  ["Commission", "Earnings paid to TAS agents for recruiting Experts"],
                  ["Escrow", "Funds held by inSmartio in a designated account pending job completion"],
                  ["Dispute", "A disagreement between a Client and an Expert regarding a Job"],
                ]}
              />
            </div>

            {/* 03 Eligibility */}
            <div id="eligibility" className="scroll-mt-28">
              <SectionHeading id="eligibility" number="03" title="Eligibility & Account Registration" />
              <div className="space-y-4 text-sm text-text-muted leading-relaxed">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    ["3.1 Age Requirement", "You must be at least 18 years old to register or use our Services. By using the Platform, you represent and warrant that you are at least 18 years of age."],
                    ["3.2 Legal Capacity", "You must have the legal capacity to enter into a binding contract in Nigeria."],
                    ["3.3 Business Entities", "Businesses and organizations may register. The individual registering on behalf of an entity warrants they have authority to bind that entity to these Terms."],
                    ["3.5 Registration Information", "You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete."],
                  ].map(([title, desc]) => (
                    <div key={title} className="border border-text-muted/10 rounded-xl p-4">
                      <p className="font-semibold text-text-main text-sm mb-2">{title}</p>
                      <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
                <div className="border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/30 rounded-xl p-5">
                  <p className="font-semibold text-amber-800 dark:text-amber-300 text-sm mb-2">3.4 Prohibited Persons</p>
                  <p className="text-amber-800/80 dark:text-amber-300/80 text-sm mb-3">You may not use the Platform if:</p>
                  <BulletList items={["You have been previously suspended or removed from the Platform", "You are located in a country subject to Nigerian sanctions", "You have been convicted of a felony involving fraud, theft, or violence"]} />
                </div>
              </div>
            </div>

            {/* 04 User Accounts */}
            <div id="accounts" className="scroll-mt-28">
              <SectionHeading id="accounts" number="04" title="User Accounts & Security" />
              <SubHeading title="4.1 Account Types" />
              <Table
                headers={["Account Type", "Description", "Access"]}
                rows={[
                  ["Client", "Seeks services", "Post jobs, receive bids, hire experts"],
                  ["Expert", "Offers services", "Bid on jobs, complete work, receive payments"],
                  ["TAS", "Recruits experts", "Earn commissions, track referrals, manage team"],
                ]}
              />
              <div className="space-y-3 text-sm text-text-muted leading-relaxed mt-4">
                <p><span className="font-semibold text-text-main">4.2 Mode Switching: </span>Users may hold multiple account types (e.g., Expert and TAS). The Platform allows switching between modes. Each mode has its own terms and obligations.</p>
                <p><span className="font-semibold text-text-main">4.3 Account Security: </span>You are responsible for maintaining the confidentiality of your login credentials. Do not share your password. Immediately notify us of any unauthorized account use. Log out after each session.</p>
                <p><span className="font-semibold text-text-main">4.4 Account Liability: </span>You are fully responsible for all activities that occur under your account, whether or not authorized by you.</p>
                <p><span className="font-semibold text-text-main">4.5 Phone Verification: </span>All accounts require phone number verification via OTP. You agree to receive SMS messages for verification and important notifications.</p>
              </div>
            </div>

            {/* 05 Client Terms */}
            <div id="client-terms" className="scroll-mt-28">
              <SectionHeading id="client-terms" number="05" title="Client Terms & Conditions" />
              <div className="space-y-2">
                <AccordionItem title="5.1 Posting Jobs">
                  <BulletList items={["Provide accurate and complete information about the Job", "Upload clear photos that accurately represent the work needed", "Set a realistic budget and timeline", "Do not post fraudulent, misleading, or illegal Job requests"]} />
                </AccordionItem>
                <AccordionItem title="5.2 Receiving Bids">
                  <BulletList items={["You may receive multiple bids from verified Experts", "You are not obligated to accept any bid", "You may negotiate prices and terms with Experts"]} />
                </AccordionItem>
                <AccordionItem title="5.3 Hiring an Expert">
                  <BulletList items={["When you accept a bid, a binding Contract is formed", "You agree to pay the agreed amount as per the selected payment method", "You agree to provide access to the Job location as scheduled"]} />
                </AccordionItem>
                <AccordionItem title="5.4 Client Obligations">
                  <BulletList items={["Be present or designate someone to be present during the Job", "Provide necessary utilities (water, electricity) if agreed", "Respond promptly to Expert communications", "Treat Experts with respect and dignity", "Pay the agreed amount upon satisfactory completion"]} />
                </AccordionItem>
                <AccordionItem title="5.5 Client Prohibitions">
                  <BulletList items={["Do not request services outside the agreed scope without additional compensation", "Do not attempt to take transactions off the Platform", "Do not harass, abuse, or discriminate against Experts", "Do not provide false information or fake reviews"]} />
                </AccordionItem>
              </div>
            </div>

            {/* 06 Expert Terms */}
            <div id="expert-terms" className="scroll-mt-28">
              <SectionHeading id="expert-terms" number="06" title="Expert Terms & Conditions" />
              <SubHeading title="6.2 Verification Tiers" />
              <Table
                headers={["Tier", "Badge", "Requirements", "Max Job Value"]}
                rows={[
                  ["Tier 1", "✅ Basic", "NIN only", "Up to ₦20,000"],
                  ["Tier 2", "✅✅ Verified", "NIN + BVN", "Up to ₦100,000"],
                  ["Tier 3", "✅✅✅ Expert+", "NIN + BVN + Guarantor + Police Clearance + ₦5,000 fee", "Unlimited"],
                ]}
              />
              <SubHeading title="6.3 Payment Models" />
              <Table
                headers={["Model", "Monthly Fee", "Commission", "Bids/Month", "Max Job Value", "Cash Payment"]}
                rows={[
                  ["Model 1 (Subscription)", "₦10,000", "0%", "10", "₦50,000", <span key="m1" className="flex items-center gap-1 text-green-600"><Check size={12} />Allowed</span>],
                  ["Model 2 (Commission)", "₦0", "10%", "Unlimited", "Based on tier", <span key="m2" className="flex items-center gap-1 text-red-500"><X size={12} />Digital only</span>],
                ]}
              />
              <div className="space-y-2 mt-4">
                <AccordionItem title="6.1 Registration & Verification Requirements">
                  <BulletList items={["Complete the registration process", "Choose a Verification Tier (Tier 1, 2, or 3)", "Submit required verification documents", "Pass verification checks (NIN, BVN, etc.)", "Agree to background checks (Tier 3)"]} />
                </AccordionItem>
                <AccordionItem title="6.4 Expert Obligations">
                  <BulletList items={["Perform services with reasonable skill and care", "Use appropriate materials and workmanship", "Commence work on the agreed start date", "Complete work by the agreed completion date", "Communicate any delays or issues immediately", "Respect Client's property and clean up after work", "Comply with all safety guidelines", "Upload proof of completion (photos) when required"]} />
                </AccordionItem>
                <AccordionItem title="6.5 Expert Prohibitions">
                  <BulletList items={["Do not subcontract work without Client consent", "Do not request payment outside the Platform for Payment Protected jobs", "Do not inflate prices after Client commitment", "Do not abandon jobs without valid reason"]} />
                </AccordionItem>
              </div>
            </div>

            {/* 07 TAS Terms */}
            <div id="tas-terms" className="scroll-mt-28">
              <SectionHeading id="tas-terms" number="07" title="TAS (Talent Acquisition Specialist) Terms & Conditions" />
              <SubHeading title="7.3 TAS Compensation" />
              <Table
                headers={["Compensation Type", "Amount", "Payment Timing"]}
                rows={[
                  ["Registration Bonus", "₦7,000 per verified Expert", "Within 7 days of Expert verification"],
                  ["Model 2 Commission", "1% of each Job value", "Monthly by 10th of following month"],
                  ["Model 1 Commission", "₦1,000 per month per active Expert", "Monthly by 10th of following month"],
                  ["Tier Bonus", "+5% to +15% on ALL earnings", "Monthly by 10th of following month"],
                ]}
              />
              <SubHeading title="7.4 TAS Tiers" />
              <Table
                headers={["Tier", "Active Experts", "Bonus", "Additional Benefits"]}
                rows={[
                  ["Tier 1 — Associate", "0–9", "0%", "Base rates"],
                  ["Tier 2 — Senior", "10–24", "+5%", "Priority support"],
                  ["Tier 3 — Master", "25–49", "+10%", "Can recruit sub-TAS"],
                  ["Tier 4 — Regional Lead", "50+", "+15%", "Higher override rates"],
                ]}
              />
              <SubHeading title="7.8 Sub-TAS Override Terms" />
              <Table
                headers={["Tier", "Override Rate", "One-Time Bonus", "Calculation Basis"]}
                rows={[
                  ["Tier 3 (Master TAS)", "0.1%", "₦500 per expert recruited by sub-TAS", "Sub-TAS's job commissions"],
                  ["Tier 4 (Regional Lead)", "0.2%", "₦1,000 per expert recruited by sub-TAS", "Sub-TAS's job commissions"],
                ]}
              />
              <div className="space-y-2 mt-4">
                <AccordionItem title="7.1 TAS Eligibility">
                  <BulletList items={["Be at least 18 years old", "Complete the TAS application process", "Pass identity verification (NIN required)", "Agree to these Terms and the separate TAS Agreement"]} />
                </AccordionItem>
                <AccordionItem title="7.2 TAS Application">
                  <BulletList items={["Applications are reviewed within 24–48 hours", "Approval is at our sole discretion", "Rejected applicants may reapply after 30 days"]} />
                </AccordionItem>
                <AccordionItem title="7.5 Sub-TAS (Tier 3+ Only)">
                  <BulletList items={["Master TAS may recruit other TAS agents as sub-TAS", "Sub-TAS must agree to be associated with the Master TAS", "Sub-TAS may terminate the association at any time", "Master TAS earns overrides on sub-TAS recruitment"]} />
                </AccordionItem>
                <AccordionItem title="7.6 TAS Obligations">
                  <BulletList items={["Recruit only qualified, legitimate Experts", "Do not make false or misleading claims about earning potential", "Do not harass or pressure potential Experts", "Do not create fake Expert accounts", "Maintain professional conduct at all times"]} />
                </AccordionItem>
                <AccordionItem title="7.7 TAS Termination">
                  <BulletList items={["TAS status may be terminated for violation of these Terms", "Upon termination, all future commissions are forfeited", "Registration bonuses already paid are not subject to clawback (except for fraud)"]} />
                </AccordionItem>
                <AccordionItem title="7.9 TAS Tier Recalculation">
                  <div className="space-y-2 text-sm text-text-muted">
                    <p>TAS tiers are recalculated monthly based on active Experts (who completed at least one job in the last 30 days), using a trailing 3-month average. Tier changes take effect on the 1st of each month.</p>
                    <div className="bg-surface border border-text-muted/10 rounded-xl p-4 mt-3">
                      <p className="font-semibold text-text-main text-xs mb-2">Example Calculation</p>
                      <p>If you have 22, 24, and 26 active experts over 3 months → Average = 24 → Tier 2. Next month: 26, 26, 28 → Average = 26.7 → Tier 3.</p>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem title="7.10 TAS Referral Link Terms">
                  <div className="space-y-3 text-sm text-text-muted">
                    <p>Each TAS receives a unique referral link (insmartio.io/join/TAS-XXXXX) shareable via WhatsApp, SMS, email, social media, or printed materials. TAS earns credit only when an expert registers using their link.</p>
                    <p className="font-semibold text-text-main">Prohibited Link Sharing:</p>
                    <BulletList items={["Do not spam referral links", "Do not post on unrelated websites or forums", "Do not use misleading tactics to generate clicks", "Violations may result in TAS termination"]} />
                  </div>
                </AccordionItem>
                <AccordionItem title="7.11 TAS Physical Card Terms">
                  <BulletList items={["Available to Tier 3+ TAS only", "Cards include TAS name, TAS ID, and QR code", "Cards are for legitimate recruitment purposes only", "Cards may not be sold or transferred", "Misuse of cards may result in TAS termination"]} />
                </AccordionItem>
              </div>
            </div>

            {/* 08 Payment Terms */}
            <div id="payment" className="scroll-mt-28">
              <SectionHeading id="payment" number="08" title="Payment Terms" />
              <SubHeading title="8.1 Payment Methods" />
              <Table
                headers={["Method", "Description", "Protection"]}
                rows={[
                  ["Payment Protected (Escrow)", "Client pays inSmartio; funds held until Client approves work", <span key="pp" className="flex items-center gap-1 text-green-600"><Check size={12} />Full protection</span>],
                  ["Cash Payment", "Client pays Expert directly", <span key="cp" className="flex items-center gap-1 text-red-500"><X size={12} />No Platform protection</span>],
                ]}
              />
              <SubHeading title="8.2 Payment Protected (Escrow) Process" />
              <div className="space-y-3 mb-6">
                {[
                  "Client pays agreed amount into inSmartio escrow account",
                  "Funds are held securely",
                  "Expert performs the work",
                  "Client approves completion",
                  "inSmartio releases payment to Expert within 24 hours",
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="shrink-0 w-7 h-7 rounded-full border border-primary/20 flex items-center justify-center">
                      <span className="text-[9px] font-black text-primary">{i + 1}</span>
                    </div>
                    <p className="text-sm text-text-muted">{step}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <AccordionItem title="8.3 Escrow Fees">
                  <BulletList items={["Platform commission: 10% of Job value (deducted from Expert payout)", "No additional fees for Clients"]} />
                </AccordionItem>
                <AccordionItem title="8.4 Cash Payment Process">
                  <BulletList items={["Client and Expert agree on cash payment", "Expert performs the work", "Client pays Expert directly in cash", "Both parties mark Job complete in the app"]} />
                </AccordionItem>
                <AccordionItem title="8.5 Subscription Payments (Model 1 Experts)">
                  <BulletList items={["Monthly subscription fee of ₦10,000", "Auto-renewing unless cancelled", "Cancellation takes effect at end of current billing period", "No refunds for partial months"]} />
                </AccordionItem>
                <AccordionItem title="8.6 TAS Payouts">
                  <BulletList items={["Registration bonuses paid within 7 days of Expert verification", "Job commissions paid monthly by the 10th", "Minimum payout: ₦2,000 (amounts below roll over)", "Payouts made to registered bank account"]} />
                </AccordionItem>
              </div>
            </div>

            {/* 09 Verification */}
            <div id="verification" className="scroll-mt-28">
              <SectionHeading id="verification" number="09" title="Verification & Trust System" />
              <div className="space-y-4 text-sm text-text-muted leading-relaxed">
                <p><span className="font-semibold text-text-main">9.1 Verification Process: </span>All Experts must complete verification based on their chosen tier. Verification includes NIN, BVN, and (for Tier 3) guarantor and police clearance. Verification may take 24–72 hours.</p>
                <p><span className="font-semibold text-text-main">9.2 Verification Badges: </span>Badges must be displayed prominently on all Expert profiles. Clients should check badges before hiring. inSmartio does not guarantee the accuracy of verification but makes reasonable efforts.</p>
                <p><span className="font-semibold text-text-main">9.3 Verification Revocation: </span>Verification may be revoked if false information is discovered. Experts may appeal revocation within 14 days.</p>
              </div>
            </div>

            {/* 10 Bidding */}
            <div id="bidding" className="scroll-mt-28">
              <SectionHeading id="bidding" number="10" title="Bidding & Negotiation" />
              <div className="space-y-4 text-sm text-text-muted leading-relaxed">
                <p><span className="font-semibold text-text-main">10.1 Bidding Process: </span>Experts submit bids with price, timeline, and message. Clients may receive multiple bids. Bids are binding if accepted.</p>
                <p><span className="font-semibold text-text-main">10.2 Bid Acceptance: </span>When a Client accepts a bid, a binding Contract is formed including: scope of work, price, timeline, and payment method. Both parties are obligated to fulfill the Contract.</p>
                <p><span className="font-semibold text-text-main">10.3 Negotiation: </span>Clients and Experts may negotiate price and terms via in-app chat. All negotiations must occur on the Platform. Agreed changes should be documented in the Contract.</p>
              </div>
            </div>

            {/* 11 Completion */}
            <div id="completion" className="scroll-mt-28">
              <SectionHeading id="completion" number="11" title="Job Completion & Payment Release" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                {[
                  ["11.1 Completion Process", "Expert marks Job complete and uploads proof (photos). Client reviews the work. Client approves or disputes within 72 hours."],
                  ["11.2 Auto-Release", "If Client does not respond within 72 hours, funds are auto-released to Expert. This protects Experts from non-responsive Clients."],
                  ["11.3 Dispute Hold", "If Client disputes completion, funds are frozen and the dispute resolution process begins (see Section 13)."],
                ].map(([title, desc]) => (
                  <div key={title} className="border border-text-muted/10 rounded-xl p-4">
                    <p className="font-semibold text-text-main text-sm mb-2">{title}</p>
                    <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 12 Cancellation */}
            <div id="cancellation" className="scroll-mt-28">
              <SectionHeading id="cancellation" number="12" title="Cancellation & Refund Policy" />
              <SubHeading title="12.1 Cancellation by Client" />
              <Table
                headers={["Timing", "Consequence"]}
                rows={[
                  ["Before Expert accepts bid", "No cost – job can be cancelled freely"],
                  ["After bid accepted but before work starts", "Client may cancel but may be liable for reasonable costs incurred by Expert"],
                  ["After work has commenced", "Client must pay for work completed up to cancellation point"],
                  ["Same-day cancellation", "Up to 25% cancellation fee may apply"],
                ]}
              />
              <SubHeading title="12.2 Cancellation by Expert" />
              <Table
                headers={["Timing", "Consequence"]}
                rows={[
                  ["Before work starts", "Expert must notify immediately. Rating impact and potential suspension."],
                  ["After work has commenced", "Expert may only cancel for valid reasons (emergency, safety)"],
                ]}
              />
              <SubHeading title="12.3 Refunds (Payment Protected Jobs)" />
              <BulletList items={["Full refund if Job cancelled before work starts (minus bank charges)", "Partial refund if work partially completed", "Full refund if Expert fails to deliver as agreed"]} />
              <div className="mt-4 bg-surface border border-text-muted/10 rounded-xl p-4 text-sm text-text-muted">
                <span className="font-semibold text-text-main">12.4 No Refunds (Cash Jobs): </span>
                inSmartio cannot enforce refunds for Cash Payment jobs. We will mediate but cannot guarantee resolution.
              </div>
            </div>

            {/* 13 Disputes */}
            <div id="disputes" className="scroll-mt-28">
              <SectionHeading id="disputes" number="13" title="Dispute Resolution" />
              <SubHeading title="13.1 Internal Resolution Process" />
              <Table
                headers={["Step", "Action", "Timeline"]}
                rows={[
                  ["1", "Parties attempt to resolve directly", "48 hours"],
                  ["2", "Escalate to inSmartio Dispute Team", "Within 48 hours"],
                  ["3", "Evidence collection", "48 hours"],
                  ["4", "Mediation", "48 hours"],
                  ["5", "Binding decision (if mediation fails)", "72 hours"],
                ]}
              />
              <SubHeading title="13.2 Evidence" />
              <p className="text-sm text-text-muted leading-relaxed mb-4">Both parties may submit: photos and videos, chat logs, receipts, and written statements.</p>
              <SubHeading title="13.3 Possible Outcomes" />
              <div className="flex flex-wrap gap-2 mb-4">
                {["Full payment to Expert", "Partial payment split", "Full refund to Client", "Re-performance ordered", "Dismissed"].map((o) => (
                  <span key={o} className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted/60 border border-text-muted/15 rounded-full px-3 py-1.5">{o}</span>
                ))}
              </div>
              <p className="text-sm text-text-muted leading-relaxed"><span className="font-semibold text-text-main">13.4 Appeal: </span>One appeal allowed within 7 days of decision. New evidence required. Appeal decision is final and binding.</p>
            </div>

            {/* 14 Reviews */}
            <div id="reviews" className="scroll-mt-28">
              <SectionHeading id="reviews" number="14" title="Reviews & Ratings" />
              <div className="space-y-4 text-sm text-text-muted leading-relaxed">
                <p><span className="font-semibold text-text-main">14.1 Review Submission: </span>Both parties may leave reviews after Job completion. Ratings are on 4 dimensions: Quality, Communication, Punctuality, and Value. Reviews are anonymous until both parties submit (or after 48 hours).</p>
                <p><span className="font-semibold text-text-main">14.2 Review Guidelines: </span>Reviews must be truthful and based on actual experience. Do not use reviews to threaten or extort. Do not post false or malicious reviews.</p>
                <p><span className="font-semibold text-text-main">14.3 Review Moderation: </span>We may remove reviews that violate these Terms. Users may dispute reviews within 14 days.</p>
              </div>
            </div>

            {/* 15 Prohibited */}
            <div id="prohibited" className="scroll-mt-28">
              <SectionHeading id="prohibited" number="15" title="Prohibited Activities" />
              <p className="text-sm text-text-muted leading-relaxed mb-5">You agree NOT to engage in any of the following:</p>
              <Table
                headers={["Category", "Prohibited Activities"]}
                rows={[
                  ["Fraud", "Create fake accounts, post fake jobs, submit fake bids, manipulate reviews"],
                  ["Harassment", "Abuse, threaten, or harass other users"],
                  ["Discrimination", "Discriminate based on race, gender, religion, or other protected characteristics"],
                  ["Illegal Activity", "Use the Platform for any illegal purpose"],
                  ["Off-Platform Transactions", "Complete transactions outside the Platform to avoid fees"],
                  ["Misrepresentation", "Provide false information or impersonate others"],
                  ["Spam", "Send unsolicited messages or promotions"],
                  ["Data Scraping", "Extract data from the Platform without permission"],
                ]}
              />
            </div>

            {/* 16 IP */}
            <div id="ip" className="scroll-mt-28">
              <SectionHeading id="ip" number="16" title="Intellectual Property" />
              <div className="space-y-4 text-sm text-text-muted leading-relaxed">
                <p><span className="font-semibold text-text-main">16.1 Our Intellectual Property: </span>The inSmartio name, logo, and brand assets are our property. You may not use our trademarks without written permission. The Platform&apos;s code, design, and content are protected by copyright.</p>
                <p><span className="font-semibold text-text-main">16.2 Your Content: </span>You retain ownership of content you post (photos, descriptions, etc.). You grant us a license to use, display, and distribute your content on the Platform. You represent that you have the right to post any content you upload.</p>
                <p><span className="font-semibold text-text-main">16.3 Prohibited Content: </span>Do not post content that infringes third-party rights. Do not post obscene, defamatory, or illegal content.</p>
              </div>
            </div>

            {/* 17 Liability */}
            <div id="liability" className="scroll-mt-28">
              <SectionHeading id="liability" number="17" title="Limitation of Liability" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800/30 rounded-xl p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green-700 dark:text-green-400 mb-3">What We Are Liable For</p>
                  <BulletList items={["Holding escrow funds as described", "Processing payments as described", "Making reasonable efforts to verify Experts"]} />
                </div>
                <div className="border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800/30 rounded-xl p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 dark:text-red-400 mb-3">What We Are NOT Liable For</p>
                  <BulletList items={["The quality of work performed by Experts", "Damage or injury during service delivery", "Theft or loss of property during service", "Loss of income or business opportunities", "Technical issues beyond our reasonable control"]} />
                </div>
              </div>
              <div className="border border-text-muted/10 rounded-xl p-5 text-sm text-text-muted">
                <span className="font-semibold text-text-main">17.3 Maximum Liability: </span>
                To the extent permitted by law, our maximum liability shall not exceed the total fees paid by you to inSmartio in the 3 months preceding the claim, or ₦50,000, whichever is lower.
              </div>
            </div>

            {/* 18 Indemnification */}
            <div id="indemnification" className="scroll-mt-28">
              <SectionHeading id="indemnification" number="18" title="Indemnification" />
              <p className="text-sm text-text-muted leading-relaxed mb-4">You agree to indemnify, defend, and hold harmless inSmartio, its affiliates, officers, directors, employees, and agents from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from:</p>
              <BulletList items={["Your use of the Platform", "Your violation of these Terms", "Your violation of any third-party rights", "Your provision of services as an Expert", "Your recruitment activities as a TAS"]} />
            </div>

            {/* 19 Termination */}
            <div id="termination" className="scroll-mt-28">
              <SectionHeading id="termination" number="19" title="Termination & Suspension" />
              <div className="space-y-4 text-sm text-text-muted leading-relaxed">
                <p><span className="font-semibold text-text-main">19.1 Termination by You: </span>You may delete your account at any time via Settings. Upon deletion, your profile is removed and you lose access. Financial records are retained for 7 years per legal requirement.</p>
                <div>
                  <p className="mb-2"><span className="font-semibold text-text-main">19.2 Suspension/Termination by Us: </span>We may suspend or terminate your account for:</p>
                  <BulletList items={["Violation of these Terms", "Fraudulent or illegal activity", "Repeated disputes or poor ratings (Experts)", "Non-payment of fees (Model 1 Experts)", "Inactivity for 24+ months"]} />
                </div>
                <p><span className="font-semibold text-text-main">19.3 Effect of Termination: </span>You lose access to your account. Pending payments may be held pending resolution. You may not re-register without permission.</p>
              </div>
            </div>

            {/* 20 Third Party */}
            <div id="third-party" className="scroll-mt-28">
              <SectionHeading id="third-party" number="20" title="Third-Party Links & Services" />
              <p className="text-sm text-text-muted leading-relaxed mb-3">The Platform may contain links to third-party websites or services (e.g., payment gateways, maps). These Terms do not apply to third-party services. We are not responsible for the content or practices of third-party sites, or any damage or loss caused by third-party services.</p>
            </div>

            {/* 21 Force Majeure */}
            <div id="force-majeure" className="scroll-mt-28">
              <SectionHeading id="force-majeure" number="21" title="Force Majeure" />
              <p className="text-sm text-text-muted leading-relaxed mb-4">Neither party shall be liable for failure to perform obligations if such failure is caused by circumstances beyond their reasonable control, including:</p>
              <BulletList items={["Acts of God (fire, flood, earthquake, storm, hurricane)", "War, invasion, hostilities, civil war, rebellion", "Terrorism, nationalization, government sanction", "Labor disputes, strikes, lockouts", "Interruption or failure of electricity or internet service"]} />
              <p className="text-sm text-text-muted mt-4">The affected party must give prompt notice to the other party.</p>
            </div>

            {/* 22 Governing Law */}
            <div id="governing-law" className="scroll-mt-28">
              <SectionHeading id="governing-law" number="22" title="Governing Law & Dispute Resolution" />
              <div className="space-y-4 text-sm text-text-muted leading-relaxed">
                <p><span className="font-semibold text-text-main">22.1 Governing Law: </span>These Terms are governed by the laws of the Federal Republic of Nigeria.</p>
                <p><span className="font-semibold text-text-main">22.2 Dispute Resolution: </span>Unresolved disputes shall be referred to arbitration in accordance with the Arbitration and Conciliation Act, Cap A18, Laws of the Federation of Nigeria, 2004. Arbitration shall be conducted in Lagos, Nigeria. The arbitrator&apos;s decision shall be final and binding.</p>
                <p><span className="font-semibold text-text-main">22.3 Small Claims: </span>Either party may bring claims in small claims court in Lagos, Nigeria, for disputes under ₦500,000.</p>
              </div>
            </div>

            {/* 23 Modifications */}
            <div id="modifications" className="scroll-mt-28">
              <SectionHeading id="modifications" number="23" title="Modifications to Terms" />
              <p className="text-sm text-text-muted leading-relaxed mb-3">We may modify these Terms from time to time. Material changes will be notified via email to registered address, in-app notification, or SMS (for critical changes). Continued use of the Platform after changes constitutes acceptance.</p>
            </div>

            {/* 24–32 General Provisions */}
            <div id="general" className="scroll-mt-28">
              <SectionHeading id="general" number="24–32" title="General Provisions" />
              <div className="space-y-2">
                {[
                  ["24. Entire Agreement", "These Terms, together with the Privacy Policy and TAS Agreement (for TAS users), constitute the entire agreement between you and inSmartio. These Terms supersede all prior agreements, representations, or understandings."],
                  ["25. Severability", "If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect."],
                  ["26. No Warranties & Disclaimer", "THE PLATFORM AND SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND. We do not warrant that the Platform will be uninterrupted, secure, or error-free, or that the quality of any services obtained through the Platform will meet your expectations. We expressly disclaim all warranties of merchantability, fitness for a particular purpose, and non-infringement."],
                  ["27. Class Action Waiver", "YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. Each party may bring claims only in their individual capacity."],
                  ["28. Electronic Communications", "By using the Platform, you consent to receive electronic communications (email, in-app, SMS, push notifications). All electronic communications satisfy any legal requirement that such communications be in writing."],
                  ["29. Assignment", "You may not assign or transfer these Terms without our prior written consent. Any attempt to assign or transfer without such consent will be null and void. We may assign or transfer these Terms, in whole or in part, without your consent."],
                  ["30. Waiver", "Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision. Any waiver shall be effective only if in writing and signed by an authorized representative of inSmartio."],
                  ["31. Notices", "Notices to inSmartio: legal@insmartio.io or Admiralty Way, Lekki Phase 1, Lagos. Notices to you: email to registered address, in-app notification, or SMS. Notices are deemed received 24 hours after sending (email/SMS) or 5 days after mailing (physical mail)."],
                ].map(([title, desc]) => (
                  <AccordionItem key={title} title={title}>
                    <p>{desc}</p>
                  </AccordionItem>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="scroll-mt-28">
              <div className="flex items-baseline gap-4 mb-6 pt-2">
                <span className="text-[10px] font-black text-text-muted/30 tracking-widest shrink-0">32</span>
                <h2 className="font-display font-bold text-text-main text-lg md:text-2xl tracking-tight">Contact Information</h2>
              </div>
              <div className="bg-surface border border-text-muted/10 rounded-2xl p-5 md:p-8">
                <p className="font-semibold text-text-main mb-4">inSmartio (CHRIVON TECH SOLUTIONS Limited)</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-2">Address</p>
                    <p className="text-text-muted">Admiralty Way, Lekki Phase 1, Lagos, Nigeria</p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-2">Email Contacts</p>
                    {[
                      ["General Inquiries", "hello@insmartio.io"],
                      ["Legal Notices", "legal@insmartio.io"],
                      ["Disputes", "disputes@insmartio.io"],
                      ["TAS Program", "tas@insmartio.io"],
                    ].map(([label, email]) => (
                      <div key={label} className="flex flex-wrap gap-2 md:gap-3">
                        <span className="text-text-muted/50 shrink-0 w-32">{label}</span>
                        <span className="text-primary font-semibold">{email}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/50 mb-2">Phone</p>
                    <p className="text-text-main font-semibold">+234 800 INSMARTIO</p>
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
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-primary mb-5">Acknowledgment</p>
              <p className="text-sm text-text-muted leading-relaxed mb-5">By registering for, accessing, or using the inSmartio Platform, you acknowledge that:</p>
              <div className="space-y-3">
                {[
                  "You have read and understood these Terms of Service",
                  "You agree to be bound by all terms and conditions",
                  "You confirm that all information provided is true and accurate",
                  "You understand your obligations as a Client, Expert, or TAS",
                  "You accept the dispute resolution process outlined herein",
                ].map((item) => (
                  <div key={item} className="flex items-start md:items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5 md:mt-0">
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