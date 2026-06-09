"use client";

import React, { useRef } from 'react';
import { TrendingUp, Award, Zap, Star } from 'lucide-react';
import { motion, useInView, Variants } from 'framer-motion';

const pathways = [
  {
    tier: "Tier 1: Associate",
    experts: "0-9",
    bonus: "0%",
    benefits: "Base rates",
    icon: <TrendingUp size={16} />
  },
  {
    tier: "Tier 2: Senior",
    experts: "10-24",
    bonus: "+5%",
    benefits: "Priority support, monthly recognition",
    isPopular: true,
    icon: <Award size={16} />
  },
  {
    tier: "Tier 3: Master",
    experts: "25-49",
    bonus: "+10%",
    benefits: "Recruit sub-TAS, override on sub-TAS",
    icon: <Zap size={16} />
  },
  {
    tier: "Tier 4: Regional Lead",
    experts: "50+",
    bonus: "+15%",
    benefits: "Higher overrides, team leaderboard",
    icon: <Star size={16} />
  }
];

/* ── Animation Variants ────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export const GrowthPathways: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#060D1A] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">
            TAS Career Tiers
          </span>
          <h2 className="text-[#D8E8FF] text-3xl md:text-5xl font-black font-display leading-tight">
            Growth Pathways
          </h2>
          <p className="text-[#7A9DC4] mt-4 max-w-2xl mx-auto font-medium">
            Scale your impact and unlock higher performance bonuses and exclusive platform benefits.
          </p>
        </motion.div>

        {/* TABLE CONTAINER */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="overflow-x-auto rounded-lg border border-white/5 shadow-ambient bg-[#0E1E3A]"
        >
          <table className="w-full text-left border-collapse min-w-200">
            <thead>
              <tr className="bg-primary/2 border-b border-white/5">
                <th className="p-8 text-[10px] font-black uppercase tracking-widest text-[#7A9DC4]">Tier Level</th>
                <th className="p-8 text-[10px] font-black uppercase tracking-widest text-[#7A9DC4]">Expert Count</th>
                <th className="p-8 text-[10px] font-black uppercase tracking-widest text-[#7A9DC4]">Perf. Bonus</th>
                <th className="p-8 text-[10px] font-black uppercase tracking-widest text-[#7A9DC4]">Exclusive Benefits</th>
              </tr>
            </thead>
            
            <tbody className="text-sm md:text-base font-medium">
              {pathways.map((p, i) => (
                <motion.tr 
                  key={i} 
                  variants={rowVariants}
                  className={`border-b border-white/5 last:border-none transition-all duration-300 group
                    ${p.isPopular ? 'bg-secondary/10 hover:bg-secondary/15' : 'hover:bg-primary/5'}
                  `}
                >
                  <td className="p-8">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-sm
                        ${p.isPopular ? 'bg-secondary text-white' : 'bg-primary/10 text-primary'}
                      `}>
                        {p.icon}
                      </motion.div>
                      <div className="flex flex-col">
                        <span className="font-black text-[#D8E8FF] font-display text-lg tracking-tight">
                          {p.tier}
                        </span>
                        {p.isPopular && (
                          <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="text-[9px] font-black text-secondary uppercase tracking-widest mt-0.5"
                          >
                            Most Common Milestone
                          </motion.span>
                        )}
                      </div>
                    </div>
                  </td>
                  
                  <td className="p-8">
                    <span className="text-[#D8E8FF] font-bold">
                      {p.experts} <span className="text-[#7A9DC4] text-xs font-medium ml-1">Experts</span>
                    </span>
                  </td>
                  
                  <td className="p-8">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success font-black text-lg"
                    >
                      {p.bonus}
                    </motion.div>
                  </td>
                  
                  <td className="p-8 text-[#7A9DC4] leading-relaxed max-w-xs font-medium">
                    {p.benefits}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* MOBILE SCROLL HINT */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="mt-6 flex justify-center lg:hidden"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-[#7A9DC4] uppercase tracking-widest">Swipe to view matrix</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};