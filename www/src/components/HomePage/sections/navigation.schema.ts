export interface TabProps {
  id: string;
  title: string;
}

export const TABS: TabProps[] = [
  {
    id: 'about-platform-section',
    title: 'О платформе',
  },
  {
    id: 'products-tech-section',
    title: 'Продукты',
  },
  {
    id: 'cases-section',
    title: 'Кейсы',
  },
  {
    id: 'advantages-section',
    title: 'Преимущества',
  },
  {
    id: 'partnership-section',
    title: 'Партнёрам',
  },
  {
    id: 'delivery-section',
    title: 'Поставки',
  },
  {
    id: 'clients-section',
    title: 'Клиенты',
  },
  {
    id: 'articles-section',
    title: 'Публикации',
  },
];

export const TAB_0_ID = TABS[0].id;
export const COVER_ID = 'main-page-cover-id';

export const DURATION = 500;

export const SCROLL_OPTIONS = {
  duration: DURATION,
  delay: 0,
  smooth: true,
};
