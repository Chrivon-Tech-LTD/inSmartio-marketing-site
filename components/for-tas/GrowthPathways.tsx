import React from 'react';

const pathways = [
  {
    tier: "Tier 1: Associate",
    experts: "0-9",
    bonus: "0%",
    benefits: "Base rates",
  },
  {
    tier: "Tier 2: Senior",
    experts: "10-24",
    bonus: "+5%",
    benefits: "Priority support, monthly recognition",
    isPopular: true // Highlighted as a common milestone
  },
  {
    tier: "Tier 3: Master",
    experts: "25-49",
    bonus: "+10%",
    benefits: "Recruit sub-TAS, override on sub-TAS",
  },
  {
    tier: "Tier 4: Regional Lead",
    experts: "50+",
    bonus: "+15%",
    benefits: "Higher overrides, team leaderboard",
  }
];

export const GrowthPathways: React.FC = () => {
  return (
    <section className="py-24 bg-background px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12  items-center justify-center text-center">
          <span className="section-label block mb-2 uppercase tracking-[0.2em] font-bold text-secondary text-[10px]"> TAS Tiers</span>
          <h2 className="text-text-main font-display text-4xl font-bold">Growth Pathways</h2>
          <p className="text-text-muted mt-4 max-w-2xl text-center mx-auto">
            Scale your impact and unlock higher performance bonuses and exclusive platform benefits.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-ambient bg-surface">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="p-8 text-[11px] font-bold uppercase tracking-widest text-text-muted">Tier</th>
                <th className="p-8 text-[11px] font-bold uppercase tracking-widest text-text-muted">Experts</th>
                <th className="p-8 text-[11px] font-bold uppercase tracking-widest text-text-muted">Bonus</th>
                <th className="p-8 text-[11px] font-bold uppercase tracking-widest text-text-muted">Benefits</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {pathways.map((p, i) => (
                <tr 
                  key={i} 
                  className={`border-b border-slate-50 last:border-none transition-colors hover:bg-slate-50/30 
                   `}
                >
                  <td className="p-8">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-text-main font-display">{p.tier}</span>
                      
                    </div>
                  </td>
                  <td className="p-8 text-text-muted font-medium">{p.experts}</td>
                  <td className="p-8 font-bold text-secondary text-lg">{p.bonus}</td>
                  <td className="p-8 text-text-muted leading-relaxed max-w-xs">{p.benefits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};