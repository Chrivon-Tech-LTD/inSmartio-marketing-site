"use client";

import React, { useState, useRef } from "react";
import { Info } from "lucide-react";
import { motion, useInView, Variants, AnimatePresence } from "framer-motion";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

/* ── Animation Variants ────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

export const EarningsCalculator: React.FC = () => {
  const [numJobs, setNumJobs] = useState(12);
  const [avgJobValue, setAvgJobValue] = useState(15000);
  const [activeModel, setActiveModel] = useState<'subscription' | 'commission'>('subscription');

  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });

  const totalRevenue = numJobs * avgJobValue;
  const monthlyEarnings = activeModel === 'subscription'
    ? Math.max(0, totalRevenue - 10000) 
    : totalRevenue * 0.9; 

  return (
    <section ref={scrollRef} className="py-24 bg-white dark:bg-background transition-colors duration-300 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
      >
        
        {/* LEFT: Inputs Column */}
        <div className="lg:col-span-7">
          <motion.span variants={fadeInUp} className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
            Transparency Tool
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black text-primary mb-6 font-display">
            Earnings Calculator
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-muted mb-12 max-w-xl font-medium">
            See how much you take home based on your workload. We believe in clear numbers and zero hidden fees.
          </motion.p>
          
          <div className="space-y-12">
            {/* Avg Job Value Slider */}
            <motion.div variants={fadeInUp} className="group">
              <div className="flex justify-between mb-6">
                <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Average Service Fee (₦)</span>
                <motion.span 
                  key={avgJobValue}
                  initial={{ opacity: 0.5, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-black text-primary font-display"
                >
                  ₦{avgJobValue.toLocaleString()}
                </motion.span>
              </div>
              <input 
                type="range" min="5000" max="150000" step="5000"
                value={avgJobValue}
                onChange={(e) => setAvgJobValue(Number(e.target.value))}
                className="w-full h-2 bg-text-muted/10 rounded-lg appearance-none cursor-pointer accent-secondary"
              />
            </motion.div>

            {/* Monthly Bookings Slider */}
            <motion.div variants={fadeInUp} className="group">
              <div className="flex justify-between mb-6">
                <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Monthly Jobs</span>
                <motion.span 
                  key={numJobs}
                  initial={{ opacity: 0.5, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-black text-primary font-display"
                >
                  {numJobs}
                </motion.span>
              </div>
              <input 
                type="range" min="1" max="60" step="1"
                value={numJobs}
                onChange={(e) => setNumJobs(Number(e.target.value))}
                className="w-full h-2 bg-text-muted/10 rounded-lg appearance-none cursor-pointer accent-secondary"
              />
            </motion.div>

            {/* Model Switcher */}
            <motion.div variants={fadeInUp} className="flex gap-2 p-1.5 bg-surface border border-text-muted/10 rounded-3xl w-full sm:w-fit shadow-inner">
              {(['subscription', 'commission'] as const).map((model) => (
                <button 
                  key={model}
                  onClick={() => setActiveModel(model)}
                  className={`relative flex-1 sm:flex-none px-6 py-3 rounded-xl text-[10px] uppercase font-black tracking-widest transition-all duration-300 cursor-pointer
                    ${activeModel === model ? 'text-white' : 'text-text-muted'}`}
                >
                  <span className="relative z-10">{model === 'subscription' ? 'Model 1 (Sub)' : 'Model 2 (Comm)'}</span>
                  {activeModel === model && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-xl shadow-md"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* RIGHT: Results Column */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, scale: 0.9, x: 20 },
            visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="lg:col-span-5"
        >
          <Card className="p-10 bg-primary text-white border-none rounded-[3.5rem] shadow-ambient relative overflow-hidden group">
             <div className="relative z-10">
               <p className="text-[10px] uppercase tracking-[0.4em] font-black text-white/50 mb-4">
                 Monthly Take-Home
               </p>
               <AnimatePresence mode="wait">
                 <motion.h4 
                   key={monthlyEarnings}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.3 }}
                   className="text-5xl md:text-6xl font-black text-white mb-10 font-display tracking-tighter"
                 >
                   ₦{Math.round(monthlyEarnings).toLocaleString()}
                 </motion.h4>
               </AnimatePresence>
               
               <div className="space-y-5 mb-12 pt-8 border-t border-white/10">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60 font-medium">Gross Revenue</span>
                    <span className="font-black text-lg">₦{totalRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60 font-medium">Platform Service Fee</span>
                    <motion.span 
                      key={activeModel}
                      initial={{ scale: 1.1, color: "#fff" }}
                      animate={{ scale: 1, color: "#ff9a3d" }} // Secondary color pulse
                      className="font-black text-secondary"
                    >
                      - ₦{(totalRevenue - monthlyEarnings).toLocaleString()}
                    </motion.span>
                  </div>
               </div>

               <Button 
                 variant="secondary" 
                 className="w-full py-5 text-primary font-black shadow-xl transition-transform hover:scale-[1.02] active:scale-[0.98]"
               >
                 Become an Expert Now
               </Button>

               <p className="mt-8 text-[9px] text-white/30 flex items-center justify-center gap-2 font-black uppercase tracking-widest">
                 <Info size={12} /> Projections based on selected model
               </p>
             </div>
             
             {/* Dynamic Mesh Animation */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-[80px]" 
             />
          </Card>
        </motion.div>

      </motion.div>
    </section>
  );
};