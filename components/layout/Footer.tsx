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
      { label: "How It Works", href: "/how-it-works?tab=client" },
      { label: "Post a Job", href: "/how-it-works?tab=client" },
      { label: "Find Experts", href: "/how-it-works?tab=client" },
      { label: "Payment Options", href: "/how-it-works#payment" },
      { label: "Safety Tips", href: "/coming-soon" },
    ],
  },
  experts: {
    title: "For Experts",
    links: [
      { label: "How It Works", href: "/how-it-works?tab=expert" },
      { label: "Become an Expert", href: "/for-experts" },
      { label: "Expert Earnings", href: "/for-experts#earnings" },
      { label: "Verification Tiers", href: "/for-experts#tiers" },
      { label: "Payment Models", href: "/for-experts#payment" },
    ],
  },
  tas: {
    title: "For TAS",
    links: [
      { label: "How It Works", href: "/how-it-works?tab=ta" },
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
      { label: "FAQs", href: "/for-clients#faq" },
      { label: "Help Center", href: "/help" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms-of-service" },
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
    <footer className="bg-[#060D1A] text-[#D8E8FF] pt-20 pb-10 font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Newsletter & Brand Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5 mb-16">
          <div className="lg:col-span-5">
            <Link href="/" className="shrink-0">
              <Image
                src="/assets/insmartio.png"
                alt="inSmartio Logo"
                width={120} 
                height={35}  
                style={{ height: 'auto' }} 
                className="object-contain transition-all  w-auto h-auto"
                priority
              />
            </Link>
            <p className="text-white text-sm leading-relaxed max-w-sm mt-8 font-medium">
              Trusted Services. Verified Professionals. Nigeria&apos;s most trusted service marketplace connecting you with verified experts for every need.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#0E1E3A] p-8 rounded-2xl border border-primary/20 shadow-ambient">
              <h4 className="text-lg font-bold mb-2 font-display text-white">Subscribe to our newsletter</h4>
              <p className="text-sm text-gray-400 mb-6">Get the latest updates on expert availability and TAS earning opportunities.</p>
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-[#060D1A] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button variant="primary" className="flex items-center gap-2 font-bold uppercase tracking-widest text-[10px]">
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
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8 text-primary">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white hover:text-primary transition-colors font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Strip */}
        <div className="border-y border-white/5 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <ContactItem icon={<IoCallOutline size={20} />} label="Call Support" value="+234 800 inSmartio" />
          <Link href="mailto:support@insmartio.com">
          <ContactItem icon={<IoMailOutline size={20} />} label="Email Us" value="support@insmartio.com" />
          </Link>
          <ContactItem icon={<IoLocationOutline size={20} />} label="Offices" value="Lagos | Abuja, Nigeria" />
        </div>

        {/* Social & Legal Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-4">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="flex gap-6">
              <SocialLink href="#" icon={<FaInstagram size={20} />} />
              <SocialLink href="#" icon={<FaFacebookF size={18} />} />
              <SocialLink href="#" icon={<FaXTwitter size={18} />} />
              <SocialLink href="#" icon={<FaLinkedinIn size={20} />} />
            </div>
            <p className="text-[12px] text-white font-bold uppercase tracking-wider">
              © {year} inSmartio. Built by Chrivon Tech Solutions Limited.
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

/* Helper Components */
const ContactItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
      {icon}
    </div>
    <div>
      <p className="text-[9px] text-[#7A9DC4] uppercase tracking-[0.2em] font-black mb-1">{label}</p>
      <p className="text-sm font-bold text-[#D8E8FF]">{value}</p>
    </div>
  </div>
);

const SocialLink = ({ icon }: { href: string, icon: React.ReactNode }) => (
  <button className="text-[#7A9DC4] hover:text-primary transition-all hover:-translate-y-1">
    {icon}
  </button>
);