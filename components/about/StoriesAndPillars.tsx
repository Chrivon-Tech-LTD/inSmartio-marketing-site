"use client";

import React, { useRef } from "react";
import { 
  ShieldCheck, 
  Eye, 
  Zap, 
  Clock, 
  Heart, 
  Repeat,
  Quote,
  LucideIcon 
} from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";

interface Pillar {
  title: string;
  desc: string;
  icon: LucideIcon;
}

const pillars: Pillar[] = [
  { title: "Accountability", desc: "Every expert is verified. Every transaction is tracked.", icon: ShieldCheck },
  { title: "Transparency", desc: "See multiple bids, compare prices, read real reviews.", icon: Eye },
  { title: "Reliability", desc: "Experts show up on time. Payment protection ensures quality.", icon: Clock },
  { title: "Efficiency", desc: "Post a job in minutes. Get bids in under an hour.", icon: Zap },
  { title: "Trust", desc: "Two-way reviews. 24/7 dispute resolution.", icon: Heart },
  { title: "Consistency", desc: "Same quality every time. Build lasting relationships.", icon: Repeat },
];

/* ── Animation Variants ────────────────────────────────────────── */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export function StoryAndPillars() {
  const storyRef = useRef(null);
  const pillarRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const isPillarInView = useInView(pillarRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- STORY SECTION --- */}
        <div ref={storyRef} className="grid lg:grid-cols-12 gap-16 mb-32 items-start">
          <div className="lg:col-span-7">
            <motion.span 
              custom={0} variants={fadeInUp} initial="hidden" animate={isStoryInView ? "visible" : "hidden"}
              className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-4 block"
            >
              Our Story
            </motion.span>
            <motion.h2 
              custom={1} variants={fadeInUp} initial="hidden" animate={isStoryInView ? "visible" : "hidden"}
              className="mb-8 leading-tight text-text-main font-bold font-display text-3xl md:text-5xl"
            >
              Building the digital backbone for <br />
              <span className="text-primary">African Excellence.</span>
            </motion.h2>
            
            <motion.div 
              custom={2} variants={fadeInUp} initial="hidden" animate={isStoryInView ? "visible" : "hidden"}
              className="space-y-6 text-text-muted text-lg leading-relaxed max-w-2xl font-sans"
            >
              <p>
                For nearly two decades, Chrivon cofounders have been building the digital 
                infrastructure for ambitious businesses across Africa. 
                <span className="text-text-main font-bold"> inSmartio is our latest innovation</span>&mdash;a 
                platform that solves the trust deficit in Nigeria&apos;s service industry.
              </p>
              
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-surface border-l-4 border-secondary p-8 my-8 relative rounded-r-2xl shadow-sm transition-all duration-300"
              >
                <Quote className="absolute top-4 right-4 text-secondary/10 w-12 h-12" />
                <p className="italic text-text-main font-medium leading-relaxed">
                  &ldquo;We heard too many stories of no-shows, overcharging, and poor workmanship. 
                  We also heard from skilled professionals who struggle to find consistent 
                  work and get paid on time.&rdquo;
                </p>
              </motion.div>

              <p>
                Based in Lagos and serving communities across Nigeria, we&apos;re on a mission 
                to make reliable services accessible to everyone.
              </p>
            </motion.div>
          </div>

          {/* Creative Stat Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 pt-12">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-surface border border-text-muted/10 rounded-4xl text-center py-12 flex flex-col justify-center shadow-ambient"
            >
              <p className="text-5xl font-display font-black text-primary tracking-tighter">15k+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-text-muted mt-2">Verified Experts</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary rounded-4xl text-center py-12 flex flex-col justify-center translate-y-8 text-white shadow-xl"
            >
              <p className="text-5xl font-display font-black tracking-tighter">85k</p>
              <p className="text-[10px] uppercase font-black tracking-widest mt-2 opacity-80">Jobs Completed</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="col-span-2 bg-surface p-8 mt-8 border-2 border-dashed border-text-muted/20 rounded-4xl"
            >
               <p className="text-xs font-black uppercase text-secondary tracking-widest mb-2">Our Mission</p>
               <p className="text-sm font-bold text-text-main leading-relaxed">
                 Bridges the gap by building Nigeria&apos;s most trusted marketplace where 
                 every transaction is transparent.
               </p>
            </motion.div>
          </div>
        </div>

        {/* --- PILLARS SECTION --- */}
        <div ref={pillarRef} className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isPillarInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-20"
          >
            <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
              Our Values
            </span>
            <h2 className="mb-4 text-text-main font-bold font-display text-3xl md:text-5xl">The 6 Pillars of Chrivon</h2>
            <p className="text-text-muted max-w-xl mx-auto font-medium">
              Our values aren&apos;t just words; they are the architectural framework 
              of every interaction on inSmartio
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isPillarInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  whileHover={{ y: -8, backgroundColor: "var(--color-text-main)" }}
                  className="bg-surface border border-text-muted/10 p-10 rounded-[2.5rem] group transition-all duration-500 cursor-default shadow-sm hover:shadow-ambient"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-text-main transition-colors mb-4 font-display font-bold text-2xl group-hover:text-white">
                    {p.title}
                  </h3>
                  <p className="text-text-muted transition-colors leading-relaxed font-medium group-hover:text-white/70">
                    {p.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}