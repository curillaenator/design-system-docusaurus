import React from 'react';
import { DocsGenerator, DocsObjectType, ArgsTable } from '@pcbl-ui-v4/storybook-components';

import { Divider } from '../index';

export const docs: DocsObjectType = {
  base: {
    anchorId: 'base',
    anchorText: 'Base',
    anchorTitle: 'Base',
    anchorInfo: (
      <>
        В дефолтном варианте разделтель отображается линией со скруглеными краями (актуально для дисплеев retina), скругление управляется через prop{' '}
        <b>shape</b>
      </>
    ),
    DemoComponent: <>"Demo:DividerBaseExample:hideToolbar:multiplePreview"</>,
  },

  orientation: {
    anchorId: 'orientation',
    anchorText: 'Orientation',
    anchorTitle: 'Orientation',
    anchorInfo: (
      <>
        Разделитель может быть горизонтальным или вертикальным между двумя смежными блоками. Prop - <b>orientation</b>
      </>
    ),
    DemoComponent: <>"Demo:DividerOrientationExample:hideToolbar:multiplePreview"</>,
  },

  size: {
    anchorId: 'size',
    anchorText: 'Size',
    anchorTitle: 'Size',
    anchorInfo: (
      <>
        Размер разделителя определяется через свойство <b>size</b>, влияющее на толщину линии и размеры контента.
      </>
    ),
    DemoComponent: <>"Demo:DividerSizeExample:hideToolbar:multiplePreview"</>,
  },

  type: {
    anchorId: 'type',
    anchorText: 'Type',
    anchorTitle: 'Type',
    anchorInfo: (
      <>
        Наличие контента внутри линии определяется через props - <b>text</b>, <b>textSecondary</b>, <b>iconLeftName</b> и <b>iconRightName</b>. В
        каждом из текстовых блоков может не более <b>40</b> символов.
      </>
    ),
    DemoComponent: <>"Demo:DividerTypeExample:hideToolbar:multiplePreview"</>,
  },

  appearance: {
    anchorId: 'appearance',
    anchorText: 'Color',
    anchorTitle: 'Color',
    anchorInfo: (
      <>
        Компонент может иметь один из вариантов цветовой схемы линии через prop <b>appearance</b>
      </>
    ),
    DemoComponent: <>"Demo:DividerAppearanceExample:hideToolbar:multiplePreview"</>,
  },

  state: {
    anchorId: 'state',
    anchorText: 'State',
    anchorTitle: 'State',
    anchorInfo: (
      <>
        Компонент может иметь состояние <b>disabled</b>.
      </>
    ),
    DemoComponent: <>"Demo:DividerStateExample:hideToolbar:multiplePreview"</>,
  },

  properties: {
    anchorId: 'properties',
    anchorText: 'Properties',
    anchorTitle: 'Properties',
    anchorInfo: '',
    DemoComponent: <ArgsTable of={Divider} />,
  },
};

export const DividerStoryDocs = () => {
  return <DocsGenerator docs={docs} />;
};
