import React from 'react';
import cn from 'classnames';
import MinusIcon from '@kit-xyz/icon/src/assets/solid/MinusIcon';
import type { CheckboxBaseProps } from '@kit-base/checkbox';

import type { CheckboxProps, CheckboxSizes } from '../interfaces';
import styles from '../checkbox.module.scss';

interface ExtendedCheckboxBaseProps extends CheckboxBaseProps {
  colorMode: CheckboxProps['colorMode'];
  size: CheckboxSizes;
  skeleton?: CheckboxProps['skeleton'];
}

const resolveColorSchema = (props: CheckboxProps) => {
  const { state } = props;

  if (state) return `state-${state}`;

  return `color-solid`;
};

export const useCheckboxProps = (props: CheckboxProps): ExtendedCheckboxBaseProps => {
  const {
    size = 'xs',
    className,
    glyphShape = 'rounded',
    colorMode = 'light',
    IconGlyph,
    IconRight,
    IconIndeterminate,
    disabled = false,
    ...rest
  } = props;

  const colorSchema = resolveColorSchema(props);

  return {
    ...rest,
    size,
    colorMode,
    iconGlyph: !!IconGlyph && <IconGlyph size='m' />,
    iconRight: !!IconRight && <IconRight size='m' />,
    iconIndeterminate: IconIndeterminate ? <IconIndeterminate size='xl' /> : <MinusIcon size='s' />,
    disabled,
    className: cn(
      styles.checkboxVariables,
      styles[`_size_${size}`],
      styles[`_shape_${glyphShape}`],
      styles[`_${colorSchema}_${colorMode}`],
      className,
    ),
  };
};
