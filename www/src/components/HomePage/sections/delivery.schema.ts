import PlusIcon from '@kit-xyz/icon/src/assets/solid/PlusIcon';
import type { ButtonProps } from '@kit-xyz/button';

import ChatIcon from '../assets/icons/ChatIcon';
import publicCloud from '../assets/delivery/public.png';
import privateCloud from '../assets/delivery/private.png';
import onPremise from '../assets/delivery/onPremise.png';

export interface DeliveryCardProps {
  id: string;
  to?: string;
  title: string;
  subtitle: string;
  image?: string;
  statements: string[];
  button?: ButtonProps;
}

export const DELIVERY_SCHEMA: DeliveryCardProps[] = [
  {
    id: 'public-cloud',
    to: 'https://google.com',
    title: 'Public cloud',
    subtitle: 'Cost–effective, разработка по формуле сделано единожды — доступно всей экосистеме',
    image: publicCloud,
    statements: ['Стандартизация компонентов', 'Гибкость настройки', 'Модульность'],
    button: {
      size: 'xs',
      children: 'Заказать',
      appearance: 'primary-solid-alt',
      IconLeft: PlusIcon,
      onClick: (e) => {
        e.preventDefault();
      },
    },
  },
  {
    id: 'private-сloud',
    to: 'https://google.com',
    title: 'Private сloud',
    subtitle: 'Cost–effective, разработка по формуле сделано единожды — доступно всей экосистеме',
    image: privateCloud,
    statements: ['Стандартизация компонентов', 'Гибкость настройки', 'Модульность'],
    button: {
      size: 'xs',
      children: 'Получить консультацию',
      appearance: 'tertiary-solid',
      IconLeft: ChatIcon,
      onClick: (e) => {
        e.preventDefault();
      },
    },
  },
  {
    id: 'on-premise',
    to: 'https://google.com',
    title: 'On-premise',
    subtitle: 'Cost–effective, разработка по формуле сделано единожды — доступно всей экосистеме',
    image: onPremise,
    statements: ['Стандартизация компонентов', 'Гибкость настройки', 'Модульность'],
    button: {
      size: 'xs',
      children: 'Получить консультацию',
      appearance: 'primary-solid-alt',
      IconLeft: ChatIcon,
      onClick: (e) => {
        e.preventDefault();
      },
    },
  },
];
