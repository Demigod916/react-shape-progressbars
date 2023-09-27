import React, { useEffect, useState } from "react";
import { ProgressBarProps } from "../ProgressBar";
import { usePathLength } from "../hooks/pathlength";

const Triangle: React.FC<ProgressBarProps> = ({
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
          d="m 32.536801,-22.249432 37.708394,65.312843 -75.416778,5e-6 z"
          transform="matrix(1.2785107,0,0,1.4638636,16.029741,42.265473)"
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="progress"
          ref={pathRef as React.RefObject<SVGPathElement>}
          d="m 32.536801,-22.249432 37.708394,65.312843 -75.416778,5e-6 z"
          transform="matrix(1.2785107,0,0,1.4638636,16.029741,42.265473)"
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

export default Triangle;
