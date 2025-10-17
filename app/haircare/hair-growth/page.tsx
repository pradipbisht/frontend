import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Droplets, Clock, Zap } from "lucide-react";

export default function HairGrowthPage() {
  const tips = [
    {
      title: "Scalp Massage",
      description: "5 minutes daily to boost circulation",
      icon: "💆‍♀️",
    },
    {
      title: "Protein Foods",
      description: "Eggs, fish, nuts for strong strands",
      icon: "🥚",
    },
    {
      title: "Stay Hydrated",
      description: "8 glasses water daily for healthy follicles",
      icon: "💧",
    },
    {
      title: "Trim Regularly",
      description: "Every 6-8 weeks to prevent breakage",
      icon: "✂️",
    },
  ];

  const supplements = [
    {
      name: "Biotin",
      benefit: "Strengthens hair structure",
      dosage: "2.5mg daily",
    },
    { name: "Iron", benefit: "Prevents hair loss", dosage: "18mg daily" },
    {
      name: "Vitamin D",
      benefit: "Supports follicle health",
      dosage: "1000 IU daily",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-6 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <TrendingUp className="h-8 w-8 text-green-600" />
          Hair Growth
        </h1>
        <p className="text-muted-foreground">
          Natural ways to boost hair growth
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {tips.map((tip, idx) => (
          <Card
            key={idx}
            className="hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{tip.icon}</span>
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{tip.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-orange-500" />
            Hair Growth Supplements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {supplements.map((supplement, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">{supplement.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {supplement.benefit}
                  </p>
                </div>
                <Badge variant="outline">{supplement.dosage}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 justify-center">
        <Button asChild>
          <Link href="/haircare/hair-type-quiz">Find My Hair Type</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/haircare">Back to Haircare</Link>
        </Button>
      </div>
    </div>
  );
}
