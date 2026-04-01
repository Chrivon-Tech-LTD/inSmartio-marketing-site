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
    <section className="relative py-28 bg-background transition-colors duration-300 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-primary/10 blur-3xl rounded-full opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-secondary bg-secondary/10 px-4 py-1 rounded-full">
            Featured Case Study • Marketplace
          </span>

          <h2 className="mt-6 text-3xl md:text-5xl font-bold text-text-main max-w-2xl font-display">
            Work That Trust Into{" "}
            <span className="bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              Measurable Results
            </span>
          </h2>
        </div>

        {/* MAIN PANEL */}
        <div className="relative bg-surface border border-text-muted/10 rounded-3xl shadow-ambient p-10 lg:p-16 overflow-hidden transition-colors duration-300">
          
          {/* TECH STACK FLOATING */}
          <div className="md:absolute top-6 right-6 flex flex-wrap gap-2 mb-8 md:mb-0">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-primary/5 text-text-muted text-[10px] font-bold uppercase tracking-widest border border-text-muted/5"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE (STORY) */}
            <div>
              <h3 className="text-2xl font-bold text-text-main mb-10 font-display">
                HelpMe NG – Nigeria’s Trusted Service Marketplace
              </h3>

              {/* PROBLEM */}
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                  Problem
                </p>
                <p className="text-text-muted leading-relaxed">
                  Nigerians struggle to find trustworthy professionals. Clients
                  get overcharged, while experts struggle to find consistent
                  work.
                </p>
              </div>

              {/* SOLUTION */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                  Solution
                </p>

                <ul className="space-y-4 text-text-muted text-sm">
                  {[
                    "Multi-tier verification system (NIN, BVN, guarantor)",
                    "Escrow payment protection",
                    "Dual payment models (subscription & commission)",
                    "TAS recruitment program",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-primary font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE (METRICS HERO) */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
              {metrics.map((metric, i) => (
                <div
                  key={i}
                  className="bg-background rounded-2xl p-8 text-center border border-text-muted/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <p className="text-4xl font-black text-secondary transition-transform group-hover:scale-105">
                    {metric.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest font-bold text-text-muted mt-2">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 flex justify-center">
            <Button size="lg" variant="primary">
              Read Full Case Study
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};