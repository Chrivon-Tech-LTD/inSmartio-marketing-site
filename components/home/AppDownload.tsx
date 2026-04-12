'use client';

import React from "react";
import { motion, Variants } from "framer-motion";
import { AppStoreButtons } from "../ui/AppStoreButtons";
import Image from "next/image";
import { FaArrowTrendUp, FaShieldHalved } from "react-icons/fa6";

export const AppDownload: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className="relative py-12 md:py-28 bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Main Banner Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-primary rounded-4xl md:rounded-[2.5rem] p-8 md:p-16 lg:p-20 shadow-ambient overflow-hidden"
        >
          
          {/* Decorative Background Elements */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/10 to-transparent skew-x-12 translate-x-20 pointer-events-none hidden md:block" 
          />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 md:w-64 md:h-64 bg-secondary/20 blur-3xl rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* LEFT SIDE: Content */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 text-center lg:text-left text-white order-2 lg:order-1"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 md:mb-8">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                  Available on iOS & Android
                </span>
              </motion.div>

              <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-white md:mb-8 leading-[1.2] md:leading-[1.1] font-display">
                The Future of <br className="hidden sm:block" />
                <span className="text-secondary">Nigerian Services</span> <br />
                is in Your Pocket.
              </motion.h2>

              <motion.p variants={itemVariants} className="text-white/80 text-base md:text-lg mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-sans">
                Join over 10,000+ users finding reliable plumbers, electricians, 
                and professionals across Nigeria. Safe, fast, and verified.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center lg:items-start gap-8 justify-center lg:justify-start">
                <AppStoreButtons align="left" size="sm" />
                
                <div className="flex items-center gap-6 sm:gap-4 border-t sm:border-t-0 sm:border-l border-white/20 pt-6 sm:pt-0 sm:pl-8 w-full sm:w-auto justify-center">
                  <div className="text-center">
                    <FaShieldHalved className="text-secondary text-xl mx-auto mb-1" />
                    <p className="text-[9px] uppercase font-bold opacity-70">Verified</p>
                  </div>
                  <div className="text-center">
                    <FaArrowTrendUp className="text-secondary text-xl mx-auto mb-1" />
                    <p className="text-[9px] uppercase font-bold opacity-70">Secure</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE: Interactive Download Section */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
              
              <div className="relative group w-full max-w-65 md:max-w-80">
                {/* QR Code Card */}
                <motion.div 
                  initial={{ rotateY: 30, opacity: 0 }}
                  whileInView={{ rotateY: 0, opacity: 1 }}
                  whileHover={{ scale: 1.02, rotate: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="relative z-20 bg-surface rounded-3xl md:rounded-4xl p-6 md:p-8 shadow-2xl text-center border border-text-muted/10"
                >
                  <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 md:mb-6 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-inner">
                    <Image
                      src="https://i.pinimg.com/736x/78/d5/01/78d5016be7c774417abb6421183fa67c.jpg"
                      alt="QR code to download HelpMe NG app"
                      width={180}
                      height={180}
                      className="mx-auto w-full h-full object-contain"
                      priority
                    />
                  </div>
                  
                  <h4 className="text-text-main font-bold text-base md:text-lg mb-1 font-display">Scan to Install</h4>
                  <p className="text-text-muted text-[10px] md:text-xs font-medium px-2 md:px-4 leading-tight">
                    Point your camera at the code to download instantly
                  </p>
                </motion.div>

                {/* Decorative Stack - Animated offset */}
                <motion.div 
                  initial={{ x: 0, y: 0, rotate: 0 }}
                  whileInView={{ x: 16, y: 16, rotate: -3 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute inset-0 bg-secondary/40 rounded-3xl md:rounded-4xl z-10" 
                />
                <motion.div 
                  initial={{ x: 0, y: 0, rotate: 0 }}
                  whileInView={{ x: 32, y: 32, rotate: -6 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute inset-0 bg-white/10 rounded-3xl md:rounded-4xl z-0" 
                />
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};