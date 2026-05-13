"use client";

import React, { useRef } from "react";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { SiInstagram, SiX, SiWhatsapp } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6"; 
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";
/* ── Animation Variants ────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export function ContactSidebar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="space-y-6 md:space-y-8"
    >
      
      {/* EMAIL SUPPORT CARD */}
      <motion.div 
        variants={cardVariants}
        whileHover={{ x: -5 }}
        className="bg-white dark:bg-surface p-8 rounded-4xl border border-text-muted/10 border-l-4 border-l-primary shadow-sm hover:shadow-ambient transition-all duration-500 group"
      >
        <div className="flex items-center gap-4 mb-6 text-primary">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
            <HiOutlineEnvelope size={20} />
          </div>
          <h4 className="text-[11px] font-black uppercase tracking-[0.2em] font-display">Email Support</h4>
        </div>
        
        <div className="space-y-4">
          <Link href="mailto:support@insmartio.com">
            <ContactLine label="General" value="support@insmartio.com" />
          </Link>
          <ContactLine label="Clients" value="clients@insmartio.ng" />
          <ContactLine label="Experts" value="experts@insmartio.ng" />
          <ContactLine label="TAS Agents" value="tas@insmartio.ng" />
        </div>
      </motion.div>

      {/* PHONE SUPPORT CARD */}
      <motion.div 
        variants={cardVariants}
        whileHover={{ x: -5 }}
        className="bg-white dark:bg-surface p-8 rounded-4xl border border-text-muted/10 border-l-4 border-l-secondary shadow-sm hover:shadow-ambient transition-all duration-500 group"
      >
        <div className="flex items-center gap-4 mb-6 text-secondary">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center transition-transform group-hover:scale-110">
            <HiOutlinePhone size={20} />
          </div>
          <h4 className="text-[11px] font-black uppercase tracking-[0.2em] font-display">Live Support</h4>
        </div>
        
        <div className="space-y-1">
          <p className="text-lg font-black text-text-main font-display tracking-tight">+234 800 inSmartio</p>
          <p className="text-[10px] text-text-muted font-black uppercase tracking-widest opacity-60 italic leading-none">
            Mon - Fri, 8am - 6pm WAT
          </p>
        </div>
      </motion.div>

      {/* SOCIAL COMMUNITY CARD */}
      <motion.div 
        variants={cardVariants}
        className="bg-surface p-8 rounded-[2.5rem] border border-text-muted/10 text-center shadow-sm"
      >
        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-text-muted">
          Join Our Community
        </h4>
        
        <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
          <SocialIcon icon={<SiX size={16} />} href="#" />
          <SocialIcon icon={<SiInstagram size={18} />} href="#" />
          <SocialIcon icon={<FaLinkedinIn size={18} />} href="#" />
          <SocialIcon icon={<SiWhatsapp size={18} />} href="#" />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Helper Components ────────────────────────────────────────── */

const ContactLine = ({ label, value }: { label: string; value: string }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="flex flex-col gap-0.5 group/line cursor-pointer"
  >
    <span className="text-[9px] font-black text-text-muted uppercase tracking-widest opacity-60">
      {label}
    </span>
    <span className="text-sm font-bold text-text-main group-hover/line:text-primary transition-colors truncate">
      {value}
    </span>
  </motion.div>
);

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ 
      y: -5, 
      scale: 1.1, 
      backgroundColor: "var(--color-primary)", 
      color: "#ffffff" 
    }}
    whileTap={{ scale: 0.95 }}
    className="w-12 h-12 rounded-2xl bg-white dark:bg-background text-text-muted cursor-pointer transition-all duration-300 border border-text-muted/10 flex items-center justify-center shadow-sm hover:shadow-lg"
  >
    {icon}
  </motion.a>
);