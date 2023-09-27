import React, { useEffect, useState } from "react";
import { ProgressBarProps } from "../ProgressBar";
import { usePathLength } from "../hooks/pathlength";

const Heart: React.FC<ProgressBarProps> = ({
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
          d="M 57.415002,25.686175 C 63.159521,11.278113 79.321513,4.9809839 91.720779,11.673153 104.93184,18.803476 111.24513,37.026663 100.81426,58.519986 93.405076,73.813389 80.328707,85.335518 57.415002,105.99937 34.514401,85.335518 21.329195,73.807037 13.926547,58.519986 3.4956578,37.026663 10.793667,18.806685 23.996454,11.673153 36.397458,4.990545 51.682488,11.278113 57.415002,25.686175"
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          className="progress"
          ref={pathRef as React.RefObject<SVGPathElement>}
          d="M 57.415002,25.686175 C 63.159521,11.278113 79.321513,4.9809839 91.720779,11.673153 104.93184,18.803476 111.24513,37.026663 100.81426,58.519986 93.405076,73.813389 80.328707,85.335518 57.415002,105.99937 34.514401,85.335518 21.329195,73.807037 13.926547,58.519986 3.4956578,37.026663 10.793667,18.806685 23.996454,11.673153 36.397458,4.990545 51.682488,11.278113 57.415002,25.686175"
          fill="none"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={pathLength}
          strokeDashoffset={strokeDashoffsetValue}
          style={{ transition: `stroke-dashoffset ${transitionSpeed}s linear` }}
        />
      </svg>
    </>
  );
};

export default Heart;
