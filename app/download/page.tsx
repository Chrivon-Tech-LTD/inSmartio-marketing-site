// src/app/download/page.tsx
import React from "react";
import { AppHero } from "@/components/download/AppHero";
import { AppFeatures } from "@/components/download/AppFeatures";
import { AppTestimonials } from "@/components/download/AppTestimonials";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Download HelpMe NG App – iOS and Android",
  description: "Download the HelpMe NG app to find trusted professionals. Available on App Store and Google Play. Get help in minutes.",
};

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* 10.1 & 10.4: Hero and Mockups */}
      <AppHero />

      {/* 10.3: Features Grid Layout */}
      <AppFeatures />

      {/* Social Proof & Rating Section */}
      <AppTestimonials />

      {/* Final Download CTA (Blue Banner) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white shadow-ambient relative overflow-hidden">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[20px_20px]"></div>
          
          <div className="relative z-10">
            <h2 className="text-white mb-6">Ready to simplify your life?</h2>
            <p className="text-white/80 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
              The most powerful way to get help in Nigeria is already in your pocket. 
              Join 100,000+ users today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" className="bg-white! text-primary!">
                Get it for iOS
              </Button>
              <Button variant="outline" size="lg" className="border-white! text-white! hover:bg-white/10!">
                Get it for Android
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Footer for Download Page */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-bold">
          Built with Excellence by Chrivon Tech Solutions © 2026
        </p>
      </footer>
    </main>
  );
}