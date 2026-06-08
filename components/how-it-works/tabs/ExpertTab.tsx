"use client";

import React, { useRef } from 'react';
import { Wallet, Briefcase, TrendingUp } from 'lucide-react';
import { Card } from '../../ui/Card';
import { motion, useInView, Variants } from 'framer-motion';

/* ── Animation Variants ────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const tiers = [
  {
    level: "Tier 1",
    requirements: "NIN only",
    limit: "Jobs up to ₦20,000",
    theme: "text-blue-500 bg-blue-500/10"
  },
  {
    level: "Tier 2",
    requirements: "NIN + BVN",
    limit: "Jobs up to ₦100,000",
    theme: "text-purple-500 bg-purple-500/10"
  },
  {
    level: "Tier 3",
    requirements: "Expert+",
    limit: "Unlimited job value",
    theme: "text-success bg-success/10 font-black"
  }
];

export const ExpertTab: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="space-y-20 transition-colors duration-300"
    >
      
      {/* Step 1: Verification Tiers */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-4 mb-8">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black shadow-lg"
          >
            1
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-black text-primary font-display">Register & Verify</h3>
        </div>
        <p className="text-text-muted mb-10 max-w-2xl font-medium">
          Sign up and choose your verification tier to unlock higher-value opportunities. 
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <motion.div
              key={tier.level}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-8 bg-surface border border-text-muted/10 shadow-sm hover:shadow-ambient transition-all duration-300 group h-full">
                <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-black ${tier.theme}`}>
                  {tier.level}
                </span>
                <h4 className="mt-6 font-black text-xl text-text-main font-display">{tier.requirements}</h4>
                <p className="text-sm text-text-muted mt-2 font-medium">{tier.limit}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Step 2 & Visual Callout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div variants={itemVariants} className="lg:col-span-7">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black shadow-lg">2</div>
            <h3 className="text-2xl md:text-3xl font-black text-primary font-display">Choose Your Payment Model</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-4xl border-2 border-secondary bg-secondary/5 transition-all"
            >
              <p className="font-black text-primary mb-3 uppercase tracking-widest text-xs">Model 1 (Subscription)</p>
              <p className="text-2xl font-black text-text-main mb-4 font-display">₦10,000<span className="text-sm opacity-60">/mo</span></p>
              <p className="text-sm text-text-muted leading-relaxed font-medium">
                <span className="text-secondary font-bold">0% commission</span> on jobs. Cash payments allowed. 
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-4xl border border-text-muted/10 bg-surface transition-all"
            >
              <p className="font-black text-text-muted mb-3 uppercase tracking-widest text-xs">Model 2 (Commission)</p>
              <p className="text-2xl font-black text-text-main mb-4 font-display">₦0<span className="text-sm opacity-60">/mo</span></p>
              <p className="text-sm text-text-muted leading-relaxed font-medium">
                <span className="text-primary font-bold">10% commission</span> on jobs. Digital payments only. 
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Visual Callout for Remaining Steps */}
        <motion.div 
          variants={{
            hidden: { x: 50, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="lg:col-span-5 bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 space-y-10">
            <StepItem 
              icon={<Briefcase />} 
              title="3. Find Jobs" 
              desc="Browse jobs matching your skills and location. Place bids with your price and timeline." 
              delay={0.6}
            />
            <StepItem 
              icon={<Wallet />} 
              title="4. Get Hired & Paid" 
              desc="Client hires you. Complete the work. Get paid within 24 hours of client approval." 
              delay={0.7}
            />
            <StepItem 
              icon={<TrendingUp />} 
              title="5. Build Your Reputation" 
              desc="Good ratings = more jobs. Build your profile and become a trusted expert." 
              delay={0.8}
            />
          </div>
          {/* Animated Decorative Mesh */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" 
          />
        </motion.div>
      </div>

    </motion.div>
  );
};

const StepItem = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) => (
  <motion.div 
    initial={{ x: 20, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="flex gap-6 group"
  >
    <div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-secondary transition-transform group-hover:scale-110">
      {icon}
    </div>
    <div>
      <p className="font-black text-lg mb-1 font-display">{title}</p>
      <p className="text-sm text-white/70 leading-relaxed font-medium">{desc}</p>
    </div>
  </motion.div>
);