"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ChevronDown, Send } from "lucide-react";

export function ContactForm() {
  return (
    <div className="bg-white dark:bg-surface p-6 md:p-12 rounded-[2.5rem] shadow-ambient border border-text-muted/10 transition-all duration-300">
      
      {/* HEADER */}
      <div className="mb-10">
        <h3 className="text-2xl md:text-3xl font-black text-primary font-display mb-2 tracking-tight">
          Send us a message
        </h3>
        <p className="text-text-muted text-sm font-medium">
          Our team usually responds within 2 business hours.
        </p>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* INPUTS */}
        <Input label="Full Name" placeholder="Esther Alayande" />
        <Input label="Email Address" type="email" placeholder="esther@example.com" />
        <Input label="Phone Number" type="tel" placeholder="+234..." />
        
        {/* THEMED SELECT */}
        <div className="flex flex-col gap-2 w-full group">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted group-focus-within:text-primary transition-colors">
            Subject
          </label>
          <div className="relative">
            <select className="w-full h-13 px-6 bg-surface border border-text-muted/10 rounded-2xl text-sm font-bold text-text-main appearance-none focus:outline-none focus:border-primary/40 transition-all cursor-pointer">
              <option>General Inquiry</option>
              <option>Partnership</option>
              <option>Press</option>
              <option>Support / Dispute</option>
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* TEXTAREA */}
        <div className="md:col-span-2">
          <Input 
            label="Message" 
            isTextArea 
            placeholder="How can we help you today? Please provide as much detail as possible." 
          />
        </div>

        {/* SUBMIT */}
        <div className="md:col-span-2 pt-4">
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
          </Button>
        </div>
      </form>
    </div>
  );
}