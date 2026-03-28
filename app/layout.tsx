import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

import {Navbar} from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
// ── Setup Tonesa for Headings ──
const tonesa = localFont({
  src: [
    {
      path: "../public/fonts/Tonase.otf",
      weight: "700",
      style: "normal",
    },

  ],
  variable: "--font-tonesa",
});

// ── Setup Monexa for Body ──
const monexa = localFont({
  src: [
    {
      path: "../public/fonts/TBJMonexa-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/TBJMonexa-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/TBJMonexa-SemiBold.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-monexa",
});

export const metadata: Metadata = {
  title: "Chrivon | The Editorial Marketplace",
  description: "A high-end marketplace for Nigerian professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${tonesa.variable} ${monexa.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="grow ">
              {children}
            </main>
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}