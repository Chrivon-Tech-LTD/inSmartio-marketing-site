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
    "5,000+ verified experts",
    "20,000+ jobs completed",
    "₦100M+ volume",
    "4.8/5 average rating",
    "89% repeat client rate",
    "200+ active TAS agents"
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 space-y-12 md:space-y-16">
        
        {/* PROJECT HEADER */}
        <div className="border-l-4 border-primary pl-6">
          <span className="block mb-2 uppercase tracking-[0.3em] font-black text-secondary text-[10px]">
            7.2 Project Documentation
          </span>
          <h2 className="text-text-main font-display text-3xl md:text-5xl font-black uppercase tracking-tight">
            Case Study Content
          </h2>
        </div>

        {/* META BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Type", value: "Marketplace" },
            { label: "Duration", value: "6 Mo Build" },
            { label: "Tech", value: "React Native" },
            { label: "Team", value: "8 Experts" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-surface p-4 md:p-6 rounded-2xl border border-text-muted/10 shadow-sm"
            >
              <p className="text-[9px] md:text-[10px] uppercase font-black text-text-muted tracking-widest mb-1">
                {item.label}
              </p>
              <p className="text-xs md:text-sm font-black text-text-main truncate">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* MAIN CASE STUDY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Narrative */}
          <div className="lg:col-span-7 h-full">
            <Card className="h-full p-8 md:p-12 bg-surface border border-text-muted/10 shadow-ambient rounded-[2.5rem] md:rounded-[3rem] flex flex-col justify-between group">
              <div className="space-y-10 md:space-y-12">
                {/* THE PROBLEM */}
                <div>
                  <div className="flex items-center gap-4 mb-6 text-primary">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                       <Target size={22} />
                    </div>
                    <h3 className="text-base md:text-lg font-black uppercase tracking-widest font-display">
                      The Problem
                    </h3>
                  </div>
                  <p className="text-text-muted leading-relaxed text-sm md:text-base font-medium">
                    Nigerians struggle to find trustworthy professionals. Clients face overcharging and poor workmanship, while experts face irregular income. No unified system existed to solve this trust gap.
                  </p>
                </div>

                {/* THE SOLUTION */}
                <div className="pt-10 border-t border-text-muted/10">
                  <div className="flex items-center gap-4 mb-6 text-secondary">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                       <Lightbulb size={22} />
                    </div>
                    <h3 className="text-base md:text-lg font-black uppercase tracking-widest font-display">
                      The Solution
                    </h3>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-y-4 md:gap-x-8">
                    {[
                      "Multi-tier verification",
                      "Escrow payments",
                      "Bidding system",
                      "TAS program"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[12px] md:text-[13px] font-black text-text-main">
                        <CheckCircle2 size={16} className="text-success shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-2 text-[10px] font-black text-text-muted uppercase tracking-[0.3em] opacity-40">
                <Layers size={14} /> Chrivon Framework v4.0
              </div>
            </Card>
          </div>

          {/* RIGHT COLUMN: Stats & Social Proof */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">

            {/* PROJECT IMPACT (RESULTS) - Height set to grow */}
            <div className="bg-primary p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] text-white shadow-ambient relative overflow-hidden group min-h-100 flex flex-col">
              <BarChart4
                size={140}
                className="absolute -bottom-8 -right-8 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700"
              />

              <div className="relative z-10 flex-1">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 mb-8 md:mb-10">
                  Project Impact
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  {results.map((result, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 border-b border-white/10 pb-3 last:border-none"
                    >
                      <div className="shrink-0 w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_8px_rgba(255,165,0,0.5)]" />
                      <p className="text-sm md:text-base font-black tracking-tight leading-tight">
                        {result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CLIENT TESTIMONIAL - Height set to auto-hug content */}
            <div className="bg-surface p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-text-muted/10 shadow-sm relative group">
              <Quote className="text-primary opacity-20 mb-4" size={28} />

              <p className="text-text-main font-bold italic mb-6 leading-relaxed text-xs md:text-sm">
                “Chrivon engineered a trust ecosystem. The execution was precise and deeply aligned with the Nigerian market.”
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center text-[10px] font-black shadow-lg">
                  CI
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-black text-text-main uppercase truncate">
                    Christian Ikenna
                  </p>
                  <p className="text-[9px] text-text-muted uppercase font-black tracking-widest truncate">
                    CEO, HelpMe
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