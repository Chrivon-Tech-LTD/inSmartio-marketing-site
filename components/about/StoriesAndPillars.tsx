// src/components/about/StoryAndPillars.tsx
import React from "react";
import { ShieldCheck, Eye, Zap, Clock, Heart, Repeat } from "lucide-react";

export function StoryAndPillars() {
  const pillars = [
    { title: "Accountability", desc: "Every expert is verified. Every transaction is tracked.", icon: <ShieldCheck /> },
    { title: "Transparency", desc: "See multiple bids, compare prices, read real reviews.", icon: <Eye /> },
    { title: "Reliability", desc: "Experts show up on time. Payment protection ensures quality.", icon: <Clock /> },
    { title: "Efficiency", desc: "Post a job in minutes. Get bids in under an hour.", icon: <Zap /> },
    { title: "Trust", desc: "Two-way reviews. 24/7 dispute resolution.", icon: <Heart /> },
    { title: "Consistency", desc: "Same quality every time. Build lasting relationships.", icon: <Repeat /> },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <h2 className="mb-6">Our Story</h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>For nearly two decades, Chrivon cofounders have been building the digital backbone for ambitious businesses across Africa.</p>
              <p>HelpMe NG bridges the gap. We&lsquo;re building Nigeria&apos;s most trusted service marketplace where every professional is verified, every transaction is transparent, and every user is empowered.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="editorial-card text-center py-10">
                <p className="text-4xl font-bold text-primary">15k+</p>
                <p className="section-label text-[10px]! mt-2">Verified Experts</p>
             </div>
             <div className="editorial-card text-center py-10">
                <p className="text-4xl font-bold text-primary">85k</p>
                <p className="section-label text-[10px]! mt-2">Jobs Completed</p>
             </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="mb-4">The 6 Pillars of Chrivon</h2>
          <p className="text-text-muted">Our values aren&apos;t just words; they are the architectural framework of excellence.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="editorial-card group hover:bg-primary transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-white group-hover:text-primary">
                {p.icon}
              </div>
              <h4 className="group-hover:text-white transition-colors mb-2">{p.title}</h4>
              <p className="text-sm text-text-muted group-hover:text-white/80 transition-colors">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}