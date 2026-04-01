"use client";

import React from "react";
import { CheckCircle2, BarChart3 } from "lucide-react";

export function Metrics() {
  const impactData = [
    { label: "5,000+ verified experts in first 6 months" },
    { label: "N100M+ transaction volume processed" },
    { label: "89% repeat client rate" },
    { label: "4.8/5 average professional rating" }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-label mb-4 block">Impact Analysis</span>
          <h2 className="mb-8 uppercase tracking-tight text-text-main">Impact Metrics</h2>
          <ul className="space-y-6">
            {impactData.map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 group">
                <div className="bg-primary rounded-full p-1 transition-transform group-hover:scale-110">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-medium text-text-main opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Growth Velocity Visual Card */}
        <div className="editorial-card p-10 bg-surface shadow-ambient relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="text-primary w-6 h-6" />
            <h4 className="text-text-main font-bold">Growth Velocity</h4>
          </div>
          
          <div className="flex justify-between items-end gap-3 h-48">
            <div className="w-full bg-blue-100 rounded-t-lg h-[35%] transition-all hover:h-[40%] duration-500"></div>
            <div className="w-full bg-blue-200 rounded-t-lg h-[55%] transition-all hover:h-[60%] duration-500"></div>
            <div className="w-full bg-blue-300 rounded-t-lg h-[45%] transition-all hover:h-[50%] duration-500"></div>
            <div className="w-full bg-blue-400 rounded-t-lg h-[75%] transition-all hover:h-[80%] duration-500"></div>
            <div className="w-full bg-primary rounded-t-lg h-[95%] transition-all hover:h-full duration-500 shadow-lg"></div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between text-[10px] font-bold text-text-muted uppercase tracking-widest">
            <span>Phase 1</span>
            <span>Q1 2026</span>
            <span className="text-primary">Current Peak</span>
          </div>
        </div>
      </div>
    </section>
  );
}