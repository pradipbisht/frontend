"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowLeft, Users } from "lucide-react";

export default function PetNutritionQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What type of pet do you have?",
      options: ["Dog", "Cat", "Both", "Other"],
    },
    {
      question: "What's your pet's age?",
      options: [
        "Puppy/Kitten (0-1 year)",
        "Adult (1-7 years)",
        "Senior (7+ years)",
      ],
    },
    {
      question: "Any dietary restrictions or allergies?",
      options: [
        "None",
        "Grain-free needed",
        "Chicken allergy",
        "Other allergies",
      ],
    },
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const getRecommendation = () => {
    const petType = answers[0];
    const age = answers[1];

    return {
      food: `${
        age?.includes("Puppy") || age?.includes("Kitten")
          ? "Puppy/Kitten"
          : age?.includes("Senior")
          ? "Senior"
          : "Adult"
      } ${petType} Food`,
      features: [
        "High-quality protein",
        "Balanced nutrition",
        "Age-appropriate formula",
      ],
      tips: [
        "Feed regular portions",
        "Fresh water always",
        "Monitor weight regularly",
      ],
    };
  };

  if (showResult) {
    const result = getRecommendation();

    return (
      <div className="max-w-2xl mx-auto py-8 px-4 space-y-6 animate-in fade-in duration-500">
        <div className="text-center space-y-4">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          <h1 className="text-3xl font-bold">Perfect Food Match!</h1>
          <p className="text-muted-foreground">Recommended: {result.food}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Pet's Nutrition Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Key Features:</h4>
              <div className="space-y-2">
                {result.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">
                      {idx + 1}
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Join Our Pet Parent Community 🐶
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Connect with fellow pet parents and get ongoing nutrition advice
              from veterinarians.
            </p>
            <Button
              asChild
              className="w-full gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
              <Link href="/community">
                <Users className="h-4 w-4" />
                Join Community
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div className="flex gap-4 justify-center">
          <Button
            onClick={() => {
              setCurrentQuestion(0);
              setAnswers([]);
              setShowResult(false);
            }}>
            Retake Quiz
          </Button>
          <Button asChild variant="outline">
            <Link href="/pets">Back to Pet Care</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 space-y-6 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Pet Nutrition Quiz</h1>
        <p className="text-muted-foreground">
          Find the right food for your pet
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span>
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">
            {questions[currentQuestion].question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {questions[currentQuestion].options.map((option) => (
            <Button
              key={option}
              variant="outline"
              className="w-full justify-start h-auto p-4"
              onClick={() => handleAnswer(option)}>
              {option}
            </Button>
          ))}
        </CardContent>
      </Card>

      <div className="flex gap-4 justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          disabled={currentQuestion === 0}
          className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        <Button asChild variant="outline">
          <Link href="/pets">Cancel Quiz</Link>
        </Button>
      </div>
    </div>
  );
}
