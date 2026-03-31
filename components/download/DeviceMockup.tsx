"use client";

// src/components/download/DeviceMockups.tsx
import React from "react";
import Image from "next/image";

const screens = [
  { id: "home", title: "Home", color: "bg-primary", desc: "Browse top-rated professionals near you." },
  { id: "post", title: "Post Job", color: "bg-secondary", desc: "Describe your needs and set a budget." },
  { id: "bids", title: "Bids", color: "bg-success", desc: "Compare verified expert quotes instantly." },
  { id: "chat", title: "Chat", color: "bg-tas", desc: "Encrypted messaging to finalize details." },
  { id: "pay", title: "Payment", color: "bg-slate-900", desc: "Secure escrow release upon satisfaction." }
];

export function DeviceMockups() {
  return (
    <section className="py-24 px-6 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="section-label">10.4 Visual Interface</span>
          <h2 className="mt-2">Intuitive by Design</h2>
          <p className="text-text-muted mt-4 max-w-xl">
            A high-fidelity mobile experience built for Nigerian excellence. 
            Every screen is optimized for trust and speed.
          </p>
        </div>

        {/* Horizontal Scroll Area for Mockups */}
        <div className="flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar">
          {screens.map((screen) => (
            <div key={screen.id} className="snap-center shrink-0 w-70 group">
              {/* iPhone Frame */}
              <div className="relative aspect-9/19 rounded-[3rem] border-8 border-text-main overflow-hidden shadow-ambient transition-transform duration-500 group-hover:-translate-y-4">
                <div className={`absolute inset-0 ${screen.color} opacity-10`} />
                
                {/* Mockup Content Overlay */}
                <div className="absolute inset-x-0 top-12 p-6">
                   <div className="w-12 h-1 bg-text-main/10 rounded-full mx-auto mb-8" />
                   <div className="space-y-4">
                      <div className="h-4 w-3/4 bg-text-main/10 rounded" />
                      <div className="h-32 w-full bg-text-main/5 rounded-2xl border border-dashed border-text-main/20 flex items-center justify-center">
                         <span className="text-[10px] font-bold uppercase tracking-widest opacity-20">Screen: {screen.title}</span>
                      </div>
                   </div>
                </div>

                {/* Actual Image */}
                <Image 
                  src={`/mockups/${screen.id}.png`} 
                  alt={`${screen.title} Screen`} 
                  fill 
                  className="object-cover z-10" 
                />
              </div>

              {/* Caption */}
              <div className="mt-6 px-4">
                <h4 className="text-sm font-bold text-text-main">{screen.title}</h4>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">{screen.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}