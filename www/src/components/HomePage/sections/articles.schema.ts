import placeholder from '../assets/articles/placeholder.png';

export interface ArticleProps {
  id: string;
  to?: string;
  type: string;
  title: string;
  published: string;
  description?: string;
  coverImgSrc?: string;
  contentImgSrc?: string;
}

export const ARTICLES_SCHEMA: ArticleProps[] = [
  {
    id: 'innopoasfsaslis-123',
    to: 'https://google.com',
    title: 'XyzКласс Иннополис',
    type: 'Мероприятие',
    published: '17.04.23',
    coverImgSrc: placeholder,
    description:
      'Продукт практически полностью спроектирован и разработан на компонентах и сервисах платформы в условиях ограниченных',
  },
  {
    id: 'dis-asff23',
    to: 'https://google.com',
    title: 'Имплементация дизайн',
    type: 'Новость',
    published: '9.05.23',
    description:
      'Продукт практически полностью спроектирован и разработан на компонентах и сервисах платформы в условиях ограниченных',
  },
  {
    id: 'acceasfler-23dsg523',
    to: 'https://google.com',
    title: 'Проектирование и эксплуатация XyzАкселлератор',
    type: 'Статья',
    published: '9.05.23',
    contentImgSrc: placeholder,
    description:
      'Продукт практически полностью спроектирован и разработан на компонентах и сервисах платформы в условиях ограниченных',
  },
  {
    id: 'sdgasfsdgs-23dssdgsdg523',
    to: 'https://google.com',
    title: 'Продукт практически полностью спроектирован и разработан на компонентах',
    type: 'Мероприятие',
    published: '9.05.25',
  },
  {
    id: 'innopsdasfgdgsdolis-123',
    to: 'https://google.com',
    title: 'XyzКласс Иннополис',
    type: 'Мероприятие',
    published: '17.04.23',
    coverImgSrc: placeholder,
    description:
      'Продукт практически полностью спроектирован и разработан на компонентах и сервисах платформы в условиях ограниченных',
  },
  {
    id: 'acc121312elesar-23dfassg523',
    to: 'https://google.com',
    title: 'Проектирование и эксплуатация XyzАкселлератор',
    type: 'Статья',
    published: '9.05.23',
    contentImgSrc: placeholder,
    description:
      'Продукт практически полностью спроектирован и разработан на компонентах и сервисах платформы в условиях ограниченных',
  },
  {
    id: 'dis-2asfsaf3',
    to: 'https://google.com',
    title: 'Имплементация дизайн',
    type: 'Новость',
    published: '9.05.23',
    description:
      'Продукт практически полностью спроектирован и разработан на компонентах и сервисах платформы в условиях ограниченных',
  },
  {
    id: 'sdgsdfsags-23dsasfsdgsdg523',
    to: 'https://google.com',
    title: 'Продукт практически полностью спроектирован и разработан на компонентах',
    type: 'Мероприятие',
    published: '9.05.25',
  },
];
