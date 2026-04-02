import React from "react";
import { Button } from "../ui/Button";

interface Metric {
  value: string;
  label: string;
}

const metrics: Metric[] = [
  { value: "+45%", label: "expert registration growth" },
  { value: "-67%", label: "dispute rate reduction" },
  { value: "+89%", label: "repeat client rate" },
];

const techStack = [
  "Product Strategy",
  "UI/UX Design",
  "Mobile App",
  "Payment Engine",
];

export const CaseStudy: React.FC = () => {
  return (
    <section className="relative py-16 md:py-28 bg-background transition-colors duration-300 overflow-hidden">
      {/* Background Glow - Scaled for mobile */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 md:w-200 md:h-200 bg-primary/10 blur-3xl rounded-full opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-10 md:mb-16 text-center md:text-left">
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-secondary bg-secondary/10 px-4 py-1 rounded-full inline-block">
            Featured Case Study • Marketplace
          </span>

          <h2 className="mt-6 text-3xl md:text-5xl font-bold text-text-main max-w-2xl mx-auto md:mx-0 font-display leading-tight">
            Work That Trust Into{" "}
            <span className="bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              Measurable Results
            </span>
          </h2>
        </div>

        {/* MAIN PANEL */}
        <div className="relative bg-surface border border-text-muted/10 rounded-2xl md:rounded-3xl shadow-ambient p-6 md:p-10 lg:p-16 overflow-hidden transition-colors duration-300">
          
          {/* TECH STACK - Responsive Positioning */}
          <div className="flex flex-wrap gap-2 mb-8 lg:absolute lg:top-8 lg:right-8 lg:mb-0 lg:justify-end">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-primary/5 text-text-muted text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-text-muted/5 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">
            
            {/* LEFT SIDE (STORY) */}
            <div className="order-2 lg:order-1">
              <h3 className="text-xl md:text-2xl font-bold text-text-main mb-6 md:mb-10 font-display">
                HelpMe NG – Nigeria’s Trusted Service Marketplace
              </h3>

              {/* PROBLEM */}
              <div className="mb-8">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-3">
                  Problem
                </p>
                <p className="text-text-muted text-sm md:text-base leading-relaxed">
                  Nigerians struggle to find trustworthy professionals. Clients
                  get overcharged, while experts struggle to find consistent
                  work.
                </p>
              </div>

              {/* SOLUTION */}
              <div>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-4">
                  Solution
                </p>

                <ul className="space-y-3 md:space-y-4 text-text-muted text-xs md:text-sm">
                  {[
                    "Multi-tier verification system (NIN, BVN, guarantor)",
                    "Escrow payment protection",
                    "Dual payment models (subscription & commission)",
                    "TAS recruitment program",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-primary font-bold shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE (METRICS HERO) */}
            <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-6">
              {metrics.map((metric, i) => (
                <div
                  key={i}
                  className="bg-background rounded-xl md:rounded-2xl p-6 md:p-8 text-center border border-text-muted/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <p className="text-3xl md:text-4xl font-black text-secondary transition-transform group-hover:scale-105">
                    {metric.value}
                  </p>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-text-muted mt-2 leading-tight">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 md:mt-16 flex justify-center">
            <Button size="lg" variant="primary" className="w-full sm:w-auto">
              Read Full Case Study
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};