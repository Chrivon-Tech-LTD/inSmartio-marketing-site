"use client";

import React from 'react';
import { 
  Link2, 
  Smartphone, 
  Contact, 
  BarChart3, 
  MessageSquareText,
  ArrowRight
} from 'lucide-react';
import { Card } from '../ui/Card';

const tools = [
  { 
    name: "Unique Referral Link", 
    icon: Link2, 
    desc: "Share your personalized link. Track clicks and conversions in real-time.",
    accent: "text-primary"
  },
  { 
    name: "Digital Referral Cards", 
    icon: Smartphone, 
    desc: "Customizable high-fidelity cards optimized for WhatsApp and social media.",
    accent: "text-secondary"
  },
  { 
    name: "Physical Referral Cards", 
    icon: Contact, 
    desc: "Order professionally printed physical cards to hand out in person.",
    accent: "text-primary"
  },
  { 
    name: "Analytics Dashboard", 
    icon: BarChart3, 
    desc: "See exactly how many people clicked, registered, and passed verification.",
    accent: "text-secondary"
  },
  { 
    name: "Message Templates", 
    icon: MessageSquareText, 
    desc: "Pre-written, high-conversion messages for WhatsApp, SMS, and email.",
    accent: "text-primary"
  }
];

export const ReferralTools: React.FC = () => {
  return (
    <section className="py-24 bg-background px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="section-label block mb-2 uppercase tracking-[0.2em] font-bold text-secondary text-[10px]">6.6 Agent Toolkit</span>
          <h2 className="text-text-main font-display text-4xl font-bold max-w-xl">
            Everything you need to scale your network.
          </h2>
          <p className="text-text-muted mt-4 max-w-lg leading-relaxed">
            We provide a suite of professional marketing and tracking tools to help you 
            recruit and manage experts efficiently.
          </p>
        </div>

        {/* Note: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 handles the 5 cards. 
            The 5th card will naturally align to the left, creating a clean editorial look.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <Card 
                key={i} 
                className="p-10 bg-surface border border-slate-100! shadow-ambient group hover:-translate-y-1 transition-all duration-300 rounded-[2.5rem]"
              >
                <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 ${tool.accent} group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-text-main mb-4 font-display leading-tight">
                  {tool.name}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-8">
                  {tool.desc}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary border-t border-slate-50 pt-6 group-hover:border-primary/10 transition-colors">
                  Access Tool <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};