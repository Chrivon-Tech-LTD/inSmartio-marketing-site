"use client";

import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Info } from 'lucide-react';

export const EarningsCalculator: React.FC = () => {
  const [numJobs, setNumJobs] = useState(12);
  const [avgJobValue, setAvgJobValue] = useState(15000);
  const [activeModel, setActiveModel] = useState<'subscription' | 'commission'>('subscription');

  const totalRevenue = numJobs * avgJobValue;
  const monthlyEarnings = activeModel === 'subscription'
    ? Math.max(0, totalRevenue - 10000) 
    : totalRevenue * 0.9; 

  return (
    <section className="py-24 bg-white dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: Inputs Column */}
          <div className="lg:col-span-7">
            <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
              Transparency Tool
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 font-display">
              Earnings Calculator
            </h2>
            <p className="text-text-muted mb-12 max-w-xl font-medium">
              See how much you take home based on your workload and chosen payment model. 
              We believe in clear numbers and zero hidden fees.
            </p>
            
            <div className="space-y-12">
              {/* Avg Job Value Slider */}
              <div className="group">
                <div className="flex justify-between mb-6">
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">
                    Average Service Fee (₦)
                  </span>
                  <span className="text-2xl font-black text-primary font-display">
                    ₦{avgJobValue.toLocaleString()}
                  </span>
                </div>
                <input 
                  type="range" min="5000" max="150000" step="5000"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  className="w-full h-2 bg-text-muted/10 rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between mt-4 text-[10px] text-text-muted font-black opacity-40">
                  <span>₦5,000</span>
                  <span>₦150,000</span>
                </div>
              </div>

              {/* Monthly Bookings Slider */}
              <div className="group">
                <div className="flex justify-between mb-6">
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">
                    Estimated Monthly Jobs
                  </span>
                  <span className="text-2xl font-black text-primary font-display">
                    {numJobs}
                  </span>
                </div>
                <input 
                  type="range" min="1" max="60" step="1"
                  value={numJobs}
                  onChange={(e) => setNumJobs(Number(e.target.value))}
                  className="w-full h-2 bg-text-muted/10 rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between mt-4 text-[10px] text-text-muted font-black opacity-40">
                  <span>1 JOB</span>
                  <span>60+ JOBS</span>
                </div>
              </div>

              {/* Model Switcher - Preserving your Segmented Style */}
              <div className="flex gap-2 p-1.5 bg-surface border border-text-muted/10 rounded-3xl w-full sm:w-fit shadow-inner">
                {(['subscription', 'commission'] as const).map((model) => (
                  <button 
                    key={model}
                    onClick={() => setActiveModel(model)}
                    className={`
                      flex-1 sm:flex-none px-6 py-3 rounded-xl text-[10px] uppercase font-black tracking-widest transition-all duration-300 cursor-pointer
                      ${activeModel === model 
                        ? 'bg-primary text-white shadow-md' 
                        : 'text-text-muted hover:text-primary hover:bg-primary/5'}
                    `}
                  >
                    {model === 'subscription' ? 'Model 1 (Sub)' : 'Model 2 (Comm)'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Results Column */}
          <div className="lg:col-span-5">
            <Card className="p-10 bg-primary text-white border-none rounded-[3.5rem] shadow-ambient relative overflow-hidden group">
               <div className="relative z-10">
                 <p className="text-[10px] uppercase tracking-[0.4em] font-black text-white/50 mb-4">
                    Monthly Take-Home
                 </p>
                 <h4 className="text-5xl md:text-6xl font-black text-white mb-10 font-display tracking-tighter">
                    ₦{Math.round(monthlyEarnings).toLocaleString()}
                 </h4>
                 
                 <div className="space-y-5 mb-12 pt-8 border-t border-white/10">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/60 font-medium">Gross Revenue</span>
                      <span className="font-black text-lg">₦{totalRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/60 font-medium">Platform Service Fee</span>
                      <span className="font-black text-secondary">
                        - ₦{(totalRevenue - monthlyEarnings).toLocaleString()}
                      </span>
                    </div>
                 </div>

                 <Button 
                   variant="secondary" 
                   className="w-full py-5 text-primary font-black shadow-xl transition-transform group-hover:scale-[1.02]"
                 >
                   Become an Expert Now
                 </Button>

                 <p className="mt-8 text-[9px] text-white/30 flex items-center justify-center gap-2 font-black uppercase tracking-widest">
                   <Info size={12} /> Projections based on selected model
                 </p>
               </div>
               
               {/* Decorative Ambient Shapes */}
               <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
               <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};