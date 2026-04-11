import React from 'react';
import { CheckCircle2, Minus } from 'lucide-react';

const TiersData = [
  {
    name: "Tier 1",
    badgeCount: 1,
    identity: "NIN only",
    security: null,
    guarantor: null,
    maxJob: "₦20,000",
    time: "~24h"
  },
  {
    name: "Tier 2",
    badgeCount: 2,
    identity: "NIN + BVN",
    security: null,
    guarantor: null,
    maxJob: "₦100,000",
    time: "~48h"
  },
  {
    name: "Tier 3",
    badgeCount: 3,
    identity: "NIN + BVN",
    security: "Police Clearance",
    guarantor: "Required",
    maxJob: "Unlimited",
    time: "~72h"
  }
];

export const VerificationFramework: React.FC = () => {
  /**
   * STYLING NOTE:
   * Forced Dark Mode implementation:
   * Background: #060D1A
   * Surface: #0E1E3A
   * Text Main: #D8E8FF
   * Text Muted: #7A9DC4
   */
  return (
    <section className="py-24 bg-[#060D1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">
            The Trust Protocol
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#D8E8FF] font-display">
            Verification Tiers
          </h2>
        </div>

        {/* TABLE CONTAINER */}
        <div className="overflow-x-auto rounded-lg border border-white/5 shadow-lg bg-[#0E1E3A] transition-colors duration-300">
          <table className="w-full text-left border-collapse min-w-200">
            <thead>
              <tr className="bg-primary/5">
                <th className="p-8 text-[10px] font-black uppercase tracking-widest text-[#7A9DC4] border-b border-white/5">
                  Feature Matrix
                </th>
                {TiersData.map((t) => (
                  <th key={t.name} className="p-8 border-b border-white/5">
                    <div className="flex flex-col gap-1">
                      <span className="text-xl font-black text-primary font-display">{t.name}</span>
                      <span className="text-[9px] font-bold text-[#7A9DC4] uppercase tracking-wider">Expert Level</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            
            <tbody className="text-sm md:text-base">
              {/* Badge Row */}
              <tr className="group">
                <td className="p-8 font-black text-[#D8E8FF] border-b border-white/5 bg-primary/2">Trust Badge</td>
                {TiersData.map((t) => (
                  <td key={t.name} className="p-8 border-b border-white/5">
                    <div className="flex gap-1.5">
                      {Array.from({ length: t.badgeCount }).map((_, i) => (
                        <CheckCircle2 key={i} className="text-success" size={18} />
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Requirements Row */}
              <tr>
                <td className="p-8 font-black text-[#D8E8FF] border-b border-white/5 bg-primary/2">Requirements</td>
                {TiersData.map((t) => (
                  <td key={t.name} className="p-8 border-b border-white/5 space-y-3">
                    <RequirementItem label={t.identity} active={true} />
                    <RequirementItem label={t.security || "Police Check"} active={!!t.security} />
                    <RequirementItem label={t.guarantor || "Guarantors"} active={!!t.guarantor} />
                  </td>
                ))}
              </tr>

              {/* Max Job Row */}
              <tr>
                <td className="p-8 font-black text-[#D8E8FF] border-b border-white/5 bg-primary/2">Max Job Value</td>
                {TiersData.map((t) => (
                  <td key={t.name} className="p-8 border-b border-white/5 font-black text-primary text-lg">
                    {t.maxJob}
                  </td>
                ))}
              </tr>

              {/* Time Row */}
              <tr>
                <td className="p-8 font-black text-[#D8E8FF] bg-primary/2">Verification Time</td>
                {TiersData.map((t) => (
                  <td key={t.name} className="p-8 font-bold text-[#7A9DC4]">
                    {t.time}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* FOOTNOTE */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 px-8 py-4 bg-[#0E1E3A] rounded-2xl border border-white/5">
          <p className="text-sm text-[#7A9DC4] font-medium italic">
            * Tier 3 requires a one-time processing fee of <span className="text-[#D8E8FF] font-black">₦5,000</span> for background clearance.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-success">Systems Online</span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Requirements Helper */
const RequirementItem = ({ label, active }: { label: string, active: boolean }) => (
  <div className={`flex items-center gap-3 ${active ? 'text-[#D8E8FF]' : 'opacity-20'}`}>
    {active ? (
      <CheckCircle2 className="text-success shrink-0" size={16} />
    ) : (
      <Minus className="text-[#7A9DC4] shrink-0" size={16} />
    )}
    <span className={active ? 'font-bold' : 'font-medium'}>{label}</span>
  </div>
);