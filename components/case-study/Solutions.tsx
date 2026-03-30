// src/components/case-study/Solutions.tsx
import React from "react";
import { ValueCard } from "@/components/ui/Card"; // Adjust path as needed
import { Button } from "@/components/ui/Button";

export function Solutions() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="section-label block mb-2">Architecting Trust</span>
          <h2>Strategic Solutions</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="editorial-card border border-slate-100!">
            <ValueCard 
              icon="🛡️"
              title="Multi-Tier Verification"
              description="Identity verification is just the start. We implemented a tier-based system incorporating biometric data and professional certification."
            />
          </div>

          {/* Featured TAS Card using your --tas color variable */}
          <div className="rounded-2xl p-8 bg-tas text-white shadow-ambient flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Expansion Program</span>
              <h3 className="mt-4 mb-4 text-white">The TAS Program</h3>
              <p className="opacity-90 text-sm leading-relaxed">
                Trusted Service Agents distributed across urban hubs to provide physical oversight for high-value contracts and scalable growth.
              </p>
            </div>
            <Button variant="secondary" size="sm" className="mt-8 w-fit bg-white! text-tas!">
              Program Overview
            </Button>
          </div>

          <div className="editorial-card border border-slate-100!">
            <ValueCard 
              icon="💳"
              title="Dual Payment Models"
              description="Swiftware architecture allowing for immediate release or milestone-based Escrow depending on contract complexity."
            />
          </div>
        </div>
      </div>
    </section>
  );
}