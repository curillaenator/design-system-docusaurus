/* eslint-disable class-methods-use-this */
import { BadgeProps } from '@kit-xyz/badge';

import styles from '../assets/componentsStyles/styles.png';
import grids from '../assets/componentsStyles/grids.png';
import data from '../assets/componentsStyles/data.png';
import layout from '../assets/componentsStyles/layout.png';
import typography from '../assets/componentsStyles/typography.png';
import utilities from '../assets/componentsStyles/utilities.png';
import form from '../assets/componentsStyles/form.png';
import templates from '../assets/componentsStyles/templates.png';
import media from '../assets/componentsStyles/media.png';
import system from '../assets/componentsStyles/system.png';
import multimedia from '../assets/componentsStyles/multimedia.png';
import navigation from '../assets/componentsStyles/navigation.png';

export interface CardProps {
  id: string;
  title: string;
  subtitle: string;
  imageURL?: string;
  badges?: BadgeProps[];
  to?: string;
}

export const CONTAINER_ID = 'components-and-styles-diagram';
const BASE_ID = 'components-and-styles';

export const LEGEND_BADGES: BadgeProps[] = [
  {
    children: '4.1',
    appearance: 'tertiary-solid',
  },
  {
    children: '3.0 и 4.0',
    appearance: 'secondary-solid',
  },
  {
    children: 'В разработке',
    appearance: 'tertiary',
  },
  {
    additionalLabel: 'Планируются',
    appearance: 'primary-transparent',
    withBorder: true,
  },
];

