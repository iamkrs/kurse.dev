'use client';

import { useWindowSize } from 'app/hooks';
import { selectPreventScroll, useSelector } from 'lib/redux';
import { usePathname } from 'next/navigation';
import normalizeWheel from 'normalize-wheel';
import {
  FC,
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
  const windowSize = useWindowSize();

  useEffect(() => {
    window.scrollTo({ left: 0, behavior: 'instant' });
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDesktop = windowSize.width > 771;

      const handleScrollEvent = () => {
        const { scrollX, scrollY } = window;
        listeners.current.forEach((cb) =>
          cb({ scroll: isDesktop ? scrollX : scrollY })
        );
      };

      const handleWheelEvent = (e: WheelEvent) => {
        if (isDesktop && !preventScroll) {
          // TODO - persist scroll on resize
          // when (desktop <-> mobile)
          // invert (x, y)
          const normalizedEvent = normalizeWheel(e);
          const deltaY = normalizedEvent.pixelY;
          const scrollX = window.scrollX + deltaY;
          window.scrollTo(scrollX + e.deltaY, 0);
        }
      };

      window.addEventListener('scroll', handleScrollEvent, { passive: true });
      window.addEventListener('wheel', handleWheelEvent, { passive: true });

      handleWheelEvent({ deltaY: 0 } as WheelEvent);
      handleScrollEvent();

      return () => {
        window.removeEventListener('scroll', handleScrollEvent);
        window.removeEventListener('wheel', handleWheelEvent);
      };
    }
  }, [preventScroll, windowSize]);

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
  listeners: React.MutableRefObject<ScrollCallback[]>;
};
