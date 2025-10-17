import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Activity, Clock } from "lucide-react";

export default function DogsPage() {
  const tips = [
    {
      title: "Daily Exercise",
      description: "30-60 minutes based on breed",
      icon: "🏃‍♂️",
      color: "bg-blue-100",
    },
    {
      title: "Regular Checkups",
      description: "Vet visits every 6 months",
      icon: "🩺",
      color: "bg-green-100",
    },
    {
      title: "Mental Stimulation",
      description: "Puzzle toys and training",
      icon: "🧠",
      color: "bg-purple-100",
    },
    {
      title: "Proper Nutrition",
      description: "Age-appropriate balanced diet",
      icon: "🍖",
      color: "bg-orange-100",
    },
  ];

  const healthChecklist = [
    { item: "Vaccinations up to date", status: "Essential" },
    { item: "Flea & tick prevention", status: "Monthly" },
    { item: "Dental care routine", status: "Daily" },
    { item: "Weight monitoring", status: "Weekly" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-6 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          🐕 Dog Care
        </h1>
        <p className="text-muted-foreground">
          Complete guide to keeping your dog healthy & happy
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {tips.map((tip, idx) => (
          <Card
            key={idx}
            className="hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${tip.color}`}>
                  <span className="text-xl">{tip.icon}</span>
                </div>
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
            <Shield className="h-5 w-5 text-green-500" />
            Health Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {healthChecklist.map((check, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span className="text-sm">{check.item}</span>
                </div>
                <Badge variant="outline">{check.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 justify-center">
        <Button asChild>
          <Link href="/pets/nutrition-quiz">Find Right Food</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/pets">Back to Pet Care</Link>
        </Button>
      </div>
    </div>
  );
}
