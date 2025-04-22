import React, { FC } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import CaretUpIcon from '@kit-xyz/icon/src/assets/solid/CaretUpIcon';

import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import { BreadcrumbsProps } from './interfaces';
import styles from './styles/styles.module.scss';

/**
 * Breadcrumbs -  {@link https://uikit.pcbltools.ru/v4.1/?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-navigation-breadcrumbs--breadcrumbs| ссылка на документацию.}
 *
 */
export const Breadcrumbs: FC<BreadcrumbsProps> = (props) => {
  const { items, dataTestId = DEFAULT_TEST_ID, ariaLabel = 'Навигация', className } = props;

  return (
    <nav
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      aria-label={ariaLabel}
      className={cn(styles.nav, className)}
    >
      <ol data-testid={`${dataTestId}.List`} className={styles.list}>
        {items.map((item, index) => {
          const isLastElem = index === items.length - 1;
          const { Icon } = item;

          return (
            <li key={item.id} data-testid={`${dataTestId}.List.Item`} className={styles.item}>
              <NavLink
                data-testid={item.dataTestId || `${dataTestId}.List.Item.Link`}
                to={item.href}
                onClick={item.onClick}
                className={styles.navlink}
                aria-current={isLastElem ? 'page' : false}
              >
                {Icon && <Icon size='l' />}

                <span>{item.title}</span>
              </NavLink>

              {!isLastElem && <CaretUpIcon size='l' />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
