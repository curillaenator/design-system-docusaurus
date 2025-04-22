import { useState, useCallback, useRef, useEffect } from 'react';

import { InputProps, IsOverlay } from '../interfaces';

export const useInputScroll = (value: InputProps['value']) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isOverlay, setIsOverlay] = useState<IsOverlay>({ left: false, right: false });

  const calculateScrollSettings = useCallback((inputEl: HTMLInputElement) => {
    const elementScrollWidth = inputEl.scrollWidth;
    const elementScrollLeft = inputEl.scrollLeft;
    const elementClientWidth = inputEl.clientWidth;

    const isOverlayLeft = elementScrollLeft > 0;
    const isOverlayRight = Math.ceil(elementScrollLeft) + elementClientWidth < elementScrollWidth;

    setIsOverlay((prev) => {
      if (prev.left !== isOverlayLeft || prev.right !== isOverlayRight) {
        return {
          left: isOverlayLeft,
          right: isOverlayRight,
        };
      }

      return prev;
    });
  }, []);

  const handleScroll = useCallback(() => {
    const inputEl = inputRef.current;

    if (inputEl) {
      calculateScrollSettings(inputEl);
    }
  }, [calculateScrollSettings]);

  useEffect(() => {
    if (inputRef.current) {
      calculateScrollSettings(inputRef.current);
    }
  }, [value, calculateScrollSettings]);

  return { inputRef, isOverlay, handleScroll };
};
