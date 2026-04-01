import React from "react";
import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedGrid } from "@/components/blog/FeaturedGrid";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Insights | HelpMe NG Journal",
  description: "Strategy, design, and engineering lessons from the HelpMe NG team building Nigeria's service economy.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-background transition-colors duration-300">
      {/* 1. Hero Section */}
      <BlogHero />
      
      {/* 2. Main Article Grid */}
      <FeaturedGrid />

      {/* 3. Newsletter Section */}
      <section className="py-24 md:py-32 px-4 md:px-6 border-t border-text-muted/10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Label */}
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
            Community Updates
          </span>
          
          <h2 className="text-3xl md:text-5xl font-black text-text-main font-display mb-6 tracking-tight leading-tight">
            Stay updated with <br className="hidden sm:block" /> our newsletter
          </h2>
          
          <p className="text-text-muted text-base md:text-xl mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
            Get the latest insights on Nigeria&apos;s service economy and professional marketplace strategy delivered directly to your inbox.
          </p>

          {/* Form Area */}
          <div className="relative group max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 p-8 bg-surface border border-text-muted/10 rounded-4xl shadow-ambient focus-within:border-primary/30 transition-all duration-300">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 bg-transparent rounded-xl text-text-main placeholder:text-text-muted/50 focus:outline-none font-medium text-sm md:text-base"
              />
              <Button 
                variant="primary" 
                size="lg" 
                className="px-10 py-4 rounded-3xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Subscribe
              </Button>
            </div>
            
            {/* Subtle decorative glow */}
            <div className="absolute -inset-1 bg-linear-to-r from-primary/10 to-secondary/10 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>

          {/* Trust Caption */}
          <p className="mt-8 text-[10px] text-text-muted font-black uppercase tracking-widest opacity-40">
            Zero spam. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </main>
  );
}