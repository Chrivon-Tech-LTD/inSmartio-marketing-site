import {Navbar} from "@/components/layout/Navbar";
import {Footer} from "@/components/layout/Footer";
import {Hero} from "@/components/home/HeroSection";
import {Values} from "@/components/home/Values";
import { CaseStudy } from "@/components/home/CaseStudy";
import { Testimonials } from "@/components/home/Testimonials";
import { TASSection } from "@/components/home/TasSection";
import { HowItWorks } from "@/components/home/HowItworks";
import { AppDownload } from "@/components/home/AppDownload";
import {TrustedBy} from "@/components/home/Partners"
import { Pricing } from "@/components/home/Pricing";
import { AddOns } from "@/components/home/Addons";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Values />
      <HowItWorks/>
      <CaseStudy/>
      
      <Testimonials/>
      <TASSection/>
      <AppDownload/>
      <TrustedBy/>
      <Pricing/>
      <AddOns/>
      {/* Other sections like HowItWorks and TAS will go here */}
      <Footer />
    </main>
  );
}