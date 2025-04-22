import React from 'react';
import { BadgeProps } from '@kit-xyz/badge';

export interface ListItem {
  label: string;
  appearance?: 'primary' | 'secondary';
}

export interface TechnologyProps {
  id: string;
  title: string;
  badges?: BadgeProps[];
  items?: ListItem[];
}

export const IMAGES = {
  'front–end-engine-bundle': (
    <svg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M29.7201 56.9471C29.7201 66.173 36.6396 76 50.8789 76C62.3108 76 72.7397 69.5824 72.7397 55.9445C72.7397 50.8303 71.9374 43.3093 65.6201 24.5572C60.4055 9.11424 52.5838 4 41.7538 4C29.1186 4 22.3999 11.0195 18.9904 25.5598L7.25781 74.9974H19.7926L31.0238 27.4654C33.0294 18.9415 36.3388 15.0307 42.3553 15.0307C48.0714 15.0307 51.5812 18.8413 54.1883 27.0643L57.3973 37.092H51.4808C38.2441 37.092 29.7201 45.4153 29.7201 56.9471ZM51.0797 64.9696C45.2635 64.9696 41.7538 61.6603 41.7538 56.9471C41.7538 52.3344 44.4613 48.1228 52.283 48.1228H60.907C61.5085 50.1284 61.8093 52.0336 61.8093 53.7381C61.8093 60.858 57.7984 64.9696 51.0797 64.9696Z'
        fillOpacity='0.08'
      />
    </svg>
  ),
  'back–end-engine-bundle': (
    <svg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M29.7201 56.9471C29.7201 66.173 36.6396 76 50.8789 76C62.3108 76 72.7397 69.5824 72.7397 55.9445C72.7397 50.8303 71.9374 43.3093 65.6201 24.5572C60.4055 9.11424 52.5838 4 41.7538 4C29.1186 4 22.3999 11.0195 18.9904 25.5598L7.25781 74.9974H19.7926L31.0238 27.4654C33.0294 18.9415 36.3388 15.0307 42.3553 15.0307C48.0714 15.0307 51.5812 18.8413 54.1883 27.0643L57.3973 37.092H51.4808C38.2441 37.092 29.7201 45.4153 29.7201 56.9471ZM51.0797 64.9696C45.2635 64.9696 41.7538 61.6603 41.7538 56.9471C41.7538 52.3344 44.4613 48.1228 52.283 48.1228H60.907C61.5085 50.1284 61.8093 52.0336 61.8093 53.7381C61.8093 60.858 57.7984 64.9696 51.0797 64.9696Z'
        fillOpacity='0.08'
      />
    </svg>
  ),
};

export const TECHNOLOGIES_SCHEMA_1: TechnologyProps[] = [
  {
    id: 'front–end-engine-bundle',
    title: 'Front–end Engine Bundle',
    badges: [
      {
        children: 'Saas',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Интеграция',
        appearance: 'secondary-solid-alt',
      },
    ],
    items: [
      {
        label: 'Соответствие стандартам',
      },
      {
        label: 'Мастшабируемость',
      },
      {
        label: 'Универсальность',
      },
      {
        label: 'Лицензионная чистота',
      },
      {
        label: 'Облачная оптимизация',
      },
      {
        label: 'Доступность',
      },
    ],
  },
  {
    id: 'back–end-engine-bundle',
    title: 'Back–end Engine Bundle',
    badges: [
      {
        children: 'Библиотека',
        appearance: 'secondary-solid-alt',
      },
      {
        children: 'Интеграция',
        appearance: 'secondary-solid-alt',
      },
    ],
    items: [
      {
        label: 'Мастшабируемость',
      },
      {
        label: 'Соответствие стандартам',
        appearance: 'secondary',
      },
      {
        label: 'Универсальность',
      },
      {
        label: 'Лицензионная чистота',
        appearance: 'secondary',
      },
      {
        label: 'Облачная оптимизация',
        appearance: 'secondary',
      },
      {
        label: 'Доступность',
        appearance: 'secondary',
      },
    ],
  },
];

