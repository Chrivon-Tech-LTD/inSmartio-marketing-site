import React from 'react';
import { ShieldCheck, Lock, Users, MessageSquare, MapPin, Star } from 'lucide-react';
import { Card } from '../ui/Card';

export const WhyChooseHelpMe: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Why choose HelpMe NG?</h2>
          <p className="text-gray-500 max-w-2xl">
            We&apos;ve built a platform focused on your security and satisfaction, ensuring every 
            interaction is professional and protected.
          </p>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 1. Verified Experts - Wide Card */}
          <Card className="md:col-span-8 p-10 bg-gray-50 border-none flex flex-col md:flex-row gap-8 items-start">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <ShieldCheck className="text-primary w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Verified Experts</h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                Every expert undergoes a multi-stage background check, including physical address 
                verification, NIN/BVN confirmation, and skill assessment. Tier 3 experts include 
                police clearance for absolute peace of mind.
              </p>
            </div>
          </Card>

          {/* 2. Payment Protection - Small Blue Card */}
          <Card className="md:col-span-4 p-8 bg-primary text-white border-none flex flex-col justify-between">
            <Lock className="text-secondary w-10 h-10 mb-6" />
            <div>
              <h3 className="text-lg font-bold mb-2">Payment Protection</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Pay into escrow. Money is held securely until you approve the work.
              </p>
            </div>
          </Card>

          {/* 3. Compare Bids - Small Orange Card */}
          <Card className="md:col-span-4 p-8 bg-secondary text-white border-none flex flex-col justify-between">
            <Users className="text-primary w-10 h-10 mb-6" />
            <div>
              <h3 className="text-lg font-bold mb-2">Compare Bids</h3>
              <p className="text-white/90 text-xs leading-relaxed">
                Get quotes from multiple experts. Choose the one that fits your budget.
              </p>
            </div>
          </Card>

          {/* 4. Negotiate - Small White Card */}
          <Card className="md:col-span-4 p-8 border-gray-100 flex flex-col justify-between">
            <MessageSquare className="text-primary w-10 h-10 mb-6" />
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">Direct Negotiation</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Chat securely to finalize terms, milestones, and deliverables.
              </p>
            </div>
          </Card>

          {/* 5. Safety First - Tall/Wide White Card */}
          <Card className="md:col-span-4 p-8 border-gray-100 flex flex-col items-center text-center justify-center">
            <MapPin className="text-red-500 w-12 h-12 mb-4" />
            <h3 className="text-lg font-bold text-primary mb-2">Safety First</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Real-time location sharing with trusted contacts during active jobs.
            </p>
          </Card>

          {/* 6. Honest Reviews - Bottom Wide Card */}
          <Card className="md:col-span-12 p-8 bg-gray-50 border-none flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4 items-center">
              <Star className="text-yellow-500 fill-yellow-500 w-8 h-8" />
              <div>
                <h3 className="text-lg font-bold text-primary">Honest Reviews</h3>
                <p className="text-gray-500 text-sm">100% verified feedback from clients in your neighborhood.</p>
              </div>
            </div>
            {/* Avatar Stack Mockup from design */}
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-300" />
              ))}
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};