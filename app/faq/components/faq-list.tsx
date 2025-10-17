import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

const popularFAQs = [
  {
    question: "How accurate are the AI recommendations?",
    answer:
      "Our AI recommendations are built on peer-reviewed research and validated by certified professionals. We achieve 85-90% accuracy in initial assessments, with continuous learning improving personalization over time.",
    category: "General",
  },
  {
    question: "Is my personal health data secure?",
    answer:
      "Yes, we use enterprise-grade encryption and comply with HIPAA standards. Your data is never sold to third parties and you maintain full control over your information.",
    category: "Technical",
  },
  {
    question: "How much do premium features cost?",
    answer:
      "Our premium plans start at $9.99/month and include unlimited assessments, expert consultations, and personalized tracking. We offer a 14-day free trial.",
    category: "General",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely! You can cancel your subscription at any time from your account settings. You'll retain access to premium features until your current billing period ends.",
    category: "General",
  },
  {
    question: "Do you offer consultations with real experts?",
    answer:
      "Yes, premium members get access to certified dermatologists, nutritionists, pediatricians, and other wellness experts via chat or video calls.",
    category: "General",
  },
  {
    question: "How do I get started with skincare recommendations?",
    answer:
      "Simply take our 5-minute skincare quiz. Our AI analyzes your skin type, concerns, lifestyle, and preferences to create a personalized routine.",
    category: "Skincare",
  },
];

export default function FAQList() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Popular Questions</h2>
      <div className="space-y-4">
        {popularFAQs.map((faq, index) => (
          <Card
            key={index}
            className="bg-card border-border hover:shadow-md transition-all">
            <CardContent className="p-6">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-start gap-3 flex-1">
                    <Badge variant="outline" className="shrink-0 text-xs">
                      {faq.category}
                    </Badge>
                    <h3 className="font-semibold text-left">{faq.question}</h3>
                  </div>
                  <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
