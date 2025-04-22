import { useEffect, useState, useRef, MouseEvent } from 'react';

import { UseResizeFn } from '../interfaces';

import { getComputedDimensions } from './helpers';

export const useResize: UseResizeFn = (textareaRef, resize = 'both') => {
  const [{ startWidth, startHeight }, setDimensions] = useState({ startWidth: 0, startHeight: 0 });
  const startPosition = useRef<number[] | null[]>([null, null]);
  const contentNode = textareaRef.current?.parentNode?.parentNode as HTMLDivElement;

  useEffect(
    () => () => {
      // сброс стилей при переключении режима отображения resize
      if (contentNode) {
        contentNode.setAttribute('style', '');
      }

      if (contentNode?.nextElementSibling) {
        (contentNode.nextElementSibling as HTMLDivElement).setAttribute('style', '');
      }
    },
    [contentNode, resize],
  );

  useEffect(() => {
    const dimensionsLocal = getComputedDimensions(contentNode);
    setDimensions({ startWidth: dimensionsLocal.width, startHeight: dimensionsLocal.height });
  }, [contentNode]);

  const doDrag = (e: MouseEvent & Event) => {
    if (!contentNode) return;
    const dimensionsLocal = getComputedDimensions(contentNode);
    setDimensions({ startWidth: dimensionsLocal.width, startHeight: dimensionsLocal.height });
    const startXLocal = startPosition.current[0] || e.clientX;
    const startYLocal = startPosition.current[1] || e.clientY;

    if (resize !== 'vertical') {
      const width = startWidth + e.clientX - startXLocal;
      contentNode.style.width = `${width}px`;
      if (contentNode.nextElementSibling) {
        (contentNode.nextElementSibling as HTMLDivElement).style.width = `${width}px`;
      }
    }
    if (resize !== 'horizontal') {
      const height = startHeight + e.clientY - startYLocal;
      contentNode.style.height = `${height}px`;
    }
  };

  const stopDrag = () => {
    document.documentElement.removeEventListener('mousemove', doDrag);
    document.documentElement.removeEventListener('mouseup', stopDrag);
  };

  const handleMouseDown = (e: MouseEvent<HTMLButtonElement>) => {
    startPosition.current = [e.clientX, e.clientY];
    document.documentElement.addEventListener('mousemove', doDrag);
    document.documentElement.addEventListener('mouseup', stopDrag);
  };

  return { handleMouseDown };
};
