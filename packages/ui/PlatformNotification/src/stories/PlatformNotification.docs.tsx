import React from 'react';
import { DocsObjectType, ArgsTable } from '@pcbl-ui-v4/storybook-components';

import { PlatformNotification } from '../index';

export const docs: DocsObjectType = {
  size: {
    anchorId: 'size',
    anchorTitle: 'Size',
    anchorText: 'Size',
    anchorInfo: (
      <>
        <p>
          Размер platformNotification определяется через свойство <b>size</b>, значение по умолчанию default.
        </p>
      </>
    ),
    DemoComponent: <>"Demo:PlatformNotificationSize:hideToolbar:multiplePreview"</>,
  },
  appearance: {
    anchorId: 'appearance',
    anchorTitle: 'Appearance',
    anchorText: 'appearance',
    anchorInfo: (
      <>
        <p>
          Цвета platformNotification определяется через свойство <b>appearance</b>, значение по умолчанию primary.
        </p>
      </>
    ),
    DemoComponent: <>"Demo:PlatformNotificationAppearance:hideToolbar:multiplePreview"</>,
  },
  properties: {
    anchorId: 'properties',
    anchorText: 'Properties',
    anchorTitle: 'Properties',
    anchorInfo: '',
    DemoComponent: <ArgsTable of={PlatformNotification} />,
  },
};
