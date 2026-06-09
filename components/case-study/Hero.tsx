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
      duration: 0.9,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};


export function Hero() {
  return (
    <section className="relative pt-24 md:pt-40 lg:pt-52 pb-20 px-6 overflow-hidden bg-white dark:bg-background transition-colors duration-300">
      
      {/* Strategic Background Accents - Floating Drift */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
          x: ["-50%", "-48%", "-50%"] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-125 bg-primary/5 blur-[120px] rounded-full pointer-events-none" 
      />
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Label with Animated Symmetrical Accents */}
        <motion.div 
          custom={0}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4 mb-8 md:mb-10"
        >
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: 48 }} 
            transition={{ duration: 1, delay: 0.2 }}
            className="h-px bg-secondary/40" 
          />
          <span className="text-secondary text-[10px] md:text-xs font-black uppercase tracking-[0.4em] block">
            Product Case Study
          </span>
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: 48 }} 
            transition={{ duration: 1, delay: 0.2 }}
            className="h-px bg-secondary/40" 
          />
        </motion.div>
        
        {/* Main Headline */}
        <motion.h1 
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-text-main text-4xl md:text-6xl lg:text-8xl font-black leading-[1.1] md:leading-[1.05] mb-8 font-display tracking-tight px-2"
        >
          Case Study: <br /> 
          <span className="text-primary italic font-bold">inSmartio</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p 
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-text-muted text-base md:text-xl lg:text-2xl leading-relaxed max-w-3xl mb-12 font-medium px-4"
        >
          Nigeria&apos;s Trusted Service Marketplace. How we built a multi-tier verification system, dual payment models, and a TAS recruitment program to solve 
          Nigeria&apos;s service industry trust deficit.
        </motion.p>
        
       

        {/* Floating Decorative Elements with subtle hover drift */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl hidden lg:block" 
        />
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 -right-20 w-48 h-48 bg-secondary/5 rounded-full blur-3xl hidden lg:block" 
        />
      </div>
    </section>
  );
}