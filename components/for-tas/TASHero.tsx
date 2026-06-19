"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
const TAS_HERO = "https://i.pinimg.com/1200x/c1/59/f4/c159f47aea63fd7f76436684fd9c62d8.jpg";

/* ── Animation Variants ────────────────────────────────────────── */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }
  })
};

export const TASHero: React.FC = () => {
  return (
    <section className="relative pt-24 md:pt-32 lg:pt-40 pb-20 bg-white transition-colors duration-300 dark:bg-background overflow-hidden">
      
      {/* Brand Background Accents - Floating Drift */}
      <motion.div 
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-125 h-125 bg-primary/5 blur-[120px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT: Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.span 
            custom={0} variants={fadeInUp} initial="hidden" animate="visible"
            className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 inline-block shadow-sm"
          >
            TAS Partner Program
          </motion.span>
          
          <motion.h1 
            custom={1} variants={fadeInUp} initial="hidden" animate="visible"
            className="text-primary text-4xl md:text-7xl font-black leading-[1.1] mb-8 font-display"
          >
            Earn Money by <br />
            Recruiting Experts. <br />
            <span className="text-secondary italic">Join the TAS Program.</span>
          </motion.h1>

          <motion.p 
            custom={2} variants={fadeInUp} initial="hidden" animate="visible"
            className="text-text-muted text-base md:text-xl leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0 font-medium"
          >
            Know skilled professionals? Refer them to inSmartio and earn <span className="text-text-main font-black">7,000 per expert(phase 2)</span>, plus ongoing commissions. Build a team and scale your earnings.
          </motion.p>
          
          <motion.div 
            custom={3} variants={fadeInUp} initial="hidden" animate="visible"
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Link href="/download">
            <Button variant="primary" size="lg" className="px-10 shadow-xl group">
              Apply for TAS Program
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT: Visual with Income Proof */}
        <div className="relative order-1 lg:order-2">
          {/* Main Hero Image - Slow Zoom In on Load */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-4/5 rounded-[3rem] lg:rounded-[4.5rem] overflow-hidden shadow-ambient border border-text-muted/10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full"
            >
              <Image 
                src={TAS_HERO} 
                alt="TAS Professional" 
                fill 
                className="object-cover"
                unoptimized
                priority
              />
            </motion.div>
          </motion.div>
          
          {/* Social Proof Badge - Smooth Levitation */}
          <motion.div 
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
            className="absolute -bottom-6 left-4 md:-bottom-10 md:-left-10 z-20"
          >
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-surface/95 backdrop-blur-xl p-6 md:p-8 rounded-4xl shadow-ambient border border-text-muted/10 max-w-50 md:max-w-60"
            >
              <div className="flex items-center gap-2 mb-2">
                 <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                   <TrendingUp size={14} className="text-success" />
                 </div>
                 <span className="text-[9px] font-black text-success uppercase tracking-widest">Payout Growth</span>
              </div>
              
              <p className="text-3xl md:text-4xl font-black text-text-main mb-2 font-display tracking-tighter">2.5M+</p>
              
              <p className="text-[10px] text-text-muted font-black uppercase tracking-widest leading-tight opacity-70">
                Paid to agents <br /> last month
              </p>
              
              <div className="mt-4 h-1 w-full bg-text-muted/10 rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: "75%" }}
                   transition={{ duration: 1.5, delay: 1.2, ease: "circOut" }}
                   className="h-full bg-success rounded-full" 
                 />
              </div>
            </motion.div>
          </motion.div>

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl hidden lg:block" />
        </div>

      </div>
    </section>
  );
};