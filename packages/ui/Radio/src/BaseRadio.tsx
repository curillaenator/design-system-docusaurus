import React, { forwardRef } from 'react';
import cn from 'classnames';

import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import type { RadioProps } from './interfaces';
import styles from './radio.module.scss';

export const BaseRadio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    id,
    fullwidth = false,
    label,
    labelAdditional,
    labelsFullwidth = false,
    reversed = false,
    labelsReversed = false,
    className,
    checked,
    ...rest
  } = props;

  return (
    <div
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      className={cn(styles.container, className, {
        [styles.container_fullwidth]: fullwidth,
      })}
    >
      <input
        {...rest}
        data-testid={`${dataTestId}.Input`}
        checked={checked}
        ref={ref}
        id={id}
        type='radio'
        className={styles.input}
      />

      <label
        data-testid={`${dataTestId}.Label`}
        htmlFor={id}
        className={cn(styles.radio, {
          [styles.radio_reversed]: reversed,
        })}
      >
        <div data-testid={`${dataTestId}.Label.Glyph`} className={styles.glyphContainer}>
          <div data-testid={`${dataTestId}.Label.Glyph.Outer`} className={styles.glyph} />
        </div>

        <div
          className={cn(styles.labels, {
            [styles.labels_reversed]: labelsReversed,
            [styles.labels_labelsFullwidth]: labelsFullwidth,
          })}
        >
          {label && (
            <span data-testid={`${dataTestId}.Label.Text`} className={styles.label}>
              {label}
            </span>
          )}

          {typeof labelAdditional === 'string' ? (
            <span className={cn(styles.label, styles.labelAdditional)}>{labelAdditional}</span>
          ) : (
            labelAdditional
          )}
        </div>
      </label>
    </div>
  );
});
