"use client";

import React from "react";
// FIX: Ensure Next.js Image is imported correctly
import Image from "next/image";

export function Testimonial() {
  const metrics = [
    { label: "Verified Experts", value: "5,000+" },
    { label: "Jobs Completed", value: "20,000+" },
    { label: "Transaction Vol", value: "N100M+" },
    { label: "Repeat Rate", value: "89%" },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Updated classes to canonical theme names */}
        <div className="editorial-card grid md:grid-cols-4 gap-8 mb-16 border-b-primary!">
          {metrics.map((m, i) => (
            <div key={i} className="text-center md:border-r border-slate-100 last:border-none">
              <p className="text-4xl font-display font-bold text-text-main">{m.value}</p>
              <p className="section-label mt-2">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center mt-24">
          <span className="text-4xl text-primary opacity-30 font-serif">“</span>
          <p className="text-2xl font-medium text-text-main leading-relaxed mb-8">
             HelpMe NG isn’t just a platform; it’s the digital infrastructure for Nigerian excellence. 
             By solving trust, we unlock the true economic potential of our people.
          </p>
          <div className="flex items-center justify-center gap-4">
             <div className="w-12 h-12 bg-primary rounded-full overflow-hidden relative">
                {/* Image is now correctly defined and used */}
                <Image 
                  src="/client-avatar.png" 
                  alt="Founder" 
                  fill 
                  className="object-cover" 
                />
             </div>
             <div className="text-left">
                <p className="font-bold text-text-main">Christian Ikenna</p>
                <p className="text-[12px] uppercase text-text-muted font-semibold tracking-wider">Founder & CEO, Chrivon</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}