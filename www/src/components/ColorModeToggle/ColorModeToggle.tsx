import React, { FC } from 'react';
import cn from 'classnames';

import { icons } from './icons';
import { ColorModeToggleProps } from './interfaces';
import styles from './styles.module.scss';

export const ColorModeToggle: FC<ColorModeToggleProps> = (props) => {
  const { className, globalValue, value, onChange, disabled, title, modes = ['light', 'dark'] } = props;

  return (
    <div
      className={cn(styles.wrapper, className, {
        [styles[`${value}-on-${value}`]]: !globalValue,
        [styles[`${value}-on-${globalValue}`]]: globalValue,
      })}
    >
      <div
        className={cn(styles.toggleButton, styles[`togleLength-${modes.length}`], styles[`transition-${value}`])}
        title={title}
        aria-label={title}
        aria-live='polite'
      >
        <span className={cn(styles.toggler)} />

        {modes.map((mode) => (
          <button
            key={mode}
            type='button'
            disabled={disabled}
            title={title}
            aria-label={title}
            aria-live='polite'
            onClick={() => onChange(mode)}
            className={cn(styles.iconWrapper, {
              [styles.iconWrapper_interactive]: value !== mode,
            })}
          >
            {icons[mode]}
          </button>
        ))}
      </div>
    </div>
  );
};
