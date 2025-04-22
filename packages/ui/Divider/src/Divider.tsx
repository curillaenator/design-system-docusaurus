import React, { forwardRef } from 'react';
import cn from 'classnames';

import { VERSION } from './version';
import { DEFAULT_TEST_ID, MAX_TEXT_LENGTH } from './constants';
import { DividerComponent } from './interfaces';
import baseStyles from './styles/divider.module.scss';

/**
 * Divider-  {@link https://uikit.pcbltools.ru/v4.1/?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-common-divider--divider| ссылка на документацию.}
 *
 */
export const Divider: DividerComponent = forwardRef((props, ref) => {
  const {
    component,
    dataTestId = DEFAULT_TEST_ID,
    text,
    textSecondary,
    iconRight,
    iconLeft,
    orientation = 'horizontal',
    className,
    role = 'separator',
  } = props;
  const Component = component ?? ('div' as React.ElementType);

  const dividerClassName = cn(baseStyles.divider, baseStyles[`_${orientation}`], className);

  if (!!text || !!textSecondary || !!iconLeft || !!iconRight) {
    return (
      <Component
        role={role}
        ref={ref}
        data-testid={dataTestId}
        data-analytics={DEFAULT_TEST_ID}
        data-version={VERSION}
        className={dividerClassName}
      >
        <div data-testid={`${dataTestId}.Line`} className={baseStyles.line} />
        <div className={baseStyles.content}>
          {iconLeft}

          {text && (
            <span data-testid={`${dataTestId}.Text`} className={baseStyles.text}>
              {text.slice(0, MAX_TEXT_LENGTH)}
            </span>
          )}

          {textSecondary && (
            <span data-testid={`${dataTestId}.textSecondary`} className={baseStyles.secondaryText}>
              {textSecondary.slice(0, MAX_TEXT_LENGTH)}
            </span>
          )}
          {iconRight}
        </div>

        <div data-testid={`${dataTestId}.Line`} className={baseStyles.line} />
      </Component>
    );
  }

  return (
    <Component
      role={role}
      ref={ref}
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      className={dividerClassName}
    >
      <div data-testid={`${dataTestId}.Line`} className={baseStyles.line} />
    </Component>
  );
});
