import React from 'react';
import { DocsGenerator, DocsObjectType, ArgsTable, WireframeTable } from '@pcbl-ui-v4/storybook-components';

import blueprint from './assets/wireframe.png';

const WIREFRAME_DATA = [
  { size: '2xl', x: 24, y: 24, a: 20, b: 20, c: 16, iconSize: '2xl', textSize: 'm' },
  { size: 'xl', x: 22, y: 22, a: 17, b: 17, c: 16, iconSize: 'xl', textSize: 'm' },
  { size: 'l', x: 20, y: 20, a: 14, b: 14, c: 12, iconSize: 'l', textSize: 's' },
  { size: 'm', x: 18, y: 18, a: 11, b: 11, c: 10, iconSize: 'm', textSize: 's' },
  { size: 's', x: 16, y: 16, a: 8, b: 8, c: 6, iconSize: 's', textSize: 'xs' },
  { size: 'xs', x: 14, y: 16, a: 4, b: 5, c: 6, iconSize: 'xs', textSize: 'xs' },
];

export const docs: DocsObjectType = {
  size: {
    anchorId: 'size',
    anchorText: 'Size',
    anchorTitle: 'Size',
    anchorInfo: (
      <>
        <p>
          Размер управляется через <b>size</b>. Возможные размеры:
        </p>
      </>
    ),
    DemoComponent: <>"Demo:BubbleSize:hideToolbar:multiplePreview"</>,
  },

  shape: {
    anchorId: 'shape',
    anchorText: 'Shape',
    anchorTitle: 'Shape',
    anchorInfo: (
      <>
        <p>
          Форма управляется через <b>shape</b>. Возможные значения:
        </p>
      </>
    ),
    DemoComponent: <>"Demo:BubbleShape:hideToolbar:multiplePreview"</>,
  },

  variant: {
    anchorId: 'variant',
    anchorText: 'Variant',
    anchorTitle: 'Variant',
    anchorInfo: (
      <>
        <p>
          Тип компонента изменяется через <b>variant</b>. Возможные значения:
        </p>
      </>
    ),
    DemoComponent: <>"Demo:BubbleVariant:hideToolbar:multiplePreview"</>,
  },

  corner: {
    anchorId: 'corner',
    anchorText: 'Corner',
    anchorTitle: 'Corner',
    anchorInfo: (
      <>
        <p>
          Расположение уголка изменяется через <b>corner</b>. Возможные значения:
        </p>
      </>
    ),
    DemoComponent: <>"Demo:BubbleCorner:hideToolbar:multiplePreview"</>,
  },

  appearance: {
    anchorId: 'appearance',
    anchorText: 'Appearance',
    anchorTitle: 'Appearance',
    anchorInfo: (
      <>
        <p>
          Цвет компонента изменяется через <b>appearance</b>. Возможные значения:
        </p>
      </>
    ),
    DemoComponent: <>"Demo:BubbleAppearance:hideToolbar:multiplePreview"</>,
  },

  wireframe: {
    anchorId: 'wireframe',
    anchorText: 'Wireframe',
    anchorTitle: 'Wireframe',
    anchorInfo: '',
    DemoComponent: <WireframeTable blueprint={blueprint} data={WIREFRAME_DATA} />,
  },

  properties: {
    anchorId: 'properties',
    anchorText: 'Properties',
    anchorTitle: 'Properties',
    anchorInfo: '',
    DemoComponent: <ArgsTable />,
  },
};

export const BubbleStoryDocs = () => {
  return <DocsGenerator docs={docs} />;
};
