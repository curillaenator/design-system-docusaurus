import cn from 'classnames';

import { TypographyInternalAppearance } from '../interfaces';
import {
  colorSchemaClassNames,
  sizeClassNames,
  fontWeightClassNames,
  fontFamilyClassNames,
  lineHeightClassNames,
} from '../styles/styles';

import { UseTypographyProps } from './interfaces';

export const useTypographyClasses = (props: UseTypographyProps) => {
  const {
    size = '2xl',
    fontWeight = 'regular',
    lineHeight = 'low',
    appearance = 'dark',
    fontFamily = 'sans',
    disabled = false,
    className,
  } = props;

  const colorSchema = `color-${appearance}` as TypographyInternalAppearance;

  const resultClasses = cn(
    sizeClassNames[size],
    fontWeightClassNames[fontWeight],
    fontFamilyClassNames[fontFamily],
    lineHeightClassNames[lineHeight],
    {
      [colorSchemaClassNames['state-disabled']]: disabled,
      [colorSchemaClassNames[colorSchema]]: !disabled,
    },
    className,
  );

  return resultClasses;
};
