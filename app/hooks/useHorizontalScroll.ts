'use client';

import { useSelector } from 'lib/redux';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export function useHorizontalScroll() {
  const elRef = useRef<HTMLElement | null>(null);
  const preventScroll = useSelector((store) => store.app.preventScroll);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ left: 0, behavior: 'instant' });
  }, [pathname]);

  useEffect(() => {
    const el: any = window;
    if (el) {
      const onWheel = (e: any) => {
        if (window.innerWidth > 771) {
          if (e.deltaY == 0) return;

          if (!preventScroll) {
            el.scrollTo(el.scrollX + e.deltaY, 0);
          }
        } else {
          if (!preventScroll) {
            el.scrollTo(0, el.scrollY + e.deltaY);
          }
          if (preventScroll) {
            e.preventDefault();
            el.scrollTo(0, el.scrollY);
          }
        }
      };
      el.addEventListener('wheel', onWheel, { passive: true });
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, [preventScroll]);

  return elRef;
}
