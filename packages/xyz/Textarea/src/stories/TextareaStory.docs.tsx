import React from 'react';
import { docs } from '@kit-base/textarea/src/stories/TextareaStory.docs';
import { ArgsTable } from '@pcbl-ui-v4/storybook-components';

import { Textarea } from '../Textarea';

const updatedDocs = {
  ...docs,
  properties: {
    anchorId: 'properties',
    anchorText: 'Properties',
    anchorTitle: 'Properties',
    anchorInfo: '',
    DemoComponent: <ArgsTable of={Textarea} />,
  },
};

export { updatedDocs as docs };
