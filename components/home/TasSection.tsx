import React from "react";
import { Button } from "../ui/Button";
import { FaWallet, FaChartLine, FaUsers, FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";

const IMAGE = "https://i.pinimg.com/1200x/d4/eb/76/d4eb7675c8533ab32cefcbc953fbd2e8.jpg";

export const TASSection: React.FC = () => {
  const benefits = [
    { icon: FaWallet, text: "₦7,000 per expert recruited (one-time)" },
    { icon: FaChartLine, text: "1% of every job they complete (ongoing)" },
    { icon: FaUsers, text: "₦1,000 per month for subscribed experts" },
    { icon: FaCircleCheck, text: "Up to 15% tier bonuses" },
  ];

  return (
    <section className="relative py-28 bg-background text-text-main transition-colors duration-300 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-primary/10 blur-3xl opacity-20 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-12 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="col-span-12 lg:col-span-6">
          <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
            Earn Money by Recruiting Experts
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight font-display">
            Join the <br /> {" "}
            <span className="text-primary">Talent Acquisition Specialist (TAS) </span> Program
          </h2>

          <p className="text-lg text-text-muted mb-10 max-w-xl font-sans">
            Do you know skilled professionals? Refer them to HelpMe NG and earn:
          </p>

          {/* BENEFITS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-surface border border-text-muted/10 rounded-xl p-5 hover:border-secondary/30 shadow-sm transition-all duration-300 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/10 transition-colors group-hover:bg-secondary/20">
                    <Icon className="text-secondary text-lg" />
                  </div>
                  <p className="text-sm text-text-main font-medium leading-snug">{b.text}</p>
                </div>
              );
            })}
          </div>

          <Button size="lg" variant="primary" className="px-10">
            Learn About TAS Program
          </Button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="col-span-12 lg:col-span-6 relative h-125">
          
          {/* MAIN IMAGE CONTAINER */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-ambient border border-text-muted/10">
            <Image
              src={IMAGE}
              alt="Earn money recruiting professionals"
              fill
              className="object-cover"
              priority
            />
            {/* GRADIENT OVERLAY - Adjusted to look good in both modes */}
            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent" />
          </div>

          {/* FLOATING EARNINGS CARD */}
          <div className="absolute bottom-10 left-6 bg-surface text-text-main p-6 rounded-2xl shadow-ambient border border-text-muted/10 animate-float">
            <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1 font-bold">
              Recruitment Bonus
            </p>
            <p className="text-3xl font-black text-primary">₦7,000</p>
            <div className="mt-2 flex items-center gap-2 text-xs font-bold text-success">
              <FaChartLine /> +15% Tier Bonus
            </div>
          </div>

          {/* FLOATING MINI STATS */}
          <div className="absolute top-6 right-6 bg-surface/90 backdrop-blur-md text-text-main px-5 py-3 rounded-xl shadow-lg text-xs font-bold border border-text-muted/10">
            Earn per referral
          </div>

        </div>
      </div>
    </section>
  );
};