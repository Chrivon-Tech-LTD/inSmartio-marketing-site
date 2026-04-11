import React from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  img: string;
}

export function Leadership() {
  const team: TeamMember[] = [
    { 
      name: "Christian IKENNA", 
      role: "CoFounder & CEO, Chrivon Tech Solutions", 
      bio: "Vision-led operator focused on scaling software products for African markets.", 
      img: "/assets/founder/christian.avif" 
    },
    { 
      name: "B. Eugene LOKO", 
      role: "CoFounder & Principal Data & Product Strategist", 
      bio: "A cornerstone of Chrivon's pan-African brain trust with 19 years of experience.", 
      img: "https://www.chrivon.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBonna.4bacb802.png&w=256&q=75" 
    },
    { 
      name: "Onaneye Joseph", 
      role: "Full-Stack Product Engineer & Tech Entrepreneur", 
      bio: "Full-stack developer focused on building scalable fintech and growth platforms.", 
      img: "/assets/founder/Adedire.avif" 
    },
  ];

  return (
    <section className="py-24 px-6 bg-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">
            The Architects
          </span>
          <h2 className="text-text-main font-display text-3xl md:text-5xl font-bold">
            Leadership Team
          </h2>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
          {team.map((m, i) => (
            <div key={i} className="group flex flex-col">
              
              {/* Image Container */}
              <div className="relative aspect-square rounded-4xl overflow-hidden shadow-ambient mb-8 border border-text-muted/10">
                <Image 
                  src={m.img} 
                  alt={m.name} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105" 
                />
                
                {/* Subtle Brand Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Info */}
              <div className="px-2">
                <h3 className="text-2xl font-display font-bold text-text-main mb-2 transition-colors group-hover:text-primary">
                  {m.name}
                </h3>
                
                <p className="text-primary font-black text-[10px] uppercase tracking-widest mb-4 leading-relaxed">
                  {m.role}
                </p>
                
                <div className="w-8 h-1 bg-secondary mb-4 transition-all duration-500 group-hover:w-16" />
                
                <p className="text-sm md:text-base text-text-muted leading-relaxed font-medium">
                  {m.bio}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}