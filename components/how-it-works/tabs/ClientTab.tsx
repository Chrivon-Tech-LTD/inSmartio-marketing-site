"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const clientSteps = [
  { id: "1", label: "Post Your Job",    img: "/assets/post-a-job.png", desc: "Tell us what you need. Add photos, describe the job, set your budget, and choose preferences." },
  { id: "2", label: "Receive Bids",     img: "/assets/bid.png",        desc: "Verified experts in your area send you bids. Compare prices, ratings, and verification levels." },
  { id: "3", label: "Negotiate & Hire", img: "/assets/Chat.png",       desc: "Message experts to ask questions or negotiate price. Choose the best fit for you." },
  { id: "4", label: "Pay & Complete",   img: "/assets/payment.png",    desc: "Pay securely into escrow (funds held until you're satisfied) or pay cash directly." },
  { id: "5", label: "Review",           img: "/assets/review.png",     desc: "Share your experience. Your feedback builds trust in the community." },
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
      scrollRef.current.scrollTo({ left: index * (320 + 24), behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full transition-colors duration-300"
      id="how-it-works-client"
    >
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 px-4 -mx-4 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {clientSteps.map((step, i) => (
          <motion.div
            key={step.id}
            variants={cardVariants}
            className="w-70 md:w-[320px] snap-center shrink-0 flex flex-col gap-8"
          >
            {/* Step label */}
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
              <p className="text-xs text-text-muted leading-relaxed min-h-12 line-clamp-3">{step.desc}</p>
            </div>

            {/* Plain screen mockup — just border + image, nothing else */}
            <motion.div
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full rounded-[2.8rem] overflow-hidden shadow-ambient"
              style={{
                aspectRatio: "9/19.5",
                border: "8px solid var(--text-primary)",
                boxShadow: "0 32px 64px rgba(0,0,0,0.18)",
              }}
            >
              <Image
                src={step.img}
                alt={`${step.label} screen`}
                fill
                className="object-cover object-top"
                priority={i === 0}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* DOTS */}
      <div className="flex justify-center items-center gap-4 mt-6">
        {clientSteps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="py-2 px-1 focus:outline-none cursor-pointer"
          >
            <motion.div
              className="h-1.5 rounded-full"
              animate={{
                width: activeIndex === i ? 40 : 8,
                backgroundColor: activeIndex === i ? "var(--color-primary)" : "rgba(var(--color-text-muted), 0.2)",
              }}
              transition={{ duration: 0.4, ease: "circOut" }}
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
};