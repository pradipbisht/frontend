"use client";

import { useState } from "react";
import Link from "next/link";

export default function ToolPage({ params }: { params: { tool: string } }) {
  const { tool } = params;

  if (tool === "bmi") {
    return <BMICalculator />;
  }

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-4">{tool}</h1>
      <p className="text-muted-foreground">Tool coming soon.</p>
      <Link href="/health-lifestyle" className="text-primary hover:underline">Back to Health & Lifestyle</Link>
    </main>
  );
}

function BMICalculator() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);

  const heightM = height / 100;
  const bmi = +(weight / (heightM * heightM)).toFixed(1);

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-4">BMI Calculator</h1>
      <div className="space-y-4">
        <label className="block">
          <div className="text-sm mb-1">Weight (kg)</div>
          <input type="range" min="30" max="200" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
          <div className="mt-1 font-medium">{weight} kg</div>
        </label>

        <label className="block">
          <div className="text-sm mb-1">Height (cm)</div>
          <input type="range" min="100" max="230" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
          <div className="mt-1 font-medium">{height} cm</div>
        </label>

        <div className="p-4 rounded-md bg-muted/10">
          <div className="text-sm text-muted-foreground">Your BMI</div>
          <div className="text-2xl font-semibold">{bmi}</div>
        </div>
      </div>
    </main>
  );
}
