// src/app/blog/page.tsx
import React from "react";
import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedGrid } from "@/components/blog/FeaturedGrid";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Insights | HelpMe NG Journal",
  description: "Strategy, design, and engineering lessons from the HelpMe NG team.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <BlogHero />
      
      <FeaturedGrid />

      {/* Newsletter Section */}
      <section className="py-24 px-6 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Stay updated with our newsletter</h2>
          <p className="text-text-muted mb-10">
            Get the latest insights on Nigeria&lsquo;s service economy delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="input-field flex-1"
            />
            <Button variant="primary" size="lg">Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  );
}