import { Search, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FAQHero() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl font-bold flex items-center justify-center gap-3">
        FAQ Center 🤔
      </h1>
      <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        Find quick answers to common questions about our wellness tools, AI
        recommendations, and platform features. Can't find what you're looking
        for? Our support team is here to help!
      </p>

      {/* Search Bar */}
      <div className="max-w-md mx-auto flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search FAQs..." className="pl-10" />
        </div>
        <Button>Search</Button>
      </div>

      <div className="flex justify-center">
        <div className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-full">
          <MessageCircle className="h-4 w-4" />
          <span className="text-sm font-medium">
            Still need help? Contact support
          </span>
        </div>
      </div>
    </div>
  );
}
