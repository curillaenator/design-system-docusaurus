import React from 'react';

import { ArgsTable } from '@pcbl-ui-v4/storybook-components';

import { COMPONENT_NAME } from '../COMPONENT_NAME';

const docs = {
  base: {
    anchorId: 'base',
    anchorText: 'Base',
    anchorTitle: 'Base',
    anchorInfo: <p>По умолчанию компонент уже обладает закрепленными размерами высоты и ширины</p>,
    DemoComponent: <>"Demo:COMPONENT_NAMEBase:hideToolbar:multiplePreview"</>,
  },

  properties: {
    anchorId: 'properties',
    anchorText: 'Properties',
    anchorTitle: 'Properties',
    anchorInfo: '',
    DemoComponent: <ArgsTable of={COMPONENT_NAME} />,
  },
};

export { docs };
