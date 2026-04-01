import React from 'react';
import { TrendingUp, Award, Zap, Star } from 'lucide-react';

const pathways = [
  {
    tier: "Tier 1: Associate",
    experts: "0-9",
    bonus: "0%",
    benefits: "Base rates & platform access",
    icon: <TrendingUp size={16} />
  },
  {
    tier: "Tier 2: Senior",
    experts: "10-24",
    bonus: "+5%",
    benefits: "Priority support, monthly recognition",
    isPopular: true,
    icon: <Award size={16} />
  },
  {
    tier: "Tier 3: Master",
    experts: "25-49",
    bonus: "+10%",
    benefits: "Recruit sub-TAS, override on sub-TAS",
    icon: <Zap size={16} />
  },
  {
    tier: "Tier 4: Regional Lead",
    experts: "50+",
    bonus: "+15%",
    benefits: "Higher overrides, team leaderboard",
    icon: <Star size={16} />
  }
];

export const GrowthPathways: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-16 text-center">
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">
            TAS Career Tiers
          </span>
          <h2 className="text-primary text-3xl md:text-5xl font-black font-display leading-tight">
            Growth Pathways
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto font-medium">
            Scale your impact and unlock higher performance bonuses and exclusive platform benefits as you grow your network.
          </p>
        </div>

        {/* TABLE CONTAINER */}
        <div className="overflow-x-auto rounded-[2.5rem] border border-text-muted/10 shadow-ambient bg-surface">
          <table className="w-full text-left border-collapse min-w-200">
            <thead>
              <tr className="bg-primary/2 border-b border-text-muted/10">
                <th className="p-8 text-[10px] font-black uppercase tracking-widest text-text-muted">Tier Level</th>
                <th className="p-8 text-[10px] font-black uppercase tracking-widest text-text-muted">Expert Count</th>
                <th className="p-8 text-[10px] font-black uppercase tracking-widest text-text-muted">Perf. Bonus</th>
                <th className="p-8 text-[10px] font-black uppercase tracking-widest text-text-muted">Exclusive Benefits</th>
              </tr>
            </thead>
            
            <tbody className="text-sm md:text-base font-medium">
              {pathways.map((p, i) => (
                <tr 
                  key={i} 
                  className={`border-b border-text-muted/5 last:border-none transition-all duration-300 group
                    ${p.isPopular ? 'bg-secondary/3 hover:bg-secondary/6' : 'hover:bg-primary/2'}
                  `}
                >
                  <td className="p-8">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm
                        ${p.isPopular ? 'bg-secondary text-white' : 'bg-primary/10 text-primary'}
                      `}>
                        {p.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-black text-text-main font-display text-lg tracking-tight">
                          {p.tier}
                        </span>
                        {p.isPopular && (
                          <span className="text-[9px] font-black text-secondary uppercase tracking-widest mt-0.5">
                            Most Common Milestone
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  
                  <td className="p-8">
                    <span className="text-text-main font-bold">
                      {p.experts} <span className="text-text-muted text-xs font-medium ml-1">Experts</span>
                    </span>
                  </td>
                  
                  <td className="p-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success font-black text-lg">
                      {p.bonus}
                    </div>
                  </td>
                  
                  <td className="p-8 text-text-muted leading-relaxed max-w-xs font-medium">
                    {p.benefits}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE SCROLL HINT */}
        <div className="mt-6 flex justify-center lg:hidden">
          <div className="flex items-center gap-2 px-4 py-2 bg-text-muted/5 rounded-full">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Swipe to view matrix</span>
          </div>
        </div>
      </div>
    </section>
  );
};