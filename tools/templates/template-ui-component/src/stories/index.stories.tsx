import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Layout } from '@pcbl-ui-v4/storybook-components';

import ChangeLog from '../../CHANGELOG.md';
import { COMPONENT_NAME as COMPONENT_NAMEComponent } from '../COMPONENT_NAME';

import COMPONENT_NAMEStory from './COMPONENT_NAMEStory';
import styles from './story.module.scss';

export default {
  title: 'Development / COMPONENT_NAME',
  component: COMPONENT_NAMEComponent,
  parameters: {
    changelog: ChangeLog,
  },
  decorators: [
    (StoryComponent: Story) => (
      <Layout>
        <div className={styles.canvas}>
          <StoryComponent />
        </div>
      </Layout>
    ),
  ],
} as Meta;

export const Default = COMPONENT_NAMEStory;
