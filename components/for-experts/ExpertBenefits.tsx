import React from 'react';
import { Calendar, BadgeDollarSign, ShieldCheck, Star, Globe, Wallet } from 'lucide-react';
import { Card } from '../ui/Card';

const benefits = [
  { 
    title: "Consistent Work", 
    desc: "Get job alerts matching your skills. No more searching for clients.", 
    icon: <Calendar className="w-6 h-6" /> 
  },
  { 
    title: "Get Paid on Time", 
    desc: "Escrow system guarantees payment. Cash option available for subscribed experts.", 
    icon: <BadgeDollarSign className="w-6 h-6" /> 
  },
  { 
    title: "Verified Status", 
    desc: "Pass verification and get a trust badge. Clients choose verified experts first.", 
    icon: <ShieldCheck className="w-6 h-6" /> 
  },
  { 
    title: "Build Reputation", 
    desc: "Collect reviews and ratings. Good reputation = more work.", 
    icon: <Star className="w-6 h-6" /> 
  },
  { 
    title: "Digital Presence", 
    desc: "Create a professional profile. Showcase your portfolio. Let clients find you.", 
    icon: <Globe className="w-6 h-6" /> 
  },
  { 
    title: "Flexible Models", 
    desc: "Choose between subscription (0% commission) or commission (no monthly fee).", 
    icon: <Wallet className="w-6 h-6" /> 
  },
];

export const ExpertBenefits: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">
            Expert Advantages
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary font-display">
            Why Elite Experts Choose Us
          </h2>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <Card 
              key={i} 
              className="p-10 bg-surface border border-text-muted/10 shadow-sm hover:shadow-ambient hover:-translate-y-2 transition-all duration-500 rounded-[2.5rem] group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                {b.icon}
              </div>
              
              <h3 className="text-xl font-black text-text-main mb-3 font-display">
                {b.title}
              </h3>
              
              <p className="text-text-muted text-sm md:text-base leading-relaxed font-medium">
                {b.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};