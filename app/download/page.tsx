// src/app/download/page.tsx
import React from "react";
import { AppHero } from "@/components/download/AppHero";
import { AppFeatures } from "@/components/download/AppFeatures";

import { DeviceMockups } from "@/components/download/DeviceMockup";
export const metadata = {
  title: "Download inSmartio App – iOS and Android",
  description: "Download the inSmartio app to find trusted professionals. Available on App Store and Google Play. Get help in minutes.",
};

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* 10.1 & 10.4: Hero and Mockups */}
      <AppHero />

      {/* 10.3: Features Grid Layout */}
      <AppFeatures />

      
      <DeviceMockups />

     
    </main>
  );
}