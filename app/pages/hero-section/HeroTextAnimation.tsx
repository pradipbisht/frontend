"use client";

import VariableProximity from "@/components/VariableProximity";
import { useRef } from "react";

export default function HeroTextAnimation() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <VariableProximity
        label={"Your All-in-One Wellness & Lifestyle Companion 🌿"}
        className={"variable-proximity-demo"}
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={100}
        falloff="linear"
      />
    </div>
  );
}
