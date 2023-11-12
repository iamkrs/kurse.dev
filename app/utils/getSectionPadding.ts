'use client';

import { getWindowSize, WindowSize } from './getWindowSize';

export const getSectionPadding = (windowSize: WindowSize = getWindowSize()) => {
  const factor = 0.166;
  const sectionPadding = {
    x: Math.floor(windowSize.width * factor),
    y: Math.floor(windowSize.width * factor),
  };

  return sectionPadding;
};
