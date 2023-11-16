'use client';

export type WindowSize = {
  width: number;
  height: number;
};

export const getWindowSize: () => WindowSize = () => ({
  width: typeof window !== 'undefined' ? window.innerWidth : 0,
  height: typeof window !== 'undefined' ? window.innerHeight : 0,
});
