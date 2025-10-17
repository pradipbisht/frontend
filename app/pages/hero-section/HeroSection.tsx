"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import LoopIcons from "./LoopIcons";
import GridAllBento from "../grid-all/GridAllBento";
import Orb from "@/components/Orb";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";

// NOTE: Make sure CircularStamp is imported if you decide to use it,
// otherwise keep it commented or remove the empty motion.divs.
// import { CircularStamp } from "@/app/pages/hero-section/circular-brand";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: "italic",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
});

export default function HeroSection() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section className="relative overflow-hidden bg-dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background z-0 pointer-events-none" />
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <div className="w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px] lg:w-[1200px] lg:h-[1200px] opacity-80 dark:opacity-60">
          <Orb
            hoverIntensity={0.4}
            rotateOnHover={true}
            hue={document.documentElement.classList.contains("dark") ? 240 : 28}
            forceHoverState={false}
          />
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-32">
        {/* Circular Stamp placeholders (Assuming these will be replaced with actual CircularStamp component) */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -180 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease: [0.25, 1, 0.5, 1],
            delay: 0.5,
          }}
          className="hidden md:block absolute left-4 top-16 md:left-8 md:top-24 lg:left-16 lg:top-32 z-20"></motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50, rotate: -90 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: [0.25, 1, 0.5, 1],
            delay: 0.3,
          }}
          className="md:hidden absolute left-1/2 transform -translate-x-1/2 top-4 z-20"></motion.div>

        {/* Main Content */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="text-center space-y-8 mb-12 md:mb-16 mt-0 md:-translate-y-12 lg:-translate-y-20">
          <motion.div variants={item}>
            <Badge
              variant="secondary"
              className="mb-4 inline-flex items-center gap-2">
              <Sparkles className="mr-2 h-4 w-4" />
              Your Journey to Wellness Starts Here
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`relative text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/50 to-primary/25 animate-gradient-shine leading-tight italic ${cormorant.variable}`}>
            Your All-in-One Wellness & <br className="hidden sm:inline" />
            Lifestyle Companion 🌿
            {/* elegant underline */}
            <motion.span
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 1,
                duration: 1.4,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-primary/60 via-primary/40 to-transparent rounded-full origin-left"
            />
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover expert tips, personalized recommendations, and trusted
            advice for every aspect of your life.
          </motion.p>

          <motion.div variants={item} className="flex justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90">
              <a href="/health-lifestyle">
                Explore Health & Wellness <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/shop">Browse Products</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Updated compact grid */}
        <LoopIcons />

        {/* grid */}
        <GridAllBento />
      </div>
    </section>
  );
}
