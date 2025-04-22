import React from 'react';

import { FigmaSlide } from '../../../../src/components/FigmaSlide/FigmaSlide';
import colorSchema from './properties/base.png';
import state from './properties/collection.png';
import shape from './properties/swap.png';

export const FIGMA_SETTINGS = [
  <FigmaSlide src={colorSchema} title='base' />,
  <FigmaSlide src={state} title='collection' />,
  <FigmaSlide src={shape} title='swap' />,
];