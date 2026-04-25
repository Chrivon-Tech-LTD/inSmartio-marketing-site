'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardEdit,
  Users,
  MessageSquare,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

interface Step {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: ClipboardEdit,
    title: "Post Your Job",
    description: "Tell us what you need, add photos, set your budget.",
  },
  {
    id: 2,
    icon: Users,
    title: "Receive Bids",
    description: "Verified experts in your area send you quotes.",
  },
  {
    id: 3,
    icon: MessageSquare,
    title: "Choose & Negotiate",
    description: "Compare bids, message experts, agree on price.",
  },
  {
    id: 4,
    icon: CheckCircle2,
    title: "Get It Done",
    description: "Expert completes the work. Pay securely and leave a review.",
  },
];

function StepIcon({ step, delay }: { step: Step; delay: number }) {
  const Icon = step.icon;
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="relative w-16 h-16 rounded-full bg-[#0E1E3A] border-2 border-primary/40 shadow-lg flex items-center justify-center transition-colors duration-300"
    >
      <Icon className="w-7 h-7 text-primary" />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.3, type: "spring" }}
        className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#0E1E3A]"
      >
        {step.id}
      </motion.div>
    </motion.div>
  );
}

function StepCard({ step, i }: { step: Step; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15, duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="bg-[#0E1E3A] border border-white/10 rounded-xl p-6 shadow-md transition-all duration-300 text-center w-full"
    >
      <h3 className="font-bold text-lg text-[#D8E8FF] mb-2 font-display">
        {step.title}
      </h3>
      <p className="text-sm text-[#7A9DC4] leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}

export const HowItWorks = () => {
  return (
    <section className="relative py-16 md:py-28 bg-[#060D1A] overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-72 h-72 md:w-175 md:h-175 bg-primary/20 blur-3xl rounded-full opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#D8E8FF] font-display leading-tight">
            Get Help in{" "}
            <span className="text-primary">4 Simple Steps</span>
          </h2>
          <p className="mt-4 text-[#7A9DC4] max-w-xl mx-auto text-sm md:text-base">
            From posting a job to getting it done — fast, simple and secure.
          </p>
        </motion.div>

        {/* ── MOBILE ── */}
        <div className="md:hidden relative">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-white/5 z-0">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-linear-to-b from-primary/50 to-primary"
            />
          </div>
          <div className="relative z-10 flex flex-col gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex flex-row items-start gap-5"
                >
                  <div className="relative shrink-0 w-16 h-16 rounded-full bg-[#0E1E3A] border border-white/10 shadow-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                    <div className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#0E1E3A]">
                      {step.id}
                    </div>
                  </div>
                  <div className="flex-1 bg-[#0E1E3A] border border-white/10 rounded-xl p-4 shadow-md">
                    <h3 className="font-bold text-base text-[#D8E8FF] mb-1 font-display">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#7A9DC4] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── DESKTOP ── */}
        <div className="hidden md:block">

          {/* ROW 1 — Cards for steps 1 & 3 only (2 & 4 get ghost spacers) */}
          <div className="grid grid-cols-4 gap-8 mb-6">
            {steps.map((step, i) => {
              const isOdd = i % 2 === 0;
              return (
                <div key={step.id}>
                  {isOdd ? (
                    <StepCard step={step} i={i} />
                  ) : (
                    // Ghost spacer — same height as card but invisible
                    <div className="invisible bg-[#0E1E3A] rounded-xl p-6">
                      <p className="text-lg mb-2">{step.title}</p>
                      <p className="text-sm">{step.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ROW 2 — Icons for 1 & 3 above line (dots), icons for 2 & 4 ON line */}
          <div className="relative grid grid-cols-4 gap-8">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 z-0">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-linear-to-r from-primary/40 via-primary/70 to-primary/40"
              />
            </div>

            {steps.map((step, i) => {
              const isOdd = i % 2 === 0;
              return (
                <div key={step.id} className="relative z-10 flex justify-center items-center h-16">
                  {isOdd ? (
                    // Steps 1 & 3 — small dot on the line (icon is above in row 1... wait, icon is above the card)
                    // Actually icon sits just above the line
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2, duration: 0.6 }}
                    >
                      <StepIcon step={step} delay={i * 0.2} />
                    </motion.div>
                  ) : (
                    // Steps 2 & 4 — larger icon sits ON the line
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2, duration: 0.6 }}
                    >
                      <StepIcon step={step} delay={i * 0.2} />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ROW 3 — Cards for steps 2 & 4 only (1 & 3 get ghost spacers) */}
          <div className="grid grid-cols-4 gap-8 mt-6">
            {steps.map((step, i) => {
              const isEven = i % 2 !== 0;
              return (
                <div key={step.id}>
                  {isEven ? (
                    <StepCard step={step} i={i} />
                  ) : (
                    <div className="invisible bg-[#0E1E3A] rounded-xl p-6">
                      <p className="text-lg mb-2">{step.title}</p>
                      <p className="text-sm">{step.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};