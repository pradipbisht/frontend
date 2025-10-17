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
  Dumbbell,
  Timer,
  Target,
  Calendar,
  TrendingUp,
  Play,
  Pause,
  RotateCcw,
  Plus,
  CheckCircle,
} from "lucide-react";

export default function FitnessPage() {
  const [activeWorkout, setActiveWorkout] = useState(false);
  const [workoutTimer, setWorkoutTimer] = useState(0);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);

  const workoutPlans = [
    {
      id: 1,
      name: "Full Body Strength",
      duration: "45 min",
      difficulty: "Intermediate",
      exercises: 8,
      calories: 350,
    },
    {
      id: 2,
      name: "HIIT Cardio",
      duration: "25 min",
      difficulty: "Advanced",
      exercises: 6,
      calories: 400,
    },
    {
      id: 3,
      name: "Yoga Flow",
      duration: "30 min",
      difficulty: "Beginner",
      exercises: 12,
      calories: 150,
    },
  ];

  const todayExercises = [
    { id: 1, name: "Push-ups", sets: 3, reps: 15, rest: "60s" },
    { id: 2, name: "Squats", sets: 3, reps: 20, rest: "60s" },
    { id: 3, name: "Plank", sets: 3, reps: "30s", rest: "45s" },
    { id: 4, name: "Burpees", sets: 3, reps: 10, rest: "90s" },
  ];

  const toggleExercise = (exerciseId: string) => {
    setCompletedExercises((prev) =>
      prev.includes(exerciseId)
        ? prev.filter((id) => id !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  return (
    <main className="max-w-6xl mx-auto py-12 px-4 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          <Dumbbell className="h-10 w-10 text-blue-600" />
          Fitness Tracker
        </h1>
        <p className="text-xl text-muted-foreground">
          Track workouts, build strength, and achieve your fitness goals
        </p>
      </div>

      <Tabs defaultValue="workouts" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="workouts">Workouts</TabsTrigger>
          <TabsTrigger value="exercises">Exercises</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="tracker">Live Tracker</TabsTrigger>
        </TabsList>

        {/* Workouts Tab */}
        <TabsContent value="workouts" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workoutPlans.map((workout) => (
              <Card
                key={workout.id}
                className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {workout.name}
                    <Badge
                      variant={
                        workout.difficulty === "Beginner"
                          ? "secondary"
                          : workout.difficulty === "Intermediate"
                          ? "default"
                          : "destructive"
                      }>
                      {workout.difficulty}
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    {workout.duration} • {workout.exercises} exercises
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <Timer className="h-4 w-4" />
                      {workout.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="h-4 w-4" />
                      {workout.calories} cal
                    </span>
                  </div>
                  <Button className="w-full">Start Workout</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Exercises Tab */}
        <TabsContent value="exercises" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Today's Workout</CardTitle>
              <CardDescription>
                Complete your daily exercise routine
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {todayExercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className={`flex items-center justify-between p-4 border rounded-lg ${
                    completedExercises.includes(exercise.id.toString())
                      ? "bg-green-50 border-green-200"
                      : "hover:bg-muted/50"
                  }`}>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExercise(exercise.id.toString())}
                      className={
                        completedExercises.includes(exercise.id.toString())
                          ? "text-green-600"
                          : ""
                      }>
                      <CheckCircle className="h-5 w-5" />
                    </Button>
                    <div>
                      <h4 className="font-medium">{exercise.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {exercise.sets} sets × {exercise.reps} • Rest:{" "}
                        {exercise.rest}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">
                    {completedExercises.includes(exercise.id.toString())
                      ? "Done"
                      : "Pending"}
                  </Badge>
                </div>
              ))}
              <div className="pt-4">
                <Progress
                  value={
                    (completedExercises.length / todayExercises.length) * 100
                  }
                  className="h-3"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  {completedExercises.length} of {todayExercises.length}{" "}
                  exercises completed
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Progress Tab */}
        <TabsContent value="progress" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Stats</CardTitle>
                <CardDescription>
                  Your fitness progress this week
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Workouts Completed</span>
                    <span>4/5</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Calories Burned</span>
                    <span>1,250/1,500</span>
                  </div>
                  <Progress value={83} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Active Minutes</span>
                    <span>180/210</span>
                  </div>
                  <Progress value={86} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
                <CardDescription>Keep up the great work!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="p-2 bg-blue-500 text-white rounded-full">
                    <Target className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Week Goal Achieved!</p>
                    <p className="text-xs text-muted-foreground">
                      Completed 4 workouts
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="p-2 bg-green-500 text-white rounded-full">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Personal Best!</p>
                    <p className="text-xs text-muted-foreground">
                      50 push-ups in a row
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Live Tracker Tab */}
        <TabsContent value="tracker" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Workout Timer</CardTitle>
              <CardDescription>
                Track your current workout session
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="text-6xl font-mono font-bold">
                {Math.floor(workoutTimer / 60)
                  .toString()
                  .padStart(2, "0")}
                :{(workoutTimer % 60).toString().padStart(2, "0")}
              </div>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => setActiveWorkout(!activeWorkout)}
                  size="lg"
                  className="gap-2">
                  {activeWorkout ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                  {activeWorkout ? "Pause" : "Start"}
                </Button>
                <Button
                  onClick={() => {
                    setWorkoutTimer(0);
                    setActiveWorkout(false);
                  }}
                  variant="outline"
                  size="lg"
                  className="gap-2">
                  <RotateCcw className="h-5 w-5" />
                  Reset
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold">245</div>
                  <div className="text-sm text-muted-foreground">
                    Calories Burned
                  </div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold">125</div>
                  <div className="text-sm text-muted-foreground">
                    Avg Heart Rate
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
