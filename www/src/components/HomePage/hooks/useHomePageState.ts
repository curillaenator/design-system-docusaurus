import { useState, useCallback } from 'react';

export const useHomePageState = () => {
  const [width, setWidth] = useState<number>(1920);
  const handleWidth = useCallback((w: number) => setWidth(w), []);

  return {
    width,
    smoothed: true,
    cardsBorderRadius: 'l',
    setWidth: handleWidth,
  };
};
