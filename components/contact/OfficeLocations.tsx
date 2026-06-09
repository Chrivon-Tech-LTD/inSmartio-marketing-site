"use client";

import React, { useRef } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";

const offices = [
  {
    city: "Lagos Office",
    address: "Admiralty Way, Lekki Phase 1, Lagos, Nigeria.",
    tag: "Headquarters"
  },
  {
    city: "Abuja ",
    address: "Suite 45, Maitama District, Abuja, FCT, Nigeria.",
    tag: "Regional Hub"
  }
];

/* ── Animation Variants ────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export function OfficeLocations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
    >
      {offices.map((office, i) => (
        <motion.div 
          key={i} 
          variants={cardVariants}
          whileHover={{ y: -8 }}
          className="bg-white dark:bg-surface p-8 rounded-4xl border border-text-muted/10 shadow-sm hover:shadow-ambient hover:border-primary/30 transition-all duration-500 group flex flex-col justify-between h-full"
        >
          <div>
            <div className="flex justify-between items-start gap-4 mb-8">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-sm"
              >
                <MapPin size={24} />
              </motion.div>
              <span className="bg-primary/5 backdrop-blur-md px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-primary border border-primary/10">
                {office.tag}
              </span>
            </div>
            
            <h4 className="text-xl font-black text-text-main font-display mb-3">
              {office.city}
            </h4>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-8 font-medium">
              {office.address}
            </p>
          </div>

          <button className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.3em] hover:gap-4 transition-all w-fit cursor-pointer group/btn">
            View Directions 
            <ArrowUpRight size={14} className="text-secondary transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </button>
        </motion.div>
      ))}
      
      {/* VISUAL MAP PLACEHOLDER */}
      <motion.div 
        variants={cardVariants}
        className="rounded-4xl overflow-hidden relative min-h-75 md:min-h-full bg-text-main group shadow-ambient"
      >
          {/* Animated Overlay Glow */}
          <motion.div 
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-linear-to-br from-primary/40 to-transparent z-10" 
          />
          
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="flex flex-col items-center gap-3">
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-white border border-white/20 shadow-2xl"
                >
                  Live Satellite: Active
                </motion.span>
                <div className="flex gap-1">
                  {[0, 75, 150].map((delay) => (
                    <motion.div 
                      key={delay}
                      animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: delay/1000 }}
                      className="w-1.5 h-1.5 rounded-full bg-success" 
                    />
                  ))}
                </div>
            </div>
          </div>

          {/* Map Pattern Layer */}
          <div className="absolute inset-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay z-0 transition-transform duration-1000 group-hover:scale-110" />
          
          {/* Subtle Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[40px_40px] z-5" />
      </motion.div>
    </motion.div>
  );
}