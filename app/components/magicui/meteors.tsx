// components/AnimatedBackground.tsx

import React, { useEffect, useState } from "react";
import clsx from "clsx";

const AnimatedBackground = () => {
  const [lines, setLines] = useState<Array<{ top: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random lines with animation delays
    const linesCount = 20;
    const newLines = Array.from({ length: linesCount }, () => ({
      top: Math.random() * 100,
      delay: Math.random() * 2, // Adjust delay as needed
    }));
    setLines(newLines);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {lines.map((line, index) => (
        <div
          key={index}
          className={clsx(
            "absolute bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300",
            "opacity-50",
            "transform rotate-45",
            "rounded-full",
            "pointer-events-none",
            "animate-floating",
            "w-96",
            "h-1",
            "left-1/2",
            "top-1/2",
            "-translate-x-1/2",
            `-translate-y-1/2`,
            "z-0",
            "before:content-['']",
            "before:absolute",
            "before:inset-0"
          )}
          style={{
            top: `${line.top}%`,
            animationDelay: `${line.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
