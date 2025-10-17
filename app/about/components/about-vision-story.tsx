import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";

export default function AboutVisionStory() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            Our Vision
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            To create a world where personalized wellness guidance is accessible
            to everyone, regardless of their background or budget. We envision a
            future where AI and human expertise work together to help people
            make better health decisions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Starting with skincare, haircare, pet care, and parenting - we're
            building tools that truly understand your unique needs and provide
            actionable, expert-backed recommendations.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-secondary/5 border-secondary/20">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-secondary-foreground" />
            Our Story
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Founded in 2024 by a team of wellness enthusiasts, doctors, and tech
            innovators who were frustrated by generic, one-size-fits-all health
            advice available online.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We started with a simple question: "What if wellness recommendations
            could be as personalized as your Netflix suggestions?" This led us
            to develop AI-powered tools that consider your unique circumstances,
            preferences, and goals.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
