"use client";

import Link from "next/link";
import Image from "next/image";
// Using React Icons instead of Lucide
import { 
  FaInstagram, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaXTwitter 
} from "react-icons/fa6";
import { 
  IoCallOutline, 
  IoMailOutline, 
  IoLocationOutline 
} from "react-icons/io5";

const footerLinks = {
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
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-study/helpme-ng" },
    ],
  },
};

export const Footer = () =>{
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
          
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/logo-white.png" 
                alt="HelpMe NG" 
                width={150} 
                height={50} 
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-(--color-on-ink-muted) text-sm leading-relaxed max-w-xs mb-8">
              Trusted Services. Verified Professionals. <br />
              Nigeria&apos;s most trusted service marketplace where every professional is verified. [cite: 171, 472]
            </p>
            <div className="flex gap-4">
              <Link href="https://instagram.com/helpme_ng" className="text-white/40 hover:text-secondary transition-colors"><FaInstagram size={20}/></Link>
              <Link href="https://facebook.com/helpme_ng" className="text-white/40 hover:text-secondary transition-colors"><FaFacebookF size={18}/></Link>
              <Link href="https://twitter.com/helpme_ng" className="text-white/40 hover:text-secondary transition-colors"><FaXTwitter size={18}/></Link>
              <Link href="https://linkedin.com/company/helpme-ng" className="text-white/40 hover:text-secondary transition-colors"><FaLinkedinIn size={20}/></Link>
            </div>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] mb-8 text-white">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-(--color-on-ink-muted) hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-y border-white/10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary"><IoCallOutline size={20}/></div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Call Support</p>
              <p className="text-sm font-semibold">+234 800 HELPME [cite: 189]</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary"><IoMailOutline size={20}/></div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Email Us</p>
              <p className="text-sm font-semibold">support@helpme.ng [cite: 189]</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary"><IoLocationOutline size={20}/></div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Lagos Office</p>
              <p className="text-sm font-semibold">Admiralty Way, Lekki Phase 1 [cite: 519]</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] text-white/40">
            © {year} HelpMe NG. Built by Chrivon Tech Solutions Limited. [cite: 192]
          </p>
          <div className="flex gap-8 text-[12px] text-white/40">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service [cite: 188]</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy [cite: 188]</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy [cite: 188]</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}