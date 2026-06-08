"use client";

import React, { useRef } from 'react';
import { UserPlus, UserCheck, Share2, LineChart, Users } from 'lucide-react';
import { motion, useInView, Variants } from 'framer-motion';

/* ── Animation Variants ────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

const tasSteps = [
  {
    id: 1,
    title: "Apply for TAS Program",
    desc: "Whether you're an existing expert or new to inSmartio, you can apply to become a Talent Acquisition Specialist.",
    icon: <UserPlus className="text-secondary w-7 h-7" />
  },
  {
    id: 2,
    title: "Get Approved",
    desc: "Our team reviews your application. Once approved, you get your unique TAS ID and dashboard access.",
    icon: <UserCheck className="text-secondary w-7 h-7" />
  },
  {
    id: 3,
    title: "Share Your Referral Link",
    desc: "Share your unique referral link via WhatsApp, SMS, or social media. ",
    icon: <Share2 className="text-secondary w-7 h-7" />
  },
  {
    id: 4,
    title: "Recruits Experts",
    desc: "When experts register using your link and get verified, you earn #7000 instantly",
    icon: <LineChart className="text-secondary w-7 h-7" />
  }
];

export const TASTab: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="space-y-24 transition-colors duration-300"
    >
      
      {/* 1. Onboarding Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {tasSteps.map((step) => (
          <motion.div 
            key={step.id} 
            variants={cardVariants}
            className="relative group"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-8 shadow-lg transition-shadow group-hover:shadow-primary/20"
            >
              {step.icon}
            </motion.div>
            <h3 className="text-2xl font-black text-text-main mb-4 font-display">
              <span className="text-primary mr-2">{step.id}.</span>
              {step.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed font-medium">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 2. Earnings Logic Panel */}
      <motion.div 
        variants={cardVariants}
        className="bg-surface rounded-[3rem] px-8 py-12 md:p-16 border border-text-muted/10 shadow-ambient"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span 
              initial={{ x: -10, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-4 block"
            >
              Passive Income Stream
            </motion.span>
            <h3 className="text-3xl md:text-4xl font-black text-primary mb-6 font-display">
              Earn Ongoing Commissions
            </h3>
            
            
            <div className="space-y-4">
              {[
                { label: "Model 2 Experts", value: "1% of every job they complete" },
                { label: "Model 1 Experts", value: "₦1,000 per month they stay subscribed" },
                { label: "Performance Bonus", value: "Tier bonuses up to 15% on ALL earnings" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ x: 10, borderColor: 'var(--color-primary)' }}
                  className="flex flex-col md:flex-row md:justify-between md:items-center p-5 bg-background rounded-2xl shadow-sm border border-text-muted/5 transition-colors"
                >
                  <span className="text-sm font-black text-text-main mb-2 md:mb-0">{item.label}</span>
                  <span className="text-sm text-secondary font-black">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 3. Tier 3+ Build Your Team (Step 6) */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="bg-primary text-white px-6 py-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
          >
             <div className="relative z-10">
               <motion.div 
                 animate={{ rotate: [0, 10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8"
               >
                 <Users className="text-secondary w-7 h-7" />
               </motion.div>
               <h4 className="text-2xl md:text-3xl text-white font-black mb-6 font-display leading-tight">Step 6: Build Your Team <br /> (Tier 3+)</h4>
               <p className="text-white/80 text-sm leading-relaxed mb-10 font-medium">
                 Recruit other TAS agents as your sub-TAS. Earn overrides on their recruitment and their experts&apos; performance. Scale your agency within inSmartio NG.
               </p>
              
             </div>
             
             {/* Dynamic Mesh Animation */}
             <motion.div 
               animate={{ 
                 scale: [1, 1.3, 1],
                 opacity: [0.2, 0.4, 0.2] 
               }}
               transition={{ duration: 8, repeat: Infinity }}
               className="absolute top-0 right-0 w-48 h-48 bg-secondary rounded-full -mr-24 -mt-24 blur-3xl" 
             />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};