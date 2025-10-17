"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Baby, CheckCircle, Calendar, TrendingUp } from "lucide-react";

export default function GrowthTrackerPage() {
  const [babyAge, setBabyAge] = useState("");

  const milestones = [
    {
      age: "2 months",
      milestone: "Smiles, follows objects with eyes",
      achieved: true,
    },
    { age: "4 months", milestone: "Holds head up, laughs", achieved: true },
    {
      age: "6 months",
      milestone: "Sits with support, babbles",
      achieved: false,
    },
    {
      age: "9 months",
      milestone: "Crawls, says 'mama' or 'dada'",
      achieved: false,
    },
    {
      age: "12 months",
      milestone: "First steps, first words",
      achieved: false,
    },
  ];

  const weeklyTips = [
    "Tummy time for 20-30 minutes daily",
    "Read to your baby every day",
    "Sing songs and talk frequently",
    "Provide safe objects to explore",
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-6 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Baby className="h-8 w-8 text-blue-600" />
          Baby Growth Tracker
        </h1>
        <p className="text-muted-foreground">
          Monitor your baby's development milestones
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Development Milestones
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className={`h-4 w-4 ${
                      item.achieved ? "text-green-500" : "text-gray-300"
                    }`}
                  />
                  <div>
                    <p className="font-medium text-sm">{item.age}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.milestone}
                    </p>
                  </div>
                </div>
                <Badge variant={item.achieved ? "default" : "outline"}>
                  {item.achieved ? "Achieved" : "Upcoming"}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              This Week's Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weeklyTips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-xs font-medium mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-pink-50 border-blue-200">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Calendar className="h-5 w-5" />
            Get Your Weekly Baby Care Plan 👶
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            Receive personalized weekly care plans with age-appropriate
            activities and development tips.
          </p>
          <Button className="gap-2 bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700">
            <Calendar className="h-4 w-4" />
            Get My Weekly Plan
          </Button>
        </CardContent>
      </Card>

      <div className="flex gap-4 justify-center">
        <Button asChild>
          <Link href="/parenting/baby-nutrition">Nutrition Guide</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/parenting">Back to Parenting</Link>
        </Button>
      </div>
    </div>
  );
}
