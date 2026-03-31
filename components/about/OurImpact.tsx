// src/components/about/OurImpact.tsx
import React from "react";
import { 
  Users, 
  Briefcase, 
  Banknote, 
  MapPin, 
  Star 
} from "lucide-react";
import { Card } from "../ui/Card";

const impactStats = [
  { 
    label: "Verified Experts", 
    value: "5,000+", 
    icon: Users,
    desc: "Vetted professionals across all tiers."
  },
  { 
    label: "Jobs Completed", 
    value: "20,000+", 
    icon: Briefcase,
    desc: "Successful service deliveries nationwide."
  },
  { 
    label: "Transaction Volume", 
    value: "₦100M+", 
    icon: Banknote,
    desc: "Secured through our escrow protection."
  },
  { 
    label: "Cities Across Nigeria", 
    value: "10+", 
    icon: MapPin,
    desc: "Bridging the trust gap in major hubs."
  },
  { 
    label: "Average Rating", 
    value: "4.8/5", 
    icon: Star,
    desc: "Top-tier quality maintained by our pros."
  },
];

export function OurImpact() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-l-4 border-primary pl-8">
          <span className="section-label mb-2 block">8.5 Our Impact</span>
          <h2 className="text-text-main">Empowering the Ecosystem</h2>
          <p className="text-text-muted mt-4 max-w-xl">
            Our mission is defined by the growth of our experts and the 
            satisfaction of our clients. These numbers tell our story.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {impactStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={i} 
                className="p-8 bg-background border border-slate-100! shadow-ambient group hover:-translate-y-2 transition-all duration-500 rounded-[2.5rem]"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <Icon size={24} />
                </div>
                
                <div className="space-y-1">
                  <p className="text-3xl font-display font-bold text-text-main tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-secondary">
                    {stat.label}
                  </p>
                </div>
                
                <p className="mt-4 text-[11px] text-text-muted leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {stat.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}