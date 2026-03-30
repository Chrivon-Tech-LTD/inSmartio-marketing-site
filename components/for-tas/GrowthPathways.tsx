import React from 'react';

const pathways = [
  {
    tier: "Associate",
    activeExperts: "1 – 10",
    commission: "2.0%",
    perks: "Basic Dashboard, Referral Link",
    isPopular: false
  },
  {
    tier: "Senior",
    activeExperts: "11 – 50",
    commission: "2.5%",
    perks: "Premium Tools, Monthly Webinar",
    isPopular: true
  },
  {
    tier: "Master",
    activeExperts: "51 – 200",
    commission: "3.0%",
    perks: "Dedicated Manager, Branded Assets",
    isPopular: false
  },
  {
    tier: "Regional Lead",
    activeExperts: "200+",
    commission: "4.0%",
    perks: "Base Salary + Private Slack Channel",
    isPopular: false
  }
];

export const GrowthPathways: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Growth Pathways</h2>
        <p className="text-gray-500 mb-16">The more you contribute, the higher your status and rewards.</p>

        <div className="overflow-x-auto rounded-[2.5rem] border border-gray-100 shadow-sm">
          <table className="w-full text-left bg-white border-collapse">
            <thead>
              <tr className="bg-surface-lowest">
                <th className="p-8 text-xs font-bold uppercase tracking-widest text-gray-400">Program Tier</th>
                <th className="p-8 text-xs font-bold uppercase tracking-widest text-gray-400">Active Experts</th>
                <th className="p-8 text-xs font-bold uppercase tracking-widest text-gray-400">Commission %</th>
                <th className="p-8 text-xs font-bold uppercase tracking-widest text-gray-400">Perks</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {pathways.map((p, i) => (
                <tr key={i} className={`border-b border-gray-50 transition-colors hover:bg-gray-50/50 ${p.isPopular ? 'bg-blue-50/30' : ''}`}>
                  <td className="p-8">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-primary">{p.tier}</span>
                      {p.isPopular && (
                        <span className="bg-primary text-white text-[8px] px-2 py-0.5 rounded-full uppercase font-bold">Popular</span>
                      )}
                    </div>
                  </td>
                  <td className="p-8 text-gray-600 font-medium">{p.activeExperts}</td>
                  <td className="p-8 font-bold text-secondary">{p.commission}</td>
                  <td className="p-8 text-gray-500">{p.perks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};