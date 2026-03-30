// src/app/case-study/page.tsx
import React from "react";
import { Hero } from "@/components/case-study/Hero";
import { Challenge } from "@/components/case-study/Challenge";
import { Solutions } from "@/components/case-study/Solutions";
import { Metrics } from "@/components/case-study/Metrics";
import { Testimonial } from "@/components/case-study/Testimonial";

export const metadata = {
  title: "HelpMe NG Case Study | Chrivon Tech Solutions",
  description: "Exploring the infrastructure of trust in the Nigerian service economy.",
};

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/10 selection:text-primary">
      {/* Ensure your Navbar is either here or in your layout.tsx 
      */}
      
      <Hero />
      
      <div className="space-y-0"> {/* Precise section spacing */}
        <Challenge />
        <Solutions />
        <Metrics />
        <Testimonial />
      </div>

      {/* Quick Case Study Footer Signature */}
      <footer className="py-12 bg-surface border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-sm font-medium">
            © 2026 HelpMe NG Case Study.
          </p>
          <p className="section-label text-text-muted! opacity-50">
            Built with React, Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}