import React, { useEffect, useRef, useState } from "react";
import { ProgressBarProps } from "../ProgressBar";

const Circle: React.FC<ProgressBarProps> = ({
  value,
  strokeWidth = 3,
  trackColor,
  progressColor,
  transitionSpeed,
  children,
}) => {
  const progressRef = useRef<SVGCircleElement | null>(null);
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
      <svg width="auto" height="auto" viewBox="0 0 115 115">
        <circle
          cy="57.531845"
          cx="-57.531845"
          transform="rotate(-90)"
          r="48.999363"
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          className="progress"
          ref={progressRef}
          cy="57.531845"
          cx="-57.531845"
          transform="rotate(-90)"
          r="48.999363"
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

export default Circle;
