import React, { useEffect, useRef, useState } from "react";
import { ProgressBarProps } from "../ProgressBar";

const Pill: React.FC<ProgressBarProps> = ({
  value,
  strokeWidth = 3,
  trackColor,
  progressColor,
  transitionSpeed,
  children,
}) => {
  const progressRef = useRef<SVGRectElement | null>(null);
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
      {children}
      <svg width="auto" height="auto" viewBox="0 0 60 115">
        <rect
          width="47.835606"
          height="97.835609"
          x="6.0821972"
          y="8.5821953"
          ry="24.086977"
          rx="23.917803"
          stroke={trackColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect
          className="progress"
          ref={progressRef}
          width="47.835606"
          height="97.835609"
          x="6.0821972"
          y="8.5821953"
          ry="24.086977"
          rx="23.917803"
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

export default Pill;
