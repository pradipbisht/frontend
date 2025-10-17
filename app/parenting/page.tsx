import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Baby,
  Apple,
  Moon,
  BookOpen,
  PlayCircle,
  Calendar,
} from "lucide-react";

export default function ParentingPage() {
  const categories = [
    {
      title: "Baby Nutrition",
      description: "Feeding guides & recipes",
      icon: <Apple className="h-6 w-6" />,
      href: "/parenting/baby-nutrition",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Baby Skincare",
      description: "Gentle care for sensitive skin",
      icon: "🧴",
      href: "/parenting/baby-skincare",
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "Sleep Tips",
      description: "Better sleep for baby & parents",
      icon: <Moon className="h-6 w-6" />,
      href: "/parenting/sleep-tips",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "New Parent Guide",
      description: "Essential parenting basics",
      icon: <BookOpen className="h-6 w-6" />,
      href: "/parenting/new-parent-guide",
      color: "bg-blue-100 text-blue-600",
    },
  ];

  const highlights = [
    "Trusted pediatrician advice",
    "Evidence-based parenting tips",
    "Expert-reviewed content",
    "Weekly development guides",
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          👶 Newborn & Parenting
        </h1>
        <p className="text-xl text-muted-foreground">
          Expert guidance for new parents and growing families
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((category, idx) => (
          <Card
            key={idx}
            className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-lg ${category.color}`}>
                  {typeof category.icon === "string" ? (
                    <span className="text-xl">{category.icon}</span>
                  ) : (
                    category.icon
                  )}
                </div>
                <div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href={category.href}>Explore {category.title}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interactive Tool Section */}
      <Card>
        <CardHeader className="text-center">
          <Badge className="mx-auto w-fit bg-blue-100 text-blue-700">
            Interactive Tools
          </Badge>
          <CardTitle className="text-2xl">
            Baby Growth Tracker & Parent Checklist
          </CardTitle>
          <p className="text-muted-foreground">
            Monitor your baby's development milestones and get personalized
            parenting guidance
          </p>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-card rounded-lg border border-border">
              <Baby className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-medium">Baby Growth Tracker</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Track milestones & development
              </p>
              <Button asChild size="sm" className="w-full">
                <Link href="/parenting/growth-tracker">
                  <PlayCircle className="h-4 w-4 mr-1" />
                  Start Tracking
                </Link>
              </Button>
            </div>

            <div className="p-4 bg-card rounded-lg border border-border">
              <BookOpen className="h-8 w-8 text-pink-600 mx-auto mb-2" />
              <h3 className="font-medium">New Parent Checklist</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Essential tasks & preparations
              </p>
              <Button asChild size="sm" variant="outline" className="w-full">
                <Link href="/parenting/parent-checklist">
                  <PlayCircle className="h-4 w-4 mr-1" />
                  Get Checklist
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features & CTA */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>What You'll Get</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <Baby className="h-4 w-4 text-blue-500" />
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Get Your Weekly Baby Care Plan 👶
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Receive personalized weekly care plans with age-appropriate
              activities, nutrition tips, and development milestones.
            </p>
            <Button className="w-full gap-2 bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700">
              <Calendar className="h-4 w-4" />
              Get My Weekly Plan
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Back Button */}
      <div className="text-center">
        <Button asChild variant="outline">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
