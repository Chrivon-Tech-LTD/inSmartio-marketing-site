'use client';

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "../ui/Button";
import { FaWallet, FaChartLine, FaUsers, FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";

const IMAGE = "https://i.pinimg.com/1200x/d4/eb/76/d4eb7675c8533ab32cefcbc953fbd2e8.jpg";

export const TASSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const benefits = [
    { icon: FaWallet, text: "₦7,000 per expert recruited (one-time)" },
    { icon: FaChartLine, text: "1% of every job they complete (ongoing)" },
    { icon: FaUsers, text: "₦1,000 per month for subscribed experts" },
    { icon: FaCircleCheck, text: "Up to 15% tier bonuses" },
  ];

  return (
    /* Forced Dark Background (#060D1A) and Text (#D8E8FF) */
    <section className="relative py-16 md:py-28 bg-[#060D1A] text-[#D8E8FF] transition-colors duration-300 overflow-hidden">
      
      {/* Background Glow - Adjusted opacity for dark mode visibility */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 md:w-175 md:h-175 bg-primary/20 blur-3xl opacity-30 rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="order-2 lg:order-1 col-span-1 lg:col-span-6 text-center lg:text-left"
        >
          <motion.span 
            variants={itemVariants}
            className="text-secondary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 md:mb-6 block"
          >
            Earn Money by Recruiting Experts
          </motion.span>

          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight font-display text-white"
          >
            Join the <br className="hidden md:block" /> {" "}
            <span className="text-primary">Talent Acquisition Specialist (TAS) </span> Program
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-[#7A9DC4] mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 font-sans"
          >
            Do you know skilled professionals? Refer them to inSmartio and earn:
          </motion.p>

          {/* BENEFITS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-10 md:mb-12">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5, borderColor: 'rgba(var(--secondary), 0.4)', backgroundColor: '#162A4D' }}
                  className="flex items-center gap-4 bg-[#0E1E3A] border border-white/10 rounded-xl p-4 md:p-5 shadow-sm transition-all duration-300 group text-left"
                >
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-secondary/10 transition-colors group-hover:bg-secondary/20">
                    <Icon className="text-secondary text-base md:text-lg" />
                  </div>
                  <p className="text-sm text-[#D8E8FF] font-medium leading-snug">{b.text}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <Button size="lg" variant="primary" className="w-full sm:w-auto px-10">
              Learn About TAS Program
            </Button>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2 col-span-1 lg:col-span-6 relative h-87.5 md:h-125 w-full"
        >
          
          {/* MAIN IMAGE CONTAINER */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full"
            >
              <Image
                src={IMAGE}
                alt="Earn money recruiting professionals"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Force Dark Gradient Over Photo */}
              <div className="absolute inset-0 bg-linear-to-t from-[#060D1A] via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* FLOATING EARNINGS CARD */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              default: { duration: 0.8, delay: 0.6 }
            }}
            className="absolute bottom-6 left-4 md:bottom-10 md:-left-6 bg-[#0E1E3A] text-[#D8E8FF] p-4 md:p-6 rounded-2xl shadow-2xl border border-white/10 z-10"
          >
            <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-[#7A9DC4] mb-1 font-bold">
              Recruitment Bonus
            </p>
            <p className="text-2xl md:text-3xl font-black text-primary">₦7,000</p>
            <div className="mt-1 md:mt-2 flex items-center gap-2 text-[10px] md:text-xs font-bold text-green-400">
              <FaChartLine /> +15% Tier Bonus
            </div>
          </motion.div>

          {/* FLOATING MINI STATS */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute top-8 -right-4 md:top-12 md:-right-6 bg-[#0E1E3A]/90 backdrop-blur-md text-white px-4 py-3 rounded-xl shadow-lg text-[10px] md:text-xs font-bold border border-white/10 z-10"
          >
            Earn per referral
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};