import React from 'react';
import { CheckCircle2, Minus } from 'lucide-react';

const tiers = [
  {
    name: "Base (Bronze)",
    id: "Tier 1",
    identity: "NIN only",
    security: null,
    guarantor: null,
    trust: "Entry Level",
    maxJob: "₦20,000",
    time: "~24h"
  },
  {
    name: "Silver Tier",
    id: "Tier 2",
    identity: "NIN + BVN",
    security: null,
    guarantor: null,
    trust: "Verified",
    maxJob: "₦100,000",
    time: "~48h"
  },
  {
    name: "Gold (Expert)",
    id: "Tier 3",
    identity: "NIN + BVN",
    security: "Police Clearance",
    guarantor: "Required (2)",
    trust: "Elite Verified",
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
          <p className="text-gray-500">Elevate your visibility through our trust framework</p>
        </div>

        <div className="overflow-x-auto rounded-4xl border border-gray-100 shadow-sm">
          <table className="w-full text-left bg-white border-collapse">
            <thead>
              <tr className="bg-surface-lowest">
                <th className="p-8 text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100">Requirement Level</th>
                {tiers.map((t) => (
                  <th key={t.id} className="p-8 border-b border-gray-100">
                    <p className="text-sm font-bold text-secondary mb-1">{t.id}</p>
                    <p className="text-xl font-bold text-primary">{t.name}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="p-8 font-bold text-primary border-b border-gray-50">Identity Verification</td>
                {tiers.map((t) => (
                  <td key={t.id} className="p-8 border-b border-gray-50 flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={16} /> {t.identity}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-8 font-bold text-primary border-b border-gray-50">Security Clearance</td>
                {tiers.map((t) => (
                  <td key={t.id} className="p-8 border-b border-gray-50">
                    {t.security ? <span className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={16} /> {t.security}</span> : <Minus className="text-gray-200" />}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-8 font-bold text-primary border-b border-gray-50">Guarantors</td>
                {tiers.map((t) => (
                  <td key={t.id} className="p-8 border-b border-gray-50">
                    {t.guarantor ? <span className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={16} /> {t.guarantor}</span> : <Minus className="text-gray-200" />}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-8 font-bold text-primary border-b border-gray-50">Max Job Value</td>
                {tiers.map((t) => (
                  <td key={t.id} className="p-8 border-b border-gray-50 font-bold">{t.maxJob}</td>
                ))}
              </tr>
              <tr>
                <td className="p-8 font-bold text-primary">Marketplace Trust</td>
                {tiers.map((t) => (
                  <td key={t.id} className="p-8">
                    <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {t.trust}
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex justify-center gap-8 text-xs text-gray-400 font-medium">
          <p>• Verification Time: {tiers[0].time} to {tiers[2].time}</p>
          <p>• Tier 3 Fee: ₦5,000 (one-time)</p>
        </div>
      </div>
    </section>
  );
};