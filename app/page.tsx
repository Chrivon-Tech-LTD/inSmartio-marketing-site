import {Navbar} from "@/components/layout/Navbar";
import {Footer} from "@/components/layout/Footer";
import {Hero} from "@/components/home/HeroSection";
import {Values} from "@/components/home/Values";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Values />
      {/* Other sections like HowItWorks and TAS will go here */}
      <Footer />
    </main>
  );
}