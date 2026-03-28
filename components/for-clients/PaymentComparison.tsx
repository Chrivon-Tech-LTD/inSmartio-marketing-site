import React from 'react';
import { Card } from '../ui/Card';
import { ShieldCheck, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

export const PaymentComparison: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">
            ● RECOMMENDED
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Choose Your Way to Pay</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Flexible payment systems designed for your convenience and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Option 1: HelpMe Escrow (Green Theme) */}
          <Card className="p-10 border-2 border-green-500 bg-green-50/30 relative shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -mr-16 -mt-16" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary">HelpMe Escrow</h3>
            </div>

            <ul className="space-y-6 mb-12">
              {[
                { label: "Most Secure", desc: "Money held until you're 100% satisfied." },
                { label: "Full Refund Guarantee", desc: "Refund possible if issue arises or expert cancels." },
                { label: "Automatic Dispute Resolution", desc: "Our team mediates if things don't go as planned." },
                { label: "Secure Digital Ledger", desc: "Clear proof of payment for your professional records." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={18} />
                  <div>
                    <p className="font-bold text-primary text-sm">{item.label}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-white/60 p-4 rounded-xl border border-green-100">
              <p className="text-[10px] font-bold text-green-700 uppercase mb-1">Best for:</p>
              <p className="text-xs text-gray-600">First-time hires, large jobs, any job where you want peace of mind.</p>
            </div>
          </Card>

          {/* Option 2: Direct Cash (Orange Theme) */}
          <Card className="p-10 border-2 border-orange-400 bg-orange-50/30 relative grayscale-[0.2] hover:grayscale-0 transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-orange-400 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <AlertTriangle size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary">Direct Cash</h3>
            </div>

            <ul className="space-y-6 mb-12">
              {[
                { label: "Pay Expert Directly", desc: "Cash or bank transfer outside the platform." },
                { label: "No Platform Fees", desc: "Save on the 10% platform transaction fee." },
                { label: "Fast and Simple", desc: "Immediate payment settlement between parties." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle2 className="text-orange-500 shrink-0 mt-1" size={18} />
                  <div>
                    <p className="font-bold text-primary text-sm">{item.label}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
              <li className="flex gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
                <XCircle className="text-red-500 shrink-0 mt-1" size={18} />
                <div>
                  <p className="font-bold text-red-700 text-sm">Limited Protection</p>
                  <p className="text-xs text-red-600 leading-relaxed">No protection if issue arises. Dispute resolution is limited.</p>
                </div>
              </li>
            </ul>

            <div className="bg-white/60 p-4 rounded-xl border border-orange-100">
              <p className="text-[10px] font-bold text-orange-700 uppercase mb-1">Best for:</p>
              <p className="text-xs text-gray-600">Small jobs, repeat experts you trust, when you prefer cash.</p>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};