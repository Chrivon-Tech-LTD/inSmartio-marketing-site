"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { Users, BadgePercent, ArrowRight } from 'lucide-react';
import { motion, useInView, Variants } from 'framer-motion';

/* ── Animation Variants ─── */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }
  })
};

export const TASOpportunity: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-background transition-colors duration-300 overflow-hidden">
      
      {/* --- Background Image Column --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 hidden md:flex"
      >
        <Image 
          src="https://i.pinimg.com/736x/3f/f7/3d/3ff73df5dcd6599e8a4b9dd94d679741.jpg" 
          alt="Professional TAS Supervisor"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center grayscale-30 lg:grayscale-0 brightness-50 lg:brightness-100"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-r from-background via-background/90 lg:via-background/40 to-transparent z-10" />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="w-full lg:w-1/2">
          
          {/* Opportunity Badge */}
          <motion.div 
            custom={0} variants={fadeInUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="mb-8"
          >
            <span className="bg-secondary/20 text-secondary px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-sm border border-secondary/10 inline-block">
              Exclusive Opportunity
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            custom={1} variants={fadeInUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="text-text-main text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] font-display tracking-tight"
          >
            Master the Marketplace <br /> 
            <span className="text-primary italic">with TAS.</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            custom={2} variants={fadeInUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="text-text-muted text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-medium"
          >
            Become a <span className="text-text-main font-black">Technical Account Supervisor (TAS)</span>. 
            Earn passive income by vetting new experts, managing service quality, and leading regional growth. 
          </motion.p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
             <motion.div 
               custom={3} variants={fadeInUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
               whileHover={{ y: -5, borderColor: "var(--color-secondary)" }}
               className="flex items-center gap-5 p-4 rounded-2xl bg-surface/50 backdrop-blur-md border border-text-muted/10 transition-colors"
             >
                <motion.div 
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-white shadow-lg shadow-secondary/20"
                >
                  <BadgePercent size={24} />
                </motion.div>
                <span className="text-text-main text-sm font-black uppercase tracking-wider leading-tight">
                  1% lifetime commission <br /> on recruits
                </span>
             </motion.div>

             <motion.div 
               custom={4} variants={fadeInUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
               whileHover={{ y: -5, borderColor: "var(--color-primary)" }}
               className="flex items-center gap-5 p-4 rounded-2xl bg-surface/50 backdrop-blur-md border border-text-muted/10 transition-colors"
             >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <Users size={24} />
                </div>
                <span className="text-text-main text-sm font-black uppercase tracking-wider leading-tight">
                  ₦7,000 instant <br /> verification bonus
                </span>
             </motion.div>
          </div>
          
          {/* CTA Group */}
          <motion.div 
            custom={5} variants={fadeInUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap gap-5"
          >
            <Button variant="primary" size="lg" className="px-10 py-7 text-lg font-black uppercase tracking-widest shadow-2xl shadow-secondary/20 transition-all hover:scale-105 active:scale-95">
              Learn About TAS
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-7 border-text-muted/20 text-text-main font-bold hover:bg-surface transition-all group"
            >
              Compare Roles
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};