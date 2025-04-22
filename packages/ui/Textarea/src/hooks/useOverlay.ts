import { useEffect, useState, useCallback } from 'react';
import cn from 'classnames';

import { UseOverlayFn } from '../interfaces';
import styles from '../styles/textarea.module.scss';

interface IsOverlay {
  top: boolean;
  bottom: boolean;
}

export const useOverlay: UseOverlayFn = (textareaRef) => {
  const [isOverlay, setIsOverlay] = useState<IsOverlay>({ top: false, bottom: false });

  const calculateScrollSettings = useCallback((element: HTMLTextAreaElement) => {
    const elementScrollHeight = element?.scrollHeight;
    const elementScrollTop = element?.scrollTop;
    const elementClientHeight = element?.clientHeight;

    const isOverayTop = elementScrollTop > 0;
    const isOverlayBottom = elementScrollTop + elementClientHeight < elementScrollHeight;

    setIsOverlay((prev) => {
      if (prev.top !== isOverayTop || prev.bottom !== isOverlayBottom) {
        return {
          top: isOverayTop,
          bottom: isOverlayBottom,
        };
      }

      return prev;
    });
  }, []);

  useEffect(() => {
    const handleScroll = (evt: Event) => {
      evt.stopPropagation();
      const element = evt.target as HTMLTextAreaElement;
      calculateScrollSettings(element);
    };

    const textAreaEL = textareaRef.current;

    textAreaEL?.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      textAreaEL?.removeEventListener('scroll', handleScroll);
    };
  }, [textareaRef, calculateScrollSettings]);

  useEffect(() => {
    const textAreaEL = textareaRef.current;

    if (textAreaEL) {
      calculateScrollSettings(textAreaEL);
    }
  }, [calculateScrollSettings, textareaRef]);

  return cn(styles.wrapper, {
    [styles.wrapper__withOverlay]: isOverlay.top || isOverlay.bottom,
    [styles.wrapper__withOverlay_top]: isOverlay.top,
    [styles.wrapper__withOverlay_bottom]: isOverlay.bottom,
  });
};
