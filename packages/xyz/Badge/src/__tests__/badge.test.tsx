import React from 'react';
import { screen, render } from '@testing-library/react';
import Icon from '@kit-xyz/icon/src/assets/solid/CameraIcon';

import { BadgeProps } from '../interfaces';
import { DEFAULT_TEST_ID } from '../constants';
import { Badge } from '../index';

describe('Badge', () => {
  const DEFAULT_IMAGE_TEST_ID = 'XYZKit.Icon';

  const DEFAULT_TEXT = 'Caption';

  it('отображает содержимое', () => {
    render(<Badge IconLeft={Icon}>{DEFAULT_TEXT}</Badge>);

    expect(screen.getByText(DEFAULT_TEXT)).toBeInTheDocument();
  });

  it.each([
    ['размер - xs', { size: 'xs' }],
    ['appearance - primary', { appearance: 'primary-solid' }],
    ['радиус - circular', { shape: 'circular' }],
    ['disabled', { disabled: true }],
  ])('Badge - %s', (_description, props) => {
    render(<Badge {...(props as BadgeProps)} />);

    const badgeElement = screen.getByTestId(DEFAULT_TEST_ID);

    expect(badgeElement).toBeInTheDocument();
  });

  it('рендерит иконку', () => {
    render(<Badge IconLeft={Icon} />);

    const iconElement = screen.getByTestId(DEFAULT_IMAGE_TEST_ID);

    expect(iconElement).toBeInTheDocument();
  });
});
