import { ValueCard } from '../ui/Card';
import { ShieldCheck, Eye, Clock, Zap, Heart, Repeat } from 'lucide-react';

const values = [
  { icon: <ShieldCheck />, title: "Accountability", desc: "Every expert passes NIN, BVN, and background verification[cite: 48]." },
  { icon: <Eye />, title: "Transparency", desc: "See multiple bids, compare prices, and read real reviews[cite: 48]." },
  { icon: <Clock />, title: "Reliability", desc: "Experts show up on time. Payment protection ensures satisfaction[cite: 48]." },
  { icon: <Zap />, title: "Efficiency", desc: "Post a job in 3 minutes. Get bids in under an hour[cite: 48]." },
  { icon: <Heart />, title: "Trust", desc: "Two-way review system holds everyone accountable[cite: 48]." },
  { icon: <Repeat />, title: "Consistency", desc: "Same quality every time. Build relationships with experts you trust[cite: 48]." },
];

export const Values =() =>{
  return (
    <section className="py-24 bg-(--surface-low)">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">Our DNA</span>
          <h2 className="mt-4">Why Nigerians Trust HelpMe NG [cite: 64]</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <ValueCard key={i} icon={v.icon} title={v.title} description={v.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}