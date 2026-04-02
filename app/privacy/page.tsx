import React from 'react';
import { Shield, UserCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-background pt-32 pb-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="mb-16 border-l-4 border-primary pl-6">
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">Data Protection</span>
          <h1 className="text-4xl md:text-6xl font-black text-primary font-display mb-4">Privacy Policy</h1>
          <p className="text-text-muted font-bold text-sm uppercase tracking-widest">Effective: April 1, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-12 text-text-main">
          <section>
            <h2 className="text-2xl font-black font-display text-primary flex items-center gap-3 mb-6">
              <Shield size={24} className="text-secondary" /> 1. Introduction
            </h2>
            <p className="leading-relaxed font-medium text-text-muted">
              At HelpMe NG (CHRIVON TECH SOLUTIONS Limited), we treat privacy as a fundamental right[cite: 40, 44]. This policy outlines how we process data for Clients, Experts, and TAS agents in compliance with the Nigeria Data Protection Act 2023 (NDPA)[cite: 33, 36].
            </p>
          </section>

          <section className="bg-surface p-8 rounded-4xl border border-text-muted/10">
            <h2 className="text-xl font-black uppercase tracking-widest mb-8">Data Collection Matrix</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <DataCategory title="Identity" items={["Full Name", "DOB", "Passport Photo", "NIN/BVN"]} />
              <DataCategory title="Technical" items={["IP Address", "Device Type", "Location Data"]} />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black font-display text-primary mb-6">Your Data Rights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Right to be Informed", "Right of Access (DSAR)", "Right to Rectification", "Right to Erasure"].map((right) => (
                <div key={right} className="flex items-center gap-3 p-4 border border-text-muted/10 rounded-2xl font-bold text-sm">
                  <UserCheck size={18} className="text-success" /> {right}
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-text-muted italic">To exercise rights, contact our DPO, Eugene Loko, at dpo@helpme.ng[cite: 180, 272].</p>
          </section>
        </div>
      </div>
    </main>
  );
}

const DataCategory = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="text-xs font-black uppercase tracking-widest text-secondary mb-4">{title}</h4>
    <ul className="space-y-2">
      {items.map(item => <li key={item} className="text-sm font-bold flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}</li>)}
    </ul>
  </div>
);