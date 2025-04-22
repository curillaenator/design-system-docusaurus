import React from 'react';

import { CardProps } from '../interfaces';

import { Content } from './components/Content';

export const OVERLAYS: CardProps[] = [
  {
    id: 'docs-overlay-horizontal',
    title: 'Horizontal',
    children: <Content />,
  },
  {
    id: 'docs-overlay-vertical',
    title: 'Vertical',
    children: <Content vertical />,
  },
];
