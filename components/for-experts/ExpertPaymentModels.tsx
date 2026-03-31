import React from 'react';
import { Card } from '../ui/Card';
import { CheckCircle2, XCircle } from 'lucide-react';

const models = [
  {
    type: "Subscription Model",
    fee: "₦10,000/mo",
    commission: "0%",
    bids: "10 per month",
    maxJob: "₦50,000",
    cash: true,
   
    recommended: true
  },
  {
    type: "Commission Model",
    fee: "₦0",
    commission: "10%",
    bids: "Unlimited",
    maxJob: "Based on Tier",
    cash: false,
    
  }
];

export const ExpertPaymentModels: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-12">Flexible Payment Models</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {models.map((m, i) => (
            <Card key={i} className={`p-8 border-2 transition-all ${m.recommended ? 'border-secondary shadow-lg' : 'border-gray-100'}`}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-primary">{m.type}</h3>
                  
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{m.fee}</p>
                  <p className="text-[10px] text-gray-400 uppercase">Platform Fee</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm border-b border-gray-50 pb-2">
                  <span className="text-gray-500">Commission</span>
                  <span className="font-bold text-primary">{m.commission}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-50 pb-2">
                  <span className="text-gray-500">Bids/Month</span>
                  <span className="font-bold text-primary">{m.bids}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-50 pb-2">
                  <span className="text-gray-500">Max Job Value</span>
                  <span className="font-bold text-primary">{m.maxJob}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Cash Payments</span>
                  {m.cash ? 
                    <span className="flex items-center gap-1 text-green-600 font-bold"><CheckCircle2 size={14}/> Allowed</span> : 
                    <span className="flex items-center gap-1 text-red-400 font-bold"><XCircle size={14}/> Digital Only</span>
                  }
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};