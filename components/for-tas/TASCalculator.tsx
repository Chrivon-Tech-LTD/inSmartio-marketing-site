"use client";

import React, { useState } from 'react';
import { Button } from '../ui/Button';

export const TASCalculator: React.FC = () => {
  const [recruits, setRecruits] = useState(12);
  const [avgEarnings, setAvgEarnings] = useState(250000);

  // Constants from image_47a6e2.png
  const registrationBonus = recruits * 7000;
  const monthlyCommission = (recruits * avgEarnings) * 0.01;
  const estimatedTotal = registrationBonus + monthlyCommission;

  return (
    <section className="py-24 bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Inputs */}
          <div className="lg:col-span-7 p-10 md:p-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Earnings Calculator</h2>
            <p className="text-gray-500 mb-12 text-sm">Estimate your monthly passive income based on your recruitment goals.</p>
            
            <div className="space-y-12">
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Experts Recruited Per Month</label>
                  <span className="text-primary font-bold">{recruits}</span>
                </div>
                <input 
                  type="range" min="1" max="50" step="1"
                  value={recruits}
                  onChange={(e) => setRecruits(Number(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Average Expert Earnings (₦)</label>
                  <span className="text-primary font-bold">₦{avgEarnings.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="50000" max="1000000" step="50000"
                  value={avgEarnings}
                  onChange={(e) => setAvgEarnings(Number(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            </div>
          </div>

          {/* Right: Results Display */}
          <div className="lg:col-span-5 bg-primary p-10 md:p-16 text-white flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-4">Estimated Monthly</p>
            <h4 className="text-5xl md:text-6xl font-bold mb-8">₦{estimatedTotal.toLocaleString()}</h4>
            
            <div className="space-y-4 pt-8 border-t border-white/10 mb-10">
              <div className="flex justify-between text-xs">
                <span className="text-white/60">Registration Bonuses</span>
                <span className="font-bold">₦{registrationBonus.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-white/60">Recurring Commissions</span>
                <span className="font-bold">₦{monthlyCommission.toLocaleString()}</span>
              </div>
            </div>

            <Button variant="secondary" className="w-full py-4 text-primary font-bold shadow-xl">
              Start Recruiting Now
            </Button>
            <p className="text-[10px] text-center mt-6 text-white/40 italic">
              Includes ₦7k registration bonuses and 1% recurring commission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};