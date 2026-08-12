"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Wallet, Briefcase, Handshake, Gavel, MessageCircle } from 'lucide-react';
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
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

/* ── Screens: what the expert actually sees at each step ────────── */
const expertScreens = [
  { id: "1", label: "Register & Verify",        img: "/assets/Eregister.jpg",  desc: "Sign up and choose your verification tier to unlock higher-value opportunities." },
  { id: "2", label: "Login to dashboard",       img: "/assets/Edashboard.jpg",   desc: "Log in to your dashboard, find jobs, bid jobs, and view active jobs." },
  { id: "3", label: "Find Jobs",                img: "/assets/Ejobs.jpg",      desc: "Browse jobs matching your skills and location." },
  { id: "4", label: "Bid for Jobs",             img: "/assets/Ebid.jpg",       desc: "Place your bid with your price and timeline for jobs that fit you." },
  { id: "5", label: "Chat Seamlessly",          img: "/assets/message.jpg",    desc: "Once your bid gets a response, chat instantly with the client to sort out the details." },
  { id: "6", label: "Negotiate & Complete Job", img: "/assets/Enegotiate.jpg", desc: "Agree on details in the chat, then get to work and complete the job." },
  { id: "7", label: "Get Paid",                 img: "/assets/Epayment.jpg",   desc: "Get paid within 24 hours of client approval." },
];

export const ExpertTab: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const screensRef = useRef(null);
  const screensInView = useInView(screensRef, { once: true, margin: "-100px" });

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (offsetWidth - 48));
      if (index !== activeIndex) setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: index * (320 + 24), behavior: 'smooth' });
    }
  };

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
              <p className="text-2xl font-black text-text-main mb-4 font-display">₦3000<span className="text-sm opacity-60">/mo</span></p>
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
          <div className="relative z-10 space-y-7">
            <StepItem 
              icon={<Briefcase />} 
              title="3. Find Jobs" 
              desc="Browse jobs matching your skills and location." 
              delay={0.5}
            />
            <StepItem 
              icon={<Gavel />} 
              title="4. Bid for Jobs" 
              desc="Place your bid with your price and timeline." 
              delay={0.6}
            />
            <StepItem 
              icon={<MessageCircle />} 
              title="5. Chat Seamlessly" 
              desc="Chat instantly with the client to sort out the details." 
              delay={0.7}
            />
            <StepItem 
              icon={<Handshake />} 
              title="6. Negotiate & Complete Job" 
              desc="Agree on details with the client, then get the work done." 
              delay={0.8}
            />
            <StepItem 
              icon={<Wallet />} 
              title="7. Get Paid" 
              desc="Get paid within 24 hours of client approval." 
              delay={0.9}
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

      {/* ── See It In Action: screen-by-screen flow ─────────────── */}
      <motion.div ref={screensRef} variants={itemVariants}>
        <div className="mb-8">
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">
            Inside the App
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-primary font-display">
            The Expert Flow
          </h3>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 px-4 -mx-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {expertScreens.map((step, i) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              initial="hidden"
              animate={screensInView ? "visible" : "hidden"}
              className="w-70 md:w-[320px] snap-center shrink-0 flex flex-col gap-8"
            >
              <div className="px-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Step {step.id}</span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={screensInView ? { width: "100%" } : {}}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="h-px bg-text-muted/10"
                  />
                </div>
                <h4 className="text-xl font-bold text-text-main mb-3 font-display">{step.label}</h4>
                <p className="text-xs text-text-muted leading-relaxed min-h-12 line-clamp-3">{step.desc}</p>
              </div>

              <motion.div
                whileHover={{ scale: 1.02, y: -6 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full rounded-[2.8rem] overflow-hidden shadow-ambient"
                style={{
                  aspectRatio: "9/19.5",
                  border: "8px solid var(--text-primary)",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.18)",
                }}
              >
                <Image
                  src={step.img}
                  alt={`${step.label} screen`}
                  fill
                  className="object-cover object-top"
                  priority={i === 0}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 -mt-6">
          {expertScreens.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="py-2 px-1 focus:outline-none cursor-pointer"
            >
              <motion.div
                className="h-1.5 rounded-full"
                animate={{
                  width: activeIndex === i ? 40 : 8,
                  backgroundColor: activeIndex === i ? "var(--color-primary)" : "rgba(var(--color-text-muted), 0.2)",
                }}
                transition={{ duration: 0.4, ease: "circOut" }}
              />
            </button>
          ))}
        </div>
      </motion.div>

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