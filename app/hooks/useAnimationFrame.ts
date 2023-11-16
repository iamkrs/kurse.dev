import { useEffect, useRef } from 'react';

const DEFAULT_FPS = 30;

interface Options {
  fps?: number;
}

export const useAnimationFrame = (
  callback: (timestamp: number) => void,
  options?: Options
) => {
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const fps = options?.fps || DEFAULT_FPS;
  const frameDuration = 1000 / fps;

  const draw = (timestamp: number) => {
    requestRef.current = requestAnimationFrame(draw);

    if (previousTimeRef.current === undefined) {
      previousTimeRef.current = timestamp;
    }

    const deltaTime = timestamp - previousTimeRef.current;

    if (deltaTime > frameDuration) {
      callback(timestamp);
      previousTimeRef.current = timestamp;
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(draw);
    return () =>
      requestRef.current ? cancelAnimationFrame(requestRef.current) : undefined;
  }, [options?.fps]);
};
