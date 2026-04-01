"use client";

import React from "react";
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

interface Pillar {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export function StoryAndPillars() {
  const pillars: Pillar[] = [
    { title: "Accountability", desc: "Every expert is verified. Every transaction is tracked.", icon: ShieldCheck },
    { title: "Transparency", desc: "See multiple bids, compare prices, read real reviews.", icon: Eye },
    { title: "Reliability", desc: "Experts show up on time. Payment protection ensures quality.", icon: Clock },
    { title: "Efficiency", desc: "Post a job in minutes. Get bids in under an hour.", icon: Zap },
    { title: "Trust", desc: "Two-way reviews. 24/7 dispute resolution.", icon: Heart },
    { title: "Consistency", desc: "Same quality every time. Build lasting relationships.", icon: Repeat },
  ];

  return (
    <section className="py-24 px-6 bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- STORY SECTION --- */}
        <div className="grid lg:grid-cols-12 gap-16 mb-32 items-start">
          <div className="lg:col-span-7">
            <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
              Our Story
            </span>
            <h2 className="mb-8 leading-tight text-text-main font-bold font-display text-3xl md:text-5xl">
              Building the digital backbone for <br />
              <span className="text-primary">African Excellence.</span>
            </h2>
            
            <div className="space-y-6 text-text-muted text-lg leading-relaxed max-w-2xl font-sans">
              <p>
                For nearly two decades, Chrivon cofounders have been building the digital 
                infrastructure for ambitious businesses across Africa. 
                <span className="text-text-main font-bold"> HelpMe NG is our latest innovation</span>&mdash;a 
                platform that solves the trust deficit in Nigeria&apos;s service industry.
              </p>
              
              {/* Refined Quote Block */}
              <div className="bg-surface border-l-4 border-secondary p-8 my-8 relative rounded-r-2xl shadow-sm transition-colors duration-300">
                <Quote className="absolute top-4 right-4 text-secondary/10 w-12 h-12" />
                <p className="italic text-text-main font-medium leading-relaxed">
                  &ldquo;We heard too many stories of no-shows, overcharging, and poor workmanship. 
                  We also heard from skilled professionals who struggle to find consistent 
                  work and get paid on time.&rdquo;
                </p>
              </div>

              <p>
                Based in Lagos and serving communities across Nigeria, we&apos;re on a mission 
                to make reliable services accessible to everyone.
              </p>
            </div>
          </div>

          {/* Creative Stat Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 pt-12">
            <div className="bg-surface border border-text-muted/10 rounded-4xl text-center py-12 flex flex-col justify-center shadow-ambient transition-all duration-300">
              <p className="text-5xl font-display font-black text-primary tracking-tighter">15k+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-text-muted mt-2">Verified Experts</p>
            </div>
            
            {/* Primary Stat Card - Keeps Brand Color */}
            <div className="bg-primary rounded-4xl text-center py-12 flex flex-col justify-center translate-y-8 text-white shadow-xl">
              <p className="text-5xl font-display font-black tracking-tighter">85k</p>
              <p className="text-[10px] uppercase font-black tracking-widest mt-2 opacity-80">Jobs Completed</p>
            </div>

            <div className="col-span-2 bg-surface p-8 mt-8 border-2 border-dashed border-text-muted/20 rounded-4xl transition-colors duration-300">
               <p className="text-xs font-black uppercase text-secondary tracking-widest mb-2">Our Mission</p>
               <p className="text-sm font-bold text-text-main leading-relaxed">
                 Bridges the gap by building Nigeria&apos;s most trusted marketplace where 
                 every transaction is transparent.
               </p>
            </div>
          </div>
        </div>

        {/* --- PILLARS SECTION --- */}
        <div className="relative">
          <div className="text-center mb-20">
            <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
              Our Values
            </span>
            <h2 className="mb-4 text-text-main font-bold font-display text-3xl md:text-5xl">The 6 Pillars of Chrivon</h2>
            <p className="text-text-muted max-w-xl mx-auto font-medium">
              Our values aren&apos;t just words; they are the architectural framework 
              of every interaction on HelpMe NG.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div 
                  key={i} 
                  className="bg-surface border border-text-muted/10 p-10 rounded-[2.5rem] group hover:bg-text-main transition-all duration-500 hover:-translate-y-2 cursor-default shadow-sm hover:shadow-ambient"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-text-main transition-colors mb-4 font-display font-bold text-2xl">
                    {p.title}
                  </h3>
                  <p className="text-text-muted transition-colors leading-relaxed font-medium">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}