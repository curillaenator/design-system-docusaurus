import React, { type ComponentProps } from 'react';
import cn from 'classnames';
import { ThemeClassNames, usePrismTheme } from '@docusaurus/theme-common';
import { getPrismCssVariables } from '@docusaurus/theme-common/internal';

import styles from './styles.module.scss';

export default function CodeBlockContainer<T extends 'div' | 'pre'>(props: { as: T } & ComponentProps<T>): JSX.Element {
  const { as: As, className, ...rest } = props;

  const prismTheme = usePrismTheme();
  const prismCssVariables = getPrismCssVariables(prismTheme);

  return (
    <As
      // Polymorphic components are hard to type, without `oneOf` generics
      {...(rest as any)} // eslint-disable-line @typescript-eslint/no-explicit-any
      style={prismCssVariables}
      className={cn(className, styles.codeBlockContainer, ThemeClassNames.common.codeBlock)}
    />
  );
}
