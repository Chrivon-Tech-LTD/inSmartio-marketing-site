"use client";

import React, { useRef } from 'react';
import { 
  Link2, 
  Smartphone, 
  Contact, 
  BarChart3, 
  MessageSquareText,
  ArrowRight
} from 'lucide-react';
import { motion, useInView, Variants } from 'framer-motion';

const tools = [
  { 
    name: "Unique Referral Link", 
    icon: Link2, 
    desc: "Share your personalized link. Track clicks and conversions in real-time.",
    tag: "Most Used",
  },
  { 
    name: "Digital Referral Cards", 
    icon: Smartphone, 
    desc: "Customizable high-fidelity cards optimized for WhatsApp and social media.",
    tag: null,
  },
  { 
    name: "Physical Referral Cards", 
    icon: Contact, 
    desc: "Order professionally printed physical cards to hand out in person.",
    tag: null,
  },
  { 
    name: "Analytics Dashboard", 
    icon: BarChart3, 
    desc: "See exactly how many people clicked, registered, and passed verification.",
    tag: "New",
  },
  { 
    name: "Message Templates", 
    icon: MessageSquareText, 
    desc: "Pre-written, high-conversion messages for WhatsApp, SMS, and email.",
    tag: null,
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export const ReferralTools: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 px-6 bg-[#060D1A] overflow-hidden">
      {/* Dynamic Background Glows */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-24 -right-24 w-md h-112 bg-primary/20 blur-[120px] rounded-full pointer-events-none" 
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex flex-col gap-4 mb-16"
        >
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.2em]">
            Agent Toolkit
          </span>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-[#EEF4FF] text-3xl md:text-5xl font-black font-display leading-[1.15] max-w-md">
              Everything you need to scale your network.
            </h2>
            <p className="text-[#7A9DC4] text-sm md:text-base leading-relaxed max-w-sm font-medium">
              A suite of professional marketing and tracking tools to help you recruit and manage experts efficiently.
            </p>
          </div>
        </motion.div>

        {/* Tool Grid */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-5"
        >
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.slice(0, 3).map((tool, i) => (
              <ToolCard key={i} tool={tool} />
            ))}
          </div>

          {/* Bottom row centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:max-w-[66%] lg:mx-auto w-full">
            {tools.slice(3).map((tool, i) => (
              <ToolCard key={i + 3} tool={tool} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function ToolCard({ tool }: { tool: typeof tools[0] }) {
  const Icon = tool.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, backgroundColor: "#0E1E3A", borderColor: "rgba(26,75,140,0.6)" }}
      className="relative group bg-[#0A1628] border border-white/5 rounded-3xl p-8 cursor-pointer transition-colors duration-300 shadow-lg overflow-hidden flex flex-col h-full"
    >
      {/* Inner Glow on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <Icon size={20} />
        </div>

        {tool.tag && (
          <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border 
            ${tool.tag === "New" ? "bg-secondary/10 text-secondary border-secondary/20" : "bg-primary/10 text-primary border-primary/20"}`}>
            {tool.tag}
          </span>
        )}
      </div>

      <h3 className="text-[#EEF4FF] text-lg font-black font-display mb-2">
        {tool.name}
      </h3>

      <p className="text-[#7A9DC4] text-sm leading-relaxed mb-6 flex-1 font-medium">
        {tool.desc}
      </p>

      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#5A8FD4] group-hover:text-secondary border-t border-white/5 pt-5 transition-colors">
        Access Tool
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}