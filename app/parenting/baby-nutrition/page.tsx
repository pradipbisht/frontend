import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Apple, Clock, Heart, CheckCircle } from "lucide-react";

export default function BabyNutritionPage() {
  const stages = [
    {
      age: "0-6 months",
      primary: "Breast milk only",
      description: "Exclusive breastfeeding recommended",
      color: "bg-pink-100",
    },
    {
      age: "6-8 months",
      primary: "First foods",
      description: "Iron-rich purees & soft foods",
      color: "bg-orange-100",
    },
    {
      age: "9-12 months",
      primary: "Finger foods",
      description: "Self-feeding & family foods",
      color: "bg-green-100",
    },
  ];

  const firstFoods = [
    {
      name: "Iron-fortified cereal",
      benefit: "Essential iron for development",
      age: "6+ months",
    },
    {
      name: "Avocado",
      benefit: "Healthy fats for brain growth",
      age: "6+ months",
    },
    { name: "Sweet potato", benefit: "Vitamin A & fiber", age: "6+ months" },
    {
      name: "Banana",
      benefit: "Potassium & natural sweetness",
      age: "6+ months",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-6 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Apple className="h-8 w-8 text-green-600" />
          Baby Nutrition
        </h1>
        <p className="text-muted-foreground">
          Healthy feeding from birth to toddler
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Feeding by Age</h2>
        {stages.map((stage, idx) => (
          <Card
            key={idx}
            className="hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${stage.color}`}>
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{stage.age}</CardTitle>
                    <p className="text-sm font-medium text-green-600">
                      {stage.primary}
                    </p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {stage.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            Best First Foods
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {firstFoods.map((food, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <div>
                    <p className="font-medium text-sm">{food.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {food.benefit}
                    </p>
                  </div>
                </div>
                <Badge variant="outline">{food.age}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 justify-center">
        <Button asChild>
          <Link href="/parenting/growth-tracker">Track Growth</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/parenting">Back to Parenting</Link>
        </Button>
      </div>
    </div>
  );
}
