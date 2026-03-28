"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Smartphone, Apple } from 'lucide-react';
import { Button } from '../ui/Button';

const faqs = [
  {
    question: "How much does HelpMe NG cost for clients?",
    answer: "Nothing! Posting jobs and hiring experts is completely free. You only pay for the service itself. Experts pay platform fees (either subscription or commission)."
  },
  {
    question: "What if the expert does a poor job?",
    answer: "If you paid via Payment Protected (escrow), funds are held until you approve. If you're not satisfied, report the issue within 48 hours and we'll mediate."
  },
  {
    question: "Can I negotiate the price?",
    answer: "Absolutely! You can message experts directly to discuss pricing. Negotiation is encouraged to ensure fair deals for both parties."
  },
  {
    question: "How do I know an expert is trustworthy?",
    answer: "Check their verification badge: Tier 1 (Basic), Tier 2 (Verified), Tier 3 (Expert+). Also, read reviews from other clients on their profile."
  }
];

export const ClientFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-surface-lowest">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-primary text-sm md:text-base">{faq.question}</span>
                {openIndex === i ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-gray-400" />}
              </button>
              
              {openIndex === i && (
                <div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed animate-in fade-in slide-in-from-top-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ClientCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle Background Text/Pattern */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
            <span className="text-[12rem] font-bold text-white whitespace-nowrap">TRUSTED SERVICES</span>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to find your perfect professional?
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Download the HelpMe NG app today and get **10% off** your first Escrow-protected booking.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="secondary" size="lg" className="px-8 flex items-center gap-3 bg-white text-primary hover:bg-gray-100 border-none">
                <Apple size={20} />
                <div className="text-left">
                  <p className="text-[10px] uppercase leading-none font-medium">Download on the</p>
                  <p className="text-sm font-bold leading-none mt-1">App Store</p>
                </div>
              </Button>
              <Button variant="secondary" size="lg" className="px-8 flex items-center gap-3 bg-white text-primary hover:bg-gray-100 border-none">
                <Smartphone size={20} />
                <div className="text-left">
                  <p className="text-[10px] uppercase leading-none font-medium">Get it on</p>
                  <p className="text-sm font-bold leading-none mt-1">Google Play</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};