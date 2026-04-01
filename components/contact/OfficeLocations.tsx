// src/components/contact/OfficeLocations.tsx
import React from "react";
import { MapPin, ArrowUpRight } from "lucide-react";

export function OfficeLocations() {
  const offices = [
    {
      city: "Lagos Office",
      address: "Admiralty Way, Lekki Phase 1, Lagos, Nigeria.",
      tag: "Headquarters"
    },
    {
      city: "Abuja HQ",
      address: "Suite 45, Maitama District, Abuja, Federal Capital Territory, Nigeria.",
      tag: "Regional Hub"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {offices.map((office, i) => (
        <div key={i} className="editorial-card group hover:ring-2 hover:ring-primary transition-all duration-300">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <MapPin size={24} />
            </div>
            <span className="glass-panel px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">
              {office.tag}
            </span>
          </div>
          <h4 className="mb-2">{office.city}</h4>
          <p className="text-text-muted text-sm leading-relaxed mb-6">
            {office.address}
          </p>
          <button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all">
            View Directions <ArrowUpRight size={14} />
          </button>
        </div>
      ))}
      
      {/* Visual Map Placeholder Card (As seen in your design) */}
      <div className="editorial-card p-0! overflow-hidden relative min-h-50 bg-slate-200">
         <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent z-10" />
         <div className="absolute inset-0 flex items-center justify-center z-20">
            <span className="glass-panel px-4 py-2 rounded-full text-xs font-bold shadow-ambient">
              Live Satellite View: Active
            </span>
         </div>
         {/* You can integrate a real Google Maps iframe here later */}
         <div className="w-full h-full bg-[url('/map-pattern.png')] opacity-30 bg-cover" />
      </div>
    </div>
  );
}