import { ReactText, MouseEvent } from 'react';
import { IconComponent } from '@kit-xyz/icon';

export interface BreadcrumbsItemProps {
  /** id для Breadcrumbs, так же используется для key */
  id: ReactText;
  /** путь до страницы */
  href: string;
  /** заголовок для Breadcrumbs */
  title: string;
  /** тест id для элемента в Breadcrumbs */
  dataTestId?: string;
  /** иконка для Breadcrumbs */
  Icon?: IconComponent;
  /** обработчик для bredcrumb */
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export interface BreadcrumbsProps {
  /** элементы для Breadcrumbs */
  items: BreadcrumbsItemProps[];
  /** тест id */
  dataTestId?: string;
  /** лейбл доступности компонента, по умолчанию - Навигация */
  ariaLabel?: string;
  /** дополнительный className */
  className?: string;
}
