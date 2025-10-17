"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, ArrowLeft, Download } from "lucide-react";

export default function SkincareQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What's your skin type?",
      options: ["Oily", "Dry", "Combination", "Sensitive", "Normal"],
    },
    {
      question: "What's your main skin concern?",
      options: ["Acne", "Wrinkles", "Dark spots", "Dullness", "Redness"],
    },
    {
      question: "How often do you currently use skincare?",
      options: [
        "Never",
        "Sometimes",
        "Daily basics",
        "Full routine",
        "Skincare enthusiast",
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

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const getRecommendation = () => {
    // Simple logic based on answers
    const skinType = answers[0];
    const concern = answers[1];

    return {
      routine:
        skinType === "Oily"
          ? "Oil Control Routine"
          : skinType === "Dry"
          ? "Hydrating Routine"
          : "Balanced Routine",
      products: [
        `${skinType.toLowerCase()} skin cleanser`,
        concern === "Acne"
          ? "Salicylic acid treatment"
          : concern === "Wrinkles"
          ? "Retinol serum"
          : "Vitamin C serum",
        "SPF 30+ moisturizer",
      ],
    };
  };

  if (showResult) {
    const recommendation = getRecommendation();

    return (
      <div className="max-w-2xl mx-auto py-8 px-4 space-y-6 animate-in fade-in duration-500">
        <div className="text-center space-y-4">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          <h1 className="text-3xl font-bold">Your Perfect Routine</h1>
          <p className="text-muted-foreground">Based on your quiz answers</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{recommendation.routine}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Recommended Products:</h4>
              <div className="space-y-2">
                {recommendation.products.map((product, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">
                      {idx + 1}
                    </div>
                    <span className="text-sm capitalize">{product}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Get Your Free Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Download a personalized skincare guide with your routine, product
              recommendations, and expert tips.
            </p>
            <Button className="w-full gap-2">
              <Download className="h-4 w-4" />
              Download My Guide
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
            <Link href="/skincare">Back to Skincare</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 space-y-6 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Skincare Quiz</h1>
        <p className="text-muted-foreground">
          Find your perfect skincare routine
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
          <Link href="/skincare">Cancel Quiz</Link>
        </Button>
      </div>
    </div>
  );
}
