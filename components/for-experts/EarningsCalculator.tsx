"use client";

import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Info } from 'lucide-react'; // Now used in the UI

export const EarningsCalculator: React.FC = () => {
  const [numJobs, setNumJobs] = useState(12);
  const [avgJobValue, setAvgJobValue] = useState(15000);
  const [activeModel, setActiveModel] = useState<'subscription' | 'commission'>('subscription');

  // Calculation logic moved out of useEffect to avoid cascading renders
  const totalRevenue = numJobs * avgJobValue;
  const monthlyEarnings = activeModel === 'subscription'
    ? Math.max(0, totalRevenue - 10000) // Model 1: 10k flat fee
    : totalRevenue * 0.9;               // Model 2: 10% commission

  return (
    <section className="py-24 bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-primary mb-6">Earnings Calculator</h2>
            <p className="text-gray-500 mb-12">
              See how much you take home based on your workload and chosen payment model.
            </p>
            
            <div className="space-y-12">
              {/* Avg Job Value Slider */}
              <div>
                <div className="flex justify-between mb-4">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Average Service Fee (₦)</span>
                  <span className="text-xl font-bold text-primary">₦{avgJobValue.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="5000" max="150000" step="5000"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between mt-2 text-[10px] text-gray-300 font-bold">
                  <span>₦5,000</span>
                  <span>₦150,000</span>
                </div>
              </div>

              {/* Monthly Bookings Slider */}
              <div>
                <div className="flex justify-between mb-4">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Monthly Bookings</span>
                  <span className="text-xl font-bold text-primary">{numJobs}</span>
                </div>
                <input 
                  type="range" min="1" max="60" step="1"
                  value={numJobs}
                  onChange={(e) => setNumJobs(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between mt-2 text-[10px] text-gray-300 font-bold">
                  <span>1 JOB</span>
                  <span>60+ JOBS</span>
                </div>
              </div>

              {/* Model Switcher */}
              <div className="flex gap-4 p-1.5 bg-gray-100 rounded-2xl w-fit">
                <button 
                  onClick={() => setActiveModel('subscription')}
                  className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${activeModel === 'subscription' ? 'bg-white text-primary shadow-sm' : 'text-gray-400'}`}
                >
                  Model 1 (Subscription)
                </button>
                <button 
                  onClick={() => setActiveModel('commission')}
                  className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${activeModel === 'commission' ? 'bg-white text-primary shadow-sm' : 'text-gray-400'}`}
                >
                  Model 2 (Commission)
                </button>
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5">
            <Card className="p-10 bg-primary text-white border-none rounded-[3rem] shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                 <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-2">Estimated Take-Home</p>
                 <h4 className="text-5xl md:text-6xl font-bold mb-8">₦{Math.round(monthlyEarnings).toLocaleString()}</h4>
                 
                 <div className="space-y-4 mb-10 pt-8 border-t border-white/10">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Gross Revenue</span>
                      <span className="font-bold">₦{totalRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Platform Fees</span>
                      <span className="font-bold text-secondary">
                        - ₦{(totalRevenue - monthlyEarnings).toLocaleString()}
                      </span>
                    </div>
                 </div>

                 <Button variant="secondary" className="w-full py-4 text-primary font-bold">
                   Start Your Journey
                 </Button>

                 <p className="mt-6 text-[10px] text-white/40 flex items-center justify-center gap-2">
                   <Info size={12} /> Calculations are estimates based on selected model
                 </p>
               </div>
               
               {/* Decorative Gradient */}
               <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};