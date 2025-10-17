import { Mail, MessageCircle } from "lucide-react";

export default function ContactHero() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl font-bold flex items-center justify-center gap-3">
        Get in Touch 💬
      </h1>
      <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        Have questions about your wellness journey? Need personalized advice?
        Want to collaborate with us? We're here to help and would love to hear
        from you.
      </p>
      <div className="flex justify-center gap-4">
        <div className="flex items-center gap-2 text-primary">
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm font-medium">Live Chat Available</span>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <Mail className="h-5 w-5" />
          <span className="text-sm font-medium">24h Response Time</span>
        </div>
      </div>
    </div>
  );
}
