import { useState, useRef, useEffect, type PropsWithChildren } from 'react';

import { BaseAccordionProps } from '../interfaces';

export const usePrerenderedContent = (props: PropsWithChildren<BaseAccordionProps>) => {
  const { children } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [render, setRender] = useState<boolean>(false);

  useEffect(() => setRender(true), [children]);

  useEffect(() => {
    if (!contentRef.current || !containerRef.current) return;

    containerRef.current.style.setProperty(
      '--acdn-max-open-height',
      `${contentRef.current.getBoundingClientRect().height}px`,
    );

    setRender(false);
  }, [render]);

  return {
    containerRef,
    contentRef,
    render,
  };
};
