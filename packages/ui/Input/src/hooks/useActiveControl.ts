import { useState, useCallback, useRef } from 'react';
import { useClickAway } from '@kit-base/uikit-utils';

export const useActiveControl = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>(false);
  const setIsActive = useCallback((act: boolean) => setActive(act), []);

  useClickAway(wrapperRef, () => setActive(false));

  return {
    wrapperRef,
    active,
    setActive: setIsActive,
  };
};
