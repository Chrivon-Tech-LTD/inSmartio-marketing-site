"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";

type Screen = {
  id: string;
  title: string;
  color: string;
  desc: string;
  img: string;
};

const screens: Screen[] = [
  { id: "home", title: "Home Explorer", color: "bg-primary",   img: "/assets/Home.png", desc: "Browse top-rated professionals near you instantly." },
  { id: "post", title: "Smart Post",    color: "bg-secondary", img: "/assets/Post.png", desc: "Describe your needs and set a precise budget." },
  { id: "bids", title: "Live Bidding",  color: "bg-success",   img: "/assets/bid.png", desc: "Compare verified expert quotes in real-time." },
  { id: "chat", title: "Secure Chat",   color: "bg-primary",   img: "/assets/Chat.png", desc: "Encrypted messaging to finalize job details." },
  { id: "pay",  title: "Safe Pay",      color: "bg-slate-900", img: "/assets/payment.png",  desc: "Secure escrow release only upon your satisfaction." },
];

/* ── Animation Variants ── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const mockupVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function DeviceMockups() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 md:px-6 bg-white dark:bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 md:mb-20"
        >
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">
            Visual Interface
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary font-display tracking-tight">
            Intuitive by Design
          </h2>
          <p className="text-text-muted mt-4 max-w-xl font-medium leading-relaxed">
            A high-fidelity mobile experience built for Nigerian excellence.
            Every screen is optimized for trust, speed, and seamless interaction.
          </p>
        </motion.div>

        {/* HORIZONTAL SNAP CONTAINER */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex gap-6 md:gap-10 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth -mx-4 px-4"
        >
          {screens.map((screen) => (
            <motion.div
              key={screen.id}
              variants={mockupVariants}
              className="snap-center shrink-0 w-65 md:w-75 group"
            >
              {/* Premium iPhone Pro Frame */}
              <div className="relative aspect-9/19 rounded-[2.5rem] md:rounded-[3.5rem] border-[6px] md:border-10 border-text-main overflow-hidden shadow-ambient transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-2xl bg-surface">

                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-text-main rounded-b-2xl z-30 hidden md:block" />

                {/* Tinted Overlay Layer */}
                <div className={`absolute inset-0 ${screen.color} opacity-5 z-20 pointer-events-none group-hover:opacity-0 transition-opacity`} />

                {/* Skeleton Loader */}
                <div className="absolute inset-0 p-8 z-0">
                  <div className="w-12 h-1 bg-text-muted/10 rounded-full mx-auto mb-10" />
                  <div className="space-y-4">
                    <div className="h-4 w-3/4 bg-text-muted/10 rounded-full" />
                    <div className="h-40 w-full bg-text-muted/5 rounded-4xl border border-dashed border-text-muted/20" />
                  </div>
                </div>

                {/* Screen Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full h-full z-10"
                >
                  <Image
                    src={screen.img}
                    alt={`${screen.title} Screen`}
                    fill
                    className="object-cover"
                    priority={screen.id === "home"}
                  />
                </motion.div>
              </div>

              {/* CAPTION */}
              <div className="mt-8 px-2 transition-opacity duration-300">
                <h4 className="text-lg font-black text-text-main font-display">{screen.title}</h4>
                <p className="text-xs md:text-sm text-text-muted mt-2 leading-relaxed font-medium">
                  {screen.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SCROLL PROGRESS INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="flex items-center gap-2 mt-4 opacity-20 justify-center lg:justify-start"
        >
          <div className="h-1 w-12 bg-primary rounded-full" />
          <div className="h-1 w-2 bg-text-muted rounded-full" />
          <div className="h-1 w-2 bg-text-muted rounded-full" />
        </motion.div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}