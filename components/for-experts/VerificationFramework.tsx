"use client";

import React, { useRef } from 'react';
import { CheckCircle2, Minus } from 'lucide-react';
import { motion, useInView, Variants } from 'framer-motion';

const TiersData = [
  {
    name: "Tier 1",
    badgeCount: 1,
    identity: "NIN only",
    security: null,
    guarantor: null,
    maxJob: "₦20,000",
    time: "~24h"
  },
  {
    name: "Tier 2",
    badgeCount: 2,
    identity: "NIN + BVN",
    security: null,
    guarantor: null,
    maxJob: "₦100,000",
    time: "~48h"
  },
  {
    name: "Tier 3",
    badgeCount: 3,
    identity: "NIN + BVN",
    security: "Police Clearance",
    guarantor: "Required",
    maxJob: "Unlimited",
    time: "~72h"
  }
];

/* ── Animation Variants ────────────────────────────────────────── */
const tableContainerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1 
    } 
  }
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export const VerificationFramework: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#060D1A] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">
            The Trust Protocol
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#D8E8FF] font-display">
            Verification Tiers
          </h2>
        </motion.div>

        {/* TABLE CONTAINER */}
        <motion.div 
          ref={ref}
          variants={tableContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="overflow-x-auto rounded-lg border border-white/5 shadow-2xl bg-[#0E1E3A] transition-colors duration-300"
        >
          <table className="w-full text-left border-collapse min-w-200">
            <thead>
              <tr className="bg-primary/5">
                <th className="p-8 text-[10px] font-black uppercase tracking-widest text-[#7A9DC4] border-b border-white/5">
                  Feature Matrix
                </th>
                {TiersData.map((t, idx) => (
                  <th key={t.name} className="p-8 border-b border-white/5">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + (idx * 0.1) }}
                      className="flex flex-col gap-1"
                    >
                      <span className="text-xl font-black text-primary font-display">{t.name}</span>
                      <span className="text-[9px] font-bold text-[#7A9DC4] uppercase tracking-wider">Expert Level</span>
                    </motion.div>
                  </th>
                ))}
              </tr>
            </thead>
            
            <tbody className="text-sm md:text-base">
              {/* Badge Row */}
              <motion.tr variants={rowVariants} className="group hover:bg-white/2 transition-colors">
                <td className="p-8 font-black text-[#D8E8FF] border-b border-white/5 bg-primary/2">Trust Badge</td>
                {TiersData.map((t) => (
                  <td key={t.name} className="p-8 border-b border-white/5">
                    <div className="flex gap-1.5">
                      {Array.from({ length: t.badgeCount }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ delay: 1 + (i * 0.1), type: "spring", stiffness: 200 }}
                        >
                          <CheckCircle2 className="text-success" size={18} />
                        </motion.div>
                      ))}
                    </div>
                  </td>
                ))}
              </motion.tr>

              {/* Requirements Row */}
              <motion.tr variants={rowVariants} className="hover:bg-white/2 transition-colors">
                <td className="p-8 font-black text-[#D8E8FF] border-b border-white/5 bg-primary/2">Requirements</td>
                {TiersData.map((t, tIdx) => (
                  <td key={t.name} className="p-8 border-b border-white/5 space-y-3">
                    <RequirementItem label={t.identity} active={true} delay={1.2 + (tIdx * 0.1)} />
                    <RequirementItem label={t.security || "Police Check"} active={!!t.security} delay={1.3 + (tIdx * 0.1)} />
                    <RequirementItem label={t.guarantor || "Guarantors"} active={!!t.guarantor} delay={1.4 + (tIdx * 0.1)} />
                  </td>
                ))}
              </motion.tr>

              {/* Max Job Row */}
              <motion.tr variants={rowVariants} className="hover:bg-white/2 transition-colors">
                <td className="p-8 font-black text-[#D8E8FF] border-b border-white/5 bg-primary/2">Max Job Value</td>
                {TiersData.map((t) => (
                  <td key={t.name} className="p-8 border-b border-white/5 font-black text-primary text-lg">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 1.6 }}
                    >
                      {t.maxJob}
                    </motion.span>
                  </td>
                ))}
              </motion.tr>

              {/* Time Row */}
              <motion.tr variants={rowVariants} className="hover:bg-white/2 transition-colors">
                <td className="p-8 font-black text-[#D8E8FF] bg-primary/2">Verification Time</td>
                {TiersData.map((t) => (
                  <td key={t.name} className="p-8 font-bold text-[#7A9DC4]">
                    {t.time}
                  </td>
                ))}
              </motion.tr>
            </tbody>
          </table>
        </motion.div>

        {/* FOOTNOTE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8 }}
          className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 px-8 py-4 bg-[#0E1E3A] rounded-2xl border border-white/5"
        >
          <p className="text-sm text-[#7A9DC4] font-medium italic">
            * Tier 3 requires a one-time processing fee of <span className="text-[#D8E8FF] font-black">₦5,000</span> for background clearance.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-success">Systems Online</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* Requirements Helper with Animation */
const RequirementItem = ({ label, active, delay }: { label: string, active: boolean, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -5 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className={`flex items-center gap-3 ${active ? 'text-[#D8E8FF]' : 'opacity-20'}`}
  >
    {active ? (
      <CheckCircle2 className="text-success shrink-0" size={16} />
    ) : (
      <Minus className="text-[#7A9DC4] shrink-0" size={16} />
    )}
    <span className={active ? 'font-bold' : 'font-medium'}>{label}</span>
  </motion.div>
);