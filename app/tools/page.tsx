import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Brain,
  Sparkles,
  Bot,
  Zap,
  Mail,
  PlayCircle,
  Star,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Palette,
  Scissors,
  Heart,
  Baby,
} from "lucide-react";

export default function ToolsPage() {
  const aiTools = [
    {
      title: "AI Skincare Routine Builder",
      description:
        "Get personalized skincare routines based on your skin type, concerns, and budget",
      features: ["Skin analysis", "Product recommendations", "Custom schedule"],
      href: "/tools/skincare-builder",
      icon: <Palette className="h-6 w-6" />,
      badge: "Most Popular",
      badgeVariant: "default" as const,
    },
    {
      title: "Hair Type Analyzer",
      description:
        "Advanced hair analysis with personalized care recommendations and styling tips",
      features: [
        "Hair texture analysis",
        "Product matching",
        "Style suggestions",
      ],
      href: "/tools/hair-analyzer",
      icon: <Scissors className="h-6 w-6" />,
      badge: "New",
      badgeVariant: "secondary" as const,
    },
    {
      title: "Pet Food Recommender",
      description:
        "Find the perfect nutrition plan for your pet based on breed, age, and health needs",
      features: [
        "Breed-specific nutrition",
        "Health considerations",
        "Budget options",
      ],
      href: "/tools/pet-food-recommender",
      icon: <Heart className="h-6 w-6" />,
      badge: "Vet Approved",
      badgeVariant: "outline" as const,
    },
    {
      title: "Baby Milestone Tracker",
      description:
        "Track your baby's development with AI-powered insights and recommendations",
      features: ["Milestone tracking", "Development tips", "Health insights"],
      href: "/tools/baby-tracker",
      icon: <Baby className="h-6 w-6" />,
      badge: "Expert Designed",
      badgeVariant: "destructive" as const,
    },
  ];

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Smart Analysis",
      description: "AI-powered analysis for personalized recommendations",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Results",
      description: "Get recommendations in under 60 seconds",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Continuous Learning",
      description: "Tools improve based on user feedback and data",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-12">
      {/* Header */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="space-y-2">
          <Badge variant="outline" className="mb-4">
            <Brain className="h-3 w-3 mr-1" />
            AI-Powered Platform
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">
            Interactive Tools & AI Features
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Smart, personalized tools that make wellness recommendations feel
            like magic
          </p>
        </div>
      </div>

      {/* Features Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <Card
            key={idx}
            className="text-center border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="space-y-4">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="text-primary">{feature.icon}</div>
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Tools Grid */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8 text-primary" />
            AI-Powered Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our advanced AI tools provide personalized recommendations based on
            your unique needs and preferences.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {aiTools.map((tool, idx) => (
            <Card
              key={idx}
              className="group hover:shadow-lg transition-all duration-300 border-2">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant={tool.badgeVariant} className="w-fit">
                    {tool.badge}
                  </Badge>
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {tool.icon}
                  </div>
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">{tool.title}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Separator />
                <div className="space-y-3">
                  <p className="font-semibold text-sm">Key Features:</p>
                  {tool.features.map((feature, featureIdx) => (
                    <div
                      key={featureIdx}
                      className="flex items-center gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Separator />
                <Button asChild className="w-full" size="lg">
                  <Link href={tool.href} className="flex items-center gap-2">
                    <PlayCircle className="h-4 w-4" />
                    Try This Tool
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardHeader className="text-center space-y-4">
          <Badge variant="outline" className="mx-auto w-fit">
            <Mail className="h-3 w-3 mr-1" />
            Personalized Content
          </Badge>
          <div>
            <CardTitle className="text-2xl mb-2">
              Personalized Newsletter
            </CardTitle>
            <p className="text-muted-foreground">
              Auto-curated topics based on your interests and tool usage
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-dashed">
              <CardContent className="p-4 text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="font-semibold text-sm mb-1">Weekly Insights</p>
                <p className="text-xs text-muted-foreground">
                  Personalized tips based on your profile
                </p>
              </CardContent>
            </Card>
            <Card className="border-dashed">
              <CardContent className="p-4 text-center">
                <Sparkles className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="font-semibold text-sm mb-1">Product Updates</p>
                <p className="text-xs text-muted-foreground">
                  New tools and features first
                </p>
              </CardContent>
            </Card>
            <Card className="border-dashed">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="font-semibold text-sm mb-1">Expert Content</p>
                <p className="text-xs text-muted-foreground">
                  Curated articles for your interests
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button size="lg" className="gap-2">
              <Mail className="h-5 w-5" />
              Get Personalized Newsletter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Coming Soon */}
      <Card className="border-2 border-dashed border-muted-foreground/20">
        <CardHeader className="text-center space-y-4">
          <Badge variant="secondary" className="mx-auto w-fit">
            <Sparkles className="h-3 w-3 mr-1" />
            Coming Soon
          </Badge>
          <div>
            <CardTitle className="text-2xl mb-2">Future AI Tools</CardTitle>
            <p className="text-muted-foreground">
              More powerful wellness tools in development
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Brain className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">AI Meditation Guide</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Smart Meal Planner</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">
                Sleep Optimization Tool
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">
                Fitness Plan Generator
              </span>
            </div>
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" className="gap-2">
              <Sparkles className="h-5 w-5" />
              Join Waitlist
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Back Button */}
      <div className="text-center">
        <Button asChild variant="outline">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
