import Link from "next/link";
import { Button } from "@/components/ui/button";
import AboutHero from "./components/about-hero";
import AboutVisionStory from "./components/about-vision-story";
import AboutValues from "./components/about-values";
import AboutTeam from "./components/about-team";
import AboutMilestones from "./components/about-milestones";
import AboutCTA from "./components/about-cta";
import AboutBentoGrid from "./components/about-bento-grid";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 space-y-12 animate-in fade-in duration-500">
      <AboutHero />

      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">
          Why Choose WellnessHub?
        </h2>
        <AboutBentoGrid />
      </div>

      <AboutVisionStory />
      <AboutValues />
      <AboutTeam />
      <AboutMilestones />
      <AboutCTA />

      <div className="text-center">
        <Button asChild variant="outline">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
