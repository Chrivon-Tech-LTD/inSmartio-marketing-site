// src/app/not-found.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Search, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl w-full text-center">
        {/* 15.1 Image: Lost Graphic */}
        <div className="relative mb-12 flex justify-center">
          <div className="w-64 h-64 bg-primary/5 rounded-full flex items-center justify-center animate-pulse">
             <span className="text-[120px] font-display font-black text-primary/10 select-none">
               404
             </span>
          </div>
          {/* A floating glass-panel to make it feel "inSmartio" unique */}
          <div className="absolute bottom-4 glass-panel px-6 py-3 rounded-2xl shadow-ambient animate-float">
            <p className="text-sm font-bold text-primary flex items-center gap-2">
              <Search size={16} /> Location Unknown
            </p>
          </div>
        </div>

        {/* 15.1 Headline & Subheadline */}
        <h1 className="text-text-main mb-4 italic">Oops! Page Not Found</h1>
        <p className="text-text-muted text-lg mb-12 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let’s get you back to a verified path.
        </p>

        {/* 15.1 Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/">
            <Button variant="primary" size="lg" className="flex items-center gap-2">
              <Home size={18} /> Go to Homepage
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg" className="border-slate-200!">
              Browse Services
            </Button>
          </Link>
        </div>
        
        {/* Subtle Footer Link */}
        <p className="mt-16 text-[10px] text-text-muted uppercase tracking-[0.2em] font-bold">
          Error Code: 404_NOT_FOUND • inSmartio
        </p>
      </div>
    </main>
  );
}