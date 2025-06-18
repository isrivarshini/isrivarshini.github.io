"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
}

interface Bird {
  id: number;
  x: number;
  y: number;
  speed: number;
  wingPhase: number;
}

export function AnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);
  const [birds, setBirds] = useState<Bird[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate stars
  useEffect(() => {
    if (!mounted) return;

    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
        });
      }
      setStars(newStars);
    };

    generateStars();
    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, [mounted]);

  // Generate birds
  useEffect(() => {
    if (!mounted) return;

    const generateBirds = () => {
      const newBirds: Bird[] = [];
      for (let i = 0; i < 10; i++) {
        newBirds.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * 150 + 80,
          speed: Math.random() * 0.8 + 0.3,
          wingPhase: Math.random() * Math.PI * 2,
        });
      }
      setBirds(newBirds);
    };

    generateBirds();
  }, [mounted]);

  // Animate stars
  useEffect(() => {
    if (!mounted || theme !== "dark") return;

    const animateStars = () => {
      setStars((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          opacity: 0.2 + Math.abs(Math.sin(Date.now() * star.twinkleSpeed)) * 0.8,
        }))
      );
    };

    const interval = setInterval(animateStars, 50);
    return () => clearInterval(interval);
  }, [mounted, theme]);

  // Animate birds
  useEffect(() => {
    if (!mounted || theme === "dark") return;

    const animateBirds = () => {
      setBirds((prevBirds) =>
        prevBirds.map((bird) => ({
          ...bird,
          x: bird.x + bird.speed,
          y: bird.y + Math.sin(Date.now() * 0.002 + bird.id) * 1.2,
          wingPhase: bird.wingPhase + 0.25,
          ...(bird.x > window.innerWidth + 60 ? { x: -60 } : {}),
        }))
      );
    };

    const interval = setInterval(animateBirds, 50);
    return () => clearInterval(interval);
  }, [mounted, theme]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 text-[#f1fdfe]">
      {/* Moon for dark theme */}
      {theme === "dark" && (
        <div className="absolute top-24 right-24">
          <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-600 rounded-full shadow-md" />
        </div>
      )}

      {/* Stars */}
      {theme === "dark" &&
        stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
 left: `${star.x}px`,
 top: `${star.y}px`,
 width: `${star.size}px`,
              height: ${star.size}px,
              opacity: star.opacity,
              boxShadow: 0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity * 0.5}),
            }}
          />
        ))}

      {/* Sun */}
      {theme === "light" && (
        <div className="absolute top-20 right-20">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-lg animate-pulse">
            <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full opacity-80"></div>
          </div>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-6 bg-gradient-to-t from-yellow-400 to-transparent origin-bottom animate-pulse"
              style={{
                left: "50%",
                top: "50%",
 transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-40px)`,
                animationDelay: ${i * 0.2}s,
              }}
            />
          ))}
        </div>
      )}

      {/* Birds */}
      {theme === "light" &&
        birds.map((bird) => (
          <div
            key={bird.id}
            className="absolute text-gray-600 transition-all duration-100"
            style={{
 left: `${bird.x}px`,
 top: `${bird.y}px`,
              transform: `scale(${0.8 + Math.sin(bird.wingPhase) * 0.2})`,
            }}
          >
            <svg width="20" height="12" viewBox="0 0 20 12" fill="currentColor">
              <path
                d="M2 6 C2 4, 4 2, 6 4 C8 2, 10 2, 10 6 C10 2, 12 2, 14 4 C16 2, 18 4, 18 6 C16 8, 14 8, 14 6 C12 8, 10 8, 10 6 C10 8, 8 8, 6 6 C4 8, 2 8, 2 6"
                style={{
                  transform: `scaleY(${0.8 + Math.sin(bird.wingPhase) * 0.4})`,
 }}
              />
            </svg>
          </div>
        ))}

      {/* Light Mode: More Clouds */}
      {theme === "light" && (
        <>
          {[
            { top: "top-32", left: "left-1/4", delay: "0s" },
            { top: "top-48", left: "right-1/3", delay: "2s" },
            { top: "top-20", left: "left-10", delay: "4s" },
            { top: "top-60", left: "right-10", delay: "1.5s" },
            { top: "top-70", left: "right-30", delay: "1.5s" },
            { top: "top-10", left: "right-60", delay: "1.5s" },
            { top: "top-90", left: "right-30", delay: "1.5s" }

          ].map((cloud, idx) => (
            <div
              key={idx}
              className={`absolute ${cloud.top} ${cloud.left} animate-float`}
 style={{ animationDelay: `${cloud.delay}` }}
            >
              <div className="w-20 h-12 bg-blue-50 rounded-full opacity-70 shadow-sm relative">
                <div className="absolute -top-2 left-4 w-12 h-8 bg-blue-50 rounded-full"></div>
                <div className="absolute -top-1 right-4 w-8 h-6 bg-blue-100 rounded-full"></div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}