import cn from 'classnames';

import { DEFAULT_TEST_ID } from '../constants';
import type { CornerProps } from '../interfaces';
import styles from '../corners.module.scss';

import { calc } from './helpers';

const PATHS_CACHE = new Map();

export const useCorners = (props: CornerProps) => {
  const { dataTestId = DEFAULT_TEST_ID, stroke = 0, borderRadius = 16, className, ...rest } = props;
  const key = `${borderRadius}_${stroke}`;

  if (!PATHS_CACHE.has(key)) PATHS_CACHE.set(key, calc(borderRadius, stroke));

  const { R, borderPath, path } = PATHS_CACHE.get(key) as { R: number; path: string; borderPath: string };

  return {
    ...rest,
    dataTestId,
    stroke,
    path,
    borderPath,
    className: cn(styles.shapeContainer, className),
    commonSvgProps: {
      version: '1.1',
      width: R,
      height: R,
      shapeRendering: 'geometricPrecision',
      viewBox: `0 0 ${R} ${R}`,
      xmlns: 'http://www.w3.org/2000/svg',
    },
  };
};
