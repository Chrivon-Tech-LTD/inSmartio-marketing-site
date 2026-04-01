"use client";

import React from "react";
import Image from "next/image";

const screens = [
  { id: "home", title: "Home Explorer", color: "bg-primary", desc: "Browse top-rated professionals near you instantly." },
  { id: "post", title: "Smart Post", color: "bg-secondary", desc: "Describe your needs and set a precise budget." },
  { id: "bids", title: "Live Bidding", color: "bg-success", desc: "Compare verified expert quotes in real-time." },
  { id: "chat", title: "Secure Chat", color: "bg-primary", desc: "Encrypted messaging to finalize job details." },
  { id: "pay", title: "Safe Pay", color: "bg-slate-900", desc: "Secure escrow release only upon your satisfaction." }
];

export function DeviceMockups() {
  return (
    <section className="py-24 px-4 md:px-6 bg-white dark:bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-16 md:mb-20">
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">
            Visual Interface
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary font-display tracking-tight">
            Intuitive by Design
          </h2>
          <p className="text-text-muted mt-4 max-w-xl font-medium leading-relaxed">
            A high-fidelity mobile experience built for Nigerian excellence. 
            Every screen is optimized for trust, speed, and seamless interaction.
          </p>
        </div>

        {/* HORIZONTAL SNAP CONTAINER */}
        <div className="flex gap-6 md:gap-10 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth -mx-4 px-4">
          {screens.map((screen) => (
            <div key={screen.id} className="snap-center shrink-0 w-65 md:w-75 group">
              
              {/* Premium iPhone Pro Frame */}
              <div className="relative aspect-9/19 rounded-[2.5rem] md:rounded-[3.5rem] border-[6px] md:border-10 border-text-main overflow-hidden shadow-ambient transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-2xl bg-surface">
                
                {/* Dynamic Island / Notch Mockup */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-text-main rounded-b-2xl z-30 hidden md:block" />
                
                {/* Tinted Overlay Layer */}
                <div className={`absolute inset-0 ${screen.color} opacity-5 z-20 pointer-events-none group-hover:opacity-0 transition-opacity`} />
                
                {/* Skeleton Loader (Shows before image loads) */}
                <div className="absolute inset-0 p-8 z-0">
                   <div className="w-12 h-1 bg-text-muted/10 rounded-full mx-auto mb-10" />
                   <div className="space-y-4">
                      <div className="h-4 w-3/4 bg-text-muted/10 rounded-full" />
                      <div className="h-40 w-full bg-text-muted/5 rounded-4xl border border-dashed border-text-muted/20" />
                   </div>
                </div>

                {/* Actual Screen Image */}
                <Image 
                  src={`/mockups/${screen.id}.png`} 
                  alt={`${screen.title} Screen`} 
                  fill 
                  className="object-cover z-10 transition-transform duration-1000 group-hover:scale-110" 
                  priority={screen.id === 'home'}
                />
              </div>

              {/* CAPTION */}
              <div className="mt-8 px-2 transition-opacity duration-300">
                <h4 className="text-lg font-black text-text-main font-display">{screen.title}</h4>
                <p className="text-xs md:text-sm text-text-muted mt-2 leading-relaxed font-medium">
                  {screen.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SCROLL PROGRESS INDICATOR (Visual Only) */}
        <div className="flex items-center gap-2 mt-4 opacity-20 justify-center lg:justify-start">
           <div className="h-1 w-12 bg-primary rounded-full" />
           <div className="h-1 w-2 bg-text-muted rounded-full" />
           <div className="h-1 w-2 bg-text-muted rounded-full" />
        </div>
      </div>

      {/* Global CSS for hiding scrollbar */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}