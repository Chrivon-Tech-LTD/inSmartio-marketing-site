"use client";

import React, { useRef } from 'react';
import { Calendar, BadgeDollarSign, ShieldCheck, Star, Globe, Wallet } from 'lucide-react';
import { Card } from '../ui/Card';
import { motion, useInView, Variants } from 'framer-motion';

const benefits = [
  { 
    title: "Consistent Work", 
    desc: "Get job alerts matching your skills. No more searching for clients.", 
    icon: <Calendar className="w-6 h-6" /> 
  },
  { 
    title: "Get Paid on Time", 
    desc: "Escrow system guarantees payment. Cash option available for subscribed experts.", 
    icon: <BadgeDollarSign className="w-6 h-6" /> 
  },
  { 
    title: "Verified Status", 
    desc: "Pass verification and get a trust badge. Clients choose verified experts first.", 
    icon: <ShieldCheck className="w-6 h-6" /> 
  },
  { 
    title: "Build your Reputation", 
    desc: "Collect reviews and ratings. Good reputation = more work.", 
    icon: <Star className="w-6 h-6" /> 
  },
  { 
    title: "Digital Presence", 
    desc: "Create a professional profile. Showcase your portfolio. Let clients find you.", 
    icon: <Globe className="w-6 h-6" /> 
  },
  { 
    title: "Flexible payment Models", 
    desc: "Choose between subscription (0% commission) or commission (no monthly fee).", 
    icon: <Wallet className="w-6 h-6" /> 
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

export const ExpertBenefits: React.FC = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">
            Expert Advantages
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary font-display">
            Why Elite Experts Choose Us
          </h2>
        </motion.div>

        <motion.div 
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((b, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card 
                className="p-10 bg-surface border border-text-muted/10 shadow-sm hover:shadow-ambient hover:-translate-y-2 transition-all duration-500 rounded-[2.5rem] group relative overflow-hidden"
              >
                {/* Fixed the Tailwind class name and the missing </Card> closing tag below */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm"
                >
                  {b.icon}
                </motion.div>
                
                <h3 className="text-xl font-black text-text-main mb-3 font-display">
                  {b.title}
                </h3>
                
                <p className="text-text-muted text-sm md:text-base leading-relaxed font-medium">
                  {b.desc}
                </p>
              </Card> 
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};