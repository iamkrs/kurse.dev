import { useEffect, useRef } from "react";
import { useAppSelector } from ".";

export function useHorizontalScroll() {
  const elRef = useRef<HTMLElement | null>(null);
  const preventScroll = useAppSelector((store) => store.app.preventScroll);

  useEffect(() => {
    const el: any = elRef.current;
    if (el) {
      const onWheel = (e: any) => {
        if (window.innerWidth > 771) {
          if (e.deltaY == 0) return;
          e.preventDefault();
          if (!preventScroll) {
            el.scrollTo({
              left: el.scrollLeft + e.deltaY,
              behavior: "smooth",
            });
          }
        } else {
          if (preventScroll) {
            e.preventDefault();
            el.scrollTo({
              top: el.scrollTop,
              behavior: "smooth",
            });
          }
        }
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [preventScroll]);
  return elRef;
}
