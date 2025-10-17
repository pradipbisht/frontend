import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Scissors,
  TrendingUp,
  Zap,
  Heart,
  PlayCircle,
  Users,
} from "lucide-react";

export default function HaircarePage() {
  const categories = [
    {
      title: "Hair Growth",
      description: "Boost growth naturally",
      icon: <TrendingUp className="h-6 w-6" />,
      href: "/haircare/hair-growth",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Styling",
      description: "Perfect styles & techniques",
      icon: <Scissors className="h-6 w-6" />,
      href: "/haircare/styling",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Hairfall",
      description: "Prevent & treat hair loss",
      icon: <Zap className="h-6 w-6" />,
      href: "/haircare/hairfall",
      color: "bg-red-100 text-red-600",
    },
    {
      title: "DIY Treatments",
      description: "Natural home remedies",
      icon: <Heart className="h-6 w-6" />,
      href: "/haircare/diy-treatments",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const highlights = [
    "Expert hair care tips",
    "Professional styling guides",
    "Natural treatment recipes",
    "Personalized hair routines",
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          💇 Haircare Hub
        </h1>
        <p className="text-xl text-muted-foreground">
          Professional tips for healthy, beautiful hair
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
          <Badge className="mx-auto w-fit bg-purple-100 text-purple-700">
            Interactive Tool
          </Badge>
          <CardTitle className="text-2xl">Identify Your Hair Type</CardTitle>
          <p className="text-muted-foreground">
            Take our quick quiz to discover your hair type and get personalized
            care recommendations
          </p>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">3</div>
              <div className="text-xs text-muted-foreground">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">8</div>
              <div className="text-xs text-muted-foreground">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-xs text-muted-foreground">Personalized</div>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            <Link href="/haircare/hair-type-quiz">
              <PlayCircle className="h-5 w-5" />
              Start Hair Type Quiz
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
                  <Scissors className="h-4 w-4 text-purple-500" />
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Your Personalized Hair Routine
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Get a customized hair care routine based on your hair type,
              concerns, and lifestyle.
            </p>
            <Button className="w-full gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Heart className="h-4 w-4" />
              See Your Personalized Hair Routine
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
