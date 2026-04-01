"use client";

import React from "react";
import Image from "next/image";
import {Button} from "@/components/ui/Button"
// ─── Base Editorial Card ──
export function Card({ children, className = "", hover = false }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <div
      className={[
        "bg-(--surface-lowest) rounded-2xl p-8", 
        "shadow-ambient border-none", 
        hover ? "hover:-translate-y-1 transition-all duration-300" : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

// ─── Service / Expert Card (Replaces MenuCard) ──
interface ExpertCardProps {
  image: string;
  name: string;
  category: string;
  rating: number;
  verificationLevel: 1 | 2 | 3;
}

export function ExpertCard({ image, name, category, rating, verificationLevel }: ExpertCardProps) {
  return (
    <Card hover className="group overflow-hidden p-0!">
      <div className="relative h-64 w-full bg-(--surface-low)">
        <Image src={image} alt={name} fill className="object-cover" />
        {/* Verification Glass Chip [cite: 5] */}
        <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">
          {verificationLevel === 3 ? "✔✔✔ Expert+" : `Tier ${verificationLevel}`}
        </div>
      </div>
      <div className="p-6">
        <span className="text-secondary text-[12px] font-bold uppercase tracking-[0.2em]">{category}</span>
        <h3 className="font-display text-[20px] font-bold text-text-main mt-1">{name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-500">★</span>
          <span className="text-[14px] text-text-muted">{rating} / 5.0</span>
        </div>
        <Button variant="ghost" size="sm" className="mt-4 px-0!">
          View Profile <span className="ml-1">→</span>
        </Button>
      </div>
    </Card>
  );
}

// ─── Value / Feature Card ───
export function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-transparent">
      <div className="text-primary text-3xl">{icon}</div>
      <h4 className="font-display font-bold text-[22px] text-text-main">{title}</h4>
      <p className="text-[16px] leading-[160%] text-text-muted">{description}</p>
    </div>
  );
}