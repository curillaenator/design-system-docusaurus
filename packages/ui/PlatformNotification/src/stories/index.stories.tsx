import React from 'react';
import { ComponentMetaInfoWrapper } from '@pcbl-ui-v4/storybook-components';
import { Story } from '@storybook/react';

import ChangeLog from '../../CHANGELOG.md';
import packageInfo from '../../package.json';

import PlatformNotificationStory from './PlatformNotificationStory';
import { mapPropsToIcons } from '@kit-xyz/icon/src/utils/icon/mapPropsToIcons';

export default {
  title: 'Компоненты / - Common - / Notification',
  component: PlatformNotificationStory,
  decorators: [
    (StoryComponent: Story) => (
      <ComponentMetaInfoWrapper {...packageInfo}>
        <StoryComponent />
      </ComponentMetaInfoWrapper>
    ),
  ],
  parameters: {
    changelog: ChangeLog,
  },
  argTypes: {
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
      defaultValue: 'custom-rotate-right-solid',
      description: 'Иконка',
      control: { type: 'select' },
      options: Object.keys(mapPropsToIcons),
    },
    dataTestId: {
      table: { disable: true },
    },
  },
};

export const PlatformNotification = PlatformNotificationStory;
