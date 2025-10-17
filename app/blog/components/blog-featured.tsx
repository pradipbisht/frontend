import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Eye, TrendingUp } from "lucide-react";

const featuredArticles = [
  {
    id: 1,
    title: "10 Science-Backed Ways to Boost Your Immune System",
    excerpt:
      "Discover proven methods to strengthen your immune system naturally with expert-approved tips and lifestyle changes.",
    category: "Health & Wellness",
    readTime: "8 min read",
    views: "12.5K",
    date: "Oct 15, 2025",
    image: "💊",
    trending: true,
  },
  {
    id: 2,
    title: "The Complete Guide to Glass Skin: Korean Skincare Secrets",
    excerpt:
      "Achieve radiant, poreless skin with this step-by-step guide to the Korean glass skin routine.",
    category: "Skincare",
    readTime: "12 min read",
    views: "8.9K",
    date: "Oct 12, 2025",
    image: "✨",
    trending: false,
  },
  {
    id: 3,
    title: "Natural Hair Growth: Myths vs. Science",
    excerpt:
      "Separating fact from fiction in hair care with dermatologist-approved growth strategies.",
    category: "Haircare",
    readTime: "6 min read",
    views: "5.2K",
    date: "Oct 10, 2025",
    image: "🌿",
    trending: true,
  },
];

export default function BlogFeatured() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Featured Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredArticles.map((article) => (
          <Card
            key={article.id}
            className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="text-4xl">{article.image}</div>
                {article.trending && (
                  <Badge className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                )}
              </div>
              <CardTitle className="text-lg line-clamp-2">
                {article.title}
              </CardTitle>
              <Badge variant="outline" className="w-fit">
                {article.category}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  {article.views}
                </div>
              </div>
              <Button asChild size="sm" className="w-full">
                <Link href={`/blog/${article.id}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
