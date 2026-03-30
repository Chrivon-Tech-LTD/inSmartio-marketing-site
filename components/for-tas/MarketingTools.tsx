import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Copy } from 'lucide-react';

const DASHBOARD_MOCKUP = "https://i.pinimg.com/1200x/41/df/1d/41df1d25cd9d6b931b40af70c6f863b3.jpg";

export const MarketingTools: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Dashboard Visual */}
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] -rotate-3 scale-105 transition-transform group-hover:rotate-0" />
          <div className="relative bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h4 className="font-bold text-primary text-sm">Referral Analytics</h4>
              <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-200" />)}
              </div>
            </div>
            <div className="aspect-video relative rounded-xl overflow-hidden mb-8 border border-gray-50">
               <Image src={DASHBOARD_MOCKUP} alt="Analytics Dashboard" fill className="object-cover opacity-80" unoptimized />
               <div className="absolute inset-0 bg-linear-to-t from-white/90 to-transparent" />
            </div>
            <div className="bg-gray-50 p-4 rounded-xl flex items-center justify-between border border-gray-100">
               <span className="text-[10px] font-mono text-gray-400">helpme.ng/tas/ref/enny-f12</span>
               <Copy size={14} className="text-primary cursor-pointer hover:text-secondary" />
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Marketing Tools at Your Fingertips</h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            We provide everything you need to succeed. Access professionally designed recruitment cards, landing pages, and real-time performance analytics.
          </p>
          <ul className="space-y-4">
            {[
              "Personalized Agent Landing Pages",
              "Ready-to-use WhatsApp Status Graphics",
              "Email Outreach Templates",
              "Physical Referral Card Printing Service"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-bold text-primary">
                <CheckCircle2 className="text-secondary" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};