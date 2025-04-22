import React, { useEffect, useContext } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

import { LayoutContext } from '../../context';

const Component = () => {
  const { toggleMode } = useContext(LayoutContext);

  useEffect(() => {
    const currentTheme = document.querySelector('html').dataset.theme as 'light' | 'dark';
    toggleMode(currentTheme);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

export const ModeWatcher = () => <BrowserOnly>{() => <Component />}</BrowserOnly>;
