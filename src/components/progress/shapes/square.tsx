import React, { useEffect, useState } from "react";
import { ProgressBarProps } from "../ProgressBar";
import { usePathLength } from "../hooks/pathlength";

const Square: React.FC<ProgressBarProps> = ({
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
        <path
          d="M 56.945618,8.5103502 H 107.49016 V 107.50024 H 8.5002594 V 8.5103502 H 56.945618"
          stroke={trackColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          className="progress"
          ref={pathRef as React.RefObject<SVGPathElement>}
          d="M 56.945618,8.5103502 H 107.49016 V 107.50024 H 8.5002594 V 8.5103502 H 56.945618"
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

export default Square;
