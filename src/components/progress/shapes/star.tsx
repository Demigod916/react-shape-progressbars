import React, { useEffect, useRef, useState } from "react";
import { ProgressBarProps } from "../ProgressBar";

const Star: React.FC<ProgressBarProps> = ({
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
      <div style={{ position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", top:'2.5%' }}>
        {children}
      </div>
      <svg width="auto" height="auto" viewBox="0 0 115 115">
        <path
          d="m 36.68406,-53.458474 c 1.387712,-5.15e-4 18.653184,41.001244 19.776169,41.816504 1.122986,0.815259 45.456071,4.5325396 45.885391,5.852173 0.42931,1.3196335 -33.230352,30.410313 -33.658688,31.730265 -0.428337,1.319952 9.735997,44.631925 8.613617,45.448019 C 76.178169,72.20458 38.10988,49.18185 36.722168,49.182365 35.334456,49.18288 -2.716727,72.233872 -3.8397125,71.418612 -4.962698,70.603352 5.1694713,27.283842 4.7401547,25.964209 4.3108381,24.644576 -29.37042,-4.4211015 -28.942083,-5.7410534 c 0.428337,-1.3199518 44.758651,-5.0701506 45.881031,-5.8862446 1.12238,-0.816093 18.3574,-41.830661 19.745112,-41.831176 z"
          transform="matrix(0.73889262,0,0,0.77575386,30.44047,50.496367)"
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth + "px"}
          strokeLinecap="round"
        />

        <path
          ref={progressRef}
          className="progress"
          d="m 36.68406,-53.458474 c 1.387712,-5.15e-4 18.653184,41.001244 19.776169,41.816504 1.122986,0.815259 45.456071,4.5325396 45.885391,5.852173 0.42931,1.3196335 -33.230352,30.410313 -33.658688,31.730265 -0.428337,1.319952 9.735997,44.631925 8.613617,45.448019 C 76.178169,72.20458 38.10988,49.18185 36.722168,49.182365 35.334456,49.18288 -2.716727,72.233872 -3.8397125,71.418612 -4.962698,70.603352 5.1694713,27.283842 4.7401547,25.964209 4.3108381,24.644576 -29.37042,-4.4211015 -28.942083,-5.7410534 c 0.428337,-1.3199518 44.758651,-5.0701506 45.881031,-5.8862446 1.12238,-0.816093 18.3574,-41.830661 19.745112,-41.831176 z"
          transform="matrix(0.73889262,0,0,0.77575386,30.44047,50.496367)"
          fill="none"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={pathLength}
          strokeDashoffset={strokeDashoffsetValue}
          style={{
            transition: `stroke-dashoffset ${transitionSpeed}s linear`,
          }}
        />
      </svg>
    </>
  );
};

export default Star;
