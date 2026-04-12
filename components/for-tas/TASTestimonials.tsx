"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { Quote, Trophy } from 'lucide-react';
import { motion, useInView, Variants } from 'framer-motion';
import { Card } from '../ui/Card';

const testimonials = [
  {
    quote: "I've recruited 28 experts from my community. The ₦7,000 upfront per expert helped me pay for my children's school fees, and the ongoing commissions provide steady income. Now I'm training others to become sub-TAS under me.",
    author: "Chidi E.",
    location: "Enugu",
    tier: "Tier 3 Master TAS",
    image: "https://i.pinimg.com/736x/f2/32/02/f232022f5082fc77fcbd6aa3edc1aed4.jpg" 
  },
  {
    quote: "I'm a social media manager, so reaching people online is easy. I've recruited 15 experts in 3 months just by sharing my referral link on Instagram. The dashboard shows me exactly how many people signed up through my link.",
    author: "Grace A.",
    location: "Lagos",
    tier: "Tier 2 Senior TAS",
    image: "https://i.pinimg.com/1200x/48/9b/4e/489b4e5cc9fc9b3a85ecd4d3ff3d4241.jpg"
  }
];

/* ── Animation Variants ────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export const TASTestimonials: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="mb-16"
        >
          <span className="block mb-2 uppercase tracking-[0.2em] font-black text-secondary text-[10px]">Social Proof</span>
          <h2 className="text-text-main font-display text-4xl md:text-5xl font-black">Voices of Our Agents</h2>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="bg-surface px-6 py-10 md:p-10 rounded-[3rem] border border-slate-100 shadow-ambient relative flex flex-col justify-between h-full group">
                {/* Animated Quote Icon Background */}
                <motion.div
                  animate={{ 
                    rotate: [0, 5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 text-primary opacity-5"
                >
                  <Quote size={80} />
                </motion.div>
                
                <div className="relative z-10">
                  <p className="text-text-main text-base md:text-lg leading-relaxed mb-10 font-medium italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-5 relative z-10">
                  {/* Image Container with Hover Zoom */}
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-sm bg-slate-100 border-2 border-transparent group-hover:border-primary/20 transition-all duration-500">
                     <Image 
                       src={t.image} 
                       alt={t.author} 
                       fill 
                       sizes="56px"
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-black text-text-main font-display">{t.author}, {t.location}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-secondary">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                      >
                        <Trophy size={12} fill="currentColor" />
                      </motion.div>
                      <p className="text-[10px] uppercase font-black tracking-widest">{t.tier}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};