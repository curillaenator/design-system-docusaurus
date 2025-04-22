import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Layout } from '@pcbl-ui-v4/storybook-components';
import PlusIcon from '@kit-xyz/icon/src/assets/solid/PlusIcon';

import ChangeLog from '../../CHANGELOG.md';
import { Breadcrumbs as BreadcrumbsComponent } from '../Breadcrumbs';

import { BreadcrumbsStory } from './BreadcrumbsStory';
import ExampleDocs from './BreadcrumbsDocs.mdx';
import { BreadcrumbsItemProps } from '../interfaces';

const items: BreadcrumbsItemProps[] = [
  { id: 1, href: '#', title: 'Домой', Icon: PlusIcon },
  { id: 2, href: '#', title: 'Вторая ссылка' },
  { id: 3, href: '#', title: 'Третья ссылка', Icon: PlusIcon },
  { id: 4, href: '#', title: 'Четвертая ссылка' },
  { id: 5, href: '#', title: 'Последняя ссылка', Icon: PlusIcon },
];

export default {
  title: 'Development / Breadcrumbs',
  component: BreadcrumbsComponent,
  parameters: {
    changelog: ChangeLog,
    controls: { hideNoControlsWarning: true },
    docs: {
      page: ExampleDocs,
    },
  },
  decorators: [
    (StoryComponent: Story) => (
      <Layout>
        <div
          style={{
            margin: '0 auto',
            minHeight: 224,
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
    items: {
      defaultValue: items,
      description: 'Массив элементов с типом BreadcrumbsItemProps',
    },

    ariaLabel: {
      defaultValue: 'Навигация',
      description: 'aria-label для контейнера nav',
    },
  },
} as Meta;

export const Default = BreadcrumbsStory;
