import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Award, BookOpen } from "lucide-react";

export default function SelfImprovementPage() {
  const features = [
    {
      title: "Habit Tracker",
      description: "Build consistent daily habits",
      icon: <Target className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Goal Setting",
      description: "Set and track your goals",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Progress Reports",
      description: "Monitor your improvement",
      icon: <Award className="h-6 w-6" />,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const tips = [
    "Start with small habits",
    "Be consistent daily",
    "Track your progress",
    "Celebrate small wins",
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-6 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Target className="h-8 w-8 text-orange-600" />
          Self-Improvement
        </h1>
        <p className="text-muted-foreground">
          Build better habits and achieve your goals
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {features.map((feature, idx) => (
          <Card
            key={idx}
            className="hover:shadow-md transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-3">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${feature.color}`}>
                {feature.icon}
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                {feature.description}
              </p>
              <Button size="sm" className="w-full">
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Quick Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-2">
            {tips.map((tip, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                {tip}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button asChild className="bg-orange-600 hover:bg-orange-700">
          <Link href="/health-lifestyle">Back to Health Hub</Link>
        </Button>
      </div>
    </div>
  );
}
