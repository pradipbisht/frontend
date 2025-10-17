"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Dumbbell,
  Apple,
  Brain,
  Target,
  Calculator,
  CalendarDays,
  TrendingUp,
  Users,
} from "lucide-react";

export default function HealthOverview() {
  const categories = [
    {
      title: "Fitness",
      description: "Workouts, routines, and tracking",
      icon: <Dumbbell className="h-8 w-8" />,
      href: "/health-lifestyle/fitness",
      color: "bg-blue-500",
      stats: "15 workouts this month",
    },
    {
      title: "Diet",
      description: "Meal plans, nutrition guides, and recipes",
      icon: <Apple className="h-8 w-8" />,
      href: "/health-lifestyle/diet",
      color: "bg-green-500",
      stats: "1,847 calories today",
    },
    {
      title: "Mindfulness",
      description: "Meditation, breathing exercises, and sleep tips",
      icon: <Brain className="h-8 w-8" />,
      href: "/health-lifestyle/mindfulness",
      color: "bg-purple-500",
      stats: "12 min meditation",
    },
    {
      title: "Self-Improvement",
      description: "Habits, goals, and productivity advice",
      icon: <Target className="h-8 w-8" />,
      href: "/health-lifestyle/self-improvement",
      color: "bg-orange-500",
      stats: "3/5 goals completed",
    },
  ];

  const tools = [
    {
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index",
      icon: <Calculator className="h-5 w-5" />,
      href: "/health-lifestyle/tools/bmi",
      available: true,
    },
    {
      title: "Meal Planner",
      description: "Plan your weekly meals",
      icon: <CalendarDays className="h-5 w-5" />,
      href: "/health-lifestyle/tools/meal-planner",
      available: false,
    },
  ];

  return (
    <main className="max-w-6xl mx-auto py-12 px-4 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          🧘 Health & Lifestyle
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Transform your life with personalized fitness, nutrition, mindfulness,
          and self-improvement tools
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <Badge variant="secondary" className="gap-2">
            <Users className="h-4 w-4" />
            10,000+ active users
          </Badge>
          <Badge variant="secondary" className="gap-2">
            <TrendingUp className="h-4 w-4" />
            95% success rate
          </Badge>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link key={category.title} href={category.href}>
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg text-white ${category.color}`}>
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {category.stats}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{category.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Your Progress This Week</CardTitle>
          <CardDescription>Keep up the momentum!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Workout Goals</span>
              <span>4/5 days</span>
            </div>
            <Progress value={80} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Nutrition Tracking</span>
              <span>6/7 days</span>
            </div>
            <Progress value={86} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Mindfulness Practice</span>
              <span>5/7 days</span>
            </div>
            <Progress value={71} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Interactive Tools */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Tools</CardTitle>
          <CardDescription>
            Powerful tools to support your journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="flex-shrink-0 p-2 bg-muted rounded-lg">
                  {tool.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{tool.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
                {tool.available ? (
                  <Button asChild size="sm">
                    <Link href={tool.href}>Try Now</Link>
                  </Button>
                ) : (
                  <Badge variant="outline">Coming Soon</Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card>
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">
            Start your fitness journey today 💪
          </h3>
          <p className="text-muted-foreground mb-6">
            Small daily steps add up to big transformations. Join thousands
            who've already started.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/health-lifestyle/fitness">Start Workout</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/health-lifestyle/tools/bmi">Check BMI</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
