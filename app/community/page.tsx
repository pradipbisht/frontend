import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  MessageCircle,
  Heart,
  Star,
  Award,
  Calendar,
  TrendingUp,
  Share2,
} from "lucide-react";

export default function CommunityPage() {
  const communityFeatures = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Expert Q&A",
      description: "Get answers from certified professionals",
      count: "500+ daily answers",
      color: "bg-pastel-mint border-pastel-mint",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Support Groups",
      description: "Connect with people facing similar challenges",
      count: "50+ active groups",
      color: "bg-pastel-peach border-pastel-peach",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Success Stories",
      description: "Share and celebrate wellness journeys",
      count: "1000+ stories",
      color: "bg-pastel-lavender border-pastel-lavender",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Challenges",
      description: "Join community wellness challenges",
      count: "New weekly challenges",
      color: "bg-pastel-blue border-pastel-blue",
    },
  ];

  const trendingTopics = [
    { title: "Winter Skincare Routine", replies: 47, category: "Skincare" },
    { title: "Best Dog Food for Allergies", replies: 32, category: "Pets" },
    { title: "Baby Sleep Training Tips", replies: 28, category: "Parenting" },
    { title: "Hair Growth Natural Methods", replies: 25, category: "Haircare" },
  ];

  const experts = [
    {
      name: "Dr. Sarah Chen",
      specialty: "Dermatologist",
      avatar: "👩‍⚕️",
      responses: 234,
      rating: 4.9,
    },
    {
      name: "Dr. Mike Rodriguez",
      specialty: "Veterinarian",
      avatar: "👨‍⚕️",
      responses: 189,
      rating: 4.8,
    },
    {
      name: "Lisa Johnson",
      specialty: "Pediatric Nurse",
      avatar: "👩‍⚕️",
      responses: 156,
      rating: 4.9,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          <Users className="h-10 w-10" />
          Wellness Community
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Connect with thousands of wellness enthusiasts, get expert advice, and
          share your journey with a supportive community.
        </p>
      </div>

      {/* Community Stats */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">25,000+</div>
              <p className="text-sm text-muted-foreground">Active Members</p>
            </div>
            <div>
              <div className="text-2xl font-bold">50+</div>
              <p className="text-sm text-muted-foreground">Expert Advisors</p>
            </div>
            <div>
              <div className="text-2xl font-bold">1,500</div>
              <p className="text-sm text-muted-foreground">Daily Messages</p>
            </div>
            <div>
              <div className="text-2xl font-bold">4.8★</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Community Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center">
          Join Our Thriving Community
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {communityFeatures.map((feature, idx) => (
            <Card
              key={idx}
              className={`text-center ${feature.color} hover:scale-105 transition-transform`}>
              <CardHeader>
                <div className="flex justify-center text-foreground mb-2">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
                <Badge variant="secondary" className="text-xs">
                  {feature.count}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Trending Topics */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Trending Discussions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {trendingTopics.map((topic, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-background/50 border border-border rounded-lg hover:bg-accent/50 cursor-pointer transition-colors">
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{topic.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {topic.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {topic.replies} replies
                    </span>
                  </div>
                </div>
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
              </div>
            ))}
            <Button className="w-full" variant="outline">
              View All Discussions
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Award className="h-5 w-5" />
              Top Experts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {experts.map((expert, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 bg-background/50 border border-border rounded-lg">
                <div className="text-2xl">{expert.avatar}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{expert.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {expert.specialty}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs">{expert.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {expert.responses} responses
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <Button className="w-full" variant="outline">
              Meet All Experts
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Community Guidelines */}
      <Card className="bg-pastel-pink border-pastel-pink">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Community Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-sm">✅ Please Do</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Be respectful and supportive</li>
                <li>• Share evidence-based information</li>
                <li>• Ask questions and seek help</li>
                <li>• Celebrate others' achievements</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-sm">❌ Please Don't</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Give unqualified medical advice</li>
                <li>• Share personal medical information</li>
                <li>• Promote unverified products</li>
                <li>• Use inappropriate language</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-pastel-peach to-pastel-lavender border-pastel-peach">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Ready to Join?</CardTitle>
          <p className="text-muted-foreground">
            Create your free account and start connecting with our wellness
            community today!
          </p>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="flex justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Users className="h-5 w-5" />
              Join Community
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Calendar className="h-5 w-5" />
              Browse Events
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Free forever • No spam • Expert moderation
          </p>
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