export const TECHNOLOGIES_SCHEMA_2: TechnologyProps[] = [
  {
    id: 'report-builder',
    title: 'Report Builder',
    badges: [
      {
        children: 'Saas',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Библиотека',
        appearance: 'secondary-solid-alt',
      },
    ],
    items: [
      {
        label: 'Соответствие стандартам',
      },
      {
        label: 'Мастшабируемость',
      },
      {
        label: 'Лицензионная чистота',
      },
      {
        label: 'Доступность',
      },
    ],
  },
  {
    id: 'communication-services',
    title: 'Communication Services',
    badges: [
      {
        children: 'Saas',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Библиотека',
        appearance: 'secondary-solid-alt',
      },
    ],
    items: [
      {
        label: 'Соответствие стандартам',
      },
      {
        label: 'Мастшабируемость',
      },
      {
        label: 'Лицензионная чистота',
      },
      {
        label: 'Доступность',
      },
    ],
  },
  {
    id: 'design-system',
    title: 'Design System',
    badges: [
      {
        children: 'Saas',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Интеграция',
        appearance: 'secondary-solid-alt',
      },
    ],
    items: [
      {
        label: 'Мастшабируемость',
      },
      {
        label: 'Доступность',
      },
      {
        label: 'Соответствие стандартам',
        appearance: 'secondary',
      },
      {
        label: 'Лицензионная чистота',
        appearance: 'secondary',
      },
    ],
  },
  {
    id: 'content-studio',
    title: 'Content Studio',
    badges: [
      {
        children: 'Saas',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Библиотека',
        appearance: 'secondary-solid-alt',
      },
    ],
    items: [
      {
        label: 'Мастшабируемость',
      },

      {
        label: 'Соответствие стандартам',
        appearance: 'secondary',
      },
      {
        label: 'Лицензионная чистота',
        appearance: 'secondary',
      },
      {
        label: 'Доступность',
        appearance: 'secondary',
      },
    ],
  },
];

interface CellProps {
  id: string;
  content: string;
  badges?: BadgeProps[];
  dataCell?: string;
}

