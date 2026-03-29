import type { Metadata } from "next";
import { DM_Sans } from "next/font/google"; // Import DM Sans from Google
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// ── Setup DM Sans for Headings (Replaces Tonase) ──
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans", // This variable will be used in your globals.css
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
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-monexa",
});

export const metadata: Metadata = {
  title: "HelpMe NG | The Editorial Marketplace",
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
      data-scroll-behavior="smooth"
      /* Combined both font variables here */
      className={`${dmSans.variable} ${monexa.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}