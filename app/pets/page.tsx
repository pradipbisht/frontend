import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Apple,
  GraduationCap,
  Scissors,
  PlayCircle,
  Users,
} from "lucide-react";

export default function PetsPage() {
  const categories = [
    {
      title: "Dogs",
      description: "Complete dog care guide",
      icon: "🐕",
      href: "/pets/dogs",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Cats",
      description: "Feline health & happiness",
      icon: "🐱",
      href: "/pets/cats",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Nutrition",
      description: "Healthy pet diets",
      icon: <Apple className="h-6 w-6" />,
      href: "/pets/nutrition",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Training",
      description: "Behavior & obedience",
      icon: <GraduationCap className="h-6 w-6" />,
      href: "/pets/training",
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Grooming",
      description: "Keep pets clean & healthy",
      icon: <Scissors className="h-6 w-6" />,
      href: "/pets/grooming",
      color: "bg-pink-100 text-pink-600",
    },
  ];

  const highlights = [
    "Vet-approved health tips",
    "Professional training videos",
    "Product reviews & guides",
    "Community support",
  ];

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          🐾 Pet Care Hub
        </h1>
        <p className="text-xl text-muted-foreground">
          Everything you need for happy, healthy pets
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category, idx) => (
          <Card
            key={idx}
            className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-3">
              <div className="flex justify-center mb-2">
                {typeof category.icon === "string" ? (
                  <span className="text-4xl">{category.icon}</span>
                ) : (
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                )}
              </div>
              <CardTitle className="text-lg">{category.title}</CardTitle>
              <p className="text-muted-foreground text-xs">
                {category.description}
              </p>
            </CardHeader>
            <CardContent>
              <Button asChild size="sm" className="w-full">
                <Link href={category.href}>Explore</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interactive Tool Section */}
      <Card>
        <CardHeader className="text-center">
          <Badge className="mx-auto w-fit bg-blue-100 text-blue-700">
            Interactive Tool
          </Badge>
          <CardTitle className="text-2xl">
            Find the Right Food for Your Pet
          </CardTitle>
          <p className="text-muted-foreground">
            Get personalized nutrition recommendations based on your pet's
            breed, age, and health needs
          </p>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">2</div>
              <div className="text-xs text-muted-foreground">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">6</div>
              <div className="text-xs text-muted-foreground">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-xs text-muted-foreground">Personalized</div>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="gap-2 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
            <Link href="/pets/nutrition-quiz">
              <PlayCircle className="h-5 w-5" />
              Start Nutrition Quiz
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
                  <Heart className="h-4 w-4 text-pink-500" />
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Join Our Pet Parent Community 🐶
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Connect with fellow pet parents, share tips, and get expert advice
              from veterinarians.
            </p>
            <Button
              asChild
              className="w-full gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
              <Link href="/community">
                <Users className="h-4 w-4" />
                Join Community
              </Link>
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
