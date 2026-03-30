// src/components/about/AboutHero.tsx
import React from "react";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-surface">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-label mb-4 block">The Chrivon Standard</span>
          <h1 className="text-text-main mb-6 leading-tight">
            About HelpMe NG <br />
            <span className="text-primary font-light">Trusted Services. Verified Professionals.</span>
          </h1>
          <p className="text-text-muted text-lg max-w-lg mb-8 leading-relaxed">
            We are bridging the gap between talent and trust, creating a marketplace 
            where Nigerian professionalism meets global standards through verification and integrity.
          </p>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-ambient w-full aspect-4/5">
            <Image 
              src="/about-hero-main.jpg" 
              alt="Professional using HelpMe NG" 
              fill 
              className="object-cover"
            />
          </div>
          {/* Overlapping small image seen in design */}
          <div className="absolute -bottom-10 -left-12 z-20 w-1/2 aspect-video rounded-2xl overflow-hidden border-8 border-surface shadow-ambient hidden md:block">
            <Image 
              src="/about-hero-sub.jpg" 
              alt="Team working" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}