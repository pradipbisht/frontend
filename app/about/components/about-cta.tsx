import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function AboutCTA() {
  return (
    <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl">Get in Touch</CardTitle>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Questions, feedback, or collaboration opportunities? We'd love to hear
          from you and help you on your wellness journey.
        </p>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link href="/contact">
              <Mail className="h-4 w-4" />
              Contact Us
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/community">Join Community</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
