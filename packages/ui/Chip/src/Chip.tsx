import React, { forwardRef } from 'react';
import cn from 'classnames';

import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import { ChipComponent } from './interfaces';
import styles from './styles/chip.module.scss';

/**
 * Chip -  {@link https://uikit.pcbltools.ru/v4.1/?path=/docs/chip--default| ссылка на документацию.}
 *
 */
export const Chip: ChipComponent = forwardRef((props, ref) => {
  const {
    component,
    children,
    dataTestId = DEFAULT_TEST_ID,
    textSecondary,
    disabled = false,
    className,
    onClose,
    closeIcon,
    icon,
    ...rest
  } = props;
  const Component = component ?? ('span' as React.ElementType);

  return (
    <Component
      ref={ref}
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      className={cn(styles.chip, className, {
        [styles._disabled]: disabled,
      })}
      {...rest}
    >
      {icon}
      {children && <span>{children}</span>}

      {textSecondary && <span className={styles.textSecondary}>{textSecondary}</span>}

      <button type='button' disabled={disabled} className={cn(styles.buttonClose)} onClick={onClose}>
        {closeIcon}
      </button>
    </Component>
  );
});
