import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BlogHero() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl font-bold flex items-center justify-center gap-3">
        Wellness Blog 📚
      </h1>
      <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        Expert insights, science-backed tips, and inspiring stories to support
        your wellness journey. From skincare secrets to parenting wisdom,
        discover content that matters to you.
      </p>

      {/* Search Bar */}
      <div className="max-w-md mx-auto flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search articles..." className="pl-10" />
        </div>
        <Button>Search</Button>
      </div>
    </div>
  );
}
