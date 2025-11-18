"use client";
import { useEffect, useRef } from "react";

export const Background = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawPattern();
    };

    const drawPattern = () => {
      const width = canvas.width;
      const height = canvas.height;

      // Fill background with dark color
      ctx.fillStyle = "#0a0a0f";
      ctx.fillRect(0, 0, width, height);

      // Triangle size
      const size = 150;
      const cols = Math.ceil(width / size) + 1;
      const rows = Math.ceil(height / size) + 1;

      // Draw triangular pattern
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * size;
          const y = row * size;

          // Random variations for visual interest
          const shade = Math.random() * 30 + 20;
          const opacity = Math.random() * 0.3 + 0.1;

          // Draw main triangles
          drawTriangle(ctx, x, y, size, shade, opacity);
          drawTriangle(ctx, x + size / 2, y + size / 2, size / 2, shade + 10, opacity * 0.8);
        }
      }

      // Add subtle overlay gradient
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) / 2
      );
      gradient.addColorStop(0, "rgba(29, 78, 216, 0.05)");
      gradient.addColorStop(0.5, "rgba(99, 102, 241, 0.02)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.2)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const drawTriangle = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      shade: number,
      opacity: number
    ) => {
      const halfSize = size / 2;

      // Random rotation for variety
      const rotation = Math.floor(Math.random() * 4) * 90;
      const centerX = x + halfSize;
      const centerY = y + halfSize;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.translate(-centerX, -centerY);

      // Draw filled triangle
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + size, y);
      ctx.lineTo(x + halfSize, y + size);
      ctx.closePath();

      ctx.fillStyle = `rgba(${shade}, ${shade}, ${shade + 10}, ${opacity})`;
      ctx.fill();

      // Draw triangle outline
      ctx.strokeStyle = `rgba(${shade + 30}, ${shade + 30}, ${shade + 40}, ${opacity * 1.5})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => {
      // Future: Add mouse interaction animations
    };

    const handleMouseLeave = () => {
      // Future: Add mouse interaction animations
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="top-0 fixed -z-10 h-full w-full overflow-hidden bg-[#0a0a0f]"
    >
      {/* Canvas for geometric pattern */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />

      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20 animate-pulse" style={{ animationDuration: '8s' }} />

      {/* Optional: Add a vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
};