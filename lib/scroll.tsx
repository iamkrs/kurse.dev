'use client';

import { selectPreventScroll, useSelector } from 'lib/redux';
import { usePathname } from 'next/navigation';
import {
  FC,
  MutableRefObject,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useRef,
} from 'react';

export const ScrollContext = createContext<ScrollContextProps>(
  {} as ScrollContextProps
);

export const ScrollProvider: FC<PropsWithChildren> = ({ children }) => {
  const listeners = useRef<((params: { scroll: number }) => void)[]>([]);
  const preventScroll = useSelector(selectPreventScroll);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ left: 0, behavior: 'instant' });
  }, [pathname]);

  useEffect(() => {
    const isDesktop = window.innerWidth > 771;

    if (typeof window !== 'undefined') {
      const handleScrollEvent = (e: Event) => {
        if (isDesktop) {
          listeners.current.forEach((cb) => cb({ scroll: window.scrollX }));
        }
      };

      const handleWheelEvent = (e: WheelEvent) => {
        if (isDesktop && !preventScroll) {
          window.scrollTo(window.scrollX + e.deltaY, 0);
        }
      };

      window.addEventListener('scroll', handleScrollEvent, { passive: true });
      window.addEventListener('wheel', handleWheelEvent, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScrollEvent);
        window.removeEventListener('wheel', handleScrollEvent);
      };
    }
  }, [preventScroll]);

  return (
    <ScrollContext.Provider
      value={{
        listeners,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = (
  callback?: ({ scroll }: { scroll: number }) => void
) => {
  const { listeners } = useContext(ScrollContext);

  useEffect(() => {
    if (callback) {
      listeners.current.push(callback);

      return () => {
        listeners.current = listeners.current.filter(
          (cb: (params: { scroll: number }) => void) => cb !== callback
        );
      };
    }
  }, [callback]);

  return {
    listeners,
  };
};

type ScrollCallback = (params: { scroll: number }) => void;

type ScrollContextProps = {
  listeners: MutableRefObject<ScrollCallback[]>;
};
