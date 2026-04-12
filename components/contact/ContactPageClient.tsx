"use client";

import { motion, Variants } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactSidebar } from "@/components/contact/ContactSidebar";
import { OfficeLocations } from "@/components/contact/OfficeLocations";
import Image from "next/image";
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ContactPageClient() {
  return (
    <main className="min-h-screen bg-white dark:bg-background transition-colors duration-300 pt-24 md:pt-40 pb-20 px-4 md:px-6 overflow-hidden">

      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-125 h-125 bg-primary/5 blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 16, 0], y: [0, -16, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/4 -left-20 w-80 h-80 bg-secondary/5 blur-[100px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── HEADER SECTION ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-28 pb-16 md:pb-24 border-b border-text-muted/10">

          <div className="flex flex-col items-start">
            <motion.div
              custom={0} variants={fadeInUp} initial="hidden" animate="visible"
              className="flex items-center gap-4 mb-7"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-px bg-secondary/50"
              />
              <span className="text-secondary text-[10px] font-black uppercase tracking-[0.4em]">
                Get In Touch
              </span>
            </motion.div>

            <motion.h1
              custom={1} variants={fadeInUp} initial="hidden" animate="visible"
              className="text-text-main text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-display tracking-tight leading-[1.08]"
            >
              Let&lsquo;s start a <br />
              <span className="text-primary italic">conversation.</span>
            </motion.h1>

            <motion.p
              custom={2} variants={fadeInUp} initial="hidden" animate="visible"
              className="text-text-muted text-base md:text-lg font-medium leading-relaxed max-w-md mb-10"
            >
              We&apos;re here to help. Reach out for support, partnerships, or any questions.
              Our dedicated team is ready to assist you in engineering your next success.
            </motion.p>

            <motion.div
              custom={3} variants={fadeInUp} initial="hidden" animate="visible"
              className="flex items-center gap-8 pt-8 border-t border-text-muted/10 w-full"
            >
              {[
                { value: "2h", label: "Avg. Response" },
                { value: "24/7", label: "Support Active" },
                { value: "98%", label: "Resolution Rate" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-display font-black text-2xl text-text-main tracking-tight leading-none">
                    {s.value}
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-text-muted/60">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            custom={2} variants={fadeInUp} initial="hidden" animate="visible"
            className="relative w-full h-95 md:h-120 rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=80"
              alt="Team of professionals collaborating"
              width={400}
              height={100}
              loading="eager"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/50 via-transparent to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-6 left-6 right-6 bg-background/85 backdrop-blur-md border border-text-muted/15 rounded-xl px-5 py-4 flex items-center gap-4"
            >
              <div className="w-2 h-2 rounded-full bg-success animate-pulse shrink-0" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted mb-0.5">
                  Support Systems Active
                </p>
                <p className="text-sm font-bold text-text-main leading-none">
                  Average response time under 2 hours
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* MAIN INTERACTION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16 items-start mb-24 md:mb-32">
          <div className="lg:col-span-2 order-1">
            <div className="p-1 md:p-2 bg-surface border border-text-muted/10 rounded-[2.5rem] shadow-ambient">
              <ContactForm />
            </div>
          </div>
          <div className="space-y-6 order-2 lg:sticky lg:top-32">
            <ContactSidebar />
          </div>
        </div>

        {/* GEOGRAPHIC PRESENCE SECTION */}
        <div className="mb-24 md:mb-32">
          <div className="mb-12 md:mb-16 text-center lg:text-left border-l-4 border-primary pl-6 md:pl-8 inline-block">
            <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
              Where to find us
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-text-main font-display tracking-tight">
              Our Location
            </h2>
          </div>
          <OfficeLocations />
        </div>

        {/* SYSTEM STATUS */}
        <div className="flex items-center justify-center gap-3 py-6 border-t border-text-muted/10 opacity-40">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-text-muted">
            Support Systems Active • Average Response: 2h
          </span>
        </div>

      </div>
    </main>
  );
}