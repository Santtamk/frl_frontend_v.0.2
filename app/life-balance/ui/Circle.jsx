"use client";
import React from "react";

const Circle = ({ stage }) => {
  const circleColors = [
    "#EAE5D7",
    "#D6CDB2",
    "#BFAC85",
    "#AB9264",
    "#9C8056",
    "#866948",
    "#7A5F3B",
    "#5C4537",
    "#2D201B",
  ];

  const currentCircles = Math.min(stage - 1, circleColors.length);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {circleColors.slice(0, currentCircles).map((color, index) => {
        const scale = 1 - index * 0.1; // Each inner circle is smaller
        const size = scale * 100;

        return (
          <div
            key={index}
            className="absolute inset-0 m-auto rounded-full transition-all duration-500 ease-out"
            style={{
              backgroundColor: color,
              width: `${size}%`,
              height: `${size}%`,
              zIndex: index,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Circle;
