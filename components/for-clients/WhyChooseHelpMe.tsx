"use client";

import React, { useRef } from 'react';
import { ShieldCheck, Lock, Users, MessageSquare, MapPin, Star } from 'lucide-react';
import { Card } from '../ui/Card';
import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';

const AVATAR_IMAGES = [
  "https://i.pinimg.com/736x/d6/ac/6d/d6ac6d5bd234d8676a7fb99d1d02eb42.jpg",
  "https://i.pinimg.com/736x/f2/32/02/f232022f5082fc77fcbd6aa3edc1aed4.jpg",
  "https://i.pinimg.com/1200x/48/9b/4e/489b4e5cc9fc9b3a85ecd4d3ff3d4241.jpg",
  "https://i.pinimg.com/1200x/d4/eb/76/d4eb7675c8533ab32cefcbc953fbd2e8.jpg",
  "https://i.pinimg.com/736x/d6/ac/6d/d6ac6d5bd234d8676a7fb99d1d02eb42.jpg",
];

/* ── Animation Variants ────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export const WhyChooseHelpMe: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background transition-colors duration-300">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6"
      >
        {/* HEADER */}
        <motion.div 
          variants={cardVariants}
          className="mb-16 md:border-l-4 md:border-primary md:pl-8"
        >
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
            The HelpMe Advantage
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-text-main font-display">
            Why choose HelpMe NG?
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl font-medium leading-relaxed">
            We&apos;ve built a platform focused on your security and satisfaction,
            ensuring every interaction is professional, transparent, and protected.
          </p>
        </motion.div>

        {/* ASYMMETRIC UNIFIED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* 1. Verified Experts - Wide Card */}
          <motion.div variants={cardVariants} className="md:col-span-8 h-full">
            <Card className="p-10 bg-surface border border-text-muted/10 flex flex-col md:flex-row gap-8 items-start shadow-sm hover:shadow-ambient transition-all duration-500 group h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary">
                <ShieldCheck className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-text-main mb-4 font-display">Verified Experts</h3>
                <p className="text-text-muted leading-relaxed text-sm md:text-base font-medium">
                  Every expert undergoes a multi-stage background check, including physical address
                  verification, NIN/BVN confirmation, and skill assessment.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* 2-5. Standard Feature Cards */}
          <FeatureCard
            colSpan="md:col-span-4"
            icon={<Lock className="w-8 h-8 text-primary" />}
            title="Payment Protection"
            desc="Pay into escrow. Money is held securely until you approve the work."
          />

          <FeatureCard
            colSpan="md:col-span-4"
            icon={<Users className="w-8 h-8 text-primary" />}
            title="Compare Bids"
            desc="Get quotes from multiple experts. Choose the one that fits your budget."
          />

          <FeatureCard
            colSpan="md:col-span-4"
            icon={<MessageSquare className="w-8 h-8 text-primary" />}
            title="Direct Negotiation"
            desc="Chat securely to finalize terms, milestones, and deliverables."
          />

          <FeatureCard
            colSpan="md:col-span-4"
            icon={<MapPin className="w-8 h-8 text-primary" />}
            title="Safety First"
            desc="Real-time location sharing with trusted contacts during active jobs."
          />

          {/* 6. Honest Reviews - Bottom Wide Card */}
          <motion.div variants={cardVariants} className="md:col-span-12">
            <Card className="p-8 bg-surface border border-text-muted/10 shadow-sm hover:shadow-ambient transition-all duration-500 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex gap-6 items-center text-center md:text-left flex-col md:flex-row">
                <motion.div 
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary"
                >
                  <Star className="fill-secondary w-8 h-8" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-black text-text-main font-display">Honest Reviews</h3>
                  <p className="text-text-muted font-medium">100% verified feedback from clients in your neighborhood.</p>
                </div>
              </div>

              {/* Avatar Stack Mockup */}
              <div className="flex -space-x-3 md:-space-x-4 items-center">
                {AVATAR_IMAGES.map((imgUrl, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.8 + (i * 0.1) }}
                    whileHover={{ y: -10, zIndex: 50 }}
                    className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] md:border-4 border-surface bg-surface overflow-hidden shadow-sm shrink-0 cursor-pointer"
                    style={{ zIndex: AVATAR_IMAGES.length - i }}
                  >
                    <Image
                      src={imgUrl}
                      alt={`Verified Expert ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </motion.div>
                ))}

                {/* +10k Counter Badge */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: "spring", damping: 12, delay: 1.4 }}
                  className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] md:border-4 border-surface bg-primary text-white flex items-center justify-center text-[10px] font-black shrink-0 shadow-lg -ml-3 md:-ml-4"
                >
                  +10k
                </motion.div>
              </div>
            </Card>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

const FeatureCard = ({ colSpan, icon, title, desc }: { colSpan: string, icon: React.ReactNode, title: string, desc: string }) => (
  <motion.div variants={cardVariants} className={`${colSpan} h-full`}>
    <Card className={`p-8 bg-surface border border-text-muted/10 shadow-sm hover:shadow-ambient transition-all duration-500 flex flex-col justify-between group h-full`}>
      <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-primary">
        <div className="text-primary group-hover:text-white transition-colors">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-black text-text-main mb-2 font-display">{title}</h3>
        <p className="text-text-muted text-xs leading-relaxed font-medium">
          {desc}
        </p>
      </div>
    </Card>
  </motion.div>
);