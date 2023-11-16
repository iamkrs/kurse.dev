'use client';

import { WindowSize, getWindowSize } from './getWindowSize';

export const getSectionPadding = (windowSize: WindowSize = getWindowSize()) => {
  const factor = 0.166;
  const sectionPadding = {
    x: Math.floor(windowSize.width * factor),
    y: Math.floor((windowSize.width * factor) / 2),
  };

  return sectionPadding;
};