export const TABLE: CellProps[][] = [
  [
    {
      id: 'product-name',
      content: 'Название продукта',
    },
    {
      id: 'delivery',
      content: 'Поставка',
    },
    {
      id: 'licence-free',
      content: 'Лицензионная чистота',
    },
    {
      id: 'standarts',
      content: 'Соответствеие стандартам',
    },
    {
      id: 'scalability',
      content: 'Масштабируемость',
    },
    {
      id: 'accessibility',
      content: 'Доступность',
    },
  ],
  [
    {
      id: 'product-name-1',
      content: 'APCMS',
      dataCell: 'cell-bold',
    },
    {
      id: 'delivery-1',
      badges: [
        {
          children: 'SaaS',
          appearance: 'tertiary-solid',
        },
        {
          children: 'Библиотека',
          appearance: 'secondary-solid-alt',
        },
      ],
      content: '',
      dataCell: 'cell-flex',
    },
    {
      id: 'licence-free-1',
      content: 'Да',
    },
    {
      id: 'standarts-1',
      content: 'Да',
    },
    {
      id: 'scalability-1',
      content: 'Да',
    },
    {
      id: 'accessibility-1',
      content: 'Да',
    },
  ],
  [
    {
      id: 'product-name-2',
      content: 'File & Draft Service',
      dataCell: 'cell-bold',
    },
    {
      id: 'delivery-2',
      badges: [{ children: 'Saas', appearance: 'tertiary-solid' }],
      content: '',
      dataCell: 'cell-flex',
    },
    {
      id: 'licence-free-2',
      content: 'Да',
    },
    {
      id: 'standarts-2',
      content: 'Не требуется',
      dataCell: 'cell-statused',
    },
    {
      id: 'scalability-2',
      content: 'Да',
    },
    {
      id: 'accessibility-2',
      content: 'Да',
    },
  ],
  [
    {
      id: 'product-name-3',
      content: 'Batch Task Service',
      dataCell: 'cell-bold',
    },
    {
      id: 'delivery-3',
      badges: [{ children: 'Saas', appearance: 'tertiary-solid' }],
      content: '',
      dataCell: 'cell-flex',
    },
    {
      id: 'licence-free-3',
      content: 'Отсутствует',
      dataCell: 'cell-statused',
    },
    {
      id: 'standarts-3',
      content: 'Да',
    },
    {
      id: 'scalability-3',
      content: 'Да',
    },
    {
      id: 'accessibility-3',
      content: 'Да',
    },
  ],
  [
    {
      id: 'product-name-4',
      content: 'Gateway & API Management',
      dataCell: 'cell-bold',
    },
    {
      id: 'delivery-4',
      badges: [{ children: 'Saas', appearance: 'tertiary-solid' }],
      content: '',
      dataCell: 'cell-flex',
    },
    {
      id: 'licence-free-4',
      content: 'Да',
    },
    {
      id: 'standarts-4',
      content: 'Да',
    },
    {
      id: 'scalability-4',
      content: 'Да',
    },
    {
      id: 'accessibility-4',
      content: 'Да',
    },
  ],
  [
    {
      id: 'product-name-5',
      content: 'ML / AI',
      dataCell: 'cell-bold',
    },
    {
      id: 'delivery-5',
      badges: [{ children: 'Saas', appearance: 'tertiary-solid' }],
      content: '',
      dataCell: 'cell-flex',
    },
    {
      id: 'licence-free-5',
      content: 'Да',
    },
    {
      id: 'standarts-5',
      content: 'Да',
    },
    {
      id: 'scalability-5',
      content: 'Да',
    },
    {
      id: 'accessibility-5',
      content: 'Да',
    },
  ],
  [
    {
      id: 'product-name-6',
      content: 'JAM',
      dataCell: 'cell-bold',
    },
    {
      id: 'delivery-6',
      badges: [{ children: 'Saas', appearance: 'tertiary-solid' }],
      content: '',
      dataCell: 'cell-flex',
    },
    {
      id: 'licence-free-6',
      content: 'Да',
    },
    {
      id: 'standarts-6',
      content: 'Да',
    },
    {
      id: 'scalability-6',
      content: 'Да',
    },
    {
      id: 'accessibility-6',
      content: 'Да',
    },
  ],
  [
    {
      id: 'product-name-7',
      content: 'UPDM',
      dataCell: 'cell-bold',
    },
    {
      id: 'delivery-7',
      badges: [
        {
          children: 'Saas',
          appearance: 'tertiary-solid',
        },
        {
          children: 'Библиотека',
          appearance: 'secondary-solid-alt',
        },
      ],
      content: '',
      dataCell: 'cell-flex',
    },
    {
      id: 'licence-free-7',
      content: 'Да',
    },
    {
      id: 'standarts-7',
      content: 'Да',
    },
    {
      id: 'scalability-7',
      content: 'Да',
    },
    {
      id: 'accessibility-7',
      content: 'Да',
    },
  ],
  [
    {
      id: 'product-name-8',
      content: 'Identity Management',
      dataCell: 'cell-bold',
    },
    {
      id: 'delivery-8',
      badges: [{ children: 'Saas', appearance: 'tertiary-solid' }],
      content: '',
      dataCell: 'cell-flex',
    },
    {
      id: 'licence-free-8',
      content: 'Отсутствует',
      dataCell: 'cell-statused',
    },
    {
      id: 'standarts-8',
      content: 'Да',
    },
    {
      id: 'scalability-8',
      content: 'Да',
    },
    {
      id: 'accessibility-8',
      content: 'Да',
    },
  ],
  [
    {
      id: 'product-name-9',
      content: 'Access Control, Configuration Management',
      dataCell: 'cell-bold',
    },
    {
      id: 'delivery-9',
      badges: [{ children: 'Saas', appearance: 'tertiary-solid' }],
      content: '',
      dataCell: 'cell-flex',
    },
    {
      id: 'licence-free-9',
      content: 'Да',
    },
    {
      id: 'standarts-9',
      content: 'Да',
    },
    {
      id: 'scalability-9',
      content: 'Да',
    },
    {
      id: 'accessibility-9',
      content: 'Да',
    },
  ],
  [
    {
      id: 'product-name-10',
      content: 'Unified System of Reference Information',
      dataCell: 'cell-bold',
    },
    {
      id: 'delivery-10',
      badges: [{ children: 'Saas', appearance: 'tertiary-solid' }, { children: 'Библиотека' }],
      content: '',
      dataCell: 'cell-flex',
    },
    {
      id: 'licence-free-10',
      content: 'Да',
    },
    {
      id: 'standarts-10',
      content: 'Да',
    },
    {
      id: 'scalability-10',
      content: 'Да',
    },
    {
      id: 'accessibility-10',
      content: 'Да',
    },
  ],
  [
    {
      id: 'product-name-11',
      content: 'Gamification',
      dataCell: 'cell-bold',
    },
    {
      id: 'delivery-11',
      badges: [{ children: 'Saas', appearance: 'tertiary-solid' }, { children: 'Библиотека' }],
      content: '',
      dataCell: 'cell-flex',
    },
    {
      id: 'licence-free-11',
      content: 'Да',
    },
    {
      id: 'standarts-11',
      content: 'Да',
    },
    {
      id: 'scalability-11',
      content: 'Да',
    },
    {
      id: 'accessibility-11',
      content: 'Да',
    },
  ],
];
