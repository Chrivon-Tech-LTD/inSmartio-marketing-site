// src/components/download/AppFeatures.tsx
import React from "react";
import { PlusCircle, Bell, MessageSquare, ShieldCheck, MapPin, Star } from "lucide-react";

interface Feature {
  title: string;
  desc: string;
  icon: React.ElementType; // Use ElementType for cleaner component passing
}

const features: Feature[] = [
  { title: "Post a Job", desc: "Describe what you need, add photos, and set your budget.", icon: PlusCircle },
  { title: "Get Bids", desc: "Receive quotes from verified experts in real-time.", icon: Bell },
  { title: "Negotiate", desc: "Message experts and agree on price inside our encrypted chat.", icon: MessageSquare },
  { title: "Pay Securely", desc: "Escrow protection ensures your funds are safe until the job is done.", icon: ShieldCheck },
  { title: "Track Progress", desc: "Know exactly when your expert is on the way with live tracking.", icon: MapPin },
  { title: "Leave Reviews", desc: "Share your experience and help others find the best talent.", icon: Star },
];

export function AppFeatures() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-background transition-colors duration-300">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-16 md:mb-20">
        <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
          Mobile Capabilities
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-primary font-display mb-6 tracking-tight">
          Mastering your day is <br className="hidden md:block" /> just a tap away
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto font-medium leading-relaxed">
          We’ve distilled the entire marketplace experience into a powerful, 
          lightweight mobile companion designed for the Nigerian landscape.
        </p>
      </div>

      {/* FEATURES GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((f, i) => (
          <div 
            key={i} 
            className="p-10 rounded-[2.5rem] bg-surface border border-text-muted/10 shadow-sm hover:shadow-ambient hover:border-primary/30 transition-all duration-500 group"
          >
            {/* ICON CONTAINER */}
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
              <f.icon size={28} strokeWidth={2.5} />
            </div>
            
            <h4 className="text-xl font-black text-text-main mb-4 font-display">
              {f.title}
            </h4>
            
            <p className="text-sm md:text-base text-text-muted leading-relaxed font-medium">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}