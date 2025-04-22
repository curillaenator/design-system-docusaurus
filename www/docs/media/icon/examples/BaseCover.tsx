import React from 'react';

import { useViewportContext } from '../../../../src/components/DocViewport';
import lightCover from '../assets/lightCover.png';
import darkCover from '../assets/darkCover.png';
import colorfulCover from '../assets/colorfulCover.png';

const map = {
  light: <img src={lightCover} alt='light cover' />,
  dark: <img src={darkCover} alt='dark cover' />,
  color: <img src={colorfulCover} alt='colored cover' />,
};

export const BaseCover = () => {
  const { colorMode } = useViewportContext();

  return map[colorMode];
};
