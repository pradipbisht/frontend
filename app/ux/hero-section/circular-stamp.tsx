"use client";

import { cn } from "@/lib/utils";

interface CircularStampProps {
  text?: string;
  centerText?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animate?: boolean;
}

export default function CircularStamp({
  text = "✨ WELLNESS • EXPERT • AI-POWERED • PERSONALIZED • ",
  centerText = "🌟",
  size = "md",
  className = "",
  animate = true,
}: CircularStampProps) {
  const sizeConfig = {
    sm: {
      radius: 60,
      fontSize: 10,
      centerSize: "text-lg",
      wrapper: "w-32 h-32",
    },
    md: {
      radius: 80,
      fontSize: 12,
      centerSize: "text-2xl",
      wrapper: "w-40 h-40",
    },
    lg: {
      radius: 100,
      fontSize: 14,
      centerSize: "text-3xl",
      wrapper: "w-52 h-52",
    },
    xl: {
      radius: 120,
      fontSize: 16,
      centerSize: "text-4xl",
      wrapper: "w-60 h-60",
    },
  };

  const config = sizeConfig[size];
  const circumference = 2 * Math.PI * config.radius;

  return (
    <div className={cn("relative inline-block", config.wrapper, className)}>
      {/* Stamp Border */}
      <div className="absolute inset-2 rounded-full border-2 border-dashed border-primary/30" />
      <div className="absolute inset-4 rounded-full border border-primary/20" />

      {/* Circular Text */}
      <svg
        width="100%"
        height="100%"
        className={cn("absolute inset-0", animate && "animate-spin-slow")}
        style={{ animationDuration: "25s" }}>
        <defs>
          <path
            id="text-circle"
            d={`M ${config.radius + 20} ${20} A ${config.radius} ${
              config.radius
            } 0 1 1 ${config.radius + 19.99} ${20}`}
          />
        </defs>

        <text
          fontSize={config.fontSize}
          className="fill-primary/80 font-semibold tracking-wider">
          <textPath href="#text-circle" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center Stamp Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className={cn("mb-1", config.centerSize)}>{centerText}</div>
          <div className="text-xs font-medium text-primary/60 tracking-wide">
            CERTIFIED
          </div>
        </div>
      </div>

      {/* Stamp Effects */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/5 to-primary/10 pointer-events-none" />
    </div>
  );
}
