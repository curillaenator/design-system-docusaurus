import { BadgeProps } from '@kit-xyz/badge';

interface SchemaBlockType {
  id: string;
  title: string;
  badges: BadgeProps[];
  subtitle?: string;
}

export const ARCHITECTURE_SCHEMA: SchemaBlockType[] = [
  {
    id: 'products',
    title: 'Каналы (Продукты)',
    badges: [
      {
        children: 'Xyz Класс B2B',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Xyz Класс B2C',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Xyz Класс',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Xyz Акселлератор',
        appearance: 'secondary-solid-alt',
      },
      {
        children: 'Xyz Сова',
        appearance: 'secondary-solid-alt',
      },
      {
        children: 'Школа XYZ 21',
        appearance: 'secondary-solid-alt',
      },
      {
        children: 'Xyztoria',
        appearance: 'secondary-solid-alt',
      },
      {
        children: 'Xyztcamp',
        appearance: 'secondary-solid-alt',
      },
    ],
  },
  {
    id: 'solutions',
    title: 'Решения (Solutions)',
    badges: [
      {
        children: 'LMS «Школьное образование»',
        appearance: 'tertiary-solid',
      },
      {
        children: 'LMS «Высшее образование»',
        appearance: 'tertiary-solid',
      },
      {
        children: 'LMS «Доп. образование»',
        appearance: 'tertiary-solid',
      },
    ],
  },
  {
    id: 'controls',
    title: 'Создание и управление',
    badges: [
      {
        children: 'Конфигурация тех. продуктов',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Компоновка сервисов',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Публикация сервисов',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Продуктовая экспертиза',
        appearance: 'secondary-solid-alt',
      },
    ],
  },
  {
    id: 'platform',
    title: 'Платформа технологических продуктов',
    subtitle: 'Набор высококачественных технологических продуктов и сервисов, с документацией и примерами.',
    badges: [
      {
        children: 'File & Draft Service',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Frontend Engine Bundle',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Конструктор контента',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Фабрика данных',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Gamification',
        appearance: 'tertiary-solid',
      },
      {
        children: 'IDM',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Logging, Audit & Monitoring',
        appearance: 'tertiary-solid',
      },
      {
        children: 'User & Personal Data Managment',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Интеграционный Gateway',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Backend Engine Bundle',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Gateway & API Management',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Gitlab Integration Service',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Gitlab Dump Exporter',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Gitlab SE',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Messaging and Collaboration Service',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Pay-сервис',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Сервис Поиска',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Design–System & UI Kit',
        appearance: 'tertiary-solid',
      },
      {
        children: 'Ядро LMS',
        appearance: 'tertiary-solid',
      },
    ],
  },
  {
    id: 'ecosystem',
    title: 'Экосистема и 3rd–party',
    subtitle: 'Дополнительные сервисы',
    badges: [
      {
        children: 'Xyz ID',
        appearance: 'secondary-solid-alt',
      },
      {
        children: 'CDN',
        appearance: 'secondary-solid-alt',
      },
      {
        children: 'XyzCloud',
        appearance: 'secondary-solid-alt',
      },
      {
        children: 'XyzMobile',
        appearance: 'secondary-solid-alt',
      },
      {
        children: 'Gitlab',
        appearance: 'secondary-solid-alt',
      },
      {
        children: 'S3',
        appearance: 'secondary-solid-alt',
      },
      {
        children: 'Kaspersky Antivirus',
        appearance: 'primary-transparent',
        withBorder: true,
      },
      {
        children: 'Bi Zone',
        appearance: 'primary-transparent',
        withBorder: true,
      },
    ],
  },
];
