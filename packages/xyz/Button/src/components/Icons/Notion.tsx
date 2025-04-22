import React, { forwardRef, SVGProps } from 'react';
import cn from 'classnames';

import { ButtonProps } from '../Button/interfaces';

import { ICONS_SIZE_ASSOC } from './constants';
import styles from './notion.module.scss';

interface NotionProps extends SVGProps<SVGSVGElement> {
  active?: ButtonProps['active'];
  disabled?: ButtonProps['disabled'];
  size?: ButtonProps['size'];
}

export const Notion = forwardRef<SVGSVGElement, NotionProps>((props, ref) => {
  const { active, disabled, size = 's', children } = props;
  const containerSize = ICONS_SIZE_ASSOC[size];

  return (
    <span
      className={cn(styles.notionized, styles[`_size_${containerSize}`], {
        [styles._state_active]: active,
        [styles._state_disabled]: disabled,
      })}
    >
      <svg ref={ref} width='100%' height='100%' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <clipPath id='button-notion-clip-path'>
            <path
              width='100%'
              height='100%'
              d='M 0 0 L 17.999 0 C 16.744 1.671 16 3.749 16 6 C 16 11.523 20.477 16 26 16 C 28.251 16 30.329 15.256 32 14.001 L 32 32 L 0 32 Z'
            />
          </clipPath>
        </defs>

        <foreignObject x={0} y={0} width='100%' height='100%' clipPath='url(#button-notion-clip-path)'>
          {children}
        </foreignObject>
      </svg>
    </span>
  );
});
