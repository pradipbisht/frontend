import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, CheckCircle, Clock, Star } from "lucide-react";

export default function AcneCarePage() {
  const tips = [
    {
      title: "Gentle Cleansing",
      description: "Use mild, non-comedogenic cleanser twice daily",
      icon: "🧴",
    },
    {
      title: "Spot Treatment",
      description: "Apply salicylic acid or benzoyl peroxide",
      icon: "🎯",
    },
    {
      title: "Moisturize",
      description: "Don't skip moisturizer, even with oily skin",
      icon: "💧",
    },
    {
      title: "Sun Protection",
      description: "Use broad-spectrum SPF 30+ daily",
      icon: "☀️",
    },
  ];

  const products = [
    { name: "CeraVe Foaming Cleanser", type: "Cleanser", rating: 4.5 },
    { name: "The Ordinary Niacinamide", type: "Serum", rating: 4.3 },
    { name: "Neutrogena Benzoyl Peroxide", type: "Treatment", rating: 4.2 },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-6 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Zap className="h-8 w-8 text-red-600" />
          Acne Care
        </h1>
        <p className="text-muted-foreground">
          Clear skin solutions that actually work
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tips.map((tip, idx) => (
          <Card
            key={idx}
            className="hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{tip.icon}</span>
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{tip.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Recommended Products
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {product.type}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < product.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 justify-center">
        <Button asChild>
          <Link href="/skincare/quiz">Find My Routine</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/skincare">Back to Skincare</Link>
        </Button>
      </div>
    </div>
  );
}
