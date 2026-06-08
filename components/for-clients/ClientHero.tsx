"use client";

import React from 'react';
import Image from 'next/image';
import { AppStoreButtons } from '../ui/AppStoreButtons';
import { motion, Variants } from 'framer-motion';

const IMAGE = "https://i.pinimg.com/736x/f2/32/02/f232022f5082fc77fcbd6aa3edc1aed4.jpg";

/* ── Animation Variants ────────────────────────────────────────── */
const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      delay: i * 0.15, 
      ease: [0.22, 1, 0.36, 1] 
    }
  })
};

export const ClientHero: React.FC = () => {
  return (
    <section className="relative pt-24 md:pt-32 lg:pt-40 pb-20 bg-background transition-colors duration-300 overflow-hidden">
      
      {/* Dynamic Background Glows - Animated drift */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" 
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left: Text Content */}
        <div className="text-center lg:text-left order-2 lg:order-1 lg:col-span-7">
          <motion.span 
            custom={0} variants={fadeInUp} initial="hidden" animate="visible"
            className="text-secondary text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-6 block"
          >
            Nigeria&apos;s Service Marketplace
          </motion.span>
          
          <motion.h1 
            custom={1} variants={fadeInUp} initial="hidden" animate="visible"
            className="text-text-main text-4xl md:text-7xl font-black leading-[1.1] mb-8 font-display"
          >
            Find Trusted <br />
            <span className="text-primary lg:text-text-main">Professionals </span> 
            in <span className="text-primary">Minutes.</span>
          </motion.h1>
          
          <motion.p 
            custom={2} variants={fadeInUp} initial="hidden" animate="visible"
            className="text-text-muted text-base md:text-xl leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0 font-medium"
          >
            No more searching endlessly. No more overpaying. Just reliable, verified experts at fair prices. 
          </motion.p>
          
          <motion.div 
            custom={3} variants={fadeInUp} initial="hidden" animate="visible"
            className="flex justify-center lg:justify-start"
          >
            <AppStoreButtons align='left' />
          </motion.div>
        </div>

        {/* Right: Asymmetric Image Card */}
        <div className="relative h-100 md:h-125 lg:h-150 w-full order-1 lg:order-2 lg:col-span-5">
          {/* Main Image Frame - Slides in and settles rotation */}
          <motion.div 
            initial={{ opacity: 0, x: 40, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 2 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="absolute right-0 top-0 w-[95%] lg:w-full h-[95%] lg:h-full rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-ambient border border-text-muted/10 bg-surface"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full"
            >
              <Image 
                src={IMAGE} 
                alt="Trusted Professional" 
                fill 
                className="object-cover -rotate-2 scale-110"
                unoptimized
                priority
              />
            </motion.div>
          </motion.div>
          
          {/* Floating Verification Badge - Delayed Pop-in */}
          <motion.div 
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
            className="absolute -bottom-2 lg:bottom-10 left-0 lg:-left-12 bg-surface p-5 lg:p-6 rounded-2xl shadow-ambient border border-text-muted/10 z-20"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-success/10 rounded-full flex items-center justify-center text-success font-black text-lg">
                ✓
              </div>
              <div className="text-left">
                <p className="text-xs lg:text-sm font-black text-text-main font-display">Verification System</p>
                <p className="text-[9px] lg:text-[10px] text-text-muted font-bold uppercase tracking-wider">NIN & BVN Background Checks</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};