"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence, Variants } from 'framer-motion';
import { Button } from '../ui/Button';

/* ── Animation Variants ────────────────────────────────────────── */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

export const TASCalculator: React.FC = () => {
  const [model1Experts, setModel1Experts] = useState(1);
  const [model2Experts, setModel2Experts] = useState(3);
  const [avgJobValue, setAvgJobValue] = useState(30000);
  const [jobsPerMonth, setJobsPerMonth] = useState(5);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const totalRecruits = model1Experts + model2Experts;
  const regBonusTotal = totalRecruits * 7000;
  const model1Earnings = model1Experts * 1000;
  const model2Earnings = model2Experts * jobsPerMonth * avgJobValue * 0.01;
  const totalMonthlyCommission = model1Earnings + model2Earnings;
  const estimatedAnnual = (totalMonthlyCommission * 12) + regBonusTotal;

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-surface rounded-[3rem] overflow-hidden shadow-ambient border border-slate-100 grid grid-cols-1 lg:grid-cols-12"
        >
          
          {/* Left: Input Fields */}
          <div className="lg:col-span-7 p-6 md:p-16">
            <motion.span custom={0} variants={fadeInUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="section-label mb-2 block uppercase tracking-widest text-secondary font-bold text-[10px]">Earnings Calculator</motion.span>
            <motion.h2 custom={1} variants={fadeInUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-4xl font-display font-bold mb-12 text-text-main">Estimate Your Impact</motion.h2>
            
            <div className="space-y-10">
              {/* Model 1 Slider */}
              <motion.div custom={2} variants={fadeInUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">Model 1 Experts (Fixed Fee)</label>
                  <motion.span key={model1Experts} initial={{ scale: 1.2, color: "var(--color-primary)" }} animate={{ scale: 1, color: "var(--color-text-main)" }} className="font-bold text-xl">{model1Experts}</motion.span>
                </div>
                <input type="range" min="0" max="100" value={model1Experts} onChange={(e) => setModel1Experts(Number(e.target.value))} className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary" />
              </motion.div>

              {/* Model 2 Slider */}
              <motion.div custom={3} variants={fadeInUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">Model 2 Experts (1% Commission)</label>
                  <motion.span key={model2Experts} initial={{ scale: 1.2, color: "var(--color-primary)" }} animate={{ scale: 1, color: "var(--color-text-main)" }} className="font-bold text-xl">{model2Experts}</motion.span>
                </div>
                <input type="range" min="0" max="100" value={model2Experts} onChange={(e) => setModel2Experts(Number(e.target.value))} className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary" />
              </motion.div>

              {/* Numerical Inputs */}
              <div className="grid grid-cols-2 gap-8 pt-4">
                <motion.div custom={4} variants={fadeInUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="flex flex-col gap-4">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Avg Job Value (₦)</label>
                  <input type="number" value={avgJobValue} onChange={(e) => setAvgJobValue(Number(e.target.value))} className="bg-background border border-border p-4 rounded-2xl text-sm font-semibold focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </motion.div>
                <motion.div custom={5} variants={fadeInUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="flex flex-col gap-4">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Jobs Per Month</label>
                  <input type="number" value={jobsPerMonth} onChange={(e) => setJobsPerMonth(Number(e.target.value))} className="bg-background border border-border p-4 rounded-2xl text-sm font-semibold focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right: Results Dashboard */}
          <div className="lg:col-span-5 bg-primary p-6 md:p-16 text-white flex flex-col justify-center relative overflow-hidden">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 opacity-10 pointer-events-none"
            >
              <div className="w-64 h-64 border-16 border-white rounded-full"></div>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 1 }} className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Total Recruits: {totalRecruits}</motion.p>
            
            <div className="relative mb-10 h-20">
              <AnimatePresence mode="wait">
                <motion.h4 
                  key={totalMonthlyCommission}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-5xl md:text-6xl font-display font-bold text-white flex items-baseline"
                >
                  ₦{totalMonthlyCommission.toLocaleString()}
                  <span className="text-lg opacity-60 font-normal ml-2">/mo</span>
                </motion.h4>
              </AnimatePresence>
            </div>
            
            <div className="space-y-5 pt-8 border-t border-white/10 mb-10">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">One-time Bonuses (Reg.)</span>
                <span className="font-bold">₦{regBonusTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Fixed Mgmt. (Model 1)</span>
                <span className="font-bold">₦{model1Earnings.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">1% Performance (Model 2)</span>
                <span className="font-bold">₦{model2Earnings.toLocaleString()}</span>
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10 mt-6"
              >
                <span className="text-secondary font-black uppercase tracking-widest text-[10px]">Est. Year 1 Total</span>
                <span className="font-black font-display text-secondary text-2xl">₦{estimatedAnnual.toLocaleString()}</span>
              </motion.div>
            </div>

            <Button variant="secondary" fullWidth className="bg-white! text-primary! hover:bg-slate-100! font-black py-6 shadow-2xl transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Start Earning as a TAS
            </Button>
            
            <p className="text-[9px] text-center mt-6 text-white/30 font-bold uppercase tracking-widest">
              ● PROJECTIONS BASED ON ACTIVE RECRUITS
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};