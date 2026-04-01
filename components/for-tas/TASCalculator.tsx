"use client";

import React, { useState } from 'react';
import { Button } from '../ui/Button';

export const TASCalculator: React.FC = () => {
  // Input States based on Section 6.4
  const [model1Experts, setModel1Experts] = useState(1);
  const [model2Experts, setModel2Experts] = useState(3);
  const [avgJobValue, setAvgJobValue] = useState(30000);
  const [jobsPerMonth, setJobsPerMonth] = useState(5);

  // --- CALCULATION LOGIC ---
  const totalRecruits = model1Experts + model2Experts;
  
  // 1. Registration Bonuses (₦7k per expert)
  const regBonusTotal = totalRecruits * 7000;

  // 2. Monthly Commissions (Separated as requested)
  const model1Earnings = model1Experts * 1000;
  const model2Earnings = model2Experts * jobsPerMonth * avgJobValue * 0.01;
  const totalMonthlyCommission = model1Earnings + model2Earnings;

  // 3. Estimated Annual (Monthly * 12 + One-time Bonuses)
  const estimatedAnnual = (totalMonthlyCommission * 12) + regBonusTotal;

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-surface rounded-[3rem] overflow-hidden shadow-ambient border border-slate-100 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Input Fields (6.4) */}
          <div className="lg:col-span-7 p-6 md:p-16">
            <span className="section-label mb-2 block uppercase tracking-widest text-secondary font-bold text-[10px]">6.4 Earnings Calculator</span>
            <h2 className="text-text-main mb-12 font-display">Estimate Your Impact</h2>
            
            <div className="space-y-10">
              {/* Model 1 Slider */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Model 1 Experts (Fixed Fee)</label>
                  <span className="font-bold text-primary">{model1Experts}</span>
                </div>
                <input 
                  type="range" min="0" max="100" 
                  value={model1Experts} 
                  onChange={(e) => setModel1Experts(Number(e.target.value))} 
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary" 
                />
              </div>

              {/* Model 2 Slider */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Model 2 Experts (1% Commission)</label>
                  <span className="font-bold text-primary">{model2Experts}</span>
                </div>
                <input 
                  type="range" min="0" max="100" 
                  value={model2Experts} 
                  onChange={(e) => setModel2Experts(Number(e.target.value))} 
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary" 
                />
              </div>

              {/* Numerical Inputs */}
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Avg Job Value (₦)</label>
                  <input 
                    type="number" 
                    value={avgJobValue} 
                    onChange={(e) => setAvgJobValue(Number(e.target.value))} 
                    className="input-field py-2! text-sm font-semibold" 
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Jobs Per Month</label>
                  <input 
                    type="number" 
                    value={jobsPerMonth} 
                    onChange={(e) => setJobsPerMonth(Number(e.target.value))} 
                    className="input-field py-2! text-sm font-semibold" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Results Dashboard (Vibrant Blue Layout) */}
          <div className="lg:col-span-5 bg-primary p-6 md:p-16 text-white flex flex-col justify-center relative overflow-hidden">
            {/* Subtle background detail */}
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <div className="w-32 h-32 border-4 border-white rounded-full"></div>
            </div>

            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-4">Total Recruits: {totalRecruits}</p>
            <h4 className="text-5xl md:text-6xl font-display font-bold mb-10 text-white">
              ₦{totalMonthlyCommission.toLocaleString()}<span className="text-lg opacity-60 font-normal ml-2">/mo</span>
            </h4>
            
            <div className="space-y-5 pt-8 border-t border-white/10 mb-10">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">One-time Bonuses (Reg.)</span>
                <span className="font-bold font-display tracking-wide">₦{regBonusTotal.toLocaleString()}</span>
              </div>
              
              {/* Separated Commissions for clarity */}
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Model 1 (Fixed Management)</span>
                <span className="font-bold font-display tracking-wide">₦{model1Earnings.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Model 2 (1% Performance)</span>
                <span className="font-bold font-display tracking-wide">₦{model2Earnings.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-sm pt-6 border-t border-white/10">
                <span className="text-secondary font-bold uppercase tracking-widest text-[11px]">Est. Year 1 Total</span>
                <span className="font-bold font-display text-secondary text-2xl">₦{estimatedAnnual.toLocaleString()}</span>
              </div>
            </div>

            <Button variant="secondary" fullWidth className="bg-white! text-primary! hover:bg-slate-100! font-bold shadow-xl">
              Start Earning as a TAS
            </Button>
            
            <p className="text-[10px] text-center mt-6 text-white/40 italic">
              Estimated based on current tier performance metrics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};