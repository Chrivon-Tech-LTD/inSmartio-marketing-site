"use client";

import React, { useRef } from 'react';
import { Card } from '../ui/Card';
import { CheckCircle2, XCircle } from 'lucide-react';
import { motion, useInView, Variants } from 'framer-motion';

const models = [
  {
    type: "Subscription Model",
    fee: "₦10,000/mo",
    commission: "0%",
    bids: "10 per month",
    maxJob: "₦50,000",
    cash: true,
    recommended: true
  },
  {
    type: "Commission Model",
    fee: "₦0",
    commission: "10%",
    bids: "Unlimited",
    maxJob: "Based on Tier",
    cash: false,
    recommended: false
  }
];

/* ── Animation Variants ────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export const ExpertPaymentModels: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-24 bg-white dark:bg-background transition-colors duration-300">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 md:px-6"
      >
        
        {/* HEADER */}
        <motion.div variants={cardVariants} className="mb-12 md:mb-16 border-l-4 border-primary pl-6 md:pl-8">
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
            Earning Flexibility
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary font-display">
            Flexible Payment Models
          </h2>
          <p className="text-text-muted mt-4 max-w-xl font-medium text-sm md:text-base">
            Choose the model that fits your business stage. Switch anytime as you grow.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {models.map((m, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card 
                className={`p-6 md:p-10 rounded-4xl md:rounded-[2.5rem] border-2 transition-all duration-500 bg-surface flex flex-col justify-between group h-full
                  ${m.recommended 
                    ? 'border-secondary shadow-ambient lg:scale-105 z-10' 
                    : 'border-text-muted/10 shadow-sm hover:border-primary/30'
                  }`}
              >
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8 md:mb-10">
                    <div className="w-full sm:max-w-50">
                      {m.recommended && (
                        <motion.span 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.8, type: "spring" }}
                          className="bg-secondary text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block"
                        >
                          Most Popular
                        </motion.span>
                      )}
                      <h3 className="text-xl md:text-2xl font-black text-primary font-display leading-tight">
                        {m.type}
                      </h3>
                    </div>
                    
                    <div className="text-left sm:text-right w-full sm:w-auto border-t sm:border-t-0 border-text-muted/5 pt-4 sm:pt-0">
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1 }}
                        className="text-2xl md:text-3xl font-black text-text-main font-display"
                      >
                        {m.fee}
                      </motion.p>
                      <p className="text-[10px] text-text-muted font-black uppercase tracking-widest mt-1">Platform Fee</p>
                    </div>
                  </div>

                  <div className="space-y-5 md:space-y-6 mb-8">
                    <PriceRow label="Job Commission" value={m.commission} delay={0.4 + (i * 0.1)} />
                    <PriceRow label="Bids per Month" value={m.bids} delay={0.5 + (i * 0.1)} />
                    <PriceRow label="Max Job Value" value={m.maxJob} delay={0.6 + (i * 0.1)} />
                    
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 + (i * 0.1) }}
                      className="flex justify-between items-center text-xs md:text-base pt-2"
                    >
                      <span className="text-text-muted font-medium">Cash Payments</span>
                      {m.cash ? (
                        <span className="flex items-center gap-1.5 text-success font-black bg-success/5 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs">
                          <CheckCircle2 size={14} className="md:w-4 md:h-4" /> Allowed
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 text-text-muted font-black bg-text-muted/5 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs opacity-60">
                          <XCircle size={14} className="md:w-4 md:h-4" /> Digital Only
                        </span>
                      )}
                    </motion.div>
                  </div>
                </div>

                <p className="text-[10px] md:text-[11px] text-text-muted font-medium italic mt-4 opacity-60">
                  * {m.recommended ? "Perfect for established full-time pros." : "Ideal for starting out with zero risk."}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const PriceRow = ({ label, value, delay }: { label: string, value: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex justify-between items-center text-xs md:text-base border-b border-text-muted/5 pb-4"
  >
    <span className="text-text-muted font-medium">{label}</span>
    <span className="font-black text-text-main">{value}</span>
  </motion.div>
);