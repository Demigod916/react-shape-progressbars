import React, { useEffect, useState } from "react";
import { ProgressBarProps } from "../ProgressBar";
import { usePathLength } from "../hooks/pathlength";

const Pentagon: React.FC<ProgressBarProps> = ({
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
          d="M 32.417544,-13.319469 67.382988,12.084938 54.026878,53.189445 10.806903,53.18902 -2.5483993,12.084251 Z"
          transform="matrix(1.4024945,-0.00337099,0.00354166,1.4714115,12.015826,28.240948)"
          stroke={trackColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          className="progress"
          ref={pathRef as React.RefObject<SVGPathElement>}
          d="M 32.417544,-13.319469 67.382988,12.084938 54.026878,53.189445 10.806903,53.18902 -2.5483993,12.084251 Z"
          transform="matrix(1.4024945,-0.00337099,0.00354166,1.4714115,12.015826,28.240948)"
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

export default Pentagon;
