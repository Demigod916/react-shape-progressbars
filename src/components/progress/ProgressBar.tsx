import React, { useEffect, useState } from "react";
import Star from "./shapes/star";
import Heart from "./shapes/heart";
import Triangle from "./shapes/triangle";
import Circle from "./shapes/circle";
import Square from "./shapes/square";
import Pentagon from "./shapes/pentagon";
import Pill from "./shapes/pill";
import Diamond from "./shapes/diamond";

export interface ProgressBarProps {
  value: number;
  trackColor?: string;
  progressColor?: string;
  strokeWidth?: number;
  transitionSpeed?: number;
  children?: React.ReactNode;
  shape?:
    | "star"
    | "heart"
    | "triangle"
    | "circle"
    | "square"
    | "pentagon"
    | "pill"
    | "diamond"; // Extend this as you add more shapes
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  shape = "star",
  value = 0,
  trackColor = "lightgray",
  progressColor = "dodgerblue",
  strokeWidth = 3,
  transitionSpeed = 0.3,
  children,
}) => {
  const shapeComponents: { [index: string]: React.FC<ProgressBarProps> } = {
    star: Star,
    heart: Heart,
    triangle: Triangle,
    circle: Circle,
    square: Square,
    pentagon: Pentagon,
    pill: Pill,
    diamond: Diamond,
  };

  const ShapeComponent = shapeComponents[shape];
  if (!ShapeComponent) {
    throw new Error(`Unsupported shape: ${shape}`);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ShapeComponent
        value={value}
        strokeWidth={strokeWidth}
        trackColor={trackColor}
        progressColor={progressColor}
        transitionSpeed={transitionSpeed}
      >
        {children}
      </ShapeComponent>
    </div>
  );
};

export default ProgressBar;
