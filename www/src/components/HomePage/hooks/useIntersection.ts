import { useRef, useEffect, useContext } from 'react';

import { MainPageContext } from '../context';

export const useIntersection = () => {
  const ref = useRef<HTMLElement>(null);
  const { setActiveTabId } = useContext(MainPageContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveTabId(entry.target.id);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-128px 0px -30px 0px',
      },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [setActiveTabId]);

  return {
    ref,
  };
};
