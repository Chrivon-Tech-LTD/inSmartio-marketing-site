import { AboutHero } from "@/components/about/AboutHero";
import { StoryAndPillars } from "@/components/about/StoriesAndPillars";
import { Leadership } from "@/components/about/Leadership";
import { Metadata } from "next";
import { OurImpact } from "@/components/about/OurImpact";

export const metadata: Metadata = {
  title: "About HelpMe NG – Our Story, Values, and Team",
  description: "Learn about HelpMe NG's mission to build Nigeria's most trusted service marketplace. Our story, values, and team.",
};

export default function AboutPage() {
  return (
    <main >
      <AboutHero />
      <StoryAndPillars />
      <Leadership />
      <OurImpact/>
    </main>
  );
}