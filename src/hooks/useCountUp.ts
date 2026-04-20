import { useEffect, useRef, useState } from 'react';

export function useCountUp(target: number, options: { duration?: number; start?: boolean } = {}) {
  const { duration = 1600, start = true } = options;
  const [value, setValue] = useState(0);
  const startTs = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const step = (ts: number) => {
      if (startTs.current === null) startTs.current = ts;
      const p = Math.min(1, (ts - startTs.current) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
      else setValue(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return value;
}
