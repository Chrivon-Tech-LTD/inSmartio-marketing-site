import React from 'react';
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import Image from "next/image";

// Types for the metrics and tech stack
interface Metric {
  value: string;
  label: string;
}

const DEFAULT_IMAGE = "https://i.pinimg.com/1200x/41/df/1d/41df1d25cd9d6b931b40af70c6f863b3.jpg";

const metrics: Metric[] = [
  { value: "+45%", label: "expert registration month-over-month" },
  { value: "-67%", label: "dispute rate vs. industry average" },
  { value: "+89%", label: "repeat client rate" },
];

const techStack: string[] = ["Product Strategy", "UI/UX Design", "Mobile App", "Payment Engine"];

export const CaseStudy: React.FC = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section from 2.4 */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="section-label uppercase tracking-widest text-sm font-bold text-primary">
              Featured Case Study • Marketplace
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-primary leading-tight">
              Work that turns trust into measurable results
            </h2>
          </div>
          <Button variant="ghost" className="hidden md:flex items-center gap-2">
            View all projects →
          </Button>
        </div>

        {/* Featured Card */}
        <Card className="p-0 overflow-hidden bg-[#1A1A1A] text-white border-none shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Image Section */}
            <div className="relative h-100 lg:h-full min-h-125 bg-[#2A2A2A]">
              <Image
                src={DEFAULT_IMAGE}
                alt="HelpMe NG - Nigeria's Trusted Service Marketplace"
                fill
                className="object-cover opacity-80"
                unoptimized // Useful for external pinterest links
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1A1A1A] via-transparent to-transparent" />
              
              {/* Floating Tech Stack Chips from Case Study Card */}
              <div className="absolute bottom-8 left-8 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90 border border-white/10 text-[10px] uppercase font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                HelpMe NG – Nigeria&apos;s Trusted Service Marketplace
              </h3>
              
              <div className="space-y-8 mb-12">
                {/* Problem Section */}
                <div>
                  <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-3">Problem</p>
                  <p className="text-white/70 text-base leading-relaxed">
                    Nigerians struggle to find trustworthy professionals. Clients get overcharged, experts struggle to find work.
                  </p>
                </div>
                
                {/* Solution Section */}
                <div>
                  <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-3">Solution</p>
                  <ul className="text-white/70 text-sm space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-secondary">•</span>
                      <span>Multi-tier verification system (NIN, BVN, guarantor)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary">•</span>
                      <span>Escrow payment protection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary">•</span>
                      <span>Dual payment models (subscription & commission)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary">•</span>
                      <span>TAS recruitment program</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Success Metrics Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                {metrics.map((metric, idx) => (
                  <div key={idx}>
                    <p className="text-3xl font-bold text-white">{metric.value}</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Read Full Case Study
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};