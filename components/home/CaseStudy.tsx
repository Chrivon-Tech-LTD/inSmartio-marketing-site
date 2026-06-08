'use client';

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "../ui/Button";
import Link from "next/link";

interface Metric {
  value: string;
  label: string;
}

const metrics: Metric[] = [
  { value: "+45%", label: "expert registration month-over-month" },
  { value: "-67%", label: "dispute rate vs. industry average" },
  { value: "+89%", label: "repeat client rate" },
];

const techStack = [
  "Product Strategy",
  "UI/UX Design",
  "Mobile App",
  "Payment Engine",
];

export const CaseStudy: React.FC = () => {
  // Explicitly typing variants fixes the "string is not assignable to AnimationGeneratorType" error
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5 } 
    },
  };

  const metricVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      } 
    },
  };

  return (
    <section className="relative py-16 md:py-28 bg-background transition-colors duration-300 overflow-hidden">
      {/* Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 md:w-200 md:h-200 bg-primary/10 blur-3xl rounded-full pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16 text-center md:text-left"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-secondary bg-secondary/10 px-4 py-1 rounded-full inline-block">
            Featured Case Study • Marketplace
          </span>

          <h2 className="mt-6 text-3xl md:text-5xl font-bold text-text-main max-w-2xl mx-auto md:mx-0 font-display leading-tight">
            Work That Trust Into{" "}
            <span className="text-primary">
              Measurable Results
            </span>
          </h2>
        </motion.div>

        {/* MAIN PANEL */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-surface border border-text-muted/10 rounded-2xl md:rounded-3xl shadow-ambient p-6 md:p-10 lg:p-16 overflow-hidden transition-colors duration-300"
        >
          
          {/* TECH STACK */}
          <div className="flex flex-wrap gap-2 mb-8 lg:absolute lg:top-8 lg:right-8 lg:mb-0 lg:justify-end">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="px-3 py-1 rounded-full bg-primary/5 text-text-muted text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-text-muted/5 whitespace-nowrap"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">
            
            {/* LEFT SIDE (STORY) */}
            <div className="order-2 lg:order-1">
              <motion.h3 variants={itemVariants} className="text-xl md:text-2xl font-bold text-text-main mb-6 md:mb-10 font-display">
                inSmartio – Nigeria’s Trusted Service Marketplace
              </motion.h3>

              {/* PROBLEM */}
              <motion.div variants={itemVariants} className="mb-8">
                <p className="text-base md:text-xs font-bold uppercase tracking-widest text-primary mb-3">
                  Problem
                </p>
                <p className="text-text-muted text-base leading-relaxed">
                  Nigerians struggle to find trustworthy professionals. Clients
                  get overcharged, while experts struggle to find consistent
                  work.
                </p>
              </motion.div>

              {/* SOLUTION */}
              <motion.div variants={itemVariants}>
                <p className="text-base md:text-xs font-bold uppercase tracking-widest text-primary mb-4">
                  Solution
                </p>

                <ul className="space-y-3 md:space-y-4 text-text-muted text-sm">
                  {[
                    "Multi-tier verification system (NIN, BVN, guarantor)",
                    "Escrow payment protection",
                    "Dual payment models (subscription & commission)",
                    "TAS recruitment program",
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + (idx * 0.1) }}
                      className="flex gap-3 items-start"
                    >
                      <span className="text-primary font-bold shrink-0">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* RIGHT SIDE (METRICS HERO) */}
            <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-6">
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  variants={metricVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-background rounded-xl md:rounded-2xl p-6 md:p-8 text-center border border-text-muted/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                    className="text-3xl md:text-4xl font-black text-secondary"
                  >
                    {metric.value}
                  </motion.p>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-text-muted mt-2 leading-tight">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 md:mt-16 flex justify-center"
          >
            <Link href="/case-study">
            <Button size="lg" variant="primary" className="w-full sm:w-auto px-12">
              Read Full Case Study
            </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};