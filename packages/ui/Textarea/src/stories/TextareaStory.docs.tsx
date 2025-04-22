import React from 'react';
import { DocsGenerator, DocsObjectType, ArgsTable, WireframeTable } from '@pcbl-ui-v4/storybook-components';

import ta_wireframe_2x from './assets/ta_wireframe_2x.png';

const WIREFRAME_DATA = [
  { size: '2xl', x: 24, y: 24, a: 20, b: 20, c: 16, v: 14, r: 16, u: 6, iconSize: '24', textSize: '16 px' },
  { size: 'xl', x: 22, y: 22, a: 17, b: 17, c: 16, v: 14, r: 16, u: 6, iconSize: '22', textSize: '16 px' },
  { size: 'l', x: 20, y: 20, a: 14, b: 14, c: 12, v: 14, r: 16, u: 6, iconSize: '20', textSize: '14 px' },
  { size: 'm', x: 18, y: 18, a: 11, b: 11, c: 10, v: 14, r: 16, u: 6, iconSize: '18', textSize: '14 px' },
  { size: 's', x: 16, y: 16, a: 8, b: 8, c: 6, v: 14, r: 16, u: 6, iconSize: '16', textSize: '12 px' },
  { size: 'xs', x: 14, y: 16, a: 4, b: 5, c: 6, v: 14, r: 16, u: 6, iconSize: '14', textSize: '12 px' },
];

export const docs: DocsObjectType = {
  basic: {
    anchorId: 'size',
    anchorText: 'Size',
    anchorTitle: 'Size',
    anchorInfo: null,
    DemoComponent: <>"Demo:TextareaSize:hideToolbar:multiplePreview"</>,
  },
  shape: {
    anchorId: 'shape',
    anchorText: 'Shape',
    anchorTitle: 'Shape',
    anchorInfo: null,
    DemoComponent: <>"Demo:TextareaForm:hideToolbar:multiplePreview"</>,
  },
  variant: {
    anchorId: 'variant',
    anchorText: 'Variant',
    anchorTitle: 'Variant',
    anchorInfo: null,
    DemoComponent: <>"Demo:TextareaVariant:hideToolbar:multiplePreview"</>,
  },
  color: {
    anchorId: 'appearance',
    anchorText: 'Appearance',
    anchorTitle: 'Appearance',
    anchorInfo: null,
    DemoComponent: <>"Demo:TextareaColor:hideToolbar:multiplePreview"</>,
  },
  wireframe: {
    anchorId: 'wireframe',
    anchorText: 'Wireframe',
    anchorTitle: 'Wireframe',
    anchorInfo: '',
    DemoComponent: <WireframeTable blueprint={ta_wireframe_2x} data={WIREFRAME_DATA} />,
  },
  properties: {
    anchorId: 'properties',
    anchorText: 'Properties',
    anchorTitle: 'Properties',
    anchorInfo: '',
    DemoComponent: <ArgsTable />,
  },
};

export const TextareaStoryDocs = () => <DocsGenerator docs={docs} />;
