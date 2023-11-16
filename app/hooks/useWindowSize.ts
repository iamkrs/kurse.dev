'use client';

import { useLayoutEffect, useState } from 'react';
import { getWindowSize } from '../utils';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const handleSize = () => {
      setWindowSize(getWindowSize);
      console.log(getWindowSize());
    };

    handleSize();
    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return windowSize;
};
