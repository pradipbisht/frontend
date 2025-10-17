import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  Award,
  Sparkles,
  Baby,
  PawPrint,
  Dumbbell,
  Shield,
  TrendingUp,
  Target,
  Globe,
  CheckCircle,
  Star,
  Brain,
  Zap,
  Clock,
} from "lucide-react";

export default function AboutBentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {/* Main Mission - Large Card */}
      <Card className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg font-medium">
            Democratizing personalized wellness through AI-powered tools and
            expert guidance.
          </p>
          <p className="text-muted-foreground">
            We believe everyone deserves access to personalized, science-backed
            wellness guidance. Our platform combines cutting-edge AI with expert
            knowledge to deliver tailored recommendations for your unique needs.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="gap-1">
              <Brain className="h-3 w-3" />
              AI-Powered
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Award className="h-3 w-3" />
              Expert-Backed
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Users className="h-3 w-3" />
              Community-Driven
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Stats Card */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            Impact
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">50K+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">100K+</div>
            <div className="text-sm text-muted-foreground">Plans Created</div>
          </div>
        </CardContent>
      </Card>

      {/* Expertise Areas */}
      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-600" />
            Expertise
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-1">
              <Heart className="h-3 w-3 text-pink-500" />
              <span>Skincare</span>
            </div>
            <div className="flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-purple-500" />
              <span>Haircare</span>
            </div>
            <div className="flex items-center gap-1">
              <PawPrint className="h-3 w-3 text-orange-500" />
              <span>Pet Care</span>
            </div>
            <div className="flex items-center gap-1">
              <Baby className="h-3 w-3 text-blue-500" />
              <span>Parenting</span>
            </div>
            <div className="flex items-center gap-1">
              <Dumbbell className="h-3 w-3 text-green-500" />
              <span>Fitness</span>
            </div>
            <div className="flex items-center gap-1">
              <Brain className="h-3 w-3 text-indigo-500" />
              <span>Mental Health</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trust & Security */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Shield className="h-5 w-5 text-purple-600" />
            Trust
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Expert Verified</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Privacy First</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Science-Based</span>
          </div>
        </CardContent>
      </Card>

      {/* Innovation Focus */}
      <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20 border-orange-200 dark:border-orange-800">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Zap className="h-5 w-5 text-orange-600" />
            Innovation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Constantly evolving with latest AI research and user feedback.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-orange-500" />
            <span>24/7 Learning</span>
          </div>
        </CardContent>
      </Card>

      {/* Global Reach */}
      <Card className="lg:col-span-2 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Globe className="h-6 w-6 text-indigo-600" />
            Global Community
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Serving users across 50+ countries with localized recommendations
            and culturally-aware wellness guidance.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-indigo-600">50+</div>
              <div className="text-xs text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600">200+</div>
              <div className="text-xs text-muted-foreground">Experts</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600">15+</div>
              <div className="text-xs text-muted-foreground">Languages</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recognition */}
      <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border-yellow-200 dark:border-yellow-800">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-600" />
            Recognition
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">4.9/5</div>
            <div className="text-sm text-muted-foreground">User Rating</div>
          </div>
          <Badge variant="secondary" className="w-full justify-center">
            Top Wellness App 2025
          </Badge>
        </CardContent>
      </Card>

      {/* Future Vision */}
      <Card className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-950/20 dark:to-green-950/20 border-teal-200 dark:border-teal-800">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Target className="h-5 w-5 text-teal-600" />
            Vision 2026
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Expanding to nutrition, mental health, and preventive healthcare.
          </p>
          <Button size="sm" variant="outline" className="w-full">
            Join the Journey
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
