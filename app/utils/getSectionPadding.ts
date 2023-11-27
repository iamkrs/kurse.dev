'use client';

import { getRem } from './getRem';

export const getSectionPadding = () => {
  const x = 10 * getRem();

  return { x, y: x };
};
