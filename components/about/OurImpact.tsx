import React from "react";
import { 
  Users, 
  Briefcase, 
  Banknote, 
  MapPin, 
  Star,
  LucideIcon
} from "lucide-react";
import { Card } from "../ui/Card";

interface ImpactStat {
  label: string;
  value: string;
  icon: LucideIcon;
  desc: string;
}

const impactStats: ImpactStat[] = [
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
    <section className="py-24 px-6 bg-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-16 border-l-4 border-primary pl-8">
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
            Our Impact
          </span>
          <h2 className="text-text-main font-display text-3xl md:text-5xl font-bold">
            Empowering the Ecosystem
          </h2>
          <p className="text-text-muted mt-4 max-w-xl font-sans text-lg">
            Our mission is defined by the growth of our experts and the 
            satisfaction of our clients. These numbers tell our story.
          </p>
        </div>

        {/* GRID LAYOUT */}
        {/* Adjusted to grid-cols-10 for cleaner 5-item desktop layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {impactStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={i} 
                className="p-8 bg-background border border-text-muted/10 shadow-xl group hover:-translate-y-2 transition-all duration-500 rounded-[2.5rem] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <Icon size={24} />
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-3xl font-display font-black text-text-main tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-[10px] uppercase font-black tracking-widest text-secondary">
                      {stat.label}
                    </p>
                  </div>
                </div>
                
                
                <p className="mt-6 text-[12px] text-text-muted leading-relaxed transition-opacity duration-500 font-medium">
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