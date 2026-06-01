/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "For Clients", href: "/for-clients" },
  { label: "For Experts", href: "/for-experts" },
  { label: "For TAs", href: "/for-tas" },
  { label: "Blog", href: "/blog" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        height: "76px",
        background: "rgba(10, 15, 30, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(55, 138, 221, 0.12)",
      }}
    >
      <div
        className="max-w-7xl mx-auto h-full flex items-center justify-between"
        style={{ padding: "0 clamp(1.25rem, 5vw, 1rem)", gap: "32px" }}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center gap-3 -mt-6 -ml-12 md:-ml-8">
          <Image
            src="/assets/insmartio.png"
            alt="inSmartio Logo"
            width={180}
            height={64}
            style={{ height: "200px", width: "auto" }}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-9 flex-1 justify-center">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.label}
                href={l.href}
                className="relative group font-sans"
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: active ? "var(--primary)" : "rgba(255,255,255,0.5)",
                  transition: "color 0.2s",
                  paddingBottom: "2px",
                  textDecoration: "none",
                }}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Action Group */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex items-center justify-center w-9.5 h-9.5 rounded-[10px] cursor-pointer transition-all duration-200 hover:brightness-110"
            style={{
              background: "rgba(55,138,221,0.1)",
              border: "1px solid rgba(55,138,221,0.2)",
              color: "var(--primary)",
            }}
          >
            {mounted && (isDark ? <Sun size={16} /> : <Moon size={16} />)}
          </button>

          {/* CTA */}
          <Link href="/download" className="hidden lg:block">
            <Button variant="primary" size="sm">
              Download App
            </Button>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex items-center justify-center w-9.5 h-9.5 rounded-[10px] transition-colors"
            style={{
              background: "rgba(55,138,221,0.1)",
              border: "1px solid rgba(55,138,221,0.2)",
              color: "var(--primary)",
            }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="lg:hidden absolute top-19 left-0 right-0 z-50 flex flex-col shadow-ambient"
          style={{
            background: "rgba(10, 15, 30, 0.97)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(55,138,221,0.12)",
          }}
        >
          <nav className="flex flex-col px-8 py-6 gap-1">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-sans"
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "14px 0",
                    color: active ? "var(--primary)" : "rgba(255,255,255,0.5)",
                    borderBottom: "1px solid rgba(55,138,221,0.08)",
                    textDecoration: "none",
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
};