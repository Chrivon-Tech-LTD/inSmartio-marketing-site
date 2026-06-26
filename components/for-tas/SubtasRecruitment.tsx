"use client";

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Card } from '../ui/Card';
import {
  Target,
  GraduationCap,
  Rocket,
  Eye,
  Users,
  Info,
} from 'lucide-react';

/* ── Data ───────────────────────────────────────────────────────── */
const steps = [
  {
    number: "01",
    title: "Identify",
    desc: "Identify people in your zone with good networks.",
    icon: <Target size={18} />,
  },
  {
    number: "02",
    title: "Train",
    desc: "Train them on the platform and your methods.",
    icon: <GraduationCap size={18} />,
  },
  {
    number: "03",
    title: "Launch",
    desc: "Help them get started with their own targets.",
    icon: <Rocket size={18} />,
  },
  {
    number: "04",
    title: "Monitor",
    desc: "Monitor their progress and support them.",
    icon: <Eye size={18} />,
  },
];

const whyReasons = [
  {
    label: "Earn 0.1% – 0.25% override on all their recruited experts' jobs",
    sub: "Depending on your tier",
  },
  {
    label: "Build a team and scale your earnings",
    sub: null,
  },
  {
    label: "Become a leader in your zone",
    sub: null,
  },
];

const subTASEarnings = [
  "Sub-TAS agents earn the same commission + bonuses as you",
  "You earn an override (0.1% – 0.25%) on their recruits' jobs",
  "Override is paid monthly",
];

const overrideTable = [
  { tier: "Tier 3", rate: "0.1%",  recruitsJobs: "₦1,000,000", earnings: "₦1,000" },
  { tier: "Tier 4", rate: "0.15%", recruitsJobs: "₦1,000,000", earnings: "₦1,500" },
  { tier: "Tier 5", rate: "0.2%",  recruitsJobs: "₦1,000,000", earnings: "₦2,000" },
  { tier: "Tier 6", rate: "0.25%", recruitsJobs: "₦1,000,000", earnings: "₦2,500" },
];

