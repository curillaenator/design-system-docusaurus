import React from 'react';
import { DocsGenerator, DocsObjectType, ArgsTable } from '@pcbl-ui-v4/storybook-components';

import { Items } from './components/Items';

export const BreadcrumbsStoryDocs = () => {
  const docs: DocsObjectType = {
    base: {
      anchorId: 'base',
      anchorText: 'Base',
      anchorTitle: 'Base',
      anchorInfo:
        'Для того, чтобы использовать хлебные крошки (Breadcrumbs), необходимо передать в проперти items массив ссылок. Страница на которой вы сейчас находитесь (последняя в списке), всегда будет неактивной.',
      DemoComponent: <>"Demo:BreadcrumbsBaseExample:hideToolbar:multiplePreview"</>,
    },

    item: {
      anchorId: 'item',
      anchorText: 'Item',
      anchorTitle: 'Item',
      anchorInfo: <Items />,
      DemoComponent: <>"Demo:BreadcrumbsItemExample:hideToolbar:multiplePreview"</>,
    },

    properties: {
      anchorId: 'properties',
      anchorText: 'Properties',
      anchorTitle: 'Properties',
      anchorInfo: '',
      DemoComponent: <ArgsTable />,
    },
  };

  return <DocsGenerator docs={docs} />;
};
