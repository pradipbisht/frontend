import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlogHero from "./components/blog-hero";
import BlogCategories from "./components/blog-categories";
import BlogFeatured from "./components/blog-featured";

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-8 animate-in fade-in duration-500">
      <BlogHero />
      <BlogCategories />
      <BlogFeatured />
      
      <div className="text-center">
        <Button asChild variant="outline">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}