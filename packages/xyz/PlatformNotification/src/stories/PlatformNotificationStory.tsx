import React from 'react';
import { Story } from '@storybook/react';
import { GlyphProps, IconProps } from '@kit-xyz/icon';

import { NotificationProps, PlatformNotification } from '../index';

import NotificationDocs from './PlatformNotificationDocs.mdx';

type PlatformNotificationStoryComponentProps = {
  closeButton: boolean;
  size: NotificationProps['size'];
  appearance: NotificationProps['appearance'];
  title: NotificationProps['title'];
  description: NotificationProps['description'];
  iconName: IconProps['name'] | GlyphProps['name'];
};

const PlatformNotificationStoryComponent = (props: PlatformNotificationStoryComponentProps) => (
  <PlatformNotification
    actions={[
      {
        key: 1,
        children: 'Обновить',
        appearance: 'primary',
      },
      {
        key: 2,
        children: 'Перегрузить',
        appearance: 'secondary',
      },
    ]}
    // @ts-ignore
    icon={{ name: props.iconName }}
    {...props}
  />
);

const PlatformNotificationStory: Story<PlatformNotificationStoryComponentProps> = (props) => (
  <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
    <PlatformNotificationStoryComponent {...props} />
    <PlatformNotification
      actions={[
        {
          key: 1,
          children: 'Обновить',
          appearance: 'primary',
        },
        {
          key: 2,
          children: 'Перегрузить',
          appearance: 'secondary',
        },
      ]}
      title="Ваш браузер устарел"
      description={
        <>
          Чтобы платформа работала корректно, рекомендуем вам обновить{' '}
          <a href="#" style={{ textDecoration: 'underline' }}>
            Google Chrome
          </a>
        </>
      }
      icon={{ name: 'design-circle' }}
      closeButton
    />
    <PlatformNotification
      appearance="light"
      actions={[
        {
          key: 1,
          children: 'Обновить',
          appearance: 'primary',
        },
        {
          key: 2,
          children: 'Перегрузить',
          appearance: 'secondary',
        },
      ]}
      title="Ваш браузер устарел"
      description={
        <>
          Чтобы платформа работала корректно, рекомендуем вам обновить{' '}
          <a href="#" style={{ textDecoration: 'underline' }}>
            Google Chrome
          </a>
        </>
      }
      icon={{ name: 'design-circle' }}
      closeButton
    />
    <PlatformNotification
      appearance="dark"
      actions={[
        {
          key: 1,
          children: 'Обновить',
          appearance: 'primary',
        },
        {
          key: 2,
          children: 'Перегрузить',
          appearance: 'secondary',
        },
      ]}
      title="Ваш браузер устарел"
      description={
        <>
          Чтобы платформа работала корректно, рекомендуем вам обновить{' '}
          <a href="#" style={{ textDecoration: 'underline' }}>
            Google Chrome
          </a>
        </>
      }
      icon={{ name: 'design-circle' }}
      closeButton
    />

    <PlatformNotification
      size="compact"
      actions={[
        {
          key: 1,
          children: 'Обновить',
          appearance: 'primary',
        },
        {
          key: 2,
          children: 'Перегрузить',
          appearance: 'secondary',
        },
      ]}
      title="Ваш браузер устарел"
      description={
        <>
          Чтобы платформа работала корректно, рекомендуем вам обновить{' '}
          <a href="#" style={{ textDecoration: 'underline' }}>
            Google Chrome
          </a>
        </>
      }
      icon={{ name: 'design-circle' }}
      closeButton
    />
    <PlatformNotification
      size="compact"
      appearance="light"
      actions={[
        {
          key: 1,
          children: 'Обновить',
          appearance: 'primary',
        },
        {
          key: 2,
          children: 'Перегрузить',
          appearance: 'secondary',
        },
      ]}
      title="Ваш браузер устарел"
      description={
        <>
          Чтобы платформа работала корректно, рекомендуем вам обновить{' '}
          <a href="#" style={{ textDecoration: 'underline' }}>
            Google Chrome
          </a>
        </>
      }
      icon={{ name: 'design-circle' }}
      closeButton
    />
    <PlatformNotification
      size="compact"
      appearance="dark"
      actions={[
        {
          key: 1,
          children: 'Обновить',
          appearance: 'primary',
        },
        {
          key: 2,
          children: 'Перегрузить',
          appearance: 'secondary',
        },
      ]}
      title="Ваш браузер устарел"
      description={
        <>
          Чтобы платформа работала корректно, рекомендуем вам обновить{' '}
          <a href="#" style={{ textDecoration: 'underline' }}>
            Google Chrome
          </a>
        </>
      }
      icon={{ name: 'design-circle' }}
      closeButton
    />

    <PlatformNotification title="Ваш браузер устарел" icon={{ name: 'design-circle' }} closeButton />
    <PlatformNotification appearance="light" title="Ваш браузер устарел" icon={{ name: 'design-circle' }} closeButton />
    <PlatformNotification appearance="dark" title="Ваш браузер устарел" icon={{ name: 'design-circle' }} closeButton />

    <PlatformNotification title="Ваш браузер устарел" icon={{ name: 'creative' }} closeButton />
    <PlatformNotification appearance="light" title="Ваш браузер устарел" icon={{ name: 'creative' }} closeButton />
    <PlatformNotification appearance="dark" title="Ваш браузер устарел" icon={{ name: 'creative' }} closeButton />

    <PlatformNotification title="Ваш браузер устарел" closeButton />
    <PlatformNotification appearance="light" title="Ваш браузер устарел" closeButton />
    <PlatformNotification appearance="dark" title="Ваш браузер устарел" closeButton />

    <PlatformNotification title="Ваш браузер устарел" />
    <PlatformNotification appearance="light" title="Ваш браузер устарел" />
    <PlatformNotification appearance="dark" title="Ваш браузер устарел" />
  </div>
);

PlatformNotificationStory.parameters = {
  controls: { hideNoControlsWarning: true },
  docs: {
    page: NotificationDocs,
  },
};

PlatformNotificationStory.args = {};

export default PlatformNotificationStory;
