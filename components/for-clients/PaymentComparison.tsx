"use client";

import React, { useRef } from 'react';
import { Card } from '../ui/Card';
import { ShieldCheck, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { motion, useInView, Variants } from 'framer-motion';

/* ── Animation Variants ────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export const PaymentComparison: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-[#060D1A] transition-colors duration-300 overflow-hidden">
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
          className="text-center mb-12 md:mb-16"
        >
          <motion.span 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-success/10 text-secondary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 inline-block"
          >
            ● RECOMMENDED
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#D8E8FF] mb-6 font-display leading-tight">
            Choose Your Way to Pay
          </h2>
          <p className="text-[#7A9DC4] max-w-2xl mx-auto font-medium text-base md:text-lg leading-relaxed">
            Flexible payment systems designed for your convenience and security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* OPTION 1: HELPME ESCROW */}
          <motion.div variants={cardVariants}>
            <Card className="h-full p-8 md:p-12 border-2 border-success bg-[#0E1E3A] relative shadow-xl overflow-hidden group transition-all duration-500 rounded-[2.5rem] md:rounded-[3rem] hover:border-success/60">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-64 h-64 bg-success/5 rounded-full -mr-32 -mt-32 pointer-events-none blur-3xl" 
              />
              
              <div className="flex items-center gap-5 mb-10 relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-success/20"
                >
                  <ShieldCheck size={32} />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-black text-[#D8E8FF] font-display">HelpMe Escrow</h3>
              </div>

              <ul className="space-y-6 mb-12 relative z-10">
                {[
                  { label: "Most Secure", desc: "Money held until you're 100% satisfied." },
                  { label: "Full Refund Guarantee", desc: "Refund possible if issue arises or expert cancels." },
                  { label: "Automatic Dispute Resolution", desc: "Our team mediates if things don't go as planned." },
                  { label: "Secure Digital Ledger", desc: "Clear proof of payment for your professional records." }
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex gap-4"
                  >
                    <CheckCircle2 className="text-success shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-black text-[#D8E8FF] text-sm md:text-base">{item.label}</p>
                      <p className="text-xs md:text-sm text-[#7A9DC4] leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-[#060D1A]/50 p-5 rounded-2xl border border-success/20 shadow-sm relative z-10"
              >
                <p className="text-[10px] font-black text-success uppercase tracking-widest mb-1">Best for:</p>
                <p className="text-sm text-[#D8E8FF] font-bold">First-time hires, large jobs, and total peace of mind.</p>
              </motion.div>
            </Card>
          </motion.div>

          {/* OPTION 2: DIRECT CASH */}
          <motion.div variants={cardVariants}>
            <Card className="h-full p-8 md:p-12 border-2 border-secondary bg-[#0E1E3A] relative shadow-lg transition-all duration-500 rounded-[2.5rem] md:rounded-[3rem] group hover:border-secondary/60">
              
              <div className="flex items-center gap-5 mb-10 relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-secondary/20"
                >
                  <AlertTriangle size={32} />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-black text-[#D8E8FF] font-display">Direct Cash</h3>
              </div>

              <ul className="space-y-6 mb-12 relative z-10">
                {[
                  { label: "Pay Expert Directly", desc: "Cash or bank transfer outside the platform." },
                  { label: "No Platform Fees", desc: "Save on the 10% platform transaction fee." },
                  { label: "Fast and Simple", desc: "Immediate payment settlement between parties." }
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex gap-4"
                  >
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-black text-[#D8E8FF] text-sm md:text-base">{item.label}</p>
                      <p className="text-xs md:text-sm text-[#7A9DC4] leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
                
                <motion.li 
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-4 p-5 bg-red-500/5 rounded-2xl border border-red-500/20"
                >
                  <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-black text-red-500 text-sm uppercase tracking-tight">Limited Protection</p>
                    <p className="text-xs text-red-500/80 leading-relaxed font-bold">No protection or dispute resolution if issues arise.</p>
                  </div>
                </motion.li>
              </ul>

              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-[#060D1A]/50 p-5 rounded-2xl border border-secondary/20 shadow-sm relative z-10"
              >
                <p className="text-[10px] font-black text-secondary uppercase tracking-widest mb-1">Best for:</p>
                <p className="text-sm text-[#D8E8FF] font-bold">Small jobs and repeat experts you already trust.</p>
              </motion.div>
            </Card>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};