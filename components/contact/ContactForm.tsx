// src/components/contact/ContactForm.tsx
"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function ContactForm() {
  return (
    <div className="editorial-card p-10 shadow-ambient">
      <h3 className="mb-8">Send us a message</h3>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="Full Name" placeholder="Esther Alayande" />
        <Input label="Email Address" type="email" placeholder="esther@example.com" />
        <Input label="Phone Number" type="tel" placeholder="+234..." />
        
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[11px] font-bold uppercase tracking-widest text-text-muted">Subject</label>
          <select className="input-field bg-surface text-text-main appearance-none">
            <option>General Inquiry</option>
            <option>Partnership</option>
            <option>Press</option>
            <option>Support / Dispute</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <Input label="Message" isTextArea placeholder="How can we help you today?" />
        </div>

        <div className="md:col-span-2 pt-4">
          <Button variant="primary" fullWidth size="lg">Send Message</Button>
        </div>
      </form>
    </div>
  );
}