"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
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

const dotContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.4,
    transition: { staggerChildren: 0.1, delayChildren: 0.8 },
  },
};

export function AboutHero() {
  return (
    <section className="relative pt-24 md:pt-40 pb-20 px-6 bg-background transition-colors duration-300 overflow-hidden">

      {/* Background Accents */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full pointer-events-none"
      />

      {/* Two-column layout */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── Left: Text Content ── */}
        <div className="flex flex-col items-start text-left">

          {/* Editorial Label */}
          <motion.div
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4 mb-8 md:mb-10"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-px bg-secondary/50"
            />
            <span className="text-secondary text-[10px] md:text-xs font-black uppercase tracking-[0.4em] block">
              About Insmartio
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-text-main mb-8 leading-[1.15] md:leading-[1.1] font-bold font-display text-4xl md:text-5xl lg:text-6xl tracking-tight"
          >
            Trusted Services. Verified Professionals.
            {" "}
            <span className="text-primary font-black italic">Built by Chrivon Tech Solutions.</span>
          </motion.h1>

        

          {/* Decorative Indicator */}
          <motion.div
            variants={dotContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-4"
          >
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-1.5 h-1.5 bg-text-muted rounded-full"
                />
              ))}
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-[9px] font-black uppercase tracking-[0.3em] text-text-muted"
            >
              Founded on Integrity
            </motion.span>
          </motion.div>
        </div>

        {/* ── Right: Image ── */}
        <motion.div
          custom={3}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative w-full h-105 md:h-135 rounded-2xl overflow-hidden"
        >
          {/* Main photo */}
          <Image
            src="https://i.pinimg.com/1200x/17/13/6b/17136bebb40d0faf881cfb44bb4badc1.jpg"
            alt="Nigerian professionals collaborating"
            width={900}
            height={600}
            className="w-full h-full object-cover"
            loading="eager"
          />

          {/* Subtle dark gradient overlay at bottom for blending */}
          <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-md border border-secondary/20 rounded-xl px-5 py-4 flex items-center justify-between"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted font-black mb-0.5">
                Verified Professionals
              </p>
              <p className="text-2xl font-black text-text-main leading-none">12,400+</p>
            </div>
            <div className="w-px h-10 bg-secondary/20" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted font-black mb-0.5">
                Trust Score Avg.
              </p>
              <p className="text-2xl font-black text-primary leading-none">98%</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}