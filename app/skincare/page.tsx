import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Heart,
  Clock,
  Zap,
  Download,
  PlayCircle,
} from "lucide-react";

export default function SkincarePage() {
  const categories = [
    {
      title: "Acne Care",
      description: "Clear skin solutions",
      icon: <Zap className="h-6 w-6" />,
      href: "/skincare/acne-care",
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Glowing Skin",
      description: "Radiance boosting tips",
      icon: <Sparkles className="h-6 w-6" />,
      href: "/skincare/glowing-skin",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Anti-Aging",
      description: "Youthful skin secrets",
      icon: <Clock className="h-6 w-6" />,
      href: "/skincare/anti-aging",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Daily Routines",
      description: "Morning & evening care",
      icon: <Heart className="h-6 w-6" />,
      href: "/skincare/daily-routines",
      color: "bg-pink-100 text-pink-600",
    },
  ];

  const highlights = [
    "Dermatologist-approved articles",
    "Expert product recommendations",
    "Personalized routine builder",
    "Free skincare guides",
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          💆‍♀️ Skincare Hub
        </h1>
        <p className="text-xl text-muted-foreground">
          Expert skincare advice for healthy, glowing skin
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
                  {category.icon}
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
          <Badge className="mx-auto w-fit bg-pink-100 text-pink-700">
            Interactive Tool
          </Badge>
          <CardTitle className="text-2xl">
            Find Your Perfect Skincare Routine
          </CardTitle>
          <p className="text-muted-foreground">
            Take our personalized quiz to discover the ideal skincare routine
            for your skin type
          </p>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">5</div>
              <div className="text-xs text-muted-foreground">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-xs text-muted-foreground">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">100%</div>
              <div className="text-xs text-muted-foreground">Personalized</div>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
            <Link href="/skincare/quiz">
              <PlayCircle className="h-5 w-5" />
              Start Quiz Now
            </Link>
          </Button>
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
                  <Sparkles className="h-4 w-4 text-pink-500" />
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Free Skincare Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Download our comprehensive skincare guide with expert tips,
              product recommendations, and routine templates.
            </p>
            <Button className="w-full gap-2">
              <Download className="h-4 w-4" />
              Download Free Guide
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
