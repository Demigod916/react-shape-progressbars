import React, { useEffect, useRef, useState } from "react";
import { ProgressBarProps } from "../ProgressBar";

const Pentagon: React.FC<ProgressBarProps> = ({
  value,
  strokeWidth = 3,
  trackColor,
  progressColor,
  transitionSpeed,
  children,
}) => {
  const progressRef = useRef<SVGPathElement | null>(null);
  const [pathLength, setPathLength] = useState<number>(0);
  const filledLength = (value / 100) * pathLength;
  const strokeDashoffsetValue = pathLength - filledLength;

  useEffect(() => {
    if (progressRef.current) {
      const length = progressRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []);

  return (
    <>
      <div style={{ position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", top: "2.5%" }}>
        {children}
      </div>
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
          ref={progressRef}
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