/* ── Animation Variants ─────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Component ──────────────────────────────────────────────────── */
export const SubTASRecruitment: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-background px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* ── Header ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.span variants={fadeLeft} className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
            Phase 2 Feature
          </motion.span>
          <motion.h2 variants={fadeLeft} className="text-text-main font-display text-4xl md:text-5xl font-bold mb-4">
            Sub-TAS Recruitment
          </motion.h2>
          <motion.p variants={fadeLeft} className="text-text-muted text-lg max-w-2xl font-medium leading-relaxed">
            As you grow your network, you can recruit other TAS agents under you. These are called Sub-TAS agents.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-8"
        >

          {/* ── Row 1: What is Sub-TAS + Why Recruit ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* What is Sub-TAS */}
            <motion.div variants={fadeUp} className="h-full">
              <Card className="p-10 rounded-[2.5rem] shadow-ambient border border-slate-100! bg-surface flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 shrink-0">
                  <Info size={22} className="text-primary" />
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-text-muted">
                  What is Sub-TAS?
                </h3>
                <p className="text-text-main text-base leading-relaxed font-medium">
                  As you grow your network, you can recruit other TAS agents under you. These are called{" "}
                  <span className="font-black text-primary">Sub-TAS agents.</span>
                </p>
              </Card>
            </motion.div>

            {/* Why Recruit Sub-TAS */}
            <motion.div variants={fadeUp} className="h-full">
              <Card className="p-10 rounded-[2.5rem] shadow-ambient border-none! bg-primary! text-white flex flex-col h-full shadow-2xl shadow-primary/20">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 shrink-0">
                  <Users size={22} className="text-white" />
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-white/60">
                  Why Recruit Sub-TAS?
                </h3>
                <ul className="flex flex-col gap-4 flex-1">
                  {whyReasons.map((reason, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center mt-0.5 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm leading-snug">{reason.label}</p>
                        {reason.sub && (
                          <p className="text-white/50 text-xs mt-0.5 font-medium">{reason.sub}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>

          {/* ── Row 2: How to Recruit (4 steps) ── */}
          <div>
            <motion.p variants={fadeUp} className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted mb-6">
              How to Recruit Sub-TAS
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="h-full"
                >
                  <Card className="p-8 rounded-[2rem] shadow-ambient border border-slate-100! bg-surface hover:border-primary/20 transition-all duration-500 flex flex-col h-full">
                    <span className="text-[9px] font-black text-primary/40 uppercase tracking-widest mb-4 block">
                      {step.number}
                    </span>
                    <motion.div
                      whileHover={{ rotate: -10, scale: 1.1 }}
                      className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center mb-5 shrink-0 text-primary"
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="text-text-main font-display font-black text-lg tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Row 3: Sub-TAS Earnings + Override Table ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Sub-TAS Earnings */}
            <motion.div variants={fadeUp} className="h-full">
              <Card className="p-10 rounded-[2.5rem] shadow-ambient border border-slate-100! bg-surface flex flex-col h-full">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-text-muted">
                  Sub-TAS Earnings
                </h3>
                <ul className="flex flex-col gap-4 flex-1">
                  {subTASEarnings.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/8 flex items-center justify-center mt-0.5 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      <p className="text-text-main text-sm font-medium leading-snug">{item}</p>
                    </li>
                  ))}
                </ul>

                {/* Note */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-text-muted text-sm font-medium leading-relaxed">
                    <span className="font-black text-text-main">Note:</span>{" "}
                    Sub-TAS recruitment is coming in Phase 2 — be prepared to build your team.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Override Rate Table */}
            <motion.div variants={fadeUp} className="h-full">
              <Card className="rounded-[2.5rem] shadow-ambient border border-slate-100! bg-surface overflow-hidden flex flex-col h-full">
                <div className="px-10 pt-10 pb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted block mb-2">
                    Sub-TAS Override Example
                  </span>
                 
                </div>

                <table className="w-full text-sm flex-1">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="px-6 py-3 text-left text-[10px] font-black uppercase tracking-widest text-text-muted">Tier</th>
                      <th className="px-6 py-3 text-left text-[10px] font-black uppercase tracking-widest text-text-muted">Override Rate</th>
                      <th className="px-6 py-3 text-left text-[10px] font-black uppercase tracking-widest text-text-muted">Recruits&apos; Jobs</th>
                      <th className="px-6 py-3 text-left text-[10px] font-black uppercase tracking-widest text-text-muted">Override Earnings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {overrideTable.map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-slate-100/60 last:border-none hover:bg-primary/3 transition-colors"
                      >
                        <td className="px-6 py-4 font-black text-text-main font-display">{row.tier}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-success/10 text-success font-black text-xs">
                            {row.rate}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-text-muted font-medium">{row.recruitsJobs}</td>
                        <td className="px-6 py-4 text-text-main font-bold">{row.earnings}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="px-10 py-5 bg-primary/3 border-t border-slate-100">
                  <p className="text-[10px] text-text-muted font-medium">
                    Your recruits&apos; jobs refers to all jobs completed by experts your Sub-TAS agents recruited.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* ── Phase 2 Banner ── */}
          <motion.div
            variants={fadeUp}
            className="rounded-[2rem] border border-primary/10 bg-primary/3 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0" />
              <div>
                <p className="text-text-main font-black font-display text-lg">Coming in Phase 2</p>
                <p className="text-text-muted text-sm font-medium">
                  Sub-TAS recruitment is not yet active in MVP — be prepared to build your team when it launches.
                </p>
              </div>
            </div>
            <span className="shrink-0 text-[10px] font-black text-secondary uppercase tracking-widest bg-secondary/10 px-4 py-2 rounded-full whitespace-nowrap">
              Prepare Now →
            </span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};