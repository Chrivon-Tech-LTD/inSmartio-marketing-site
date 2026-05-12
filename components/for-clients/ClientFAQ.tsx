"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How much does inSmartio cost for clients?",
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
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-text-main font-display">
            Frequently Asked Questions
          </h2>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              layout
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface rounded-2xl border border-text-muted/10 overflow-hidden shadow-sm"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-primary/5 transition-colors cursor-pointer group"
              >
                <span className={`font-bold font-display text-sm md:text-base transition-colors duration-300 ${openIndex === i ? 'text-primary' : 'text-text-main'}`}>
                  {faq.question}
                </span>
                <motion.div 
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  className={`${openIndex === i ? 'text-secondary' : 'text-text-muted'}`}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 pb-6 text-sm md:text-base text-text-muted leading-relaxed font-medium">
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {faq.answer}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};