"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

/* ── Animation Variants ────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

const clientSteps = [
  { id: "1", label: "Post Your Job", desc: "Tell us what you need. Add photos, describe the job, set your budget, and choose preferences." },
  { id: "2", label: "Receive Bids", desc: "Verified experts in your area send you bids. Compare prices, ratings, and verification levels." },
  { id: "3", label: "Negotiate & Hire", desc: "Message experts to ask questions or negotiate price. Choose the best fit for you." },
  { id: "4", label: "Pay & Complete", desc: "Pay securely into escrow (funds held until you're satisfied) or pay cash directly." },
  { id: "5", label: "Review", desc: "Share your experience. Your feedback builds trust in the community." }
];

export const ClientTab: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (offsetWidth - 48));
      if (index !== activeIndex) setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const itemWidth = 320 + 24; 
      scrollRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full transition-colors duration-300"
    >
      {/* 1. HORIZONTAL SNAP CONTAINER */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 px-4 -mx-4 no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {clientSteps.map((step, i) => (
          <motion.div 
            key={step.id} 
            variants={cardVariants}
            className="w-70 md:w-[320px] snap-center shrink-0 flex flex-col gap-8"
          >
            {/* Step Content */}
            <div className="px-2">
              <div className="flex items-center gap-3 mb-4">
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Step {step.id}</span>
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={isInView ? { width: "100%" } : {}}
                   transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                   className="h-px bg-text-muted/10" 
                 />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3 font-display">{step.label}</h3>
              <p className="text-xs text-text-muted leading-relaxed min-h-12 line-clamp-3">
                {step.desc}
              </p>
            </div>

            {/* Plain Mockup with Scale Animation */}
            <motion.div
              className="relative w-full rounded-[2.8rem] overflow-hidden flex flex-col items-center justify-center border border-text-muted/10 shadow-ambient bg-surface"
              style={{ aspectRatio: "9/19" }}
              animate={{ 
                scale: activeIndex === i ? 1 : 0.88,
                opacity: activeIndex === i ? 1 : 0.3,
                filter: activeIndex === i ? "blur(0px)" : "blur(2px)" 
              }}
              whileHover={{ scale: activeIndex === i ? 1.02 : 0.9 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Device Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-b-2xl border-x border-b border-text-muted/10" />

              <div className="flex flex-col items-center gap-5 relative z-10">
                <motion.div 
                  animate={activeIndex === i ? { y: [0, -5, 0] } : {}}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-14 h-14 rounded-full flex items-center justify-center font-black text-lg bg-background text-primary shadow-inner border border-text-muted/5"
                >
                  {step.id}
                </motion.div>
                <div className="text-center px-6">
                  <p className="font-bold text-text-main text-lg mb-1 tracking-tight font-display">{step.label}</p>
                  <p className="text-[9px] text-text-muted uppercase tracking-[0.2em] font-black opacity-60">App Interface</p>
                </div>
              </div>

              {/* Animated Skeleton Lines */}
              <div className="absolute bottom-12 left-10 right-10 flex flex-col gap-3">
                <motion.div 
                  animate={{ opacity: activeIndex === i ? 0.4 : 0.1 }}
                  className="h-1.5 w-full bg-text-muted rounded-full" 
                />
                <motion.div 
                   animate={{ opacity: activeIndex === i ? 0.4 : 0.1, width: activeIndex === i ? "60%" : "40%" }}
                   className="h-1.5 bg-text-muted rounded-full" 
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* 2. INTERACTIVE DOTS */}
      <div className="flex justify-center items-center gap-4 mt-6">
        {clientSteps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="group py-2 px-1 focus:outline-none cursor-pointer"
          >
            <motion.div 
              className="h-1.5 rounded-full"
              animate={{ 
                width: activeIndex === i ? 40 : 8,
                backgroundColor: activeIndex === i ? "var(--color-primary)" : "rgba(var(--color-text-muted), 0.2)"
              }}
              transition={{ duration: 0.4, ease: "circOut" }}
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
};