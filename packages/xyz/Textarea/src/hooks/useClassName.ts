import { useCallback, useMemo, useState } from 'react';
import cn from 'classnames';

import { TextareaProps } from '../interfaces';
import styles from '../styles/textarea.module.scss';

type TextareaState = TextareaProps['state'] | 'default' | 'active';
type TextareaVariant = TextareaProps['variant'];
type TextareaColor = TextareaProps['appearance'];

const resolveColorScheme = (
  state: TextareaState,
  color: TextareaColor,
  variant: TextareaVariant,
  disabled: boolean,
) => {
  if (disabled) {
    return `_state-disabled-${variant}`;
  }

  if (state === 'default') {
    return `_color-${color}-${variant}`;
  }

  return `_state-${state}-${variant}`;
};

export const useClassName = (props: TextareaProps) => {
  const {
    size = '2xl',
    variant = 'solid',
    state,
    shape = 'rounded',
    appearance = 'light',
    disabled = false,
    className,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const handleIsFocused = useCallback((focus: boolean) => setIsFocused(focus), []);

  const extendedState = useMemo(() => {
    if (!state) {
      return isFocused ? 'active' : 'default';
    }

    return state;
  }, [state, isFocused]);

  const classes = useMemo(() => {
    const schemeName = resolveColorScheme(extendedState, appearance, variant, disabled);

    return cn(styles.textareaVariables, styles[`_size_${size}`], styles[schemeName], styles[`_${shape}`], className);
  }, [extendedState, variant, shape, appearance, disabled, size, className]);

  return { className: classes, isFocused, setIsFocused: handleIsFocused, scrollClassName: styles.scrollbar };
};
