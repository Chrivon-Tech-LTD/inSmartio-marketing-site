"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Wrench, Zap, BookOpen, Sparkles, ShieldCheck,
  Star, Home, Wifi, Camera, Truck, ArrowLeft,
} from "lucide-react";

const BG_ICONS = [
  { Icon: Wrench,      top: "8%",  left: "5%",  size: 48, drift: "drift-1", r: "12deg"  },
  { Icon: Zap,         top: "18%", left: "88%", size: 36, drift: "drift-2", r: "-8deg"  },
  { Icon: BookOpen,    top: "55%", left: "3%",  size: 44, drift: "drift-3", r: "20deg"  },
  { Icon: ShieldCheck, top: "70%", left: "90%", size: 40, drift: "drift-1", r: "-15deg" },
  { Icon: Home,        top: "85%", left: "15%", size: 36, drift: "drift-2", r: "5deg"   },
  { Icon: Camera,      top: "30%", left: "92%", size: 32, drift: "drift-3", r: "-22deg" },
  { Icon: Wifi,        top: "42%", left: "6%",  size: 30, drift: "drift-1", r: "18deg"  },
  { Icon: Star,        top: "10%", left: "55%", size: 28, drift: "drift-2", r: "-10deg" },
  { Icon: Truck,       top: "78%", left: "60%", size: 42, drift: "drift-3", r: "14deg"  },
  { Icon: Sparkles,    top: "62%", left: "78%", size: 34, drift: "drift-1", r: "-6deg"  },
];

const CATEGORIES = [
  "Plumbers", "Electricians", "Tutors", "Cleaners",
  "Mechanics", "Photographers", "Tailors", "Carpenters",
  "Painters", "Event Planners", "IT Support"
];

export default function ComingSoonPage() {
  const pillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = pillsRef.current;
    if (!el) return;
    let frame: number;
    let offset = 0;
    const tick = () => {
      offset += 0.5;
      if (offset >= el.scrollWidth / 2) offset = 0;
      el.style.transform = `translateX(-${offset}px)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">

      {/* Floating background */}
      <div className="tool-bg" aria-hidden="true">
        {BG_ICONS.map(({ Icon, top, left, size, drift, r }, i) => (
          <span key={i} className={`tool-icon ${drift}`} style={{ top, left, "--r": r } as React.CSSProperties}>
            <Icon size={size} strokeWidth={1.4} />
          </span>
        ))}
      </div>

      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(26,75,140,0.13) 0%, transparent 70%)" }}
      />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-2xl rounded-3xl text-center"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          boxShadow: "0 32px 80px rgba(10,25,60,0.14)",
          padding: "clamp(2rem, 6vw, 4rem) clamp(1.5rem, 5vw, 3.5rem)",
        }}
      >
        {/* Badge */}
        <span
          className="inline-flex items-center gap-2 rounded-full text-sm font-semibold mb-8"
          style={{
            background: "rgba(249,168,38,0.15)",
            color: "var(--secondary)",
            padding: "6px 18px",
            border: "1px solid rgba(249,168,38,0.3)",
            letterSpacing: "0.04em",
          }}
        >
          <Sparkles size={14} />
          Coming Soon
        </span>

        {/* Wordmark */}
        <h1
          className="font-display font-bold leading-none mb-4"
          style={{ fontSize: "clamp(2.8rem, 8vw, 5rem)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
        >
          in<span style={{ color: "var(--primary)" }}>Smart</span>io
        </h1>

        {/* Tagline */}
        <p className="font-display font-semibold mb-3" style={{ fontSize: "clamp(1.1rem, 3vw, 1.45rem)", color: "var(--text-primary)" }}>
          Trusted Services. Verified Professionals.
        </p>

        <p
          className="leading-relaxed mb-10 mx-auto"
          style={{ fontSize: "clamp(0.92rem, 2.2vw, 1.05rem)", color: "var(--text-secondary)", maxWidth: "480px" }}
        >
          We&apos;re building Nigeria&apos;s most reliable marketplace to find,
          compare, and hire skilled professionals — from plumbers &amp; electricians
          to tutors &amp; event planners. Pay securely, every time.
        </p>

        {/* Trust pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { icon: <ShieldCheck size={15} />, label: "Verified Pros" },
            { icon: <Star size={15} />, label: "Rated & Reviewed" },
            { icon: <Zap size={15} />, label: "Fast Matching" },
          ].map(({ icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full text-sm font-medium"
              style={{ background: "var(--surface-raised)", color: "var(--text-secondary)", padding: "8px 16px", border: "1px solid var(--border)" }}
            >
              <span style={{ color: "var(--primary)" }}>{icon}</span>
              {label}
            </span>
          ))}
        </div>

        {/* Back to homepage button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:brightness-110"
          style={{
            background: "var(--primary)",
            color: "white",
            padding: "12px 24px",
          }}
        >
          <ArrowLeft size={15} />
          Back to Homepage
        </Link>
      </div>

      {/* Scrolling category ticker */}
      <div
        className="relative z-10 w-full mt-14 overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      >
        <div ref={pillsRef} className="flex gap-4 whitespace-nowrap will-change-transform" style={{ width: "max-content" }}>
          {[...CATEGORIES, ...CATEGORIES].map((cat, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 rounded-full text-sm font-medium shrink-0"
              style={{ background: "var(--surface)", color: "var(--text-secondary)", padding: "8px 20px", border: "1px solid var(--border)" }}
            >
              <span className="inline-block w-2 h-2 rounded-full shrink-0" style={{ background: "var(--secondary)" }} />
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <p className="relative z-10 mt-10 text-xs" style={{ color: "var(--text-secondary)", opacity: 0.6 }}>
        © {new Date().getFullYear()} inSmartio · Nigeria
      </p>
    </section>
  );
}