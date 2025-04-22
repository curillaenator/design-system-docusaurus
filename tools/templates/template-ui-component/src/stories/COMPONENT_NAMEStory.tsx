import React from 'react';
import { Story } from '@storybook/react';

import { COMPONENT_NAME } from '../COMPONENT_NAME';
import { COMPONENT_NAMEProps } from '../interfaces';
import COMPONENT_NAMEDocs from './COMPONENT_NAMEDocs.mdx';

const COMPONENT_NAMEStory: Story<COMPONENT_NAMEProps> = (props) => {
  return <COMPONENT_NAME {...props} />;
};

COMPONENT_NAMEStory.parameters = {
  controls: { hideNoControlsWarning: true },
  docs: {
    page: COMPONENT_NAMEDocs,
  },
};

export default COMPONENT_NAMEStory;
