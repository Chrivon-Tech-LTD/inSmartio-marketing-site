// src/components/blog/FeaturedGrid.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    title: "Why Trust Matters in Nigeria's Service Industry",
    excerpt: "How we built a multi-tier verification system that users actually trust in a low-trust economy.",
    tag: "Strategy",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800&auto=format&fit=crop",
    author: "Adelayo Tunde"
  },
  {
    title: "The TAS Program: How We Scaled Expert Recruitment",
    excerpt: "Lessons from building a commission-based referral network that grew our provider base by 400%.",
    tag: "Growth",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    author: "Christian Ikenna"
  },
  {
    title: "Payment Protection vs Cash: What Users Choose",
    excerpt: "Hard data insights from 20,000+ transactions comparing escrow adoption vs direct cash settlements.",
    tag: "Data",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
    author: "Emeka Okafor"
  },
  {
    title: "5 Tips for Hiring a Reliable Plumber in Lagos",
    excerpt: "What to look for, what to ask, and how to avoid being overcharged in the local market.",
    tag: "Guides",
    readTime: "4 min",
    image: "https://i.pinimg.com/736x/6d/66/af/6d66af4d10a9a7d19d1df880b0ce3b23.jpg",
    author: "Grace A."
  }
];

export function FeaturedGrid() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-32 items-start">
          {articles.map((article, i) => (
            <article 
              key={i} 
              className={`group transition-all duration-700 
                ${i % 2 === 1 ? 'md:translate-y-24 lg:translate-y-32' : ''}
              `}
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-4/3 rounded-4xl md:rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-ambient transition-all duration-500 bg-surface">
                <span className="absolute top-6 left-6 z-10 bg-white/90 dark:bg-primary/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-primary dark:text-white shadow-sm">
                  {article.tag}
                </span>

                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* CONTENT AREA */}
              <div className="px-2 md:px-6">
                <div className="flex items-center gap-6 mb-6 text-[10px] text-text-muted font-black uppercase tracking-[0.3em] border-l-2 border-primary/20 pl-6">
                  <p className="text-text-main">{article.author}</p>
                  <div className="flex items-center gap-2">
                    <Clock size={12} className="text-secondary" /> {article.readTime}
                  </div>
                </div>

                <h3 className="mb-4 text-2xl md:text-3xl font-display font-black text-text-main leading-tight group-hover:text-primary transition-colors cursor-pointer line-clamp-2 tracking-tight">
                  {article.title}
                </h3>

                <p className="text-text-muted text-sm md:text-base leading-relaxed mb-8 line-clamp-2 font-medium opacity-80">
                  {article.excerpt}
                </p>

                <Link href="#" className="inline-block group/link">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="px-0! hover:bg-transparent text-xs font-black uppercase tracking-[0.2em] text-text-main group-hover/link:text-primary transition-colors"
                  >
                    Read Full Story 
                    <ArrowRight size={16} className="ml-3 transition-transform group-hover/link:translate-x-2 text-secondary" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM ACCENT (Prevents the footer from feeling too close to the offset card) */}
        <div className="h-24 md:h-48 pointer-events-none" />
      </div>
    </section>
  );
}