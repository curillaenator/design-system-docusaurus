import { BadgeProps } from '@kit-xyz/badge';
import { ButtonProps } from '@kit-xyz/button';

import xyzpolis from '../assets/cases/xyzpolis.png';
import xyztoria from '../assets/cases/xyztoria.png';
import logtypeZ from '../assets/cases/logtypeZ.png';

export interface CaseProps {
  img: string;
  title: string;
  description: string;
  to?: string;
  badges?: BadgeProps[];
  buttons?: ButtonProps[];
}

const BADGES = [
  'UI Kit',
  'FE Engine Bundle',
  'Report Builder',
  'Content Studio',
  // 'ML / AI',
  // 'JAM',
  // 'UPDM',
  // 'IAM',
  // 'Access Control & Configuration Management',
];

const badgeSetup: BadgeProps = {
  appearance: 'primary-transparent',
  withBorder: true,
};

export const CASES_SCHEMA: CaseProps[] = [
  {
    to: 'https://google.com',
    img: xyzpolis,
    title: 'Проектирование и эксплуатация XyzКласс Иннополис',
    badges: BADGES.map((badge) => ({ children: badge, ...badgeSetup })),
    description:
      'Продукт практически полностью спроектирован и разработан на компонентах и сервисах платформы в условиях ограниченных ресурсов менее чем за 2 месяца',
  },
  {
    to: 'https://google.com',
    img: xyztoria,
    title: 'Имплементация дизайн–системы в проект Edutoria',
    badges: BADGES.map((badge) => ({ children: badge, ...badgeSetup })),
    buttons: [{ children: 'Читать далее', appearance: 'tertiary-solid' }],
    description:
      'Продукт практически полностью спроектирован и разработан на компонентах  и сервисах платформы в условиях ограниченных ресурсов менее чем за 2 месяца',
  },
  {
    to: 'https://google.com',
    img: logtypeZ,
    title: 'Проектирование и эксплуатация XyzАкселлератор',
    badges: BADGES.map((badge) => ({ children: badge, ...badgeSetup })),
    description:
      'Продукт практически полностью спроектирован и разработан на компонентах  и сервисах платформы в условиях ограниченных ресурсов менее чем за 2 месяца',
  },
  {
    to: 'https://google.com',
    img: xyzpolis,
    title: 'Проектирование и эксплуатация XyzКласс Иннополис',
    badges: BADGES.map((badge) => ({ children: badge, ...badgeSetup })),
    description:
      'Продукт практически полностью спроектирован и разработан на компонентах и сервисах платформы в условиях ограниченных ресурсов менее чем за 2 месяца',
  },
  {
    to: 'https://google.com',
    img: xyztoria,
    title: 'Имплементация дизайн–системы в проект Edutoria',
    badges: BADGES.map((badge) => ({ children: badge, ...badgeSetup })),
    buttons: [{ children: 'Читать далее', appearance: 'tertiary-solid' }],
    description:
      'Продукт практически полностью спроектирован и разработан на компонентах  и сервисах платформы в условиях ограниченных ресурсов менее чем за 2 месяца',
  },
  {
    to: 'https://google.com',
    img: logtypeZ,
    title: 'Проектирование и эксплуатация XyzАкселлератор',
    badges: BADGES.map((badge) => ({ children: badge, ...badgeSetup })),
    description:
      'Продукт практически полностью спроектирован и разработан на компонентах  и сервисах платформы в условиях ограниченных ресурсов менее чем за 2 месяца',
  },
];
