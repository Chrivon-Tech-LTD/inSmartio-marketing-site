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
    <section className="relative py-28 bg-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-primary/10 blur-3xl rounded-full opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-primary bg-primary/10 px-4 py-1 rounded-full">
            Featured Case Study • Marketplace
          </span>

          <h2 className="mt-6 text-3xl md:text-5xl font-bold text-gray-900 max-w-2xl">
            Work That Trust Into{" "}
            <span className="bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              Measurable Results
            </span>
          </h2>
        </div>

        {/* MAIN PANEL */}
        <div className="relative bg-white border border-gray-200 rounded-3xl shadow-2xl p-10 lg:p-16 overflow-hidden">

          {/* TECH STACK FLOATING */}
          <div className="absolute top-6 right-6 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-[10px] uppercase tracking-widest"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE (STORY) */}
            <div>

              <h3 className="text-2xl font-bold text-gray-900 mb-10">
                HelpMe NG – Nigeria’s Trusted Service Marketplace
              </h3>

              {/* PROBLEM */}
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                  Problem
                </p>
                <p className="text-gray-600 leading-relaxed">
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

                <ul className="space-y-3 text-gray-600 text-sm">
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    Multi-tier verification system (NIN, BVN, guarantor)
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    Escrow payment protection
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    Dual payment models (subscription & commission)
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    TAS recruitment program
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE (METRICS HERO) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

              {metrics.map((metric, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200 hover:shadow-lg transition"
                >
                  <p className="text-4xl font-extrabold text-primary">
                    {metric.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">
                    {metric.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* CTA */}
          <div className="mt-16 flex justify-center">
            <Button size="lg">
              Read Full Case Study
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
};