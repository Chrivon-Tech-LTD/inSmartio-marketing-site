"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

// Links updated based on Marketing Strategy [cite: 9-21]
const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "For Clients", href: "/for-clients" },
  { label: "For Experts", href: "/for-experts" },
  { label: "For TAS", href: "/for-tas" },
  { label: "Blog", href: "/blog" },
];

export const Navbar =() => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full glass-panel"
      style={{
        height: "80px", // Standardized height for editorial feel
        borderBottom: "none", // Enforcing "No-Line" rule
      }}
    >
      <div
        className="max-w-7xl mx-auto h-full flex items-center justify-between gap-6"
        style={{ padding: "0 clamp(1.25rem,5vw,3rem)" }}
      >
        {/* Logo [cite: 170, 675] */}
        <Link href="/" className="shrink-0">
          <Image
            src="/Logo.png"
            alt="HelpMe NG"
            width={140}
            height={40}
            className="object-contain"
            loading="eager"
          />
        </Link>

        {/* Desktop Nav - Using Editorial rhythm [cite: 3] */}
        <nav className="hidden lg:flex items-center gap-10 flex-1 justify-center">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.label}
                href={l.href}
                className="text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group font-sans"
                style={{
                  color: active ? "var(--primary)" : "var(--text-secondary)",
                }}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 bg-primary ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Action Group */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Theme Toggle - Updated to architectural style */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-(--surface-low) transition-all duration-300 hover:brightness-110 cursor-pointer"
            style={{ color: "var(--primary)" }}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Signature CTA [cite: 49, 51] */}
          <Link href="/download" className="hidden lg:block">
            <Button variant="primary" size="sm">
              Download App
            </Button>
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-(--surface-low) transition-colors"
            style={{ color: "var(--primary)" }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer - Using Surface-Container-High  */}
      {open && (
        <div
          className="lg:hidden absolute top-20 left-0 right-0 z-50 flex flex-col shadow-ambient"
          style={{ background: "var(--surface)" }}
        >
          <nav className="flex flex-col px-8 py-6 gap-2">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[14px] font-bold uppercase tracking-[0.15em] py-4 transition-colors font-sans"
                  style={{
                    color: active ? "var(--primary)" : "var(--text-secondary)",
                    borderBottom: "1px solid var(--surface-low)",
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="px-8 pb-8">
            <Link href="/download" onClick={() => setOpen(false)}>
              <Button variant="primary" fullWidth>
                Download App
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}