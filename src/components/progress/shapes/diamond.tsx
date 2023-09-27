import React, { useEffect, useState } from "react";
import { ProgressBarProps } from "../ProgressBar";
import { usePathLength } from "../hooks/pathlength";

const Diamond: React.FC<ProgressBarProps> = ({
  value,
  strokeWidth = 3,
  trackColor,
  progressColor,
  transitionSpeed,
  children,
}) => {
  const { pathRef, pathLength } = usePathLength();
  const filledLength = (value / 100) * pathLength;
  const strokeDashoffsetValue = pathLength - filledLength;

  return (
    <>
      {children}
      <svg width="auto" height="auto" viewBox="0 0 115 115">
        <rect
          width="72.404846"
          height="72.41053"
          x="45.006577"
          y="-37.168892"
          transform="matrix(0.69778579,0.71630649,-0.71819384,0.69584309,0,0)"
          stroke={trackColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect
          className="progress"
          ref={pathRef as React.RefObject<SVGRectElement>}
          width="72.404846"
          height="72.41053"
          x="45.006577"
          y="-37.168892"
          transform="matrix(0.69778579,0.71630649,-0.71819384,0.69584309,0,0)"
          fill="none"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={pathLength}
          strokeDashoffset={strokeDashoffsetValue}
          style={{ transition: `stroke-dashoffset ${transitionSpeed}s linear` }}
        />
      </svg>
    </>
  );
};

export default Diamond;
