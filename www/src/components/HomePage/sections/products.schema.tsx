import React from 'react';
import { ButtonProps } from '@kit-xyz/button';

export const IMAGES = {
  tracker: (
    <svg width='64' height='64' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M4 4L8 0L24 8L22 20L4 4Z' />
      <path d='M4 44L8 48L24 40L22 28L4 44Z' />
      <path d='M4 44L5.24537e-07 40L8 24L20 26L4 44Z' />
      <path d='M44 44L48 40L40 24L28 26L44 44Z' />
      <path d='M44 4L40 0L24 8L26 20L44 4Z' />
      <path d='M44 44L40 48L24 40L26 28L44 44Z' />
      <path d='M4 4L0 8L8 24L20 22L4 4Z' />
      <path d='M44 4L48 8L40 24L28 22L44 4Z' />
    </svg>
  ),
  synapse: (
    <svg width='54' height='64' viewBox='0 0 54 64' xmlns='http://www.w3.org/2000/svg'>
      <path d='M25.9556 41.8667V32.0889C16.6222 32.0889 11.1111 28 11.1111 21.3333C11.1111 14.4889 16.7111 9.77778 26.3111 9.77778C34.5778 9.77778 40.7111 13.4222 44.2667 17.2444L51.4667 10.6667C47.2 5.24444 39.4667 0 26.4 0C9.95555 0 0.444444 9.06666 0.444444 21.2444C0.444444 32.6222 8.35556 41.8667 25.9556 41.8667ZM26.9333 64C43.3778 64 53.6889 55.8222 53.6889 42.5778C53.6889 29.4222 43.2889 22.3111 25.9556 22.3111V32.0889C33.6889 32.0889 43.0222 34.3111 43.0222 42.8444C43.0222 50.0444 37.1556 54.2222 26.8444 54.2222C18.7556 54.2222 11.4667 50.9333 6.84444 46.0444L0 52.9778C5.6 59.8222 15.3778 64 26.9333 64Z' />
    </svg>
  ),
  corax: (
    <svg width='63' height='64' viewBox='0 0 63 64' xmlns='http://www.w3.org/2000/svg'>
      <path d='M11.5716 29.9972H21.363C21.363 15.6662 27.7719 9.79138 36.7622 9.79138C44.5953 9.79138 50.114 13.6189 52.9624 22.0751L62.3088 16.9124C58.3032 6.23088 49.58 0 36.8512 0C20.2058 0 10.3255 10.5925 10.3255 29.9972H0C0 51.7163 14.598 64 33.3797 64C48.8679 64 58.0362 55.6328 62.5758 46.9096L54.0306 42.0139C49.758 49.2239 44.0612 54.0306 33.8248 54.0306C21.007 54.0306 12.1057 44.7733 11.5716 29.9972Z' />
    </svg>
  ),
  pangoline: (
    <svg width='59' height='64' viewBox='0 0 59 64' xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 28.6649H11.3576V64H22.1744V44.5296C24.6084 46.5128 28.9352 48.3156 35.245 48.3156C48.4057 48.3156 58.0506 40.1127 58.0506 25.4198C58.0506 11.5381 48.6759 0 30.3773 0C9.46479 0 0 17.1268 0 28.6649ZM21.1831 28.6649H11.3576C11.3576 21.4537 16.6761 9.91555 31.0082 9.91555C40.8337 9.91555 46.8732 15.8649 46.8732 24.5183C46.8732 32.8113 41.7352 38.4 33.7125 38.4C26.6817 38.4 22.5351 33.893 21.1831 28.6649Z' />
    </svg>
  ),
  uikit: (
    <svg width='66' height='64' viewBox='0 0 66 64' xmlns='http://www.w3.org/2000/svg'>
      <path d='M10.907 64H35.2451C51.2 64 65.5324 53.8141 65.5324 33.1718C65.5324 7.03099 45.3408 0 33.0817 0C7.48169 0 0 19.2 0 31.2789H10.907C10.907 23.7972 15.2338 9.91549 33.0817 9.91549C43.6282 9.91549 54.3549 16.8563 54.3549 32.2704C54.3549 48.4056 43.6282 54.0845 33.4422 54.0845H21.7239V31.2789H10.907V64Z' />
    </svg>
  ),
  dataspace: (
    <svg width='66' height='64' viewBox='0 0 66 64' xmlns='http://www.w3.org/2000/svg'>
      <path d='M10.907 64H35.2451C51.2 64 65.5324 53.8141 65.5324 33.1718C65.5324 7.03099 45.3408 0 33.0817 0C7.48169 0 0 19.2 0 31.2789H10.907C10.907 23.7972 15.2338 9.91549 33.0817 9.91549C43.6282 9.91549 54.3549 16.8563 54.3549 32.2704C54.3549 48.4056 43.6282 54.0845 33.4422 54.0845H21.7239V31.2789H10.907V64Z' />
    </svg>
  ),
};

export interface ProductProps {
  id: string;
  to?: string;
  title: string;
  description: string;
  appearance?: 'primary' | 'secondary';
  buttons?: ButtonProps[];
}

export const PRODUCTS_SCHEMA: ProductProps[] = [
  {
    id: 'tracker',
    to: 'tracker',
    title: 'Tracker',
    description: 'Менеджмент система',
  },
  {
    id: 'uikit',
    to: 'docs/information/about/',
    title: 'UI Kit',
    description: 'Вычислительная система IMDB на базе Ignite',
  },
  {
    id: 'pangoline',
    to: 'https://google.com',
    title: 'Pangoline',
    description: 'Cпециальная сборка реляционной СУБД уровня Enterprise',
    appearance: 'secondary',
  },
  {
    id: 'synapse',
    to: 'https://google.com',
    title: 'Synapse',
    description: 'Децентрализованная интеграционная платформа',
  },
  {
    id: 'corax',
    to: 'https://google.com',
    title: 'Corax',
    description: 'Распределенная потоковая платформа на базе Kafka',
    // buttons: [
    //   {
    //     children: 'О продукте',
    //     appearance: 'tertiary-solid',
    //     onClick: (e) => {
    //       e.preventDefault();
    //       e.stopPropagation();
    //     },
    //   },
    // ],
  },

  {
    id: 'dataspace',
    to: 'https://google.com',
    title: 'Data Space',
    description: 'Продукт для ускорения процесса разработки приложений',
    appearance: 'secondary',
  },
];
