import { useState, useEffect } from 'react';

export const useSlider = (length: number) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, 6000);

    return () => clearInterval(timer);
  }, [length]);

  return { index, setIndex };
};
