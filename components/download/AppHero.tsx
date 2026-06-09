"use client";

import React from "react";
import Image from "next/image";
import { QrCode } from "lucide-react";
import { motion, Variants, Transition } from "framer-motion";
import { AppStoreButtons } from "../ui/AppStoreButtons";

/* ── Animation Variants ────────────────────────────────────────── */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1], // TypeScript now handles this correctly via the Variants type
    },
  }),
};

// Explicitly typing this as Transition fixes the number[] error
const mockupTransition: Transition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
  delay: 0.4,
};

export function AppHero() {
  return (
    <section className="relative pt-24 md:pt-40 pb-20 px-4 md:px-6 overflow-hidden bg-white dark:bg-background transition-colors duration-300">
      
      {/* Strategic Background Accents - Floating Drift */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-100 md:w-175 h-100 md:h-175 bg-primary/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" 
      />

      <div className="relative z-10 px-0 md:px-6 flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">

        {/* LEFT: Content */}
        <div className="text-center lg:text-left order-2 lg:order-1 col-span-1 lg:col-span-7 px-2 md:px-0">
          <motion.span 
            custom={0} 
            variants={fadeInUp} 
            initial="hidden" 
            animate="visible"
            className="text-secondary text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4 block"
          >
            Mobile App Re-Imagined
          </motion.span>

          <motion.h1 
            custom={1} 
            variants={fadeInUp} 
            initial="hidden" 
            animate="visible"
            className="text-text-main text-3xl md:text-5xl lg:text-7xl font-black leading-[1.2] lg:leading-[1.1] mb-6 font-display tracking-tight"
          >
            Download the <br />
            <span className="text-primary">inSmartio App.</span> <br />
            Get help in minutes.
          </motion.h1>

         
          <motion.div 
            custom={3} 
            variants={fadeInUp} 
            initial="hidden" 
            animate="visible"
            className="flex justify-center lg:justify-start mb-8"
          >
            <AppStoreButtons align="left" size="sm" />
          </motion.div>

          {/* QR Code Card */}
          <motion.div 
            custom={4} 
            variants={fadeInUp} 
            initial="hidden" 
            animate="visible"
            whileHover={{ scale: 1.02 }}
            className="mx-auto lg:mx-0 max-w-sm flex items-center gap-6 p-5 bg-surface border border-text-muted/10 rounded-2xl shadow-ambient transition-all hover:shadow-xl group cursor-default"
          >
            <div className="bg-text-main p-3 rounded-xl text-white shadow-lg transition-transform group-hover:scale-110">
              <QrCode size={40} className="md:w-12 md:h-12" />
            </div>
            <div className="text-left">
              <p className="font-black text-xs md:text-sm text-text-main uppercase tracking-widest leading-none mb-1">Scan to download</p>
              <p className="text-[10px] md:text-xs text-text-muted font-medium leading-tight">
                Point your camera to the code to get the app instantly.
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Mockup Visuals */}
        <div className="relative col-span-1 lg:col-span-5 flex items-center justify-center lg:justify-end gap-6 md:gap-8 order-1 lg:order-2 px-4 md:px-0">

          {/* Main iPhone Mockup (Desktop only - offset left) */}
          <motion.div 
            initial={{ opacity: 0, y: 60, rotate: -15 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={mockupTransition}
            whileHover={{ rotate: 0, y: -10 }}
            className="hidden lg:block relative z-20 lg:w-56 aspect-9/19 rounded-4xl md:rounded-[3rem] border-4 md:border-8 border-text-main overflow-hidden shadow-2xl bg-surface transition-shadow duration-500 hover:shadow-primary/20"
          >
            <Image
              src="/assets/download.png"
              alt="App Home"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Secondary Android Mockup (Responsive widths) */}
          <motion.div 
            initial={{ opacity: 0, y: 80, rotate: 15 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            transition={{ ...mockupTransition, delay: 0.5 }}
            whileHover={{ rotate: 0, y: -10 }}
            className="w-64 sm:w-72 lg:w-56 aspect-9/19 rounded-4xl md:rounded-[3rem] border-4 md:border-8 border-slate-900 overflow-hidden shadow-2xl bg-primary flex transition-shadow duration-500 hover:shadow-secondary/20 lg:mt-12"
          >
            <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8 text-center text-white">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 1.2 }}
                className="font-display font-black text-xl md:text-2xl lg:text-xl leading-tight tracking-tight"
              >
                Accountability <br /> you can trust.
              </motion.p>
            </div>
          </motion.div>

          {/* Floating Ambient Glow Behind Devices */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl -z-10" 
          />
        </div>

      </div>
    </section>
  );
}