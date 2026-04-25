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

export const HowItWorks = () => {
  return (
    <section className="relative py-16 md:py-28 bg-[#060D1A] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-72 h-72 md:w-175 md:h-175 bg-primary/20 blur-3xl rounded-full opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#D8E8FF] font-display leading-tight">
            Get Help in{" "}
            <span className="text-primary">4 Simple Steps</span>
          </h2>
          <p className="mt-4 text-[#7A9DC4] max-w-xl mx-auto text-sm md:text-base">
            From posting a job to getting it done — fast, simple and secure.
          </p>
        </motion.div>

        {/* ── MOBILE LAYOUT ── */}
        <div className="flex flex-col gap-0 md:hidden relative">

          {/* Vertical line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-white/5 z-0">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-linear-to-b from-primary/50 to-primary"
            />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative z-10 flex flex-row items-start gap-5 pb-8 last:pb-0"
              >
                {/* Icon node */}
                <div className="relative shrink-0 w-16 h-16 rounded-full bg-[#0E1E3A] border border-white/10 shadow-lg flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                  <div className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#0E1E3A]">
                    {step.id}
                  </div>
                </div>

                {/* Card */}
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

        {/* ── DESKTOP LAYOUT (zigzag) ── */}
        <div className="hidden md:block relative">

          {/* Horizontal line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-linear-to-r from-primary/50 to-primary"
            />
          </div>

          <div className="grid grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isUp = i % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: isUp ? -40 : 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className={`relative flex flex-col items-center gap-0 ${isUp ? "-translate-y-10" : "translate-y-10"}`}
                >
                  {/* Icon node */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative shrink-0 w-16 h-16 rounded-full bg-[#0E1E3A] border border-white/10 shadow-lg flex items-center justify-center mb-8 transition-colors duration-300"
                  >
                    <Icon className="w-7 h-7 text-primary" />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
                      className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#0E1E3A]"
                    >
                      {step.id}
                    </motion.div>
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-[#0E1E3A] border border-white/10 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <h3 className="font-bold text-lg text-[#D8E8FF] mb-2 font-display">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#7A9DC4] leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};