import React, { forwardRef } from 'react';
import cn from 'classnames';

import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import { CheckboxBaseProps } from './interfaces';
import styles from './checkbox.module.scss';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxBaseProps>((props, ref) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    id,
    label,
    labelSecondary,
    disabled = false,
    reversed = false,
    labelsReversed = false,
    interactive = true,
    glyphShape,
    className,
    onChange,
    checked,
    fullwidth = false,
    LabelsFullwidth = true,
    value = String(label),
    style,
    iconGlyph,
    iconRight,
    indeterminate,
    iconIndeterminate,
    ...rest
  } = props;

  return (
    <label
      htmlFor={id}
      data-testid={`${dataTestId}.Label`}
      data-analytics={`${DEFAULT_TEST_ID}.Label`}
      data-version={VERSION}
      className={cn(styles.checkbox, className, {
        [styles.checkbox_checked]: !disabled && checked,
        [styles.checkbox_fullwidth]: fullwidth,
        [styles.checkbox_reversed]: reversed,
        [styles.checkbox_disabled]: disabled,
        [styles.checkbox_interactive]: !disabled && !checked && interactive,
      })}
      style={style}
    >
      <input
        data-testid={`${dataTestId}.Label.Input`}
        data-analytics={`${DEFAULT_TEST_ID}.Label.Input`}
        data-version={VERSION}
        {...rest}
        id={id}
        ref={ref}
        type='checkbox'
        checked={checked}
        onChange={onChange}
        value={value}
        disabled={disabled}
        className={styles.input}
      />

      <div
        data-testid={`${dataTestId}.Glyph`}
        className={cn(styles.glyph, {
          [styles.glyph_hasDefaultInner]: !iconGlyph && !indeterminate,
        })}
      >
        {indeterminate ? iconIndeterminate : iconGlyph}
      </div>

      {(label || labelSecondary) && (
        <div
          className={cn(styles.labels, {
            [styles.labels_reversed]: labelsReversed,
            [styles.labels_labelsFullwidth]: LabelsFullwidth,
          })}
        >
          {label && (
            <span
              data-testid={`${dataTestId}.Label.Text`}
              data-analytics={`${DEFAULT_TEST_ID}.Label.Text`}
              className={styles.label}
            >
              {label}
            </span>
          )}

          {labelSecondary && <span className={cn(styles.label, styles.label_secondary)}>{labelSecondary}</span>}
        </div>
      )}

      {iconRight}
    </label>
  );
});
