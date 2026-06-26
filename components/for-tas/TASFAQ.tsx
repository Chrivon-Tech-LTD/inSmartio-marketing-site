"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

/* ── Types ──────────────────────────────────────────────────────── */
interface FAQItem {
  q: string;
  a: string;
}

/* ── Data ───────────────────────────────────────────────────────── */
const tasFAQs: FAQItem[] = [
  {
    q: "How do I track my progress?",
    a: "The TAS dashboard shows your recruited experts, verification status, and earnings.",
  },
  {
    q: "What if an expert doesn't complete verification?",
    a: "Only verified experts count toward your bonuses. Focus on guiding them through the process.",
  },
  {
    q: "Can I recruit experts outside my zone?",
    a: "Focus on your assigned zone to maximise efficiency. Check with your coordinator for exceptions.",
  },
  {
    q: "How do I report problems?",
    a: "Contact the Project Coordinator or Operations Coordinator via the TAS WhatsApp group.",
  },
  {
    q: "What happens if I don't meet my target?",
    a: "Your coordinator will review your performance and provide additional support. Persistent underperformance may affect your TAS status.",
  },
  {
    q: "Can I recruit Sub-TAS agents now?",
    a: "Sub-TAS recruitment is coming in Phase 2. For now, focus on recruiting experts.",
  },
  {
    q: "What's the minimum payout for my earnings?",
    a: "₦2,000. If you earn less than that in a month, it will roll over to the next month.",
  },
];

const expertFAQs: FAQItem[] = [
  {
    q: "How much does it cost to join?",
    a: "It's free to join! You only pay if you choose Model 2 (10% commission on jobs) or Model 1 (₦10,000/month subscription).",
  },
  {
    q: "Do I need to register with the government?",
    a: "You need NIN and BVN. Tier 3 experts need Police Clearance and a Guarantor.",
  },
  {
    q: "How do I get paid?",
    a: "Payments are made through escrow. The client pays upfront, and you receive payment after the job is approved.",
  },
  {
    q: "Is it safe?",
    a: "Yes. The platform includes SOS buttons, check-in/check-out, and police partnership for emergencies.",
  },
  {
    q: "What if the client doesn't pay?",
    a: "The client pays into escrow upfront. The money is held safely until you complete the job.",
  },
  {
    q: "Can I choose my jobs?",
    a: "Yes! You bid on jobs that match your skills and location. You're not forced to take any job.",
  },
  {
    q: "Can I set my price?",
    a: "Yes! You propose your price. The client can accept, reject, or counter.",
  },
  {
    q: "What if I don't get jobs?",
    a: "Clients are actively posting jobs. The more you bid, the more you'll get hired. Higher verification tiers also unlock more jobs.",
  },
];

/* ── Sub-components ─────────────────────────────────────────────── */
const FAQAccordionItem: React.FC<{ item: FAQItem; index: number }> = ({ item, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-slate-100 last:border-none"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-text-main font-medium text-base leading-snug group-hover:text-primary transition-colors duration-200">
          {item.q}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-text-muted group-hover:border-primary/30 group-hover:text-primary transition-all duration-200">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-text-muted text-sm leading-relaxed pb-5 max-w-2xl font-medium">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ── Main Component ─────────────────────────────────────────────── */
type Tab = "tas" | "experts";

export const TASFAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("tas");

  const faqs = activeTab === "tas" ? tasFAQs : expertFAQs;

  return (
    <section className="py-24 bg-background px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
            Got questions?
          </span>
          <h2 className="text-text-main font-display text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-muted text-lg font-medium leading-relaxed">
            Everything TAS agents and experts need to know about inSmartio.
          </p>
        </motion.div>

        {/* ── Tab Switcher ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-2 mb-10 p-1.5 bg-surface rounded-2xl border border-slate-100 w-fit"
        >
          {(["tas", "experts"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl text-sm font-black uppercase tracking-[0.1em] transition-all duration-300
                ${activeTab === tab
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-muted hover:text-text-main"
                }`}
            >
              {tab === "tas" ? "For TAS Agents" : "For Experts"}
            </button>
          ))}
        </motion.div>

        {/* ── Accordion ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="border-t border-slate-100"
          >
            {faqs.map((item, i) => (
              <FAQAccordionItem key={i} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};