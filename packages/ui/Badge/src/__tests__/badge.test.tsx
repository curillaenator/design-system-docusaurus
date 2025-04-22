import React from 'react';
import { screen, render } from '@testing-library/react';

import { BaseBadgeProps } from '../interfaces';
import { DEFAULT_TEST_ID } from '../constants';
import { BaseBadge } from '../index';

describe('Тесты для компоненты Badge', () => {
  const DEFAULT_IMAGE_TEST_ID = 'UIKit.Icon';
  const Icon = <span data-testid={DEFAULT_IMAGE_TEST_ID}>test icon</span>;
  const DEFAULT_TEXT = 'Caption';

  it('Badge содержимое', () => {
    render(<BaseBadge>{DEFAULT_TEXT}</BaseBadge>);

    expect(screen.getByText(DEFAULT_TEXT)).toBeInTheDocument();
  });

  it.each([
    ['размер - xs', { size: 'xs' }],
    ['appearance - primary', { appearance: 'primary' }],
    ['радиус - circular', { shape: 'circular' }],
    ['disabled', { disabled: true }],
  ])('Badge - %s', (_description, props) => {
    render(<BaseBadge {...(props as BaseBadgeProps)} />);

    const badgeElement = screen.getByTestId(DEFAULT_TEST_ID);

    expect(badgeElement).toBeInTheDocument();
  });

  it('Badge - наличие иконки', () => {
    render(<BaseBadge iconLeft={Icon} />);

    const iconElement = screen.getByTestId(DEFAULT_IMAGE_TEST_ID);

    expect(iconElement).toBeInTheDocument();
  });
});
