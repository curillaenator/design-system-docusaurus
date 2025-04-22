import cn from 'classnames';

import { DEFAULT_TEST_ID } from '../constants';
import { VERSION } from '../version';
import { IconProps } from '../interfaces';
import base from '../styles/base.module.scss';
import styles from '../styles/styles.module.scss';

export const getAttributesByProps = (props: IconProps) => {
  const { dataTestId = DEFAULT_TEST_ID, size = 'm', color, colorMode = 'light', className, ...rest } = props;

  const classNameFull = cn(base.icon, styles[`_size_${size}`], className, {
    [styles[`_color-${color}_${colorMode}`]]: !!color,
  });

  return {
    ...rest,
    'data-testid': dataTestId,
    'data-analytics': DEFAULT_TEST_ID,
    'data-version': VERSION,
    className: classNameFull,
  };
};
