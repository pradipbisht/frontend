"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Apple,
  UtensilsCrossed,
  Clock,
  Flame,
  Droplets,
  Plus,
  CheckCircle,
  Star,
  Users,
} from "lucide-react";

export default function DietPage() {
  const [dailyWater, setDailyWater] = useState(6);
  const [completedMeals, setCompletedMeals] = useState<string[]>([]);

  const nutritionGoals = {
    calories: { current: 1847, target: 2200 },
    protein: { current: 120, target: 165 },
    carbs: { current: 180, target: 275 },
    fat: { current: 65, target: 85 },
  };

  const todayMeals = [
    {
      id: "breakfast",
      name: "Breakfast",
      time: "8:00 AM",
      calories: 450,
      foods: ["Oatmeal with berries", "Greek yogurt", "Coffee"],
    },
    {
      id: "lunch",
      name: "Lunch",
      time: "12:30 PM",
      calories: 620,
      foods: ["Grilled chicken salad", "Quinoa", "Avocado"],
    },
    {
      id: "snack",
      name: "Snack",
      time: "3:00 PM",
      calories: 200,
      foods: ["Apple", "Almonds"],
    },
    {
      id: "dinner",
      name: "Dinner",
      time: "7:00 PM",
      calories: 577,
      foods: ["Salmon", "Steamed broccoli", "Sweet potato"],
    },
  ];

  const recipes = [
    {
      id: 1,
      name: "Protein Power Bowl",
      image: "🥗",
      time: "15 min",
      calories: 485,
      rating: 4.8,
      difficulty: "Easy",
      ingredients: ["Quinoa", "Grilled chicken", "Avocado", "Black beans"],
    },
    {
      id: 2,
      name: "Green Smoothie",
      image: "🥤",
      time: "5 min",
      calories: 220,
      rating: 4.6,
      difficulty: "Easy",
      ingredients: ["Spinach", "Banana", "Protein powder", "Almond milk"],
    },
    {
      id: 3,
      name: "Mediterranean Fish",
      image: "🐟",
      time: "25 min",
      calories: 390,
      rating: 4.9,
      difficulty: "Medium",
      ingredients: ["Salmon", "Olives", "Tomatoes", "Herbs"],
    },
  ];

  const toggleMeal = (mealId: string) => {
    setCompletedMeals((prev) =>
      prev.includes(mealId)
        ? prev.filter((id) => id !== mealId)
        : [...prev, mealId]
    );
  };

  return (
    <main className="max-w-6xl mx-auto py-12 px-4 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          <Apple className="h-10 w-10 text-green-600" />
          Nutrition Tracker
        </h1>
        <p className="text-xl text-muted-foreground">
          Plan meals, track nutrition, and discover healthy recipes
        </p>
      </div>

      <Tabs defaultValue="today" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="planner">Meal Planner</TabsTrigger>
          <TabsTrigger value="recipes">Recipes</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
        </TabsList>

        {/* Today Tab */}
        <TabsContent value="today" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Today's Meals</CardTitle>
                  <CardDescription>Track your daily nutrition</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {todayMeals.map((meal) => (
                    <div
                      key={meal.id}
                      className={`flex items-center justify-between p-4 border rounded-lg ${
                        completedMeals.includes(meal.id)
                          ? "bg-green-50 border-green-200"
                          : "hover:bg-muted/50"
                      }`}>
                      <div className="flex items-center gap-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleMeal(meal.id)}
                          className={
                            completedMeals.includes(meal.id)
                              ? "text-green-600"
                              : ""
                          }>
                          <CheckCircle className="h-5 w-5" />
                        </Button>
                        <div>
                          <h4 className="font-medium">{meal.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {meal.time} • {meal.calories} cal
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {meal.foods.join(", ")}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline">
                        {completedMeals.includes(meal.id)
                          ? "Completed"
                          : "Planned"}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Progress</CardTitle>
                  <CardDescription>Nutrition goals for today</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="flex items-center gap-1">
                        <Flame className="h-4 w-4" />
                        Calories
                      </span>
                      <span>
                        {nutritionGoals.calories.current}/
                        {nutritionGoals.calories.target}
                      </span>
                    </div>
                    <Progress
                      value={
                        (nutritionGoals.calories.current /
                          nutritionGoals.calories.target) *
                        100
                      }
                      className="h-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Protein</span>
                      <span>
                        {nutritionGoals.protein.current}g/
                        {nutritionGoals.protein.target}g
                      </span>
                    </div>
                    <Progress
                      value={
                        (nutritionGoals.protein.current /
                          nutritionGoals.protein.target) *
                        100
                      }
                      className="h-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Carbs</span>
                      <span>
                        {nutritionGoals.carbs.current}g/
                        {nutritionGoals.carbs.target}g
                      </span>
                    </div>
                    <Progress
                      value={
                        (nutritionGoals.carbs.current /
                          nutritionGoals.carbs.target) *
                        100
                      }
                      className="h-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Fat</span>
                      <span>
                        {nutritionGoals.fat.current}g/
                        {nutritionGoals.fat.target}g
                      </span>
                    </div>
                    <Progress
                      value={
                        (nutritionGoals.fat.current /
                          nutritionGoals.fat.target) *
                        100
                      }
                      className="h-2"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Water Intake</CardTitle>
                  <CardDescription>
                    Stay hydrated throughout the day
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Droplets className="h-5 w-5 text-blue-500" />
                      {dailyWater} glasses
                    </span>
                    <Button
                      size="sm"
                      onClick={() => setDailyWater((prev) => prev + 1)}
                      className="gap-1">
                      <Plus className="h-4 w-4" />
                      Add
                    </Button>
                  </div>
                  <Progress value={(dailyWater / 8) * 100} className="h-3" />
                  <p className="text-xs text-muted-foreground">
                    Goal: 8 glasses per day
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Meal Planner Tab */}
        <TabsContent value="planner" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Meal Planner</CardTitle>
              <CardDescription>
                Plan your meals for the week ahead
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 text-center">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day) => (
                    <div key={day} className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">{day}</h4>
                      <div className="space-y-2">
                        <div className="p-2 bg-orange-50 rounded text-xs">
                          Oatmeal
                        </div>
                        <div className="p-2 bg-green-50 rounded text-xs">
                          Salad
                        </div>
                        <div className="p-2 bg-blue-50 rounded text-xs">
                          Salmon
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="mt-2">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Recipes Tab */}
        <TabsContent value="recipes" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe) => (
              <Card
                key={recipe.id}
                className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl">{recipe.image}</div>
                    <Badge
                      variant={
                        recipe.difficulty === "Easy"
                          ? "secondary"
                          : recipe.difficulty === "Medium"
                          ? "default"
                          : "destructive"
                      }>
                      {recipe.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{recipe.name}</CardTitle>
                  <CardDescription className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {recipe.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="h-4 w-4" />
                      {recipe.calories} cal
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {recipe.rating}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h5 className="font-medium text-sm mb-2">Ingredients:</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {recipe.ingredients.map((ingredient, idx) => (
                        <li key={idx}>• {ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full">View Recipe</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Nutrition Tab */}
        <TabsContent value="nutrition" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Nutrition Summary</CardTitle>
                <CardDescription>
                  Your nutritional intake over the past week
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">92%</div>
                  <div className="text-sm text-muted-foreground">
                    Nutrition goals met
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average Calories</span>
                    <span className="font-medium">2,145 cal/day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Protein</span>
                    <span className="font-medium">145g/day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Water Intake</span>
                    <span className="font-medium">7.2 glasses/day</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nutritional Insights</CardTitle>
                <CardDescription>Personalized recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-sm text-blue-800">
                    Great Job!
                  </h5>
                  <p className="text-xs text-blue-600 mt-1">
                    You've consistently met your protein goals this week.
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <h5 className="font-medium text-sm text-yellow-800">Tip</h5>
                  <p className="text-xs text-yellow-600 mt-1">
                    Try adding more fiber-rich foods to improve digestion.
                  </p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <h5 className="font-medium text-sm text-orange-800">Goal</h5>
                  <p className="text-xs text-orange-600 mt-1">
                    Increase water intake by 1-2 glasses daily.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
