import { ValueCard } from '../ui/Card';
import { ShieldCheck, Eye, ShieldAlert, Zap, Users, Repeat } from 'lucide-react';

const values = [
  { 
    icon: <ShieldCheck className="text-primary" />, 
    title: "Accountability", 
    desc: "Every expert passes NIN, BVN, and background verification. Tier 3 experts have guarantors and police clearance." 
  },
  { 
    icon: <Eye className="text-primary" />, 
    title: "Transparency", 
    desc: "See multiple bids, compare prices, read real reviews. No hidden fees." 
  },
  { 
    icon: <ShieldAlert className="text-primary" />, 
    title: "Reliability", 
    desc: "Experts show up on time. Payment protection ensures you only pay when satisfied." 
  },
  { 
    icon: <Zap className="text-primary" />, 
    title: "Efficiency", 
    desc: "Post a job in 3 minutes. Get bids in under an hour. Get work done fast." 
  },
  { 
    icon: <Users className="text-primary" />, 
    title: "Trust", 
    desc: "Two-way review system holds everyone accountable. 24/7 dispute resolution." 
  },
  { 
    icon: <Repeat className="text-primary" />, 
    title: "Consistency", 
    desc: "Same quality every time. Build relationships with experts you trust." 
  },
];

export const Values = () => {
  return (
    <section className="py-24 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label uppercase tracking-widest text-sm font-bold text-primary">
            Chrivon Values
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-primary">
            Why Nigerians Trust HelpMe NG
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <ValueCard 
              key={i} 
              icon={v.icon} 
              title={v.title} 
              description={v.desc} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}