"use client";

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image"
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter
} from "react-icons/fa6";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoSend
} from "react-icons/io5";
import { Button } from "../ui/Button";
import { AppStoreButtons } from '../ui/AppStoreButtons';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}


const footerLinks: Record<string, FooterSection> = {
  clients: {
    title: "For Clients",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Post a Job", href: "/post-job" },
      { label: "Find Experts", href: "/categories" },
      { label: "Payment Options", href: "/how-it-works#payments" },
      { label: "Safety Tips", href: "/safety" },
    ],
  },
  experts: {
    title: "For Experts",
    links: [
      { label: "How It Works", href: "/how-it-works#experts" },
      { label: "Become an Expert", href: "/register" },
      { label: "Expert Earnings", href: "/for-experts#earnings" },
      { label: "Verification", href: "/for-experts#verification" },
      { label: "Payment Models", href: "/for-experts#models" },
    ],
  },
  tas: {
    title: "For TAS",
    links: [
      { label: "How It Works", href: "/how-it-works#tas" },
      { label: "Apply Now", href: "/for-tas#apply" },
      { label: "TAS Tiers", href: "/for-tas#tiers" },
      { label: "Earnings Calculator", href: "/for-tas#calculator" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-study" },
      { label: "FAQs", href: "/faqs" },
      { label: "Help Center", href: "/help" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "TAS Agreement", href: "/tas-agreement" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
};

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Newsletter & Brand Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 mb-16">
          <div className="lg:col-span-5">
            <Link href="/" className="shrink-0">
              <Image
                src="/Logo.png"
                alt="HelpMe NG"
                width={100}
                height={30}
                className="object-contain w-auto h-auto"
                loading="eager"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mt-8">
              Trusted Services. Verified Professionals. Nigeria&apos;s most trusted service marketplace connecting you with verified experts for every need.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h4 className="text-lg font-bold mb-2">Subscribe to our newsletter</h4>
              <p className="text-sm text-gray-400 mb-6">Get the latest updates on expert availability and TAS earning opportunities.</p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-colors"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button variant="outline" className="flex items-center gap-2">
                  Subscribe <IoSend size={14} />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8 text-white">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Strip */}
        <div className="border-y border-white/10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary">
              <IoCallOutline size={20} />
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Call Support</p>
              <p className="text-sm font-semibold">+234 800 HELPME (0800 435763)</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary">
              <IoMailOutline size={20} />
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Email Us</p>
              <p className="text-sm font-semibold">support@helpme.ng</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary">
              <IoLocationOutline size={20} />
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Offices</p>
              <p className="text-sm font-semibold text-white/80">Lagos | Abuja, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Social & Legal Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-4">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="flex gap-6">
              <Link href="#" className="text-white/40 hover:text-white transition-colors"><FaInstagram size={20} /></Link>
              <Link href="#" className="text-white/40 hover:text-white transition-colors"><FaFacebookF size={18} /></Link>
              <Link href="#" className="text-white/40 hover:text-white transition-colors"><FaXTwitter size={18} /></Link>
              <Link href="#" className="text-white/40 hover:text-white transition-colors"><FaLinkedinIn size={20} /></Link>
            </div>
            <p className="text-[12px] text-white/40">
              © {year} HelpMe NG. Built by Chrivon Tech Solutions Limited.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <AppStoreButtons align='center' size='sm' />
          </div>
        </div>
      </div>
    </footer>
  );
};