import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Droplets, Sun, Moon } from "lucide-react";

export default function GlowingSkinPage() {
  const secrets = [
    {
      title: "Hydration",
      description: "Drink 8 glasses of water daily",
      icon: <Droplets className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "Exfoliation",
      description: "Gentle exfoliation 2-3 times weekly",
      icon: <Sparkles className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Vitamin C",
      description: "Morning antioxidant serum",
      icon: <Sun className="h-6 w-6 text-orange-500" />,
    },
    {
      title: "Sleep",
      description: "7-8 hours for skin repair",
      icon: <Moon className="h-6 w-6 text-purple-500" />,
    },
  ];

  const routine = [
    {
      time: "Morning",
      steps: ["Cleanser", "Vitamin C Serum", "Moisturizer", "SPF"],
    },
    {
      time: "Evening",
      steps: ["Cleanser", "Retinol/AHA", "Hydrating Serum", "Night Cream"],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-6 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Sparkles className="h-8 w-8 text-yellow-600" />
          Glowing Skin
        </h1>
        <p className="text-muted-foreground">Unlock your natural radiance</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {secrets.map((secret, idx) => (
          <Card
            key={idx}
            className="hover:shadow-md transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                {secret.icon}
                <CardTitle className="text-lg">{secret.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {secret.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {routine.map((period, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="text-xl">{period.time} Routine</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {period.steps.map((step, stepIdx) => (
                  <div key={stepIdx} className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-medium">
                      {stepIdx + 1}
                    </div>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-4 justify-center">
        <Button asChild>
          <Link href="/skincare/quiz">Customize My Glow</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/skincare">Back to Skincare</Link>
        </Button>
      </div>
    </div>
  );
}
