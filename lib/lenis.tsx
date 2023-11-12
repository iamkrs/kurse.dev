'use client';

import Lenis from '@studio-freight/lenis';
import { useMediaQuery } from 'app/hooks';

import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

export const LenisContext = createContext<Lenis | null>(null);

export const LenisProvider: FC<PropsWithChildren> = ({ children }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const isDesktop = useMediaQuery('(min-width: 800px)');

  useEffect(() => {
    window.scrollTo(0, 0);

    const orientation = isDesktop ? 'horizontal' : 'vertical';
    const gestureOrientation = orientation;

    const lenisInstance = new Lenis({
      orientation,
      gestureOrientation,
      smoothWheel: true,
      smoothTouch: true,
      syncTouch: true,
    });

    setLenis(lenisInstance);

    return () => {
      lenis?.destroy();
      setLenis(null);
    };
  }, [isDesktop]);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
};

export const useLenis = () => {
  const context = useContext(LenisContext);

  return context;
};
