"use client";

import { useEffect, useRef } from "react";

interface CircularTextProps {
  text?: string;
  radius?: number;
  fontSize?: number;
  className?: string;
}

export default function CircularText({
  text = "✨ WELLNESS • EXPERT • AI-POWERED • PERSONALIZED • ",
  radius = 80,
  fontSize = 12,
  className = "",
}: CircularTextProps) {
  const textRef = useRef<SVGTextElement>(null);
  const pathRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    const pathElement = pathRef.current;

    if (textElement && pathElement) {
      // Create animation for rotating text
      const animation = textElement.animate(
        [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
        {
          duration: 20000, // 20 seconds for full rotation
          iterations: Infinity,
          easing: "linear",
        }
      );

      return () => animation.cancel();
    }
  }, []);

  const circumference = 2 * Math.PI * radius;
  const adjustedText = text.length > 0 ? text : "Add your text here • ";

  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        width={radius * 2 + 40}
        height={radius * 2 + 40}
        className="animate-spin-slow"
        style={{ animationDuration: "20s" }}>
        <defs>
          <path
            id="circle-path"
            d={`M ${radius + 20} ${20} A ${radius} ${radius} 0 1 1 ${
              radius + 19.99
            } ${20}`}
          />
        </defs>

        <circle
          ref={pathRef}
          cx={radius + 20}
          cy={radius + 20}
          r={radius}
          fill="none"
          stroke="none"
        />

        <text
          ref={textRef}
          fontSize={fontSize}
          className="fill-current text-primary font-medium tracking-wider"
          style={{
            transformOrigin: `${radius + 20}px ${radius + 20}px`,
          }}>
          <textPath href="#circle-path" startOffset="0%">
            {adjustedText.repeat(
              Math.ceil(circumference / (adjustedText.length * fontSize * 0.6))
            )}
          </textPath>
        </text>
      </svg>

      {/* Center content area */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
          <div className="text-2xl">🌟</div>
        </div>
      </div>
    </div>
  );
}
