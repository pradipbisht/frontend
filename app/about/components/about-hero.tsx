import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl font-bold flex items-center justify-center gap-3">
        About WellnessHub 💫
      </h1>
      <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        We believe everyone deserves access to personalized, science-backed
        wellness guidance. Our mission is to make healthy living simple,
        accessible, and tailored to your unique needs through AI-powered tools
        and expert knowledge.
      </p>
      <div className="flex justify-center gap-4">
        <Button asChild size="lg" className="gap-2">
          <Link href="/tools">
            Explore Tools
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/community">Join Community</Link>
        </Button>
      </div>
    </div>
  );
}
