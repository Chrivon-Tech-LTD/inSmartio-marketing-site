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
    <section className="py-24 bg-background px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* HEADER */}
        <div className="border-l-4 border-primary pl-6">
          <span className="block mb-2 uppercase tracking-[0.2em] font-bold text-secondary text-[10px]">
            7.2 Project Documentation
          </span>
          <h2 className="text-text-main font-display text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Case Study Content
          </h2>
        </div>

        {/* META BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Project Type", value: "Marketplace Platform" },
            { label: "Duration", value: "6 Months Build" },
            { label: "Technologies", value: "React Native, AWS" },
            { label: "Team", value: "8 Specialists" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-surface p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <p className="text-[10px] uppercase font-bold text-text-muted tracking-widest mb-1">
                {item.label}
              </p>
              <p className="text-sm font-bold text-text-main">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* LEFT */}
          <div className="lg:col-span-7 flex">
            <Card className="w-full p-10 bg-surface shadow-lg rounded-4xl flex flex-col justify-between">
              <div className="space-y-10">

                {/* PROBLEM */}
                <div>
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <Target size={22} />
                    <h3 className="text-lg font-bold uppercase tracking-wide">
                      The Problem
                    </h3>
                  </div>
                  <p className="text-text-muted leading-relaxed text-sm md:text-base max-w-xl">
                    Nigerians struggle to find trustworthy professionals. Clients face overcharging,
                    no-shows, and poor workmanship. Experts face irregular income and payment delays.
                    No unified system previously existed to solve this trust gap.
                  </p>
                </div>

                {/* SOLUTION */}
                <div className="pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-3 mb-4 text-secondary">
                    <Lightbulb size={22} />
                    <h3 className="text-lg font-bold uppercase tracking-wide">
                      The Solution
                    </h3>
                  </div>

                  <p className="text-text-muted text-sm mb-6 max-w-xl">
                    A structured, trust-first marketplace built around verification, flexible payments,
                    and expert-driven growth loops.
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Multi-tier verification (NIN, BVN)",
                      "Dual payment models",
                      "Bidding & negotiation system",
                      "TAS recruitment program"
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-[13px] font-semibold text-text-main"
                      >
                        <CheckCircle2 size={16} className="text-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-2 text-[10px] font-bold text-text-muted uppercase tracking-widest opacity-50">
                <Layers size={14} /> Chrivon Framework
              </div>
            </Card>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            {/* RESULTS */}
            <div className="flex-1 bg-primary p-10 rounded-4xl text-white shadow-xl relative overflow-hidden">
              <BarChart4
                size={120}
                className="absolute -bottom-6 -right-6 opacity-10 rotate-12"
              />

              <div className="relative z-10">
                <h3 className="text-lg mb-8 font-bold uppercase tracking-widest">
                  Project Impact
                </h3>

                <div className="space-y-4">
                  {results.map((result, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 border-b border-white/10 pb-3 last:border-none"
                    >
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      <p className="text-sm font-medium">
                        {result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TESTIMONIAL */}
            <div className="flex-1 bg-slate-50 p-10 rounded-4xl border border-slate-100 shadow-sm">
              <Quote className="text-primary opacity-20 mb-4" size={28} />

              <p className="text-text-main font-medium italic mb-6 leading-relaxed text-sm">
                “Chrivon didn’t just build an app — they engineered a trust ecosystem. The
                execution was precise, scalable, and deeply aligned with the Nigerian market.”
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center text-xs font-bold">
                  CI
                </div>

                <div>
                  <p className="text-sm font-bold text-text-main">
                    Christian Ikenna
                  </p>
                  <p className="text-[10px] text-text-muted uppercase font-bold tracking-widest">
                    Founder & CEO
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