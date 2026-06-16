import type { Metadata } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

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
  title: "inSmartio – Trusted Services, Verified Professionals.",
  description: "Find trusted professionals in Nigeria. Post jobs, compare bids, and pay securely. Plumbers, electricians, tutors, cleaners, and more.",
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
      suppressHydrationWarning
      className={` ${monexa.variable} ${dmSans.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="9v3FOf9Xrk--Be4udxmL5dY1fdcCvD_cpTSET_JQgh4" />
      </head>
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