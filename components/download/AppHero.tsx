// src/components/download/AppHero.tsx
import React from "react";
import Image from "next/image";
import { QrCode } from "lucide-react";
import { AppStoreButtons } from "../ui/AppStoreButtons";

export function AppHero() {
  return (
    <section className="pt-32 pb-20 px-12 bg-surface">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-label mb-4 block">Mobile App Re-Imagined</span>
          <h1 className="text-text-main mb-6 leading-tight">
            Download the <br />
            <span className="text-primary font-light">HelpMe NG App.</span> <br />
            Get help in minutes.
          </h1>
          <p className="text-text-muted text-lg max-w-md mb-10 leading-relaxed">
            Access Nigeria&apos;s most trusted marketplace for professional services and talent directly from your pocket. 
            High-fidelity experiences, now on Android and iOS.
          </p>

          <AppStoreButtons align="left" size="sm"/>

          <div className="editorial-card max-w-sm flex items-center gap-6 border-slate-100!">
            <div className="bg-text-main p-3 rounded-xl text-white">
              <QrCode size={48} />
            </div>
            <div>
              <p className="font-bold text-sm text-text-main">Scan to download</p>
              <p className="text-xs text-text-muted">Point your camera to the code to get the app instantly.</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          {/* Main iPhone Mockup */}
          <div className="relative z-10 w-70 aspect-9/19 rounded-[3rem] border-8 border-text-main overflow-hidden shadow-2xl animate-float">
            <Image src="/app-screen-1.jpg" alt="App Home" fill className="object-cover" />
          </div>
          {/* Secondary Android Mockup Overlay */}
          <div className="absolute top-12 -right-4 lg:-right-8 z-20 w-65 aspect-9/19 rounded-[3rem] border-8 border-slate-800 overflow-hidden shadow-2xl hidden md:block">
            <div className="absolute inset-0 bg-primary/90 flex items-center justify-center p-8 text-center text-white">
              <p className="font-display font-bold text-xl leading-snug">Accountability you can trust.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}