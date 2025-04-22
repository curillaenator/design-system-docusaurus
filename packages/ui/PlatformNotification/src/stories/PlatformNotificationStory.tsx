import React from 'react';
import { Story } from '@storybook/react';
import { Header, Layout } from '@pcbl-ui-v4/storybook-components';
import { Button } from '@kit-xyz/button';
import { Icon, IconProps } from '@kit-xyz/icon';
import { NotificationProps } from '@kit-xyz/platformNotification';

import { PlatformNotification } from '../PlatformNotification';

import PlatformNotificationDocs from './PlatformNotificationDocs.mdx';

type PlatformNotificationStoryComponentProps = {
  closeButton: boolean;
  title: NotificationProps['title'];
  description: NotificationProps['description'];
  iconName: IconProps['name'];
};

const PlatformNotificationStory: Story<PlatformNotificationStoryComponentProps> = (props) => (
  <Layout>
    <Header
      title="PlatformNotification"
      authorName="Зубков Валерий"
      status="rnd"
      design="https://www.figma.com/file/by9RScdBk63xOQevKazheX/xyz-%F0%9F%93%84-presentation?node-id=530%3A30095&t=oLZo3oJfaUirBLga-0"
    />
    <div className="flex flex-col">
      <PlatformNotification
        components={{
          Icon,
          Button,
        }}
        actions={[
          {
            key: 1,
            appearance: 'light',
            size: 'l',
            children: 'Обновить',
          },
          {
            key: 2,
            appearance: 'dark',
            size: 'l',
            children: 'Перегрузить',
          },
        ]}
        icon={{ name: props.iconName }}
        closeButton={props.closeButton && <Button type="button" iconLeftName="math-x" size="l" appearance="light" />}
        title={props.title}
        description={props.description}
      />
    </div>
  </Layout>
);

PlatformNotificationStory.parameters = {
  controls: { hideNoControlsWarning: true },
  docs: {
    page: PlatformNotificationDocs,
  },
};

export default PlatformNotificationStory;
