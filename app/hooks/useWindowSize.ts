'use client';

import { useLayoutEffect, useState } from 'react';
import { getWindowSize } from '../utils';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize);
  const handleSize = () => setWindowSize(getWindowSize);

  useLayoutEffect(() => {
    handleSize();
    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return windowSize;
};
