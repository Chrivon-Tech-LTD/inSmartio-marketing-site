import React from 'react';
import { Card } from '../ui/Card';
import { ShieldCheck, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

export const PaymentComparison: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <span className="bg-success/10 text-secondary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 inline-block">
            ● RECOMMENDED
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-text-main mb-6 font-display leading-tight">
            Choose Your Way to Pay
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto font-medium text-base md:text-lg leading-relaxed">
            Flexible payment systems designed for your convenience and security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* OPTION 1: HELPME ESCROW (Vibrant Green) */}
          <Card className="p-8 md:p-12 border-2 border-success bg-surface relative shadow-xl overflow-hidden group transition-all duration-500 rounded-[2.5rem] md:rounded-[3rem]">
            {/* Subtle decorative glow for Escrow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-success/5 rounded-full -mr-20 -mt-20 pointer-events-none" />
            
            <div className="flex items-center gap-5 mb-10">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-success/20">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-text-main font-display">HelpMe Escrow</h3>
            </div>

            <ul className="space-y-6 mb-12">
              {[
                { label: "Most Secure", desc: "Money held until you're 100% satisfied." },
                { label: "Full Refund Guarantee", desc: "Refund possible if issue arises or expert cancels." },
                { label: "Automatic Dispute Resolution", desc: "Our team mediates if things don't go as planned." },
                { label: "Secure Digital Ledger", desc: "Clear proof of payment for your professional records." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle2 className="text-success shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-black text-text-main text-sm md:text-base">{item.label}</p>
                    <p className="text-xs md:text-sm text-text-muted leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-background/50 p-5 rounded-2xl border border-success/20 shadow-sm">
              <p className="text-[10px] font-black text-success uppercase tracking-widest mb-1">Best for:</p>
              <p className="text-sm text-text-main font-bold">First-time hires, large jobs, and total peace of mind.</p>
            </div>
          </Card>

          {/* OPTION 2: DIRECT CASH (Vibrant Orange) */}
          <Card className="p-8 md:p-12 border-2 border-secondary bg-surface relative shadow-lg transition-all duration-500 rounded-[2.5rem] md:rounded-[3rem] group">
            
            <div className="flex items-center gap-5 mb-10">
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-secondary/20">
                <AlertTriangle size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-text-main font-display">Direct Cash</h3>
            </div>

            <ul className="space-y-6 mb-12">
              {[
                { label: "Pay Expert Directly", desc: "Cash or bank transfer outside the platform." },
                { label: "No Platform Fees", desc: "Save on the 10% platform transaction fee." },
                { label: "Fast and Simple", desc: "Immediate payment settlement between parties." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-black text-text-main text-sm md:text-base">{item.label}</p>
                    <p className="text-xs md:text-sm text-text-muted leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </li>
              ))}
              
              {/* Alert Box - Using theme colors for the warning */}
              <li className="flex gap-4 p-5 bg-red-500/5 rounded-2xl border border-red-500/20">
                <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-black text-red-500 text-sm uppercase tracking-tight">Limited Protection</p>
                  <p className="text-xs text-red-500/80 leading-relaxed font-bold">No protection or dispute resolution if issues arise.</p>
                </div>
              </li>
            </ul>

            <div className="bg-background/50 p-5 rounded-2xl border border-secondary/20 shadow-sm">
              <p className="text-[10px] font-black text-secondary uppercase tracking-widest mb-1">Best for:</p>
              <p className="text-sm text-text-main font-bold">Small jobs and repeat experts you already trust.</p>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};