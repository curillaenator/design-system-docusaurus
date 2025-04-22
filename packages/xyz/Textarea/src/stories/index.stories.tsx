import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Layout } from '@pcbl-ui-v4/storybook-components';
import { mapPropsToIcons } from '@kit-xyz/icon/src/utils/icon/mapPropsToIcons';

import ChangeLog from '../../CHANGELOG.md';
import { Textarea as TextareaComponent } from '../index';

import TextareaStory from './TextareaStory';

export default {
  title: 'Components / Textarea',
  component: TextareaComponent,
  parameters: {
    changelog: ChangeLog,
  },
  decorators: [
    (StoryComponent: Story) => (
      <Layout>
        <StoryComponent />
      </Layout>
    ),
  ],
  argTypes: {
    value: {
      control: {
        disable: true,
      },
    },
    onChange: {
      control: {
        disable: true,
      },
    },
    size: {
      defaultValue: '2xl',
      control: { type: 'inline-radio' },
      options: ['2xl', 'xl', 'l', 'm', 's', 'xs'],
    },
    shape: {
      defaultValue: 'rounded',
      control: { type: 'inline-radio' },
      options: ['rounded', 'circular'],
    },
    appearance: {
      defaultValue: 'light',
      control: { type: 'inline-radio' },
      options: ['lightest', 'light'],
    },
    state: {
      defaultValue: undefined,
      control: { type: 'select' },
      options: ['pending', 'success', 'warning', 'error'],
    },
    variant: {
      defaultValue: 'solid',
      control: { type: 'radio' },
      options: ['solid', 'elevate', 'solid-outline', 'ghost-outline'],
    },
    labelLeft: {
      defaultValue: 'Text1',
      control: { type: 'text' },
    },
    labelRight: {
      defaultValue: 'Text2',
      control: { type: 'text' },
    },
    iconLeft: {
      defaultValue: 'arrow-clockwise-solid',
      options: Object.keys(mapPropsToIcons),
      control: { type: 'select' },
    },
    iconRight: {
      defaultValue: 'arrow-clockwise-solid',
      options: Object.keys(mapPropsToIcons),
      control: { type: 'select' },
    },

    captionLeft: {
      defaultValue: 'Text3',
      control: { type: 'text' },
    },
    iconMetaLeft: {
      defaultValue: 'arrow-clockwise-solid',
      options: Object.keys(mapPropsToIcons),
      control: { type: 'select' },
    },
    iconMetaRight: {
      defaultValue: 'arrow-clockwise-solid',
      options: Object.keys(mapPropsToIcons),
      control: { type: 'select' },
    },
    maxLength: {
      defaultValue: undefined,
      control: { type: 'text' },
    },
    placeholder: {
      defaultValue: 'Введите текст',
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as Meta;

export const Default = TextareaStory;
