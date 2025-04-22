import React from 'react';
import { DocsGenerator, DocsObjectType, ArgsTable, WireframeTable } from '@pcbl-ui-v4/storybook-components';

import blueprint from './assets/wireframe.png';

const WIREFRAME_DATA = [
  { size: '2xl', x: 24, y: 24, a: 20, b: 20, c: 20, iconSize: '2xl', textSize: 'm' },
  { size: 'xl', x: 20, y: 24, a: 16, b: 18, c: 18, iconSize: 'xl', textSize: 'm' },
  { size: 'l', x: 18, y: 22, a: 13, b: 15, c: 14, iconSize: 'l', textSize: 's' },
  { size: 'm', x: 16, y: 22, a: 9, b: 12, c: 12, iconSize: 'm', textSize: 's' },
  { size: 's', x: 14, y: 20, a: 6, b: 9, c: 8, iconSize: 's', textSize: 'xs' },
  { size: 'xs', x: 12, y: 20, a: 2, b: 6, c: 6, iconSize: 'xs', textSize: 'xs' },
];

export const docs: DocsObjectType = {
  base: {
    anchorId: 'base',
    anchorText: 'Base',
    anchorTitle: 'Base',
    anchorInfo: 'Базовый Chip',
    DemoComponent: <>"Demo:ChipBaseXYZ:hideToolbar:multiplePreview"</>,
  },

  size: {
    anchorId: 'size',
    anchorText: 'Size',
    anchorTitle: 'Size',
    anchorInfo: (
      <>
        Размер Chip определяется через параметр <b>size</b>.
      </>
    ),
    DemoComponent: <>"Demo:ChipSizeXYZ:hideToolbar:multiplePreview"</>,
  },

  shape: {
    anchorId: 'shape',
    anchorText: 'Shape',
    anchorTitle: 'Shape',
    anchorInfo: 'Определяет тип скругления компонента.',
    DemoComponent: <>"Demo:ChipShapeXYZ:hideToolbar:multiplePreview"</>,
  },

  appearance: {
    anchorId: 'appearance',
    anchorText: 'Appearance',
    anchorTitle: 'Appearance',
    anchorInfo: (
      <>
        Параметр <b>appearance</b> задает основной цвет компонента.
      </>
    ),
    DemoComponent: <>"Demo:ChipAppearanceXYZ:hideToolbar:multiplePreview"</>,
  },

  variant: {
    anchorId: 'variant',
    anchorText: 'Variant',
    anchorTitle: 'Variant',
    anchorInfo: (
      <>
        Определяет один из вариантов отображения компонента <b>Chip</b>: с заливкой и с тенью, с заливкой и без тени, без фона и без обводки, без фона
        с обводкой. В схеме, где <b>appearance: white</b> обводка не задана.
      </>
    ),
    DemoComponent: <>"Demo:ChipVariantXYZ:hideToolbar:multiplePreview"</>,
  },

  disabled: {
    anchorId: 'disabled',
    anchorText: 'Disabled',
    anchorTitle: 'Disabled',
    anchorInfo: (
      <>
        Состояние <b>disabled</b>
      </>
    ),
    DemoComponent: <>"Demo:ChipDisabledXYZ:hideToolbar:multiplePreview"</>,
  },

  content: {
    anchorId: 'content',
    anchorText: 'Content',
    anchorTitle: 'Content',
    anchorInfo: (
      <>
        В компонент можно передать текстовое содержимое в <i>children</i>, при необходимости можно добавить дополнительный текст через параметр{' '}
        <b>textSecondary</b>. Параметр <b>Icon</b> задает для компонента левую иконку.
      </>
    ),
    DemoComponent: <>"Demo:ChipContentXYZ:hideToolbar:multiplePreview"</>,
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

export const ChipStoryDocs = () => {
  return <DocsGenerator docs={docs} />;
};
