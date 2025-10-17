import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Sun, Moon, Clock } from "lucide-react";

export default function DailyRoutinesPage() {
  const routines = [
    {
      title: "Basic Routine",
      subtitle: "Perfect for beginners",
      icon: <Heart className="h-6 w-6 text-pink-500" />,
      steps: {
        morning: ["Gentle Cleanser", "Moisturizer", "SPF 30+"],
        evening: ["Cleanser", "Moisturizer"],
      },
    },
    {
      title: "Advanced Routine",
      subtitle: "For skincare enthusiasts",
      icon: <Clock className="h-6 w-6 text-purple-500" />,
      steps: {
        morning: ["Cleanser", "Vitamin C Serum", "Moisturizer", "SPF"],
        evening: ["Cleanser", "Treatment", "Serum", "Night Cream"],
      },
    },
  ];

  const timing = [
    { time: "5-7 AM", activity: "Morning routine", icon: "🌅" },
    { time: "9-10 PM", activity: "Evening routine", icon: "🌙" },
    { time: "2-3x/week", activity: "Exfoliation", icon: "✨" },
    { time: "1x/week", activity: "Face mask", icon: "🧴" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-6 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Heart className="h-8 w-8 text-pink-600" />
          Daily Routines
        </h1>
        <p className="text-muted-foreground">
          Consistent care for healthy skin
        </p>
      </div>

      <div className="space-y-6">
        {routines.map((routine, idx) => (
          <Card
            key={idx}
            className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                {routine.icon}
                <div>
                  <CardTitle className="text-xl">{routine.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {routine.subtitle}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="h-5 w-5 text-orange-500" />
                    <h4 className="font-medium">Morning</h4>
                  </div>
                  <div className="space-y-2">
                    {routine.steps.morning.map((step, stepIdx) => (
                      <div key={stepIdx} className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-full flex items-center justify-center text-xs font-medium">
                          {stepIdx + 1}
                        </div>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Moon className="h-5 w-5 text-purple-500" />
                    <h4 className="font-medium">Evening</h4>
                  </div>
                  <div className="space-y-2">
                    {routine.steps.evening.map((step, stepIdx) => (
                      <div key={stepIdx} className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-full flex items-center justify-center text-xs font-medium">
                          {stepIdx + 1}
                        </div>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-500" />
            Timing Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {timing.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="font-medium text-sm">{item.time}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.activity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 justify-center">
        <Button asChild>
          <Link href="/skincare/quiz">Get My Custom Routine</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/skincare">Back to Skincare</Link>
        </Button>
      </div>
    </div>
  );
}
