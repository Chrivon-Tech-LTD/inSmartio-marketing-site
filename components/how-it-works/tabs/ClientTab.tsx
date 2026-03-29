"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

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

  // ══ SCROLL SPY LOGIC ══
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * width,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full">
      {/* 1. HORIZONTAL SNAP CONTAINER (No Scrollbar) */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 px-4 -mx-4 no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {clientSteps.map((step, i) => (
          <div 
            key={step.id} 
            className="w-[280px] md:w-[320px] snap-center shrink-0 flex flex-col gap-8"
          >
            {/* Step Content */}
            <div className="px-2">
              <div className="flex items-center gap-3 mb-4">
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Step {step.id}</span>
                 <div className="h-px flex-1 bg-gray-100" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{step.label}</h3>
              <p className="text-xs text-gray-500 leading-relaxed min-h-[48px] line-clamp-3">
                {step.desc}
              </p>
            </div>

            {/* Plain Mockup (Standardized H/W) */}
            <motion.div
              className="relative w-full rounded-[2.8rem] overflow-hidden flex flex-col items-center justify-center border border-gray-100 shadow-sm bg-white"
              style={{ aspectRatio: "9/19" }}
              animate={{ 
                scale: activeIndex === i ? 1 : 0.95,
                opacity: activeIndex === i ? 1 : 0.5 
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Device Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-50 rounded-b-2xl border-x border-b border-gray-100" />

              {/* Central Label */}
              <div className="flex flex-col items-center gap-5 relative z-10">
                <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg bg-gray-50 text-primary shadow-inner">
                  {step.id}
                </div>
                <div className="text-center px-6">
                  <p className="font-bold text-primary text-lg mb-1 tracking-tight">{step.label}</p>
                  <p className="text-[9px] text-gray-300 uppercase tracking-[0.2em] font-bold">App Interface</p>
                </div>
              </div>

              {/* Bottom Skeleton Detail */}
              <div className="absolute bottom-12 left-10 right-10 flex flex-col gap-3">
                <div className="h-1 w-full bg-gray-50 rounded-full" />
                <div className="h-1 w-1/2 bg-gray-50 rounded-full" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* 2. INTERACTIVE DOTS (Synced with Scroll) */}
      <div className="flex justify-center items-center gap-3 mt-4">
        {clientSteps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="group py-2 px-1 focus:outline-none"
          >
            <motion.div 
              className="h-1 rounded-full cursor-pointer"
              animate={{ 
                width: activeIndex === i ? 40 : 12,
                backgroundColor: activeIndex === i ? "var(--color-primary)" : "var(--color-border)"
              }}
              style={{ 
                backgroundColor: activeIndex === i ? "#0A0A2E" : "#E5E7EB" 
              }}
              transition={{ duration: 0.3, ease: "circOut" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};