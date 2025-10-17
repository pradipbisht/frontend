import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Award, Sparkles } from "lucide-react";

const values = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Wellness First",
    description:
      "Every recommendation is backed by science and expert approval",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community Driven",
    description:
      "Built by real people for real people with genuine wellness needs",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Expert Approved",
    description: "Content reviewed by certified professionals in each field",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Innovation Focus",
    description: "Constantly improving with AI and user feedback",
  },
];

export default function AboutValues() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Our Core Values</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {values.map((value, idx) => (
          <Card
            key={idx}
            className="text-center bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex justify-center text-primary mb-2">
                {value.icon}
              </div>
              <CardTitle className="text-lg">{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
