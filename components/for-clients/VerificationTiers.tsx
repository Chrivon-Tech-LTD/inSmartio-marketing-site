import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const DEFAULT_IMAGE = "https://i.pinimg.com/1200x/41/df/1d/41df1d25cd9d6b931b40af70c6f863b3.jpg";

const verificationTiers = [
  {
    tier: "Tier 1 – Basic",
    meaning: "NIN verified.",
    limit: "Jobs up to ₦20,000. Entry-level trust.",
    badges: 1,
    color: "bg-blue-50 text-blue-600 border-blue-100"
  },
  {
    tier: "Tier 2 – Verified",
    meaning: "NIN + BVN verified.",
    limit: "Jobs up to ₦100,000. Professional trust.",
    badges: 2,
    color: "bg-purple-50 text-purple-600 border-purple-100"
  },
  {
    tier: "Tier 3 – Expert+",
    meaning: "Full background check + guarantor + police clearance.",
    limit: "Unlimited jobs. Maximum trust.",
    badges: 3,
    color: "bg-green-50 text-green-600 border-green-100"
  }
];

export const VerificationTiers: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Expert Verification Tiers</h2>
          <p className="text-gray-500 mb-12 max-w-lg">
            We prioritize your peace of mind. Every badge on a profile represents a successful stage of our rigorous vetting process.
          </p>

          <div className="space-y-4">
            {verificationTiers.map((tier, i) => (
              <div 
                key={i} 
                className={`flex items-center gap-6 p-6 rounded-2xl border transition-all duration-300 hover:shadow-md ${tier.color}`}
              >
                <div className="flex -space-x-2">
                  {[...Array(tier.badges)].map((_, b) => (
                    <CheckCircle2 key={b} className="w-6 h-6 fill-current text-white bg-current rounded-full border-2 border-white" />
                  ))}
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">{tier.tier}</h4>
                  <p className="text-xs opacity-80 mt-1">{tier.meaning}</p>
                  <p className="text-[10px] font-bold mt-2 uppercase tracking-wider">{tier.limit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual Mockup from image_3bc5db.jpg */}
        <div className="relative aspect-square w-full max-w-md mx-auto">
          <div className="absolute inset-0 bg-primary rounded-[3rem] rotate-3 opacity-10" />
          <div className="relative w-full h-full bg-[#1A1A1A] rounded-[3rem] p-1 shadow-2xl overflow-hidden border-8 border-white">
            <Image 
              src={DEFAULT_IMAGE} 
              alt="Verification Network" 
              fill 
              className="object-cover opacity-60"
              unoptimized
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-white w-8 h-8" />
                </div>
                <p className="text-white font-bold text-lg tracking-tight">Verification<br />Complete</p>
                <p className="text-white/40 text-[10px] mt-2 uppercase">Vetting Network Secured</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};