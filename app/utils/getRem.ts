'use client';

export const getRem = () => {
  const rem = getComputedStyle(document.documentElement).fontSize;
  const value = Number(rem.replace('px', ''));

  return value;
};
