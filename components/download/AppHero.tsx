import React from "react";
import Image from "next/image";
import { QrCode } from "lucide-react";
import { AppStoreButtons } from "../ui/AppStoreButtons";

export function AppHero() {
  return (
    <section className="relative pt-24 md:pt-40 pb-20 px-4 md:px-6 overflow-hidden bg-white dark:bg-background transition-colors duration-300">
      
      {/* Strategic Background Accents */}
      <div className="absolute top-0 right-0 w-100 md:w-175 h-100 md:h-175 bg-primary/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT: Content */}
        <div className="text-center lg:text-left order-2 lg:order-1 px-2 md:px-0">
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
            Mobile App Re-Imagined
          </span>
          
          <h1 className="text-text-main text-3xl md:text-5xl lg:text-7xl font-black leading-[1.2] lg:leading-[1.1] mb-6 font-display tracking-tight">
            Download the <br />
            <span className="text-primary italic font-light">HelpMe NG App.</span> <br />
            Get help in minutes.
          </h1>

          <p className="text-text-muted text-sm md:text-xl leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0 font-medium">
            Access Nigeria&apos;s most trusted marketplace for professional services and talent directly from your pocket. 
            High-fidelity experiences, now on Android and iOS.
          </p>

          <div className="flex justify-center lg:justify-start mb-10 transform scale-90 md:scale-100 origin-center lg:origin-left">
            <AppStoreButtons align="left" size="sm"/>
          </div>

          {/* QR Code Editorial Card */}
          <div className="mx-auto lg:mx-0 max-w-sm flex items-center gap-6 p-5 bg-surface rounded-2xl border border-text-muted/10 shadow-ambient transition-all hover:shadow-xl group">
            <div className="bg-text-main p-3 rounded-xl text-white shadow-lg transition-transform group-hover:scale-110">
              <QrCode size={40} className="md:w-12 md:h-12" />
            </div>
            <div className="text-left">
              <p className="font-black text-xs md:text-sm text-text-main uppercase tracking-widest leading-none mb-1">Scan to download</p>
              <p className="text-[10px] md:text-xs text-text-muted font-medium leading-tight">
                Point your camera to the code to get the app instantly.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Mockup Visuals */}
        <div className="relative w-full flex justify-center lg:justify-end order-1 lg:order-2 px-4 md:px-0">
          {/* Main iPhone Mockup */}
          <div className="relative z-10 w-56 md:w-72 aspect-9/19 rounded-[2.5rem] md:rounded-[3.5rem] border-[6px] md:border-10 border-text-main overflow-hidden shadow-ambient animate-float bg-surface">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-text-main rounded-b-xl z-30 hidden md:block" />
            <Image 
               src="/app-screen-1.jpg" 
               alt="App Home" 
               fill 
               className="object-cover" 
               priority
            />
          </div>

          {/* Secondary Android Mockup - Hidden on small mobile, visible on tablet+ */}
          <div className="absolute top-12 -right-2 md:-right-8 z-20 w-52 md:w-64 aspect-9/19 rounded-[2.5rem] md:rounded-[3.5rem] border-[6px] md:border-10 border-slate-900 overflow-hidden shadow-ambient hidden sm:block">
            <div className="absolute inset-0 bg-primary/95 flex items-center justify-center p-6 md:p-10 text-center text-white">
              <p className="font-display font-black text-lg md:text-2xl leading-tight tracking-tight">
                Accountability <br /> you can trust.
              </p>
            </div>
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl hidden lg:block" />
        </div>

      </div>
    </section>
  );
}