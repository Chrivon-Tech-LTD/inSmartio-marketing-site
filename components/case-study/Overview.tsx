"use client";

import React from 'react';
import { 
  Target, 
  Lightbulb, 
  BarChart4, 
  Quote,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { Card } from '../ui/Card';

export const CaseStudyOverview: React.FC = () => {
  const results = [
    "5,000+ verified experts in first 6 months",
    "20,000+ jobs completed",
    "₦100M+ transaction volume",
    "4.8/5 average rating",
    "89% repeat client rate",
    "200+ active TAS agents"
  ];

  return (
    <section className="py-24 bg-white dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* PROJECT HEADER */}
        <div className="border-l-4 border-primary pl-6">
          <span className="block mb-2 uppercase tracking-[0.3em] font-black text-secondary text-[10px]">
            7.2 Project Documentation
          </span>
          <h2 className="text-text-main font-display text-4xl md:text-5xl font-black uppercase tracking-tight">
            Case Study Content
          </h2>
        </div>

        {/* META BAR - Adaptive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Project Type", value: "Marketplace Platform" },
            { label: "Duration", value: "6 Months Build" },
            { label: "Technologies", value: "React Native, AWS" },
            { label: "Team", value: "8 Specialists" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-surface p-6 rounded-2xl border border-text-muted/10 shadow-sm hover:shadow-ambient transition-all duration-300"
            >
              <p className="text-[10px] uppercase font-black text-text-muted tracking-widest mb-1">
                {item.label}
              </p>
              <p className="text-sm font-black text-text-main">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* MAIN CASE STUDY GRID */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: Narrative */}
          <div className="lg:col-span-7 flex">
            <Card className="w-full p-8 md:p-12 bg-surface border border-text-muted/10 shadow-ambient rounded-[3rem] flex flex-col justify-between group">
              <div className="space-y-12">

                {/* THE PROBLEM */}
                <div>
                  <div className="flex items-center gap-4 mb-6 text-primary">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                       <Target size={22} />
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-widest font-display">
                      The Problem
                    </h3>
                  </div>
                  <p className="text-text-muted leading-relaxed text-base font-medium max-w-xl">
                    Nigerians struggle to find trustworthy professionals. Clients face overcharging,
                    no-shows, and poor workmanship. Experts face irregular income and payment delays.
                    No unified system previously existed to solve this trust gap effectively.
                  </p>
                </div>

                {/* THE SOLUTION */}
                <div className="pt-10 border-t border-text-muted/10">
                  <div className="flex items-center gap-4 mb-6 text-secondary">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                       <Lightbulb size={22} />
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-widest font-display">
                      The Solution
                    </h3>
                  </div>

                  <p className="text-text-muted text-base mb-8 max-w-xl font-medium">
                    A structured, trust-first marketplace built around multi-tier verification, flexible payments,
                    and expert-driven growth loops through the TAS program.
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                    {[
                      "Multi-tier verification (NIN, BVN)",
                      "Dual payment models",
                      "Bidding & negotiation system",
                      "TAS recruitment program"
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-[13px] font-black text-text-main group/li"
                      >
                        <CheckCircle2 size={16} className="text-success transition-transform group-hover/li:scale-125" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* BRAND FOOTER */}
              <div className="mt-12 flex items-center gap-2 text-[10px] font-black text-text-muted uppercase tracking-[0.3em] opacity-40">
                <Layers size={14} /> Chrivon Framework v4.0
              </div>
            </Card>
          </div>

          {/* RIGHT COLUMN: Stats & Social Proof */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            {/* PROJECT IMPACT (RESULTS) */}
            <div className="flex-1 bg-primary p-10 rounded-[3rem] text-white shadow-ambient relative overflow-hidden group">
              <BarChart4
                size={140}
                className="absolute -bottom-8 -right-8 opacity-10 rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110"
              />

              <div className="relative z-10">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 mb-10">
                  Project Impact
                </h3>

                <div className="space-y-5">
                  {results.map((result, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-none"
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full shadow-[0_0_8px_rgba(255,165,0,0.5)]" />
                      <p className="text-sm md:text-base font-black tracking-tight">
                        {result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CLIENT TESTIMONIAL */}
            <div className="flex-1 bg-surface p-10 rounded-[3rem] border border-text-muted/10 shadow-sm relative group">
              <Quote className="text-primary opacity-20 mb-6 transition-transform group-hover:scale-110" size={32} />

              <p className="text-text-main font-bold italic mb-8 leading-relaxed text-sm md:text-base">
                “Chrivon didn’t just build an app — they engineered a trust ecosystem. The
                execution was precise, scalable, and deeply aligned with the Nigerian market.”
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center text-xs font-black shadow-lg">
                  CI
                </div>

                <div>
                  <p className="text-sm font-black text-text-main uppercase tracking-tight">
                    Christian Ikenna
                  </p>
                  <p className="text-[10px] text-text-muted uppercase font-black tracking-[0.2em] mt-0.5">
                    Founder & CEO, HelpMe
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};