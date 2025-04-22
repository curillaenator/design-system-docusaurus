import React, { FC } from 'react';
import cns from 'classnames';

import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import { BaseBubbleProps } from './interfaces';
import styles from './styles/bubble.module.scss';

/**
 * BubbleChat -  {@link https://uikit.pcbltools.ru/v4.1/?path=/docs/компоненты-common-bubblechat--bubble-chat| ссылка на документацию.}
 *
 */
export const BaseBubble: FC<BaseBubbleProps> = (props) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    // size = 'l',
    title,
    subTitle,
    IconLeft,
    IconRight,
    iconClassName,
    className,
    reversedText,
    shape,
    corner,
    interactive,
  } = props;

  const isCircular = shape === 'circular';
  const classes = cns(
    styles.bubble,
    styles._rounded,
    {
      [styles._circular]: isCircular,
      [styles._interactive]: interactive,
      [styles[`corner_${corner}`]]: Boolean(corner),
      [styles._reversed]: reversedText,
    },
    className,
  );

  return (
    <div data-testid={dataTestId} data-analytics={DEFAULT_TEST_ID} data-version={VERSION} className={classes}>
      {IconLeft && (
        <IconLeft
          className={cns(styles.icon, iconClassName)}
          // size={iconSize}
        />
      )}
      <div className={styles.content}>
        {title && <span>{title}</span>}
        {subTitle && <span className={styles.textSecondary}>{subTitle}</span>}
      </div>
      {IconRight && (
        <IconRight
          className={cns(styles.icon, iconClassName)}
          // size={iconSize}
        />
      )}
    </div>
  );
};
