"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

/* ── Animation Variants ────────────────────────────────────────── */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const dotContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.4,
    transition: { staggerChildren: 0.1, delayChildren: 0.8 },
  },
};

const dotItem: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

export function BlogHero() {
  return (
    <section className="relative pt-24 md:pt-32 lg:pt-44 pb-20 px-6 bg-white dark:bg-background transition-colors duration-300 border-b border-text-muted/10 overflow-hidden">
      
      {/* Strategic Ambient Glows - Animated Drift */}
      <motion.div 
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[120px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" 
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Editorial Label */}
        <motion.div 
          custom={0}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-3 mb-6 md:mb-10"
        >
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: 32 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-secondary" 
          />
          <span className="text-secondary text-[10px] md:text-xs font-black uppercase tracking-[0.4em] block">
            Our Journal
          </span>
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: 32 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-secondary" 
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-text-main text-4xl md:text-6xl lg:text-7xl font-black mb-8 max-w-5xl leading-[1.1] font-display tracking-tight px-2"
        >
          Insights from the <br className="hidden sm:block" />
          <span className="text-primary">HelpMe NG Team</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p 
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-text-muted text-base md:text-xl max-w-2xl leading-relaxed font-medium mx-auto px-4"
        >
          Strategy, design, and engineering lessons from building Nigeria&apos;s 
          most trusted service marketplace. Explore our journey in engineering accountability.
        </motion.p>

        {/* Decorative Grid Indicator */}
        <motion.div 
          variants={dotContainer}
          initial="hidden"
          animate="visible"
          className="mt-12 md:mt-16 flex flex-col items-center gap-4"
        >
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i} 
                variants={dotItem}
                className="w-1.5 h-1.5 bg-text-muted/50 rounded-full" 
              />
            ))}
          </div>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-[9px] font-black uppercase tracking-[0.4em] text-text-muted"
          >
            Est. 2026
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}