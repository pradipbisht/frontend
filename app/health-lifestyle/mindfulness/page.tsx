"use client";

import { useState, useEffect } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Brain,
  Play,
  Pause,
  RotateCcw,
  Wind,
  Moon,
  Sun,
  Heart,
  BookOpen,
  Zap,
} from "lucide-react";

export default function MindfulnessPage() {
  const [meditationTimer, setMeditationTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(300); // 5 minutes
  const [breathingPhase, setBreathingPhase] = useState<
    "inhale" | "hold" | "exhale"
  >("inhale");
  const [breathingActive, setBreathingActive] = useState(false);
  const [journalEntry, setJournalEntry] = useState("");

  // Meditation timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && meditationTimer < selectedDuration) {
      interval = setInterval(() => {
        setMeditationTimer((timer) => timer + 1);
      }, 1000);
    } else if (meditationTimer >= selectedDuration) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, meditationTimer, selectedDuration]);

  // Breathing exercise effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (breathingActive) {
      interval = setInterval(() => {
        setBreathingPhase((current) => {
          if (current === "inhale") return "hold";
          if (current === "hold") return "exhale";
          return "inhale";
        });
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [breathingActive]);

  const meditationSessions = [
    { name: "Morning Clarity", duration: "10 min", type: "Focus", icon: "🌅" },
    {
      name: "Stress Relief",
      duration: "15 min",
      type: "Relaxation",
      icon: "💆‍♀️",
    },
    {
      name: "Sleep Preparation",
      duration: "20 min",
      type: "Sleep",
      icon: "🌙",
    },
    { name: "Anxiety Calm", duration: "12 min", type: "Emotional", icon: "🕯️" },
  ];

  const breathingExercises = [
    {
      name: "4-7-8 Breathing",
      description: "Inhale 4, hold 7, exhale 8",
      technique: "anxiety",
    },
    {
      name: "Box Breathing",
      description: "4 counts each phase",
      technique: "focus",
    },
    {
      name: "Triangle Breathing",
      description: "3 equal phases",
      technique: "energy",
    },
  ];

  const moodOptions = [
    { emoji: "😌", label: "Calm", color: "bg-blue-100" },
    { emoji: "😊", label: "Happy", color: "bg-yellow-100" },
    { emoji: "😮‍💨", label: "Stressed", color: "bg-red-100" },
    { emoji: "😴", label: "Tired", color: "bg-purple-100" },
    { emoji: "🤔", label: "Anxious", color: "bg-orange-100" },
    { emoji: "💪", label: "Energized", color: "bg-green-100" },
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const resetMeditation = () => {
    setMeditationTimer(0);
    setIsActive(false);
  };

  return (
    <main className="max-w-6xl mx-auto py-12 px-4 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          <Brain className="h-10 w-10 text-purple-600" />
          Mindfulness Hub
        </h1>
        <p className="text-xl text-muted-foreground">
          Find peace, reduce stress, and cultivate mindfulness
        </p>
      </div>

      <Tabs defaultValue="meditation" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="meditation">Meditation</TabsTrigger>
          <TabsTrigger value="breathing">Breathing</TabsTrigger>
          <TabsTrigger value="journal">Journal</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
        </TabsList>

        {/* Meditation Tab */}
        <TabsContent value="meditation" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Meditation Timer</CardTitle>
                  <CardDescription>
                    Start your mindfulness practice
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className="text-7xl font-mono font-bold text-purple-600">
                    {formatTime(meditationTimer)}
                  </div>

                  <div className="flex justify-center gap-2 mb-4">
                    {[300, 600, 900, 1200].map((duration) => (
                      <Button
                        key={duration}
                        variant={
                          selectedDuration === duration ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => {
                          setSelectedDuration(duration);
                          resetMeditation();
                        }}>
                        {duration / 60}m
                      </Button>
                    ))}
                  </div>

                  <Progress
                    value={(meditationTimer / selectedDuration) * 100}
                    className="h-3 w-full max-w-md mx-auto"
                  />

                  <div className="flex justify-center gap-4">
                    <Button
                      onClick={() => setIsActive(!isActive)}
                      size="lg"
                      className="gap-2"
                      disabled={meditationTimer >= selectedDuration}>
                      {isActive ? (
                        <Pause className="h-5 w-5" />
                      ) : (
                        <Play className="h-5 w-5" />
                      )}
                      {isActive ? "Pause" : "Start"}
                    </Button>
                    <Button
                      onClick={resetMeditation}
                      variant="outline"
                      size="lg"
                      className="gap-2">
                      <RotateCcw className="h-5 w-5" />
                      Reset
                    </Button>
                  </div>

                  {meditationTimer >= selectedDuration && (
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800">
                        Session Complete! 🎉
                      </h4>
                      <p className="text-sm text-green-600">
                        Great job on completing your meditation practice.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Guided Sessions</CardTitle>
                  <CardDescription>Choose a meditation style</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {meditationSessions.map((session, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <span className="text-2xl">{session.icon}</span>
                      <div className="flex-1">
                        <h5 className="font-medium text-sm">{session.name}</h5>
                        <p className="text-xs text-muted-foreground">
                          {session.duration} • {session.type}
                        </p>
                      </div>
                      <Play className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Breathing Tab */}
        <TabsContent value="breathing" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Breathing Exercise</CardTitle>
                <CardDescription>
                  Follow the rhythm to calm your mind
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div
                  className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center text-white font-bold transition-all duration-1000 ${
                    breathingPhase === "inhale"
                      ? "bg-blue-500 scale-110"
                      : breathingPhase === "hold"
                      ? "bg-purple-500 scale-100"
                      : "bg-green-500 scale-90"
                  }`}>
                  <div className="text-center">
                    <Wind className="h-8 w-8 mx-auto mb-1" />
                    <div className="text-sm font-medium capitalize">
                      {breathingPhase}
                    </div>
                  </div>
                </div>

                <div className="text-lg font-medium">
                  {breathingPhase === "inhale" && "Breathe in slowly..."}
                  {breathingPhase === "hold" && "Hold your breath..."}
                  {breathingPhase === "exhale" && "Breathe out slowly..."}
                </div>

                <Button
                  onClick={() => setBreathingActive(!breathingActive)}
                  size="lg"
                  className="gap-2">
                  {breathingActive ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                  {breathingActive ? "Stop" : "Start"} Exercise
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Breathing Techniques</CardTitle>
                <CardDescription>
                  Different methods for different needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {breathingExercises.map((exercise, idx) => (
                  <div
                    key={idx}
                    className="p-4 border rounded-lg hover:bg-muted/50">
                    <h5 className="font-medium mb-1">{exercise.name}</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      {exercise.description}
                    </p>
                    <Badge variant="outline">{exercise.technique}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Journal Tab */}
        <TabsContent value="journal" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Mindfulness Journal</CardTitle>
                  <CardDescription>
                    Reflect on your thoughts and feelings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      How are you feeling today?
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {moodOptions.map((mood) => (
                        <button
                          key={mood.label}
                          className={`p-3 rounded-lg border-2 hover:border-purple-300 ${mood.color}`}>
                          <div className="text-2xl mb-1">{mood.emoji}</div>
                          <div className="text-xs font-medium">
                            {mood.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Journal Entry
                    </label>
                    <Textarea
                      placeholder="Write about your thoughts, feelings, or any insights from your practice..."
                      value={journalEntry}
                      onChange={(e) => setJournalEntry(e.target.value)}
                      className="min-h-[200px]"
                    />
                  </div>

                  <Button className="w-full">Save Entry</Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Journal Prompts</CardTitle>
                  <CardDescription>Ideas to inspire reflection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm">What am I grateful for today?</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-sm">What challenges did I overcome?</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm">
                      How did my meditation practice help me?
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Entries</CardTitle>
                  <CardDescription>Your mindfulness journey</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 p-2 border rounded">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Yesterday</p>
                      <p className="text-xs text-muted-foreground">
                        Feeling more centered...
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 border rounded">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">2 days ago</p>
                      <p className="text-xs text-muted-foreground">
                        Meditation helped with anxiety...
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Progress Tab */}
        <TabsContent value="progress" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Mindfulness Streak</CardTitle>
                <CardDescription>
                  Consistency builds strong habits
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-4xl font-bold text-purple-600">12</div>
                <div className="text-sm text-muted-foreground">
                  Days in a row
                </div>
                <div className="flex justify-center gap-1">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-full ${
                        i < 5 ? "bg-purple-500" : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>This Week's Stats</CardTitle>
                <CardDescription>
                  Your mindfulness practice summary
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sessions Completed</span>
                  <span className="font-medium">8/10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Minutes</span>
                  <span className="font-medium">127 min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Journal Entries</span>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Breathing Exercises</span>
                  <span className="font-medium">12</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
