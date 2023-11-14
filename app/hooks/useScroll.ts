import { useEffect } from 'react';

type UseScroll = (
  callback: ({ scroll }: { scroll: number }) => void,
  deps?: string[]
) => void;

export const useScroll: UseScroll = (callback, deps = []) => {
  useEffect(() => {
    const scrollEventHandler = (e: Event) => {
      callback({ scroll: window.scrollX });
    };

    window.addEventListener('scroll', scrollEventHandler);

    return () => {
      window.removeEventListener('scroll', scrollEventHandler);
    };
  }, [callback, [...deps]]);
};
