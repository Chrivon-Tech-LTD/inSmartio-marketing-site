import React from 'react';
import { Calendar, BadgeDollarSign, ShieldCheck, Star, Globe, Wallet } from 'lucide-react';
import { Card } from '../ui/Card';

const benefits = [
  { title: "Consistent Work", desc: "Get job alerts matching your skills. No more searching for clients.", icon: <Calendar className="text-primary" /> },
  { title: "Get Paid on Time", desc: "Escrow system guarantees payment. Cash option available for subscribed experts.", icon: <BadgeDollarSign className="text-primary" /> },
  { title: "Verified Status", desc: "Pass verification and get a trust badge. Clients choose verified experts first.", icon: <ShieldCheck className="text-primary" /> },
  { title: "Build Reputation", desc: "Collect reviews and ratings. Good reputation = more work.", icon: <Star className="text-primary" /> },
  { title: "Digital Presence", desc: "Create a professional profile. Showcase your portfolio. Let clients find you.", icon: <Globe className="text-primary" /> },
  { title: "Flexible Models", desc: "Choose between subscription (0% commission) or commission (no monthly fee).", icon: <Wallet className="text-primary" /> },
];

export const ExpertBenefits: React.FC = () => {
  return (
    <section className="py-24 bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-4xl font-bold text-primary mb-16">Why Elite Experts Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <Card key={i} className="p-8 border-none bg-white shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">{b.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-2">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};