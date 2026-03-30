// src/components/blog/BlogHero.tsx
import React from "react";

export function BlogHero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-surface border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <span className="section-label mb-4 block">Our Journal</span>
        <h1 className="text-text-main mb-6 max-w-3xl leading-[110%]">
          Insights from the <br />
          <span className="text-primary font-light">HelpMe NG Team</span>
        </h1>
        <p className="text-text-muted text-xl max-w-2xl leading-relaxed">
          Strategy, design, and engineering lessons from building Nigeria&lsquo;s 
          trusted service marketplace.
        </p>
      </div>
    </section>
  );
}