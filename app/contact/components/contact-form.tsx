import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Contact Form */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Send className="h-6 w-6 text-primary" />
            Send us a Message
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="How can we help you?" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-3 rounded-md border border-border bg-background"
              placeholder="Tell us about your wellness journey or questions..."
            />
          </div>
          <Button size="lg" className="w-full gap-2">
            <Send className="h-4 w-4" />
            Send Message
          </Button>
        </CardContent>
      </Card>

      {/* FAQ Quick Links */}
      <Card className="bg-secondary/5 border-secondary/20">
        <CardHeader>
          <CardTitle className="text-2xl">Quick Answers</CardTitle>
          <p className="text-muted-foreground">
            Check out our most frequently asked questions
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Badge
              variant="outline"
              className="w-full justify-start p-3 hover:bg-primary/10 cursor-pointer">
              How do I get personalized recommendations?
            </Badge>
            <Badge
              variant="outline"
              className="w-full justify-start p-3 hover:bg-primary/10 cursor-pointer">
              Is my health data secure?
            </Badge>
            <Badge
              variant="outline"
              className="w-full justify-start p-3 hover:bg-primary/10 cursor-pointer">
              Can I speak with a wellness expert?
            </Badge>
            <Badge
              variant="outline"
              className="w-full justify-start p-3 hover:bg-primary/10 cursor-pointer">
              How accurate are the AI recommendations?
            </Badge>
            <Badge
              variant="outline"
              className="w-full justify-start p-3 hover:bg-primary/10 cursor-pointer">
              Do you offer refunds for premium features?
            </Badge>
          </div>
          <Button variant="outline" className="w-full">
            View All FAQs
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
