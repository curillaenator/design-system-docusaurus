import React, { forwardRef } from 'react';
import cn from 'classnames';

import { DEFAULT_TEST_ID } from './constants';
import type { BaseAvatarImageProps } from './interfaces';
import styles from './image.module.scss';

const BaseAvatarImage = forwardRef<HTMLDivElement, BaseAvatarImageProps>((props, ref) => {
  const {
    src,
    svg: Svg,
    initials = 'SW',
    alt,
    title,
    notion,
    notionPlacement = 'bottom-right',
    dataTestId = DEFAULT_TEST_ID,
    className,
    withBorder = false,
  } = props;

  return (
    <div ref={ref} className={cn(styles.image, className)}>
      {src && !Svg && (
        <img data-testid={`${dataTestId}.Image`} src={src} alt={alt} title={title} className={styles.source} />
      )}

      {Svg && <Svg />}

      {!src && !Svg && (
        <span data-testid={`${dataTestId}.Text`} className={styles.text}>
          {initials.slice(0, 2).toUpperCase()}
        </span>
      )}

      {withBorder && <div className={styles.border} />}

      {!!notion && (
        <div data-testid={`${dataTestId}.Notion`} className={cn(styles.notion, styles[`notion_${notionPlacement}`])}>
          {notion}
        </div>
      )}
    </div>
  );
});

BaseAvatarImage.displayName = 'BaseAvatarImage';

export { BaseAvatarImage };
