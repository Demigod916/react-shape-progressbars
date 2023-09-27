import { useEffect, useRef, useState } from 'react';

export const usePathLength = () => {
  const pathRef = useRef<SVGPathElement | SVGCircleElement | SVGRectElement | null>(null);
  const [pathLength, setPathLength] = useState<number>(0);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []);

  return { pathRef, pathLength };
};