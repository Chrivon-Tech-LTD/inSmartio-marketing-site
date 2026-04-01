// src/components/blog/FeaturedGrid.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    title: "Why Trust Matters in Nigeria's Service Industry",
    excerpt: "How we built a multi-tier verification system that users trust.",
    tag: "Strategy",
    readTime: "6 min",
    image: "/blog/trust-marketplace.jpg", // Add high-quality, relevant images
    author: "Adelayo Tunde"
  },
  {
    title: "The TAS Program: How We Scaled Expert Recruitment",
    excerpt: "Lessons from building a commission-based referral network.",
    tag: "Growth",
    readTime: "8 min",
    image: "/blog/tas-scaling.jpg",
    author: "Christian Ikenna"
  },
  {
    title: "Payment Protection vs Cash: What Users Choose",
    excerpt: "Data insights from 20,000+ transactions on HelpMe NG.",
    tag: "Data",
    readTime: "5 min",
    image: "/blog/payment-data.jpg",
    author: "Emeka Okafor"
  },
  {
    title: "5 Tips for Hiring a Reliable Plumber in Lagos",
    excerpt: "What to look for, what to ask, and how to avoid being overcharged.",
    tag: "Guides",
    readTime: "4 min",
    image: "/blog/lagos-plumber.jpg",
    author: "Grace A."
  }
];

export function FeaturedGrid() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-x-8 gap-y-16 items-start">
        {articles.map((article, i) => (
          <div key={i} className={`group ${i % 2 === 1 ? 'md:translate-y-24' : ''}`}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
              <span className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                {article.tag}
              </span>

              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content Area */}
            <div className="px-4">
              <div className="flex items-center gap-6 mb-4 text-[10px] text-text-muted font-bold uppercase tracking-widest border-l-2 border-slate-100 pl-4">
                <p>{article.author}</p>
                <div className="flex items-center gap-1.5">
                  <Clock size={12} /> {article.readTime}
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-display font-bold text-text-main leading-tight group-hover:text-primary transition-colors cursor-pointer line-clamp-2">
                {article.title}
              </h3>

              <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-2 opacity-80">
                {article.excerpt}
              </p>

              <Link href="#" passHref>
                <Button variant="ghost" size="sm" className="w-fit px-0! group/btn text-xs uppercase tracking-widest">
                  Read Article <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}