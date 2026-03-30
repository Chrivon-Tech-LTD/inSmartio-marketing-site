import { AboutHero } from "@/components/about/AboutHero";
import { StoryAndPillars } from "@/components/about/StoriesAndPillars";
import { Leadership } from "@/components/about/Leadership";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About HelpMe NG – Our Story, Values, and Team",
  description: "Learn about HelpMe NG's mission to build Nigeria's most trusted service marketplace. Our story, values, and team.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <StoryAndPillars />
      <Leadership />

      {/* CTA Section from 3rd Image */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white shadow-ambient">
          <h2 className="text-white mb-6">Ready to experience the Chrivon standard?</h2>
          <p className="text-white/80 mb-10 max-w-lg mx-auto">Join thousands of Nigerians who trust HelpMe NG for their professional service needs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg">Find a Professional</Button>
            <Button variant="outline" size="lg" className="border-white! text-white! hover:bg-white! hover:text-primary!">Join as an Expert</Button>
          </div>
        </div>
      </section>
    </main>
  );
}