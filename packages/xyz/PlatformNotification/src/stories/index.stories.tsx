import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Layout } from '@pcbl-ui-v4/storybook-components';

import ChangeLog from '../../CHANGELOG.md';

import PlatformNotificationStory from './PlatformNotificationStory';
import { mapPropsToIcons } from '@kit-xyz/icon/src/utils/icon/mapPropsToIcons';

export default {
  title: 'Components / Notification',
  component: PlatformNotificationStory,
  parameters: {
    changelog: ChangeLog,
  },
  decorators: [
    (StoryComponent: Story) => (
      <Layout>
        <div
          style={{
            width: '100%',
            minHeight: 320,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StoryComponent />
        </div>
      </Layout>
    ),
  ],
  argTypes: {
    size: {
      defaultValue: 'default',
      description: 'размеры',
      control: { type: 'inline-radio' },
      options: ['default', 'compact'],
    },

    appearance: {
      defaultValue: 'primary',
      description: 'размеры',
      control: { type: 'inline-radio' },
      options: ['primary', 'light', 'dark'],
    },

    title: {
      defaultValue: 'Ваш браузер устарел',
      control: { type: 'text' },
    },

    description: {
      defaultValue: 'Чтобы платформа работала корректно, рекомендуем вам обновить',
      control: { type: 'text' },
    },

    closeButton: {
      control: { type: 'boolean' },
      description: 'Кнопка закрыть',
      defaultValue: true,
    },

    iconName: {
      defaultValue: 'circle',
      description: 'Иконка',
      control: { type: 'select' },
      options: Object.keys(mapPropsToIcons),
    },
    dataTestId: {
      table: { disable: true },
    },
  },
} as Meta;

export const Default = PlatformNotificationStory;
