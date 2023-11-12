import { useLenis } from 'lib/lenis';
import { useEffect } from 'react';

type UseScroll = (
  callback: ({ scroll }: { scroll: number }) => void,
  deps?: string[]
) => void;

export const useScroll: UseScroll = (callback, deps = []) => {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    lenis.on('scroll', callback);
    lenis.emit();

    return () => {
      lenis.off('scroll', callback);
    };
  }, [lenis, callback, [...deps]]);
};
