"use client";

import React from 'react';
import Image from 'next/image';
import { Quote, Trophy } from 'lucide-react';
import { Card } from '../ui/Card';

const testimonials = [
  {
    quote: "I've recruited 28 experts from my community. The ₦7,000 upfront per expert helped me pay for my children's school fees, and the ongoing commissions provide steady income. Now I'm training others to become sub-TAS under me.",
    author: "Chidi E.",
    location: "Enugu",
    tier: "Tier 3 Master TAS",
    image: "/avatars/chidi.jpg" // Replace with actual asset path
  },
  {
    quote: "I'm a social media manager, so reaching people online is easy. I've recruited 15 experts in 3 months just by sharing my referral link on Instagram. The dashboard shows me exactly how many people signed up through my link.",
    author: "Grace A.",
    location: "Lagos",
    tier: "Tier 2 Senior TAS",
    image: "/avatars/grace.jpg" // Replace with actual asset path
  }
];

export const TASTestimonials: React.FC = () => {
  return (
    <section className="py-24 bg-background px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="section-label block mb-2 uppercase tracking-[0.2em] font-bold text-secondary text-[10px]">6.7 Social Proof</span>
          <h2 className="text-text-main font-display text-4xl font-bold">Voices of Our Agents</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-surface p-10 rounded-[3rem] border border-slate-100 shadow-ambient relative flex flex-col justify-between">
              {/* Quote Icon Background */}
              <Quote className="text-primary opacity-5 absolute top-10 right-10" size={80} />
              
              <div className="relative z-10">
                <p className="text-text-main text-lg leading-relaxed mb-10 font-medium italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-5 relative z-10">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-sm bg-slate-100">
                   <Image 
                     src={t.image} 
                     alt={t.author} 
                     fill 
                     className="object-cover"
                   />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-text-main font-display">{t.author}, {t.location}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-secondary">
                    <Trophy size={12} fill="currentColor" />
                    <p className="text-[10px] uppercase font-bold tracking-widest">{t.tier}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};