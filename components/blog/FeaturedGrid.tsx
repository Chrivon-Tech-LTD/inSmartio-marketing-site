// src/components/blog/FeaturedGrid.tsx
import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    title: "Why Trust Matters in Nigeria's Service Industry",
    excerpt: "How we built a multi-tier verification system that users trust.",
    tag: "Strategy",
    readTime: "6 min read"
  },
  {
    title: "The TAS Program: How We Scaled Expert Recruitment",
    excerpt: "Lessons from building a commission-based referral network.",
    tag: "Growth",
    readTime: "8 min read"
  },
  {
    title: "Payment Protection vs Cash: What Users Choose",
    excerpt: "Data insights from 20,000+ transactions.",
    tag: "Data",
    readTime: "5 min read"
  },
  {
    title: "5 Tips for Hiring a Reliable Plumber in Lagos",
    excerpt: "What to look for, what to ask, and how to avoid being overcharged.",
    tag: "Guides",
    readTime: "4 min read"
  }
];

export function FeaturedGrid() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {articles.map((article, i) => (
          <div key={i} className="editorial-card group flex flex-col justify-between hover:ring-1 hover:ring-primary/20 transition-all duration-300">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="glass-panel px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                  {article.tag}
                </span>
                <div className="flex items-center gap-2 text-[10px] text-text-muted font-bold uppercase tracking-widest">
                  <Clock size={12} /> {article.readTime}
                </div>
              </div>
              <h3 className="mb-4 group-hover:text-primary transition-colors cursor-pointer">
                {article.title}
              </h3>
              <p className="text-text-muted mb-8 line-clamp-2">
                {article.excerpt}
              </p>
            </div>
            
            <Button variant="ghost" size="sm" className="w-fit px-0! group/btn">
              Read More <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}