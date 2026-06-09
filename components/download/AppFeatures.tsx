"use client";

import React, { useRef } from "react";
import { PlusCircle, Bell, MessageSquare, ShieldCheck, MapPin, Star } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";

interface Feature {
  title: string;
  desc: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  { title: "Post a Job", desc: "Describe what you need, add photos, and set your budget.", icon: PlusCircle },
  { title: "Get Bids", desc: "Receive quotes from verified experts in real-time.", icon: Bell },
  { title: "Negotiate", desc: "Message experts and agree on price inside our encrypted chat.", icon: MessageSquare },
  { title: "Pay Securely", desc: "Escrow protection ensures your funds are safe until the job is done.", icon: ShieldCheck },
  { title: "Track Progress", desc: "Know exactly when your expert is on the way with live tracking.", icon: MapPin },
  { title: "Leave Reviews", desc: "Share your experience and help others find the best talent.", icon: Star },
];

/* ── Animation Variants ────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

export function AppFeatures() {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-white dark:bg-background transition-colors duration-300 overflow-hidden">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-16 md:mb-20">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-4 block"
        >
          Mobile Capabilities
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-black text-primary font-display mb-6 tracking-tight leading-tight"
        >
          Features Preview
        </motion.h2>
       
      </div>

      {/* FEATURES GRID */}
      <motion.div 
        ref={scrollRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {features.map((f, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="p-10 rounded-[2.5rem] bg-surface border border-text-muted/10 shadow-sm hover:shadow-ambient hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
          >
            {/* Subtle Gradient Reveal on Hover */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* ICON CONTAINER */}
            <motion.div 
              whileHover={{ rotate: -10 }}
              className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm relative z-10"
            >
              <f.icon size={28} strokeWidth={2.5} />
            </motion.div>
            
            <h4 className="text-xl font-black text-text-main mb-4 font-display relative z-10">
              {f.title}
            </h4>
            
            <p className="text-sm md:text-base text-text-muted leading-relaxed font-medium relative z-10">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}