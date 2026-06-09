"use client";

import React, { useRef } from 'react';
import { 
  Target, 
  Lightbulb, 
  BarChart4, 
  Quote,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { motion, useInView, Variants } from 'framer-motion';
import { Card } from '../ui/Card';

/* ── Animation Variants ────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const metaItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export const CaseStudyOverview: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const results = [
    "5,000+ verified experts in first 6 months",
    "20,000+ jobs completed",
    "₦100M+  transaction volume",
    "4.8/5 average rating",
    "89% repeat client rate",
    "200+ active TAS agents"
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 space-y-12 md:space-y-16">
        
        {/* PROJECT HEADER */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="border-l-4 border-primary pl-6"
        >
          <span className="block mb-2 uppercase tracking-[0.3em] font-black text-secondary text-[10px]">
            Project Documentation
          </span>
          <h2 className="text-text-main font-display text-3xl md:text-5xl font-black tracking-tight">
            Case Study Content
          </h2>
        </motion.div>

        {/* META BAR - Animated Meta Data */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Project Type", value: "Marketplace Platform" },
            { label: "Duration", value: "6 Months" },
            { label: "Technologies", value: "React Native, Node.js, PostgreSQL, AWS" },
            { label: "Team", value: "5 Engineers, 2 designers, 1 product manager" }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={metaItemVariants}
              whileHover={{ y: -4, borderColor: "rgba(var(--primary), 0.3)" }}
              className="bg-surface p-4 md:p-6 rounded-2xl border border-text-muted/10 shadow-sm transition-colors"
            >
              <p className="text-[10px] uppercase font-black text-text-muted tracking-widest mb-1">
                {item.label}
              </p>
              <p className="text-sm font-black text-text-main ">
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* MAIN CASE STUDY GRID */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Narrative */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-7 h-full"
          >
            <Card className="h-full p-8 md:p-12 bg-surface border border-text-muted/10 shadow-ambient rounded-[2.5rem] md:rounded-[3rem] flex flex-col justify-between group">
              <div className="space-y-10 md:space-y-12">
                {/* THE PROBLEM */}
                <motion.div variants={fadeInUp}>
                  <div className="flex items-center gap-4 mb-6 text-primary">
                    <motion.div 
                      whileHover={{ rotate: 15 }}
                      className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"
                    >
                       <Target size={22} />
                    </motion.div>
                    <h3 className="text-base md:text-lg font-black uppercase tracking-widest font-display">
                      The Problem
                    </h3>
                  </div>
                  <p className="text-text-muted leading-relaxed text-sm md:text-base font-medium">
                    Nigerians struggle to find trustworthy professionals. Clients face overcharging, no-shows and poor workmanship, while experts face irregular income and payment delays. No platform existed to bridge this trust gap.
                  </p>
                </motion.div>

                {/* THE SOLUTION */}
                <motion.div variants={fadeInUp} className="pt-10 border-t border-text-muted/10">
                  <div className="flex items-center gap-4 mb-6 text-secondary">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center"
                    >
                       <Lightbulb size={22} />
                    </motion.div>
                    <h3 className="text-base md:text-lg font-black uppercase tracking-widest font-display">
                      The Solution
                    </h3>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-y-4 md:gap-x-8">
                    {[
                      "Multi-tier verification(NIN, BVN, guarantor, police)",
                      "Dual payment models (escrow protection & cash)",
                      "Bidding and negotiation system",
                      "TAS recruitment program for scalable growth"
                    ].map((item, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + (i * 0.1) }}
                        className="flex items-center gap-3 text-sm md:text-[13px] font-black text-text-main"
                      >
                        <CheckCircle2 size={16} className="text-success shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.4 } : {}}
                transition={{ delay: 1 }}
                className="mt-12 flex items-center gap-2 text-[10px] font-black text-text-muted uppercase tracking-[0.3em]"
              >
                <Layers size={14} /> Chrivon Framework v4.0
              </motion.div>
            </Card>
          </motion.div>

          {/* RIGHT COLUMN: Stats & Social Proof */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">

            {/* PROJECT IMPACT (RESULTS) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] text-white shadow-ambient relative overflow-hidden group min-h-100 flex flex-col"
            >
              <BarChart4
                size={140}
                className="absolute -bottom-8 -right-8 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700"
              />

              <div className="relative z-10 flex-1">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 mb-8 md:mb-10">
                  Project Impact
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  {results.map((result, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                      className="flex items-center gap-4 border-b border-white/10 pb-3 last:border-none"
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="shrink-0 w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_8px_rgba(255,165,0,0.5)]" 
                      />
                      <p className="text-sm md:text-base font-black tracking-tight leading-tight">
                        {result}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CLIENT TESTIMONIAL */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="bg-surface p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-text-muted/10 shadow-sm relative group"
            >
              <Quote className="text-primary opacity-20 mb-4" size={28} />

              <p className="text-text-main font-bold italic mb-6 leading-relaxed text-sm">
                “Chrivon understood our vision from day one. They didn&apos;t just build an app - they built a complete
                ecosystem that solves real problems. The TAS program alone has transformed how we recruit experts. engineered a trust ecosystem. ”
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center text-[10px] font-black shadow-lg">
                  CI
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-black text-text-main uppercase truncate">
                    Christian Ikenna
                  </p>
                  <p className="text-[9px] text-text-muted uppercase font-black tracking-widest truncate">
                    Founder & CEO, Chrivon
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};