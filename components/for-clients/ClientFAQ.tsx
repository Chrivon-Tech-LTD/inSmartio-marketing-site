"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
    <section className="py-24 bg-background transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-text-main font-display">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-surface rounded-2xl border border-text-muted/10 overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-primary/5 transition-colors cursor-pointer group"
              >
                <span className={`font-bold font-display transition-colors ${openIndex === i ? 'text-primary' : 'text-text-main'}`}>
                  {faq.question}
                </span>
                <div className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-secondary' : 'text-text-muted'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-sm md:text-base text-text-muted leading-relaxed font-medium">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};