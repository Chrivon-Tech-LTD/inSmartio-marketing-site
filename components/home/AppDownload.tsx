import React from "react";
import { AppStoreButtons } from "../ui/AppStoreButtons";
import Image from "next/image";
import { FaArrowTrendUp, FaShieldHalved } from "react-icons/fa6";

export const AppDownload: React.FC = () => {
  return (
    <section className="relative py-28 bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Banner Container */}
        <div className="relative bg-primary rounded-[2.5rem] p-8 md:p-16 lg:p-20 shadow-ambient overflow-hidden">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/10 to-transparent skew-x-12 translate-x-20 pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 blur-3xl rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* LEFT SIDE: Content */}
            <div className="lg:col-span-7 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                  Available on iOS & Android
                </span>
              </div>

              <h2 className="text-4xl text-white md:text-6xl font-black mb-8 leading-[1.1] font-display">
                The Future of <br />
                <span className="text-secondary">Nigerian Services</span> <br />
                is in Your Pocket.
              </h2>

              <p className="text-white/80 text-lg mb-10 max-w-lg leading-relaxed font-sans">
                Join over 10,000+ users finding reliable plumbers, electricians, 
                and professionals across Nigeria. Safe, fast, and verified.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <AppStoreButtons align="left" size="sm" />
                
                {/* Trust Badges */}
                <div className="items-center gap-4 border-l border-white/20 pl-8 hidden sm:flex">
                  <div className="text-center">
                    <FaShieldHalved className="text-secondary text-xl mx-auto mb-1" />
                    <p className="text-[9px] uppercase font-bold opacity-70">Verified</p>
                  </div>
                  <div className="text-center">
                    <FaArrowTrendUp className="text-secondary text-xl mx-auto mb-1" />
                    <p className="text-[9px] uppercase font-bold opacity-70">Secure</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Interactive Download Section */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              
              <div className="relative group w-full max-w-[320px]">
                {/* QR Code Card */}
                <div className="relative z-20 bg-surface rounded-4xl p-8 shadow-2xl text-center border border-text-muted/10 transition-transform duration-500 group-hover:-rotate-2">
                  <div className="relative w-48 h-48 mx-auto mb-6 bg-white p-4 rounded-2xl shadow-inner">
                    <Image
                      src="https://i.pinimg.com/736x/78/d5/01/78d5016be7c774417abb6421183fa67c.jpg"
                      alt="QR code to download HelpMe NG app"
                      width={180}
                      height={180}
                      className="mx-auto"
                      priority
                    />
                  </div>
                  
                  <h4 className="text-text-main font-bold text-lg mb-1 font-display">Scan to Install</h4>
                  <p className="text-text-muted text-xs font-medium px-4">
                    Point your camera at the code to download instantly
                  </p>
                </div>

                {/* Decorative Stack behind QR Card */}
                <div className="absolute inset-0 bg-secondary/40 rounded-4xl translate-x-4 translate-y-4 -rotate-3 z-10" />
                <div className="absolute inset-0 bg-white/10 rounded-4xl translate-x-8 translate-y-8 -rotate-6 z-0" />
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};