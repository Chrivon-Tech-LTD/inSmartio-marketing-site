"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  img: string;
}

const team: TeamMember[] = [
  {
    name: "Christian IKENNA",
    role: "CoFounder & CEO, Chrivon Tech Solutions",
    bio: "Vision-led operator focused on scaling software products for African markets.",
    img: "/assets/founder/christian.jpeg",
  },
  {
    name: "B. Eugene LOKO",
    role: "CoFounder & Principal Data & Product Strategist",
    bio: "A cornerstone of Chrivon's pan-African brain trust with 19 years of experience.",
    img: "/assets/founder/Bonna.png",
  },
  {
    name: "Onaneye Joseph",
    role: "Full-Stack Product Engineer & Tech Entrepreneur",
    bio: "Full-stack developer focused on building scalable fintech and growth platforms.",
    img: "/assets/founder/joseph.jpg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-surface transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="mb-12 md:mb-20 text-center md:text-left"
        >
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">
            The Architects
          </span>
          <h2 className="text-text-main font-display text-3xl md:text-5xl font-bold">
            Leadership Team
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((m, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative w-full h-64 sm:h-72 md:aspect-square md:h-auto rounded-3xl overflow-hidden mb-6 border border-text-muted/10 bg-surface">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 ${
                    i === 1 ? "object-top" : "object-center"
                  }`}
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              </div>

              {/* Text */}
              <div className="px-1 flex-1">
                <h3 className="text-xl md:text-2xl font-display font-bold text-text-main mb-2 transition-colors group-hover:text-primary">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}