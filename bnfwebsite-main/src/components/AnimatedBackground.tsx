import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Position waves in lower portion of screen
    const waveBaseY = canvas.height * 0.65;

    // Teal/cyan gradient colors from the reference image
    const colors = [
      "rgba(0, 180, 180, 0.35)",   // dark teal
      "rgba(0, 200, 200, 0.3)",    // teal
      "rgba(0, 220, 220, 0.25)",   // light teal
      "rgba(0, 240, 240, 0.2)",    // cyan
      "rgba(100, 255, 255, 0.15)", // light cyan
    ];

    // Flowing wave layers that morph
    const flowingWaves: Array<{
      points: number;
      speed: number;
      offset: number;
      amplitude: number;
      frequency: number;
      yOffset: number;
    }> = [];

    for (let i = 0; i < 5; i++) {
      flowingWaves.push({
        points: 200,
        speed: 0.3 + i * 0.15,
        offset: i * 0.8,
        amplitude: 60 + i * 25,
        frequency: 0.003 + i * 0.001,
        yOffset: i * 30,
      });
    }

    // Morphing stars
    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speed: number;
      phase: number;
    }> = [];

    for (let i = 0; i < 30; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 0.02 + 0.01,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw flowing morphing waves with thin strokes
      flowingWaves.forEach((wave, waveIndex) => {
        ctx.beginPath();
        ctx.strokeStyle = colors[waveIndex];
        ctx.lineWidth = 0.3; // Very thin strokes

        for (let i = 0; i <= wave.points; i++) {
          const x = (canvas.width / wave.points) * i;
          
          // Create morphing wave effect with multiple sine waves
          const y = waveBaseY + wave.yOffset +
            Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude +
            Math.cos(x * wave.frequency * 0.5 - time * wave.speed * 0.7) * (wave.amplitude * 0.6) +
            Math.sin(x * wave.frequency * 1.5 + time * wave.speed * 0.5) * (wave.amplitude * 0.3);

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      });

      // Draw morphing stars (darker in top half)
      stars.forEach((star) => {
        star.phase += star.speed;
        
        // Reduce visibility in top portion of screen
        const topDarkeningFactor = star.y < canvas.height * 0.5 
          ? 0.15 // Much less visible in top half
          : 1.0; // Normal visibility in bottom half
        
        const currentAlpha = star.alpha * (0.5 + Math.sin(star.phase) * 0.5) * topDarkeningFactor;
        const currentRadius = star.radius * (0.8 + Math.sin(star.phase * 2) * 0.2);

        ctx.beginPath();
        ctx.arc(star.x, star.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 255, 255, ${currentAlpha})`;
        ctx.fill();

        // Add subtle glow
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, currentRadius * 3
        );
        gradient.addColorStop(0, `rgba(100, 255, 255, ${currentAlpha * 0.3})`);
        gradient.addColorStop(1, "rgba(100, 255, 255, 0)");
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, currentRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  );
};

export default AnimatedBackground;
