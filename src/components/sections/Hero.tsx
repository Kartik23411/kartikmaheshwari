"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { selfData } from "@/constant";

import { mono, felipa } from "@/app/fonts";

const TypingText = ({ text }: { text: string | undefined }) => {
  const [displayedText, setDisplayedText] = useState("");
  const phaseRef = useRef<"delete" | "type">("type");

  useEffect(() => {
    if (!text || text === "undefined") {
      setDisplayedText("");
      return;
    }

    phaseRef.current = "delete";

    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (phaseRef.current === "delete") {
          if (prev.length > 0) {
            return prev.slice(0, -1);
          } else {
            phaseRef.current = "type";
            return prev;
          }
        } else {
          // typing phase
          if (prev.length < text.length) {
            return prev + text.charAt(prev.length);
          } else {
            return prev;
          }
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <>
      {displayedText}
      <motion.span
        className="inline-block w-0.5 bg-white align-text-bottom"
        style={{ height: "1.25rem" }}
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
      />
    </>
  );
};

export const Hero = () => {
  const ref = useRef(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const isInView = useInView(ref, {
    once: false,
    margin: "-80px",
    amount: 0.1,
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
  
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
  
      // Set canvas size
      const setCanvasSize = () => {
        canvas.width = 100;
        canvas.height = 100;
        drawPattern();
      };
  
      const drawPattern = () => {
        const width = canvas.width;
        const height = canvas.height;
  
        // Fill background with dark red-orangish color
        ctx.fillStyle = "#1a0805";
        ctx.fillRect(0, 0, width, height);
  
        // Grid size
        const gridSize = 10;
  
        // Draw line shadows with green glow
        ctx.strokeStyle = "#ff9100ff";
        ctx.lineWidth = .05;
        ctx.globalAlpha = 0.4;
  
        for (let x = 0; x <= width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
  
        for (let y = 0; y <= height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
  
        // Draw white lines on top
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 0.08;
        ctx.globalAlpha = 0.2;
  
        for (let x = 0; x <= width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
  
        for (let y = 0; y <= height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
  
        ctx.globalAlpha = 1;
  
        // Add subtle radial gradient for depth
        const gradient = ctx.createRadialGradient(
          width / 2,
          height / 2,
          0,
          width / 2,
          height / 2,
          Math.max(width, height) / 1.5
        );
        gradient.addColorStop(0, "rgba(255, 100, 50, 0.08)");
        gradient.addColorStop(0.7, "rgba(0, 0, 0, 0)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0.2)");
  
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
  
        // Add vignette effect for eye focus
        const vignetteGradient = ctx.createRadialGradient(
          width / 2,
          height / 2,
          Math.max(width, height) * 0.4,
          width / 2,
          height / 2,
          Math.max(width, height) * 0.9
        );
        vignetteGradient.addColorStop(0, "rgba(0, 0, 0, 0)");
        vignetteGradient.addColorStop(1, "rgba(0, 0, 0, 0.3)");
  
        ctx.fillStyle = vignetteGradient;
        ctx.fillRect(0, 0, width, height);
      };
  
      setCanvasSize();
      window.addEventListener("resize", setCanvasSize);
  
      return () => {
        window.removeEventListener("resize", setCanvasSize);
      };
    }, []);

    // Rotate roles every 3 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % selfData.roles.length);
      }, 3000);

      return () => clearInterval(interval);
    }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Enhanced floating orb */}
      <motion.div
        className="absolute bottom-20 left-20 w-20 h-20 rounded-full blur-xl"
        style={{ backgroundColor: "hsl(var(--secondary) / 0.15)" }}
        animate={
          isInView
            ? {
                y: [15, -15, 15],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }
            : {
                y: 15,
                rotate: 0,
                scale: 1,
              }
        }
        transition={{
          duration: 8,
          repeat: isInView ? Infinity : 0,
          ease: "easeInOut",
        }}
      />

      {/* Additional ambient elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full blur-lg"
        style={{ backgroundColor: "hsl(var(--primary) / 0.1)" }}
        animate={
          isInView
            ? {
                y: [0, -10, 0],
                x: [0, 5, 0],
                opacity: [0.3, 0.6, 0.3],
              }
            : { y: 0, x: 0, opacity: 0 }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="max-w-full sm:max-w-7xl w-full relative z-10 overflow-x-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="space-y-6">
              <motion.h1
                className={`${felipa.className} text-5xl md:text-7xl lg:text-8xl font-bold`}
                style={{ color: "hsl(var(--primary))" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                {selfData.name}
              </motion.h1>

              {/* <motion.p
                className={`${mono.className} text-lg md:text-xl`}
                style={{ color: "hsl(var(--secondary))" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {selfData.roles[0]}
              </motion.p> */}

              <motion.p
                className="text-base md:text-lg max-w-2xl leading-relaxed"
                style={{ color: "hsl(var(--foreground) / 0.8)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                {selfData.bio}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="relative group overflow-hidden btn-primary shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/resume">
                    {/* Enhanced shimmer effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30"
                      style={{ background: "var(--glass-shimmer)" }}
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    <span className="relative z-10 font-medium">View Resume</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Picture Frame */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-xs">
              {/* Rounded frame container */}
              <div className="rounded-3xl overflow-visible border-2 border-gray-300 shadow-2xl relative">
                {/* Handle decoration at top - inside frame */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-[#1a0805] rounded-full border-2 border-gray-300 shadow-md z-10">
                  <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full rounded-3xl"
                  />
                </div>

                {/* Image container - takes up most of frame */}
                <div className="relative w-full pt-[100%] bg-gray-100 rounded-t-3xl overflow-hidden">
                  <motion.div
                    className="absolute inset-0 w-full h-full"
                    whileHover={{ scale: 1.25 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <Image
                      src="/images/me.png"
                      alt="Profile Picture"
                      fill
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                
                {/* Blue bottom section */}
                <div className="h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-b-3xl flex items-center justify-center px-4">
                  <motion.p
                    key={currentRoleIndex}
                    className={`${mono.className} text-white font-bold text-base md:text-lg select-none pointer-events-none`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TypingText text={selfData.roles[currentRoleIndex] || ""} />
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
