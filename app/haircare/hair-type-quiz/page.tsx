"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowLeft, Heart } from "lucide-react";

export default function HairTypeQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "How does your hair feel after washing?",
      options: ["Very dry", "Slightly dry", "Normal", "Oily", "Very oily"],
    },
    {
      question: "How often do you wash your hair?",
      options: [
        "Daily",
        "Every 2 days",
        "2-3 times a week",
        "Once a week",
        "Less than once a week",
      ],
    },
    {
      question: "What's your main hair concern?",
      options: ["Dryness", "Oiliness", "Frizz", "Hair fall", "Lack of volume"],
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

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const getHairType = () => {
    const firstAnswer = answers[0];

    if (firstAnswer === "Very dry" || firstAnswer === "Slightly dry") {
      return {
        type: "Dry Hair",
        routine: [
          "Moisturizing shampoo",
          "Deep conditioning mask",
          "Leave-in treatment",
          "Avoid heat styling",
        ],
        description: "Your hair needs extra moisture and gentle care",
      };
    } else if (firstAnswer === "Oily" || firstAnswer === "Very oily") {
      return {
        type: "Oily Hair",
        routine: [
          "Clarifying shampoo",
          "Lightweight conditioner",
          "Dry shampoo",
          "Regular washing",
        ],
        description: "Your hair produces excess oil and needs balancing",
      };
    } else {
      return {
        type: "Normal Hair",
        routine: [
          "Gentle shampoo",
          "Regular conditioner",
          "Weekly mask",
          "Heat protection",
        ],
        description: "Your hair is well-balanced and needs maintenance",
      };
    }
  };

  if (showResult) {
    const result = getHairType();

    return (
      <div className="max-w-2xl mx-auto py-8 px-4 space-y-6 animate-in fade-in duration-500">
        <div className="text-center space-y-4">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          <h1 className="text-3xl font-bold">Your Hair Type: {result.type}</h1>
          <p className="text-muted-foreground">{result.description}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Personalized Hair Routine</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Recommended Steps:</h4>
              <div className="space-y-2">
                {result.routine.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">
                      {idx + 1}
                    </div>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              See Your Personalized Hair Routine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Get a detailed hair care plan with product recommendations and
              styling tips for your {result.type.toLowerCase()}.
            </p>
            <Button className="w-full gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Heart className="h-4 w-4" />
              Get My Complete Routine
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
            <Link href="/haircare">Back to Haircare</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 space-y-6 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Hair Type Quiz</h1>
        <p className="text-muted-foreground">
          Identify your hair type for better care
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
              variant={
                answers[currentQuestion] === option ? "default" : "outline"
              }
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
          onClick={goBack}
          disabled={currentQuestion === 0}
          className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        <Button asChild variant="outline">
          <Link href="/haircare">Cancel Quiz</Link>
        </Button>
      </div>
    </div>
  );
}
