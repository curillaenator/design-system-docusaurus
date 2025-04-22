import React, { CSSProperties, forwardRef } from 'react';
import cn from 'classnames';
import { Skeleton } from '@kit-xyz/skeleton';
import { Button as BaseButton } from '@kit-base/button';

import { DEFAULT_BUTTON_TEST_ID, SKELETON_SHAPE_ASSOC, SKELETON_SIZE_ASSOC, ICONS_SIZE_ASSOC } from '../../constants';

import { useButtonProps } from './hooks/useButtonProps';
import type { ButtonProps } from './interfaces';
import styles from './button.module.scss';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    type = 'button',
    dataTestId,
    children,
    secondaryText,
    fullWidth,
    labelsFullwidth,
    labelsJustify = 'start',
    labelsReversed,
    colorMode = 'light',
    skeleton,
    shape,
    size,
    state,
    notion,
    IconLeft,
    IconRight,
    component,
    ...buttonProps
  } = useButtonProps(props);

  if (skeleton) {
    const style: CSSProperties = {
      height: SKELETON_SIZE_ASSOC[size],
      borderRadius: SKELETON_SHAPE_ASSOC[size][shape],
    }
    if (fullWidth) {
      style['flex'] = '1';
    } else {
      style['width'] = `${skeleton}`;
    }

    return (
      <Skeleton
        colorMode={colorMode}
        style={style}
      />
    );
  }

  return (
    <BaseButton
      {...buttonProps}
      ref={ref}
      // @ts-expect-error todo пофиксить типизацию
      component={component}
      type={type}
      fullWidth={fullWidth}
      iconRight={IconRight && <IconRight size={ICONS_SIZE_ASSOC[size]} />}
      iconLeft={IconLeft && <IconLeft size={ICONS_SIZE_ASSOC[size]} />}
      dataTestId={dataTestId || DEFAULT_BUTTON_TEST_ID}
    >
      {(secondaryText || children) && (
        <span
          className={cn(styles.labels, styles[`labels_${labelsJustify}`], {
            [styles.labels_reversed]: labelsReversed,
            [styles.labels_fullWidth]: fullWidth && labelsFullwidth,
          })}
        >
          {secondaryText && <span data-label='secondary'>{secondaryText}</span>}
          {children && <span data-label='label'>{children}</span>}
        </span>
      )}
    </BaseButton>
  );
});
