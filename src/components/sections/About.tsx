"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { nasalization } from "@/app/fonts";
import { selfData } from "@/constant";
import Link from "next/link";
import { LuMapPinned } from "react-icons/lu";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-60px",
    amount: 0.2,
  });

  return (
    <section
      ref={ref}
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      {/* Enhanced Background Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl"
        style={{ background: "hsl(var(--primary) / 0.08)" }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={
          isInView
            ? {
                scale: [0.8, 1.1, 1],
                opacity: [0, 0.4, 0.15, 0.3],
                x: [0, 40, -20, 0],
                y: [0, -15, 30, 0],
              }
            : {
                scale: 0.8,
                opacity: 0,
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl"
        style={{ background: "hsl(var(--secondary) / 0.06)" }}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={
          isInView
            ? {
                scale: [0.6, 1, 0.9, 1],
                opacity: [0, 0.25, 0.35, 0.2],
                x: [0, -25, 15, 0],
                y: [0, 20, -15, 0],
              }
            : {
                scale: 0.6,
                opacity: 0,
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-x-hidden">
        {/* Centered Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <h2
            className={`${nasalization.className} text-4xl md:text-5xl font-bold relative`}
            style={{ color: "hsl(var(--primary))" }}
          >
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Half: Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Enhanced Paragraphs */}
            <motion.div
              className="space-y-6 leading-relaxed"
              style={{ color: "hsl(var(--foreground) / 0.8)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {selfData.about.map((paragraph, index) => (
                <motion.div
                  key={index}
                  className="group cursor-text relative"
                  initial={{ opacity: 0, y: 15 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -12,
                    rotateX: 15,
                    rotateY: 5,
                    transition: { 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 150,
                      damping: 12
                    },
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "2000px",
                  }}
                >
                  <p className="text-base leading-relaxed" style={{ transformStyle: "preserve-3d" }}>
                    {paragraph.split(' ').map((word, wordIndex) => (
                      <motion.span
                        key={wordIndex}
                        className="inline-block transition-all duration-400 cursor-text relative"
                        whileHover={{
                          scale: 1.25,
                          fontWeight: 800,
                          rotateX: -25,
                          rotateY: 15,
                          rotateZ: 3,
                          z: 40,
                          textShadow: "0 10px 20px rgba(0,0,0,0.3)",
                          transition: { 
                            duration: 0.4,
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                          }
                        }}
                        style={{
                          transformOrigin: "center bottom",
                          transformStyle: "preserve-3d",
                          marginRight: "0.25rem",
                          backfaceVisibility: "hidden",
                          willChange: "transform"
                        }}
                      >
                        <span style={{
                          display: "inline-block",
                          background: "linear-gradient(135deg, currentColor 0%, currentColor 100%)",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          position: "relative"
                        }}>
                          {word}
                        </span>
                      </motion.span>
                    ))}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Location */}
            <motion.div
              className="flex items-center gap-4 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                ease: "easeOut",
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`https://www.google.com/maps/place/${selfData.current_location.city}+${selfData.current_location.state}+${selfData.current_location.country}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass-card px-6 py-3 rounded-full hover:glass-intense group transition-all duration-300"
                >
                  <motion.div
                    animate={
                      isInView ? { rotate: [0, -8, 8, 0] } : { rotate: 0 }
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    <LuMapPinned
                      className="w-4 h-4 transition-colors group-hover:scale-110"
                      style={{ color: "hsl(var(--primary))" }}
                    />
                  </motion.div>
                  <span
                    className="transition-colors"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    {selfData.current_location.city},{" "}
                    {selfData.current_location.state}
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Half: Coding Stats */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="space-y-6">
              {/* LeetCode Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h4 
                  className="text-base font-semibold mb-3"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  LeetCode
                </h4>
                <Link
                  href="https://leetcode.com/u/kartik411"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <div className="w-full cursor-pointer hover:opacity-80 transition-opacity">
                    <img
                      src="https://leetcard.jacoblin.cool/kartik411?theme=dark&font=Nunito"
                      alt="LeetCode Stats"
                      className="w-full rounded-lg"
                    />
                  </div>
                </Link>
              </motion.div>

              {/* Codeforces Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h4 
                  className="text-base font-semibold mb-3"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  Codeforces
                </h4>
                <Link
                  href="https://codeforces.com/profile/kartik411"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <div className="w-full cursor-pointer hover:opacity-80 transition-opacity">
                    <img
                      src="https://codeforces-readme-stats.vercel.app/api/badge?username=kartik411"
                      alt="Codeforces Stats"
                      className="w-full rounded-lg"
                    />
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
