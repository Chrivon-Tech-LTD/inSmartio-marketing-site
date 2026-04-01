"use client";

import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
// Using Simple Icons (si) for brand-perfect logos
import { SiInstagram, SiX, } from "react-icons/si";

export function ContactSidebar() {
  return (
    <div className="space-y-6 md:space-y-8">
      
      {/* EMAIL SUPPORT CARD */}
      <div className="bg-white dark:bg-surface p-8 rounded-4xl border border-text-muted/10 border-l-4 border-l-primary shadow-sm hover:shadow-ambient transition-all duration-500 group">
        <div className="flex items-center gap-4 mb-6 text-primary">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
            <Mail size={20} />
          </div>
          <h4 className="text-[11px] font-black uppercase tracking-[0.2em] font-display">Email Support</h4>
        </div>
        
        <div className="space-y-4">
          <ContactLine label="General" value="hello@helpme.ng" />
          <ContactLine label="Clients" value="clients@helpme.ng" />
          <ContactLine label="Experts" value="experts@helpme.ng" />
          <ContactLine label="TAS Agents" value="tas@helpme.ng" />
        </div>
      </div>

      {/* PHONE SUPPORT CARD */}
      <div className="bg-white dark:bg-surface p-8 rounded-4xl border border-text-muted/10 border-l-4 border-l-secondary shadow-sm hover:shadow-ambient transition-all duration-500 group">
        <div className="flex items-center gap-4 mb-6 text-secondary">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center transition-transform group-hover:scale-110">
            <Phone size={20} />
          </div>
          <h4 className="text-[11px] font-black uppercase tracking-[0.2em] font-display">Live Support</h4>
        </div>
        
        <div className="space-y-1">
          <p className="text-lg font-black text-text-main font-display tracking-tight">+234 800 HELPME</p>
          <p className="text-[10px] text-text-muted font-black uppercase tracking-widest opacity-60 italic leading-none">
            Mon - Fri, 8am - 6pm WAT
          </p>
        </div>
      </div>

      {/* SOCIAL COMMUNITY CARD */}
      <div className="bg-surface p-8 rounded-[2.5rem] border border-text-muted/10 text-center shadow-sm">
        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-text-muted">
          Join Our Community
        </h4>
        
        <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
          <SocialIcon icon={<SiX size={16} />} href="https://x.com/helpme_ng" />
          <SocialIcon icon={<SiInstagram size={18} />} href="https://instagram.com/helpme_ng" />
          <SocialIcon icon={<SiX size={18} />} href="https://linkedin.com/company/helpme-ng" />
          <SocialIcon icon={<MessageCircle size={18} />} href="#" />
        </div>
      </div>
    </div>
  );
}

/* HELPER COMPONENTS */

const ContactLine = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-0.5 group/line cursor-pointer">
    <span className="text-[9px] font-black text-text-muted uppercase tracking-widest opacity-60">
      {label}
    </span>
    <span className="text-sm font-bold text-text-main group-hover/line:text-primary transition-colors truncate">
      {value}
    </span>
  </div>
);

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-2xl bg-white dark:bg-background text-text-muted hover:text-white hover:bg-primary cursor-pointer transition-all duration-300 border border-text-muted/10 flex items-center justify-center shadow-sm hover:shadow-lg hover:-translate-y-1"
  >
    {icon}
  </a>
);