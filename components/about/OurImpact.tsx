"use client";

import React, { useRef } from "react";
import { 
  Users, 
  Briefcase, 
  Banknote, 
  MapPin, 
  Star,
  LucideIcon
} from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { Card } from "../ui/Card";

interface ImpactStat {
  label: string;
  value: string;
  icon: LucideIcon;
  desc: string;
}

const impactStats: ImpactStat[] = [
  { label: "Verified Experts", value: "5,000+", icon: Users, desc: "Vetted professionals across all tiers." },
  { label: "Jobs Completed", value: "20,000+", icon: Briefcase, desc: "Successful service deliveries nationwide." },
  { label: "Transaction Volume", value: "₦100M+", icon: Banknote, desc: "Secured through our escrow protection." },
  { label: "Cities Across Nigeria", value: "10+", icon: MapPin, desc: "Bridging the trust gap in major hubs." },
  { label: "Average Rating", value: "4.8/5", icon: Star, desc: "Top-tier quality maintained by our pros." },
  { label: "Active TAS Agents", value: "200+", icon: Star, desc: "Top-tier quality maintained by our pros." },
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

export function OurImpact() {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-surface transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="mb-16 border-l-4 border-primary pl-8"
        >
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
            Our Impact
          </span>
          <h2 className="text-text-main font-display text-3xl md:text-5xl font-bold">
            Empowering the Ecosystem
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-text-muted mt-4 max-w-xl font-sans text-lg"
          >
            Our mission is defined by the growth of our experts and the 
            satisfaction of our clients. These numbers tell our story.
          </motion.p>
        </motion.div>

        {/* GRID LAYOUT */}
        <motion.div 
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {impactStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div key={i} variants={cardVariants}>
                <Card 
                  className="p-8 bg-background border border-text-muted/10 shadow-xl group hover:border-primary/30 transition-all duration-500 rounded-[2.5rem] flex flex-col justify-between h-full relative overflow-hidden"
                >
                  {/* Subtle hover background accent */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <motion.div 
                      whileHover={{ rotate: -10, scale: 1.1 }}
                      className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm"
                    >
                      <Icon size={24} />
                    </motion.div>
                    
                    <div className="space-y-1">
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
                        className="text-3xl font-display font-black text-text-main tracking-tight"
                      >
                        {stat.value}
                      </motion.p>
                      <p className="text-[10px] uppercase font-black tracking-widest text-secondary">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                  
                  
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}