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
  LucideIcon // Import the type for Lucide Icons
} from "lucide-react";

// Define an interface for our Pillar items
interface Pillar {
  title: string;
  desc: string;
  icon: LucideIcon; // Store the Component reference, not the <Element />
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
    <section className="py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- STORY SECTION: Narrative & Stats --- */}
        <div className="grid lg:grid-cols-12 gap-16 mb-32 items-start">
          <div className="lg:col-span-7">
            <span className="section-label mb-4 block">8.2 Our Story</span>
            <h2 className="mb-8 leading-tight">
              Building the digital backbone for <br />
              <span className="text-primary">African Excellence.</span>
            </h2>
            
            <div className="space-y-6 text-text-muted text-lg leading-relaxed max-w-2xl">
              <p>
                For nearly two decades, Chrivon cofounders have been building the digital 
                infrastructure for ambitious businesses across Africa. 
                <span className="text-text-main font-medium"> HelpMe NG is our latest innovation</span>&mdash;a 
                platform that solves the trust deficit in Nigeria&apos;s service industry.
              </p>
              
              <div className="editorial-card bg-slate-50 border-l-4 border-secondary! p-8 my-8 relative">
                <Quote className="absolute top-4 right-4 text-secondary/10 w-12 h-12" />
                <p className="italic text-text-main">
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
            <div className="editorial-card text-center py-12 flex flex-col justify-center shadow-ambient">
              <p className="text-5xl font-display font-bold text-primary tracking-tighter">15k+</p>
              <p className="section-label text-[10px]! mt-2 opacity-60">Verified Experts</p>
            </div>
            <div className="editorial-card text-center py-12 flex flex-col justify-center translate-y-8 bg-primary text-white border-none!">
              <p className="text-5xl font-display font-bold tracking-tighter">85k</p>
              <p className="text-[10px] uppercase font-bold tracking-widest mt-2 opacity-80">Jobs Completed</p>
            </div>
            <div className="editorial-card col-span-2 p-8 mt-8 border-dashed! border-slate-200!">
               <p className="text-xs font-bold uppercase text-secondary tracking-widest mb-2">Our Mission</p>
               <p className="text-sm font-medium text-text-main">
                 Bridges the gap by building Nigeria&apos;s most trusted marketplace where 
                 every transaction is transparent.
               </p>
            </div>
          </div>
        </div>

        {/* --- PILLARS SECTION: Creative Grid --- */}
        <div className="relative">
          <div className="text-center mb-20">
            <span className="section-label mb-2 block">8.3 Our Values</span>
            <h2 className="mb-4">The 6 Pillars of Chrivon</h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Our values aren&apos;t just words; they are the architectural framework 
              of every interaction on HelpMe NG.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((p, i) => {
              // Extract the component to a variable (Capitalized)
              const Icon = p.icon;
              return (
                <div 
                  key={i} 
                  className="editorial-card group hover:bg-text-main transition-all duration-500 hover:-translate-y-2 cursor-default"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Icon size={28} />
                  </div>
                  <h3 className="group-hover:text-white transition-colors mb-4 font-display">
                    {p.title}
                  </h3>
                  <p className="text-text-muted group-hover:text-white/60 transition-colors leading-relaxed">
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