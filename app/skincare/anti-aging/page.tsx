import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, Zap, Heart } from "lucide-react";

export default function AntiAgingPage() {
  const ingredients = [
    {
      name: "Retinol",
      benefit: "Reduces fine lines & wrinkles",
      strength: "Powerful",
      color: "bg-red-100 text-red-600",
    },
    {
      name: "Hyaluronic Acid",
      benefit: "Plumps & hydrates skin",
      strength: "Gentle",
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Peptides",
      benefit: "Firms & strengthens",
      strength: "Moderate",
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Vitamin C",
      benefit: "Brightens & protects",
      strength: "Moderate",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const tips = [
    "Start retinol slowly - 2x per week initially",
    "Always use SPF during the day",
    "Layer from thinnest to thickest consistency",
    "Be patient - results take 6-12 weeks",
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-6 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Clock className="h-8 w-8 text-purple-600" />
          Anti-Aging
        </h1>
        <p className="text-muted-foreground">
          Turn back time with proven ingredients
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {ingredients.map((ingredient, idx) => (
          <Card
            key={idx}
            className="hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{ingredient.name}</CardTitle>
                <Badge className={ingredient.color}>
                  {ingredient.strength}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {ingredient.benefit}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-500" />
            Pro Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {tips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <Heart className="h-4 w-4 text-pink-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle>Age-Defying Routine</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl mb-2">🌅</div>
              <h4 className="font-medium text-sm">Morning</h4>
              <p className="text-xs text-muted-foreground">Vitamin C + SPF</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🌙</div>
              <h4 className="font-medium text-sm">Evening</h4>
              <p className="text-xs text-muted-foreground">
                Retinol + Moisturizer
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">💧</div>
              <h4 className="font-medium text-sm">Weekly</h4>
              <p className="text-xs text-muted-foreground">
                Exfoliation + Mask
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 justify-center">
        <Button asChild>
          <Link href="/skincare/quiz">Build My Anti-Aging Plan</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/skincare">Back to Skincare</Link>
        </Button>
      </div>
    </div>
  );
}
