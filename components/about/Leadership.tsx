// src/components/about/Leadership.tsx
import React from "react";
import Image from "next/image";

export function Leadership() {
  const team = [
    { name: "Christian IKENNA", role: "CoFounder & CEO, Chrivon Tech Solutions", bio: "Vision-led operator focused on scaling software products for African markets.", img: "/team-christian.jpg" },
    { name: "B. Eugene LOKO", role: "CoFounder & Principal Data & Product Strategist", bio: "A cornerstone of Chrivon's pan-African brain trust with 19 years of experience.", img: "/team-eugene.jpg" },
    { name: "Onaneye Joseph", role: "Full-Stack Product Engineer & Tech Entrepreneur", bio: "Full-stack developer focused on building scalable fintech and growth platforms.", img: "/team-joseph.jpg" },
  ];

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="section-label">The Architects</span>
          <h2 className="mt-2">Leadership Team</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <div key={i} className="group">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-ambient mb-6">
                <Image src={m.img} alt={m.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="text-xl mb-1">{m.name}</h3>
              <p className="text-primary font-bold text-xs uppercase tracking-wider mb-4">{m.role}</p>
              <p className="text-sm text-text-muted leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}