export const SCHEMA: CardProps[] = [
  {
    id: `${BASE_ID}-style`,
    title: 'Стили',
    subtitle: 'Style',
    imageURL: styles,
    to: '/docs/category/style',
    badges: [
      {
        children: 'Palette',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Color',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Gradient',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Border',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Overlay',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Blur',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Shadow',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Opacity',
        appearance: 'tertiary-solid',
      },
    ],
  },
  {
    id: `${BASE_ID}-layout`,
    title: 'Отображение',
    subtitle: 'Layout',
    imageURL: layout,
    to: '/docs/category/layout',
    badges: [
      {
        children: 'Header',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Footer',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Drawer',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Modal',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Main',
        appearance: 'tertiary',
      },
      {
        children: 'Scene',
        appearance: 'tertiary',
      },
    ],
  },
  {
    id: `${BASE_ID}-grid`,
    title: 'Сетки',
    subtitle: 'Grid',
    imageURL: grids,
    to: '/docs/category/grid',
    badges: [
      {
        children: 'Breakpoint',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Guide',
        appearance: 'tertiary-solid',
      },
    ],
  },
  {
    id: `${BASE_ID}-data`,
    title: 'Данные',
    subtitle: 'Data',
    imageURL: data,
    to: '/docs/category/data',
    badges: [
      {
        children: 'Badge',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Hint',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Chat',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Avatar',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Notification',
        appearance: 'secondary-solid',
      },
      {
        children: 'Card',
        appearance: 'secondary-solid',
      },
      {
        children: 'Accordion',
        appearance: 'secondary-solid',
      },
      {
        children: 'Paper',
        appearance: 'tertiary',
      },
      {
        children: 'Dropdown',
        appearance: 'tertiary',
      },
      {
        children: 'Cover',
        appearance: 'tertiary',
      },
      {
        children: 'Table',
        appearance: 'tertiary',
      },
      {
        additionalLabel: 'Rating',
        appearance: 'primary-transparent',
        withBorder: true,
      },
      {
        additionalLabel: 'Progress',
        appearance: 'primary-transparent',
        withBorder: true,
      },
    ],
  },
  {
    id: `${BASE_ID}-typography`,
    title: 'Типографика',
    subtitle: 'Typography',
    imageURL: typography,
    to: '/docs/category/typography',
    badges: [
      {
        children: 'Font',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Heading',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Body',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Combination',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Link',
        appearance: 'secondary-solid',
      },
      {
        children: 'List',
        appearance: 'secondary-solid',
      },
      {
        children: 'Quote',
        appearance: 'tertiary',
      },
    ],
  },
  {
    id: `${BASE_ID}-utilities`,
    title: 'Утилиты',
    subtitle: 'Utilities',
    imageURL: utilities,
    badges: [
      {
        children: 'Size',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Item',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Container',
        appearance: 'tertiary',
      },
    ],
  },
  {
    id: `${BASE_ID}-form`,
    title: 'Формы',
    subtitle: 'Form',
    imageURL: form,
    to: '/docs/category/form',
    badges: [
      {
        children: 'Radio',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Switch',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Checkbox',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Button',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Action',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Password',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Input',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Link',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Textarea',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Slider',
        appearance: 'secondary-solid',
      },
      {
        children: 'Editor',
        appearance: 'secondary-solid',
      },
      {
        children: 'Uploader',
        appearance: 'secondary-solid',
      },
      {
        children: 'Cover',
        appearance: 'tertiary',
      },
      {
        children: 'Logotype',
        appearance: 'tertiary',
      },
      {
        children: 'Select',
        appearance: 'tertiary',
      },
      {
        children: 'Combobox',
        appearance: 'tertiary',
      },
      {
        children: 'Date',
        appearance: 'tertiary',
      },
      {
        children: 'Calendar',
        appearance: 'tertiary',
      },
      {
        additionalLabel: 'Rating',
        appearance: 'primary-transparent',
        withBorder: true,
      },
      {
        additionalLabel: 'Master',
        appearance: 'primary-transparent',
        withBorder: true,
      },
      {
        additionalLabel: 'Colorpicker',
        appearance: 'primary-transparent',
        withBorder: true,
      },
      {
        additionalLabel: 'Progress',
        appearance: 'primary-transparent',
        withBorder: true,
      },
      {
        additionalLabel: 'Datepicker',
        appearance: 'primary-transparent',
        withBorder: true,
      },
    ],
  },
  {
    id: `${BASE_ID}-templates`,
    title: 'Шаблоны',
    subtitle: 'templates',
    imageURL: templates,
    badges: [
      {
        children: 'Error',
        appearance: 'secondary-solid',
      },
      {
        children: 'Bad request',
        appearance: 'secondary-solid',
      },
      {
        children: 'Internal server error',
        appearance: 'secondary-solid',
      },
      {
        children: 'Sign in',
        appearance: 'tertiary',
      },
      {
        children: 'Sign up',
        appearance: 'tertiary',
      },
    ],
  },
  {
    id: `${BASE_ID}-media`,
    title: 'Медиа',
    subtitle: 'Media',
    imageURL: media,
    to: '/docs/category/media',
    badges: [
      {
        children: 'Icon',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Logotype',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Image',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Emoji',
        appearance: 'secondary-solid',
      },
      {
        children: 'Glyph',
        appearance: 'tertiary',
      },
    ],
  },
  {
    id: `${BASE_ID}-system`,
    title: 'Системные',
    subtitle: 'System',
    imageURL: system,
    to: '/docs/category/system',
    badges: [
      {
        children: 'Cursor',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Caret',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Spinner',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Skeleton',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Scroll',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Corner',
        appearance: 'tertiary',
      },
      {
        children: 'Status',
        appearance: 'tertiary',
      },
    ],
  },
  {
    id: `${BASE_ID}-multimedia`,
    title: 'Мультимедиа',
    subtitle: 'Multimedia',
    imageURL: multimedia,
    badges: [
      {
        children: 'Gallery',
        appearance: 'secondary-solid',
      },
      {
        children: 'File',
        appearance: 'secondary-solid',
      },
      {
        children: 'Chart',
        appearance: 'secondary-solid',
      },
      {
        children: 'Carousel',
        appearance: 'secondary-solid',
      },
      {
        children: 'Player',
        appearance: 'secondary-solid',
      },
      {
        additionalLabel: 'Audio',
        appearance: 'primary-transparent',
        withBorder: true,
      },
      {
        additionalLabel: 'Video',
        appearance: 'primary-transparent',
        withBorder: true,
      },
    ],
  },
  {
    id: `${BASE_ID}-navigation`,
    title: 'Навигация',
    subtitle: 'Navigation',
    imageURL: navigation,
    to: '/docs/category/navigation',
    badges: [
      {
        children: 'Breadcrumb',
        appearance: 'tertiary',
      },
      {
        children: 'Pagination',
        appearance: 'tertiary',
      },
      {
        children: 'Tab',
        appearance: 'tertiary',
      },
      {
        children: 'Menu',
        appearance: 'tertiary',
      },
      {
        children: 'Stepper',
        appearance: 'tertiary',
      },
    ],
  },
];
