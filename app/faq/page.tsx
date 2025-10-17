import Link from "next/link";
import { Button } from "@/components/ui/button";
import FAQHero from "./components/faq-hero";
import FAQList from "./components/faq-list";

export default function FAQPage() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-8 animate-in fade-in duration-500">
      <FAQHero />
      <FAQList />
      
      <div className="text-center">
        <Button asChild variant="outline">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}