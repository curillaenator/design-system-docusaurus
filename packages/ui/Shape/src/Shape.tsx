import React, { FC } from 'react';

import { useShapeParams } from './hooks/useShapeParams';
import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import type { ShapeProps } from './interfaces';
import styles from './shape.module.scss';

const Component: FC<ShapeProps> = (props) => {
  const {
    ref,
    dataTestId = DEFAULT_TEST_ID,
    W,
    H,
    path,
    BD,
    isGradient = false,
    gradientDirection = 'right',
    className,
    ...rest
  } = useShapeParams(props);

  return (
    <div
      {...rest}
      ref={ref}
      className={className}
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      style={{
        borderRadius: props.borderRadius,
      }}
    >
      <svg
        version='1.1'
        width={W}
        height={H}
        shapeRendering='geometricPrecision'
        viewBox={`0 0 ${W} ${H}`}
        xmlns='http://www.w3.org/2000/svg'
        className={styles.transition}
      >
        <defs>
          <linearGradient id='shape-gradient-bottom' x1='0' x2='0' y1='0' y2='1'>
            <stop offset='0%' stopColor='var(--shp-gradient-from, red)' />
            <stop offset='100%' stopColor='var(--shp-gradient-to, yellow)' />
          </linearGradient>

          <linearGradient id='shape-gradient-left' x1='0' y1='0' x2='1' y2='0'>
            <stop offset='0%' stopColor='var(--shp-gradient-to, yellow)' />
            <stop offset='100%' stopColor='var(--shp-gradient-from, red)' />
          </linearGradient>

          <linearGradient id='shape-gradient-top' x1='0' x2='0' y1='0' y2='1'>
            <stop offset='0%' stopColor='var(--shp-gradient-to, yellow)' />
            <stop offset='100%' stopColor='var(--shp-gradient-from, red)' />
          </linearGradient>

          <linearGradient id='shape-gradient-right' x1='0' y1='0' x2='1' y2='0'>
            <stop offset='0%' stopColor='var(--shp-gradient-from, red)' />
            <stop offset='100%' stopColor='var(--shp-gradient-to, yellow)' />
          </linearGradient>
        </defs>

        <path
          width='100%'
          height='100%'
          d={path}
          fill={isGradient ? `url(#shape-gradient-${gradientDirection})` : 'var(--shp-bgc, white)'}
          // stroke='var(--shp-bdc, red)'
          stroke='var(--shp-bdc, var(--shp-bgc, red))'
          strokeWidth='var(--shp-bdw, 0px)'
        />
      </svg>
    </div>
  );
};

export const Shape = React.memo(Component);
