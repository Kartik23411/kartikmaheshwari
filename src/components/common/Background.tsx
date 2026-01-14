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

      // Fill background with dark red-orangish color
      ctx.fillStyle = "#1a0805";
      ctx.fillRect(0, 0, width, height);

      // Grid size
      const gridSize = 20;

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

  return (
    <div
      ref={containerRef}
      className="top-0 fixed -z-10 h-full w-full overflow-hidden bg-[#1a0805]"
    >
      {/* Canvas for grid pattern */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};