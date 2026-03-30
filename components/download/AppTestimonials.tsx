// src/components/download/AppTestimonials.tsx
import React from "react";
import Image from "next/image";

import { Star } from "lucide-react";

export function AppTestimonials() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="mb-12 leading-tight">Loved by Nigerians <br />on the move</h2>
          
          <div className="space-y-12">
            <div className="relative pl-8">
              <span className="absolute left-0 top-0 text-4xl text-primary/30 font-serif">“</span>
              <p className="text-lg text-text-main font-medium mb-4 italic">
                &#34;The app experience is so smooth. I was able to find a generator repairman in Lekki while sitting in traffic. 
                The escrow payment on mobile gives me so much peace of mind.&ldquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                  <Image src="/user-avatar-1.jpg" alt="User" width={40} height={40} />
                </div>
                <div>
                  <p className="text-sm font-bold">Amaka D.</p>
                  <p className="text-[10px] uppercase text-text-muted">Active Client since 2023</p>
                </div>
              </div>
            </div>

            <div className="relative pl-8">
              <span className="absolute left-0 top-0 text-4xl text-primary/30 font-serif">“</span>
              <p className="text-lg text-text-main font-medium mb-4 italic">
                &quot;As a professional electrician, the HelpMe NG app is my primary office. The bidding interface is intuitive, 
                and I get paid instantly once the customer confirms.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                  <Image src="/user-avatar-2.jpg" alt="User" width={40} height={40} />
                </div>
                <div>
                  <p className="text-sm font-bold">Chidi K.</p>
                  <p className="text-[10px] uppercase text-text-muted font-semibold tracking-wider">Top Rated Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="editorial-card bg-slate-900! p-12 text-white relative overflow-hidden min-h-100 flex flex-col justify-end">
           <div className="absolute top-0 right-0 p-12 opacity-10">
              <Star size={180} />
           </div>
           <div className="glass-panel text-text-main p-8 rounded-4xl w-fit">
              <div className="flex gap-1 text-secondary mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-4xl font-bold font-display mb-1">4.9/5 Rating</p>
              <p className="text-xs font-medium opacity-60">Across 10,000+ reviews on both App Store and Google Play</p>
           </div>
        </div>
      </div>
    </section>
  );
}