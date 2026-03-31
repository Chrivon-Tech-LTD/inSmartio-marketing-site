import React from 'react';
import { CheckCircle2, Minus } from 'lucide-react';

const tiers = [
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
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Verification Tiers</h2>
        </div>

        <div className="overflow-x-auto rounded-4xl border border-gray-100 shadow-sm">
          <table className="w-full text-left bg-white border-collapse">
            <thead>
              <tr className="bg-surface-lowest">
                <th className="p-8 text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100">Tier</th>
                {tiers.map((t) => (
                  <th key={t.name} className="p-8 border-b border-gray-100 text-xl font-bold text-primary">
                    {t.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="p-8 font-bold text-primary border-b border-gray-50">Badge</td>
                {tiers.map((t) => (
                  <td key={t.name} className="p-8 border-b border-gray-50 text-left align-left">
                    <div className="flex justify-left items-start gap-1">
                      {Array.from({ length: t.badgeCount }).map((_, i) => (
                        <CheckCircle2 key={i} className="text-green-500" size={16} />
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-8 font-bold text-primary border-b border-gray-50">Requirements</td>
                {tiers.map((t) => (
                  <td key={t.name} className="p-8 border-b border-gray-50 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-500" size={16} />
                      <span>{t.identity}</span>
                    </div>

                    {t.security ? (
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="text-green-500" size={16} />
                        <span>{t.security}</span>
                      </div>
                    ) : (
                      <Minus className="text-gray-200" />
                    )}

                    {t.guarantor ? (
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="text-green-500" size={16} />
                        <span>{t.guarantor}</span>
                      </div>
                    ) : null}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-8 font-bold text-primary border-b border-gray-50">Max Job Value</td>
                {tiers.map((t) => (
                  <td key={t.name} className="p-8 border-b border-gray-50 font-bold">
                    {t.maxJob}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-8 font-bold text-primary">Verification Time</td>
                {tiers.map((t) => (
                  <td key={t.name} className="p-8">
                    {t.time}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          Tier 3 Fee: ₦5,000 (one-time)
        </div>
      </div>
    </section>
  );
};
