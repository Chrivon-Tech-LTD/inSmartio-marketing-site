// src/components/case-study/Hero.tsx
import React from "react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span className="section-label mb-4 block text-secondary">Product Case Study</span>
          <h1 className="text-text-main mb-6">
            Case Study: <span className="text-primary">HelpMe NG</span>
          </h1>
          <p className="text-text-muted text-lg max-w-lg mb-8">
            Nigeria&apos;s Trusted Service Marketplace. A strategic exploration into building trust, 
            efficiency, and professional accountability in a fragmented digital economy.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="editorial-card py-4 px-6 border border-slate-200!">
              <p className="section-label text-[10px] mb-1">Duration</p>
              <p className="font-bold text-text-main">6 Months Build</p>
            </div>
            <div className="editorial-card py-4 px-6 border border-slate-200!">
              <p className="section-label text-[10px] mb-1">Role</p>
              <p className="font-bold text-text-main">Strategic Design</p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="relative z-10 rounded-4xl overflow-hidden shadow-ambient transition-transform duration-500 group-hover:scale-[1.02]">
            <Image 
              src="/case-study-hero.png" // Replace with your actual image path
              alt="HelpMe NG Case Study"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
          {/* Floating Trust Badge using your glass-panel class */}
          <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-2xl shadow-ambient z-20 flex items-center gap-4 animate-float">
            <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <div>
              <p className="font-bold text-sm text-text-main">Partner Verified</p>
              <p className="text-[11px] text-text-muted uppercase tracking-wider">Secure Marketplace</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}