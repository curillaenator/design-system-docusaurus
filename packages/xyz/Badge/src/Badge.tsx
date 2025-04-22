import React, { forwardRef } from 'react';
import cn from 'classnames';
import { BaseBadge } from '@kit-base/badge';
import { Skeleton } from '@kit-xyz/skeleton';

import { DEFAULT_TEST_ID, SKELETON_SHAPE_ASSOC, ICONS_SIZE_ASSOC, SKELETON_HEIGHT_ASSOC } from './constants';
import { BadgeProps } from './interfaces';
import { useBadgeProps } from './hooks/useBadgeProps';
import styles from './styles/badge.module.scss';

const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    additionalLabel,
    className,
    children,
    skeleton,
    colorMode,
    size,
    shape,
    IconRight,
    IconLeft,
    labelsReversed,
    ...rest
  } = useBadgeProps(props);

  if (skeleton)
    return (
      <Skeleton
        colorMode={colorMode}
        style={{
          width: `${skeleton}`,
          height: SKELETON_HEIGHT_ASSOC[size],
          borderRadius: SKELETON_SHAPE_ASSOC[size][shape],
        }}
      />
    );

  return (
    <BaseBadge
      {...rest}
      ref={ref}
      iconRight={IconRight && <IconRight size={ICONS_SIZE_ASSOC[size]} />}
      iconLeft={IconLeft && <IconLeft size={ICONS_SIZE_ASSOC[size]} />}
      dataTestId={props.dataTestId || DEFAULT_TEST_ID}
      className={className}
    >
      {(children || additionalLabel) && (
        <span
          className={cn(styles.labels, {
            [styles.labels_reversed]: labelsReversed,
          })}
        >
          {additionalLabel && <span data-label='additional'>{additionalLabel}</span>}
          {children && <span data-label='label'>{children}</span>}
        </span>
      )}
    </BaseBadge>
  );
});

Badge.displayName = 'Badge';

export { Badge };
