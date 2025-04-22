import React from 'react';
import { docs } from '@kit-base/platformNotification/src/stories/PlatformNotification.docs';

import PlatformNotificationExample from './examples/PlatformNotificationExample';
import { PlatformNotification } from '../PlatformNotification';
import { ArgsTable } from '@pcbl-ui-v4/storybook-components';

const updatedDocs = {
  ...docs,
  appExample: {
    anchorId: 'app-example',
    anchorText: 'Application example',
    anchorTitle: 'Application example',
    anchorInfo: 'Применение кнопки на финальных экранах приложения.',
    DemoComponent: <PlatformNotificationExample />,
  },
  properties: {
    anchorId: 'properties',
    anchorText: 'Properties',
    anchorTitle: 'Properties',
    anchorInfo: '',
    DemoComponent: <ArgsTable of={PlatformNotification} />,
  },
};

export { updatedDocs as docs };
