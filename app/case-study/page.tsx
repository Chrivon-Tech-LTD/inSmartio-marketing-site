// src/app/case-study/page.tsx
import React from "react";
import { Hero } from "@/components/case-study/Hero";
import { CaseStudyOverview } from "@/components/case-study/Overview";

export const metadata = {
  title: "HelpMe NG Case Study – Nigeria's Trusted Service Marketplace",
  description: "How we built a multi-tier verification system, dual payment models, and a TAS recruitment program to solve Nigeria's service industry trust deficit.",
};

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/10 selection:text-primary">
      {/* Ensure your Navbar is either here or in your layout.tsx 
      */}
      
      <Hero />
      <CaseStudyOverview />
      
      

      
    </main>
  );
}