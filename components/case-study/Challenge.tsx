// src/components/case-study/Challenge.tsx
import React from "react";

export function Challenge() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <span className="section-label mb-2 block">The Problem</span>
          <h2 className="mb-6">The Trust Deficit Challenge</h2>
          <p className="italic text-text-muted border-l-4 border-primary pl-6 py-2">
            &quot;In Nigeria&apos;s burgeoning service sector, the primary barrier to digital scale 
            isn&apos;t technology—it&apos;s trust.&ldquo;
          </p>
        </div>

        <div className="editorial-card flex flex-col justify-center items-center text-center">
          <h2 className="text-primary text-6xl! mb-2">42%</h2>
          <p className="section-label text-center">Abandonment Rate</p>
          <p className="text-text-muted mt-4 text-sm">
            Transactions failed due to lack of upfront verification in previous market models.
          </p>
        </div>

        <div className="editorial-card bg-text-main! text-surface flex flex-col justify-center">
           <h3 className="text-secondary mb-4">Market Friction</h3>
           <p className="opacity-80 text-sm leading-relaxed">
             Qualitative analysis revealed a 3.5x higher cost of acquisition in non-vetted urban service sectors compared to verified pools.
           </p>
        </div>
      </div>
    </section>
  );
}