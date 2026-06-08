"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ChevronDown, Send } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";

/* ── Animation Variants ────────────────────────────────────────── */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function ContactForm() {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={formRef}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white dark:bg-surface p-6 md:p-12 rounded-[2.5rem] border border-text-muted/10 transition-all duration-300 shadow-ambient"
    >

      {/* HEADER */}
      <motion.div
        custom={0}
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mb-10"
      >
        <h3 className="text-2xl md:text-3xl font-black text-primary font-display mb-2 tracking-tight">
          Send us a message
        </h3>
        <p className="text-text-muted text-sm font-medium">
          Our team usually responds within 2 business hours.To request account deletion, select <strong>&quot;Delete Account&quot;</strong> from the subject below.
        </p>
      </motion.div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* INPUTS - Staggered entrance */}
        {[
          { label: "Full Name", placeholder: "John Doe", type: "text" },
          { label: "Email Address", placeholder: "john@example.com", type: "email" },
          { label: "Phone Number", placeholder: "+234...", type: "tel" },
        ].map((input, i) => (
          <motion.div key={i} custom={i + 1} variants={fadeInUp} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <Input
              label={input.label}
              type={input.type}
              placeholder={input.placeholder}
              className="border border-text-muted/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary/40 transition-all"
            />
          </motion.div>
        ))}

        {/* THEMED SELECT */}
        <motion.div
          custom={4}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-2 w-full group"
        >
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted group-focus-within:text-primary transition-colors">
            Subject
          </label>
          <div className="relative">
            <select className="w-full h-13 px-6 bg-surface border border-text-muted/10 rounded-2xl text-sm font-bold text-text-main appearance-none focus:outline-none focus:border-primary/40 transition-all cursor-pointer">
              <option>Delete Account</option>
               <option>General Inquiry</option>
              <option>Support</option>
              <option>Partnership</option>
              <option>Press</option>
             
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
              <ChevronDown size={18} />
            </div>
          </div>
        </motion.div>

        {/* TEXTAREA */}
        <motion.div
          custom={5}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="md:col-span-2 border border-text-muted/10 rounded-2xl px-4 py-3 focus-within:border-primary/40 transition-all"
        >
          <Input
            label="Message"
            isTextArea
            placeholder="How can we help you today? Please provide as much detail as possible."
          />
        </motion.div>

        {/* SUBMIT */}
        <motion.div
          custom={6}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="md:col-span-2 pt-4"
        >
          <Button
            variant="primary"
            fullWidth
            size="lg"
            className="rounded-2xl py-4 shadow-xl group/btn overflow-hidden relative"
          >
            <span className="relative z-10 flex items-center justify-center gap-3 font-black uppercase tracking-widest text-xs">
              Send Message
              <Send size={16} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </span>
            {/* Subtle button shine effect */}
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent z-0 pointer-events-none"
            />
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}