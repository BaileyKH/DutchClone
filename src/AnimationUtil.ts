import { useEffect, useRef, MutableRefObject } from 'react';

type CustomCallback<T extends HTMLElement> = (
  entries: IntersectionObserverEntry[],
  textRefs: MutableRefObject<T | null>[]
) => void;

const transitionHelper = <T extends HTMLElement>(
  callback: CustomCallback<T>,
  options: IntersectionObserverInit,
  textRefs: MutableRefObject<T | null>[]
) => {
  const parentRef = useRef<HTMLDivElement | null>(null); 

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      callback(entries, textRefs);
    };

    const observer = new IntersectionObserver(observerCallback, options);
    const currentParent = parentRef.current;

    if (currentParent) {
      // Observe each ref in the array
      textRefs.forEach((textRef) => {
        if (textRef.current) {
          observer.observe(textRef.current);
        }
      });
    }

    return () => {
      if (currentParent) {
        textRefs.forEach((textRef) => {
          if (textRef.current) {
            observer.unobserve(textRef.current);
          }
        });
      }
    };
  }, [callback, options, textRefs]);

  return { parentRef };
};

export default transitionHelper;
