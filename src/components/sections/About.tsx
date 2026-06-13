"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { nasalization } from "@/app/fonts";
import { selfData } from "@/constant";
import Link from "next/link";
import { LuMapPinned } from "react-icons/lu";

export const About = () => {
  const ref = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const isInView = useInView(ref, {
    once: false,
    margin: "-60px",
    amount: 0.2,
  });

  useEffect(() => {
    if (!isInView) return;

    let flipTimeout: ReturnType<typeof setTimeout>;

    const scheduleFlip = () => {
      const delay = 5000 + Math.random() * 5000;

      flipTimeout = setTimeout(() => {
        setIsFlipped((prev) => !prev);
        scheduleFlip();
      }, delay);
    };

    scheduleFlip();

    return () => {
      clearTimeout(flipTimeout);
    };
  }, [isInView]);

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

          {/* Right Half: Profile Card */}
          <motion.div
            className="space-y-6 w-full max-w-[380px] md:max-w-[420px] mx-auto md:mx-0"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
              className="relative w-full max-w-[420px] h-[520px] mx-auto"
              style={{ perspective: "1200px" }}
            >
              <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <div
                  className="absolute inset-0 overflow-hidden rounded-2xl"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Image
                    src="/images/profileCard.png"
                    alt="Profile card"
                    fill
                    className="object-contain"
                    priority={false}
                  />
                </div>

                <div
                  className="absolute inset-0 overflow-hidden rounded-2xl"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <Image
                    src="/images/devCard.png"
                    alt="Developer card"
                    fill
                    className="object-contain"
                    priority={false}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
