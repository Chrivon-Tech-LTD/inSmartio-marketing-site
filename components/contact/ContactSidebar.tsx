// src/components/contact/ContactSidebar.tsx
import React from "react";
import { Mail, Phone, Share2 } from "lucide-react";

export function ContactSidebar() {
  return (
    <div className="space-y-6">
      {/* Email Support Card */}
      <div className="editorial-card border-l-4! border-l-primary!">
        <div className="flex items-center gap-3 mb-4 text-primary">
          <Mail size={20} />
          <h4 className="text-sm font-bold uppercase tracking-widest">Email Support</h4>
        </div>
        <div className="space-y-3 text-xs">
          <p><span className="font-bold text-text-main">General:</span> hello@helpme...</p>
          <p><span className="font-bold text-text-main">Clients:</span> clients@helpme...</p>
          <p><span className="font-bold text-text-main">Experts:</span> experts@helpme...</p>
          <p><span className="font-bold text-text-main">TAS Support:</span> tas@helpme...</p>
        </div>
      </div>

      {/* Phone Support Card */}
      <div className="editorial-card border-l-4! border-l-secondary!">
        <div className="flex items-center gap-3 mb-4 text-secondary">
          <Phone size={20} />
          <h4 className="text-sm font-bold uppercase tracking-widest">Phone Support</h4>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-bold text-text-main">+234 800 HELPME</p>
          <p className="text-[10px] text-text-muted">Mon - Fri, 8am - 6pm WAT</p>
        </div>
      </div>

      {/* Social Card */}
      <div className="editorial-card text-center">
        <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Join Our Community</h4>
        <div className="flex justify-center gap-4">
          <div className="p-3 rounded-full bg-slate-50 text-text-muted hover:text-primary cursor-pointer transition-colors border border-slate-100 shadow-sm">
            <Share2 size={18} />
          </div>
          {/* Add more social icons here */}
        </div>
      </div>
    </div>
  );
}