"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { motion, Variants } from 'framer-motion';

const EXPERT_HERO = "https://i.pinimg.com/736x/d6/ac/6d/d6ac6d5bd234d8676a7fb99d1d02eb42.jpg";

/* ── Animation Variants ────────────────────────────────────────── */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }
  })
};

export const ExpertHero: React.FC = () => {
  return (
    <section className="relative pt-24 md:pt-32 lg:pt-40 pb-20 bg-white transition-colors duration-300 dark:bg-background overflow-hidden">
      
      {/* Dynamic Background Glows */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" 
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT: Content Section */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.span 
            custom={0} variants={fadeInUp} initial="hidden" animate="visible"
            className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 inline-block shadow-sm"
          >
            Opportunities Await
          </motion.span>
          
          <motion.h1 
            custom={1} variants={fadeInUp} initial="hidden" animate="visible"
            className="text-primary text-4xl md:text-7xl font-black leading-[1.1] mb-8 font-display"
          >
            Grow Your Business <br />
            with <span className="text-secondary italic">inSmartio.</span>
          </motion.h1>

          <motion.p 
            custom={2} variants={fadeInUp} initial="hidden" animate="visible"
            className="text-text-muted text-base md:text-xl leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0 font-medium"
          >
            Join Nigeria&apos;s most trusted ecosystem of skilled professionals. Get more clients, get paid on time, and build your reputation as a verified professional.
          </motion.p>
          
          <motion.div 
            custom={3} variants={fadeInUp} initial="hidden" animate="visible"
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Button variant="primary" size="lg" className="px-10 shadow-xl group">
              Become an Expert
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </Button>
          </motion.div>
        </div>

        {/* RIGHT: Image & Floating Badge */}
        <div className="relative order-1 lg:order-2">
          {/* Main Image Frame - Slides in with a subtle rotate */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative w-full aspect-square rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-ambient border border-text-muted/10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full"
            >
              <Image 
                src={EXPERT_HERO} 
                alt="Professional Expert" 
                fill 
                className="object-cover" 
                unoptimized
                priority
              />
            </motion.div>
          </motion.div>

          {/* Floating Verified Expert Card - Smooth levitation */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-2 md:-bottom-8 md:-left-8 bg-surface/90 backdrop-blur-md p-5 rounded-2xl shadow-ambient border border-text-muted/10 flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center text-white font-black shadow-lg">
                ✓
              </div>
              <div className="text-left">
                <p className="text-xs md:text-sm font-black text-text-main font-display">Verified Expert</p>
                <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Top 5% providers in Lagos</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative element */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl hidden md:block" />
        </div>

      </div>
    </section>
  );
};