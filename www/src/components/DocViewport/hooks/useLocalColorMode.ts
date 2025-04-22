import { useState, useCallback, useEffect } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

type LocalColorMode = 'dark' | 'light' | 'color';

export const useLocalColorMode = () => {
  const { colorMode } = useColorMode();

  const [localColorMode, setLocalColorMode] = useState<LocalColorMode>(colorMode);

  const handleLocalColorMode = useCallback((mode: LocalColorMode) => {
    setLocalColorMode(mode);
  }, []);

  useEffect(() => {
    setLocalColorMode(colorMode);
  }, [colorMode]);

  return {
    globalColorMode: colorMode,
    localColorMode,
    handleLocalColorMode,
  };
};
