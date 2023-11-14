'use client';

import { useSelector } from 'lib/redux';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function useHorizontalScroll() {
  const preventScroll = useSelector((store) => store.app.preventScroll);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ left: 0, behavior: 'instant' });
  }, [pathname]);

  useEffect(() => {
    const el: any = window;

    if (el) {
      const onWheel = (e: any) => {
        var direction = e.detail < 0 || e.wheelDelta > 0 ? 1 : -1;

        console.log({ direction });
        const velocity = direction * -133;

        if (window.innerWidth > 771) {
          if (e.deltaY == 0) return;
          if (!preventScroll) {
            e.preventDefault();
            el.scrollTo(el.scrollX + velocity * 0.333, 0);
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
      el.addEventListener('wheel', onWheel, { passive: false });
      // TODO: Test firefox
      // someEl.addEventListener('DOMMouseScroll',handleScroll,false); // for Firefox
      // someEl.addEventListener('mousewheel',    handleScroll,false);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, [preventScroll]);
}
