import React from 'react';
import { Button } from "../ui/Button";
import { FaWallet, FaChartLine, FaUsers, FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";

interface Benefit {
  icon: React.ReactNode;
  text: string;
}

const DEFAULT_IMAGE = "https://i.pinimg.com/1200x/41/df/1d/41df1d25cd9d6b931b40af70c6f863b3.jpg";

export const TASSection: React.FC = () => {
  const benefits: Benefit[] = [
    { icon: <FaWallet />, text: "₦7,000 per expert recruited (one-time)" },
    { icon: <FaChartLine />, text: "1% of every job they complete (ongoing)" },
    { icon: <FaUsers />, text: "₦1,000 per month for subscribed experts" },
    { icon: <FaCircleCheck />, text: "Up to 15% tier bonuses" },
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 items-center gap-12">
          
          {/* Content Side */}
          <div className="col-span-12 lg:col-span-7 z-10">
            <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
              Earn Money by Recruiting Experts
            </span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Join the Talent Acquisition Specialist (TAS) Program
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-xl leading-relaxed">
              Do you know skilled professionals? Refer them to HelpMe NG and earn:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-secondary text-xl">{benefit.icon}</span>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            <Button variant="outline" size="lg" className="px-10">
              Learn About TAS Program
            </Button>
          </div>

          {/* Visual Side - Asymmetric Overlap */}
          <div className="col-span-12 lg:col-span-5 relative h-125">
            <div className="absolute right-0 top-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src={DEFAULT_IMAGE} 
                alt="TAS Agent recruitment program" 
                fill 
                className="object-cover opacity-90"
                unoptimized
              />
              {/* Mobile Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-primary via-transparent to-transparent lg:hidden" />
            </div>
            
            {/* Floating Earnings Card */}
            <div className="absolute -left-4 md:-left-8 bottom-12 bg-white p-6 rounded-2xl shadow-2xl text-primary animate-bounce-slow">
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Recruitment Bonus</p>
              <p className="text-3xl font-bold text-primary">₦7,000</p>
              <div className="mt-2 flex items-center gap-2 text-[10px] font-bold text-green-600">
                <FaChartLine /> +15% Tier Bonus
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};