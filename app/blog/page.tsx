"use client";

import React, { useRef } from "react";
import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedGrid } from "@/components/blog/FeaturedGrid";
import { Button } from "@/components/ui/Button";
import { motion, useInView, Variants } from "framer-motion";

/* ── Animation Variants ────────────────────────────────────────── */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function BlogPage() {
  const newsletterRef = useRef(null);
  const isInView = useInView(newsletterRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-white dark:bg-background transition-colors duration-300">
      {/* 1. Hero Section */}
      <BlogHero />
      
      {/* 2. Main Article Grid */}
      <FeaturedGrid />

      {/* 3. Newsletter Section */}
      <section 
        ref={newsletterRef}
        className="py-24 md:py-32 px-4 md:px-6 border-t border-text-muted/10 overflow-hidden"
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Label */}
          <motion.span 
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block"
          >
            Community Updates
          </motion.span>
          
          <motion.h2 
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl md:text-5xl font-black text-text-main font-display mb-6 tracking-tight leading-tight"
          >
            Stay updated with <br className="hidden sm:block" /> our newsletter
          </motion.h2>
          
          <motion.p 
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-text-muted text-base md:text-xl mb-12 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Get the latest insights on Nigeria&apos;s service economy and professional marketplace strategy delivered directly to your inbox.
          </motion.p>

          {/* Form Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative group max-w-2xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4 p-4 md:p-8 bg-surface border border-text-muted/10 rounded-4xl shadow-ambient focus-within:border-primary/30 transition-all duration-300 relative z-10">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 bg-transparent rounded-xl text-text-main placeholder:text-text-muted/50 focus:outline-none font-medium text-sm md:text-base"
              />
              <Button 
                variant="primary" 
                size="lg" 
                className="px-10 py-4 rounded-3xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Subscribe
              </Button>
            </div>
            
            {/* Ambient Background Glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0, 1, 0] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-2 bg-linear-to-r from-primary/10 to-secondary/10 rounded-[3rem] blur-xl pointer-events-none" 
            />
          </motion.div>

          {/* Trust Caption */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.4 } : {}}
            transition={{ delay: 1 }}
            className="mt-8 text-[10px] text-text-muted font-black uppercase tracking-widest"
          >
            Zero spam. Unsubscribe at any time.
          </motion.p>
        </div>
      </section>
    </main>
  );
}