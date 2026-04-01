import React from 'react';
import { ShieldCheck, Lock, Users, MessageSquare, MapPin, Star } from 'lucide-react';
import { Card } from '../ui/Card';

export const WhyChooseHelpMe: React.FC = () => {
  return (
    <section className="py-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-16 md:border-l-4 md:border-primary md:pl-8">
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
            The HelpMe Advantage
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-text-main font-display">
            Why choose HelpMe NG?
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl font-medium leading-relaxed">
            We&apos;ve built a platform focused on your security and satisfaction, 
            ensuring every interaction is professional, transparent, and protected.
          </p>
        </div>

        {/* ASYMMETRIC UNIFIED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 1. Verified Experts - Wide Card */}
          <Card className="md:col-span-8 p-10 bg-surface border border-text-muted/10 flex flex-col md:flex-row gap-8 items-start shadow-sm hover:shadow-ambient transition-all duration-500 group">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
              <ShieldCheck className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-text-main mb-4 font-display">Verified Experts</h3>
              <p className="text-text-muted leading-relaxed text-sm md:text-base font-medium">
                Every expert undergoes a multi-stage background check, including physical address 
                verification, NIN/BVN confirmation, and skill assessment. Tier 3 experts include 
                police clearance for absolute peace of mind.
              </p>
            </div>
          </Card>

          {/* 2. Payment Protection */}
          <FeatureCard 
            colSpan="md:col-span-4"
            icon={<Lock className="w-8 h-8 text-primary" />}
            title="Payment Protection"
            desc="Pay into escrow. Money is held securely until you approve the work."
          />

          {/* 3. Compare Bids */}
          <FeatureCard 
            colSpan="md:col-span-4"
            icon={<Users className="w-8 h-8 text-primary" />}
            title="Compare Bids"
            desc="Get quotes from multiple experts. Choose the one that fits your budget."
          />

          {/* 4. Negotiate */}
          <FeatureCard 
            colSpan="md:col-span-4"
            icon={<MessageSquare className="w-8 h-8 text-primary" />}
            title="Direct Negotiation"
            desc="Chat securely to finalize terms, milestones, and deliverables."
          />

          {/* 5. Safety First */}
          <FeatureCard 
            colSpan="md:col-span-4"
            icon={<MapPin className="w-8 h-8 text-primary" />}
            title="Safety First"
            desc="Real-time location sharing with trusted contacts during active jobs."
          />

          {/* 6. Honest Reviews - Bottom Wide Card */}
          <Card className="md:col-span-12 p-8 bg-surface border border-text-muted/10 shadow-sm hover:shadow-ambient transition-all duration-500 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-6 items-center text-center md:text-left flex-col md:flex-row">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                <Star className="fill-secondary w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-text-main font-display">Honest Reviews</h3>
                <p className="text-text-muted font-medium">100% verified feedback from clients in your neighborhood.</p>
              </div>
            </div>
            
            {/* Avatar Stack Mockup */}
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div 
                  key={i} 
                  className="w-12 h-12 rounded-full border-4 border-surface bg-primary/10 flex items-center justify-center overflow-hidden shadow-sm"
                >
                  <div className="w-full h-full bg-linear-to-br from-primary/20 to-secondary/20" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-surface bg-primary text-white flex items-center justify-center text-[10px] font-black">
                +10k
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};

/* Helper Component for Uniformity */
const FeatureCard = ({ colSpan, icon, title, desc }: { colSpan: string, icon: React.ReactNode, title: string, desc: string }) => (
  <Card className={`${colSpan} p-8 bg-surface border border-text-muted/10 shadow-sm hover:shadow-ambient transition-all duration-500 flex flex-col justify-between group`}>
    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
      <div className="group-hover:text-white transition-colors">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-lg font-black text-text-main mb-2 font-display">{title}</h3>
      <p className="text-text-muted text-xs leading-relaxed font-medium">
        {desc}
      </p>
    </div>
  </Card>
);