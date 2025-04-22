import React, { type CSSProperties } from 'react';
import cn from 'classnames';
import { Placeholder, useActiveControl, type InputProps as BaseInputProps } from '@kit-base/input';
import CrossIcon from '@kit-xyz/icon/src/assets/solid/CrossIcon';

import { ActionButton } from '../components/ActionButton';
import { Meta } from '../components/Meta';
import { DEFAULT_TEST_ID, STATE_LABEL_ASSOC, INPUT_ICONS_SIZES_ASSOC } from '../../../constants';
import type { InputProps, InputSize, InputShape } from '../interfaces';
import styles from '../input.module.scss';

interface ExtendedBaseProps extends BaseInputProps {
  size: InputSize;
  shape: InputShape;
  skeleton?: CSSProperties['width'];
  colorMode?: InputProps['colorMode'];
}

const resolveColorSchema = (props: InputProps) => {
  const { appearance = 'primary-solid' } = props;

  return `color-${appearance}`;
};

export const useInputProps = (props: InputProps): ExtendedBaseProps => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    value,
    state,
    size = 's',
    shape = 'rounded',
    label,
    startMetaText,
    endMetaText,
    IconLeft,
    IconRight,
    disabled,
    clearable = true,
    onClearInput,
    colorMode = 'light',
    className,

    ...rest
  } = props;

  const activeProps = useActiveControl();

  const colorSchema = resolveColorSchema(props);
  const isClearable = !disabled && value && clearable && onClearInput;

  return {
    ...rest,
    ...activeProps,

    colorMode,

    size,
    shape,

    value,
    dataTestId,
    status: STATE_LABEL_ASSOC[state || ''],
    disabled,

    nodeLeft: IconLeft && <IconLeft size={INPUT_ICONS_SIZES_ASSOC[size]} className={styles.icon} />,
    nodeRight: IconRight && <IconRight size={INPUT_ICONS_SIZES_ASSOC[size]} className={styles.icon} />,

    // заменить компонент на китовый
    actionRight: isClearable && (
      <ActionButton
        dataTestId={`${dataTestId}.Action.Right`}
        Icon={CrossIcon}
        onClick={onClearInput}
        size={INPUT_ICONS_SIZES_ASSOC[size]}
        colorMode={colorMode}
      />
    ),

    upperNode: label && (
      <Meta
        disabled={disabled}
        state={state}
        dataTestId={`${dataTestId}.Meta.Top`}
        startMetaText={label}
        position='top'
      />
    ),

    lowerNode: (startMetaText || endMetaText) && (
      <Meta
        disabled={disabled}
        state={state}
        dataTestId={`${dataTestId}.Meta.Bottom`}
        startMetaText={startMetaText}
        endMetaText={endMetaText}
        position='bottom'
      />
    ),

    className: cn(
      styles.inputThemed,
      styles[`_size_${size}`],
      styles[`_shape_${shape}`],
      styles[`_${colorSchema}_${colorMode}`],
      className,
      {
        [styles.inputThemed_disabled]: disabled,
        [styles.inputThemed_active]: !disabled && activeProps.active,
        [styles[`inputThemed_${state}`]]: !disabled && state,
      },
    ),

    PlaceholderComponent: Placeholder,
  };
};
