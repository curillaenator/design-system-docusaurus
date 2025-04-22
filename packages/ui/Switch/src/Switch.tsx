import React, { forwardRef } from 'react';
import cn from 'classnames';

import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import { BaseSwitchProps } from './interfaces';
import styles from './switch.module.scss';

export const Switch = forwardRef<HTMLInputElement, BaseSwitchProps>((props, ref) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    id,
    label,
    labelSecondary,
    fullwidth = false,
    checked,
    onChange,
    disabled = false,
    reversed = false,
    labelsReversed = false,
    labelsFullwidth = false,
    className,
    ...rest
  } = props;

  return (
    <label
      htmlFor={id}
      data-testid={`${dataTestId}.Label`}
      data-analytics={`${DEFAULT_TEST_ID}.Label`}
      data-version={VERSION}
      className={cn(styles.switch, className, {
        [styles.switch_reversed]: reversed,
        [styles.switch_disabled]: disabled,
        [styles.switch_fullwidth]: fullwidth,
      })}
    >
      <input
        {...rest}
        id={id}
        type='checkbox'
        role='switch'
        data-testid={dataTestId}
        data-analytics={DEFAULT_TEST_ID}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        className={styles.input}
        ref={ref}
      />

      <div className={styles.glyph}>
        <div className={styles.glyphToggler} />
      </div>

      {(!!label || !!labelSecondary) && (
        <div
          className={cn(styles.labels, {
            [styles.labels_fullwidth]: labelsFullwidth,
            [styles.labels_reversed]: labelsReversed,
          })}
        >
          {label && (
            <span data-testid={`${dataTestId}.Label.Text`} className={styles.label}>
              {label}
            </span>
          )}

          {labelSecondary && (
            <span data-testid={`${dataTestId}.Label.SecondaryText`} className={styles.labelSecondary}>
              {labelSecondary}
            </span>
          )}
        </div>
      )}
    </label>
  );
});
