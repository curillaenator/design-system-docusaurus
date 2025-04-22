import React from 'react';
import { render, screen } from '@testing-library/react';

import type { BaseButtonProps } from '../interfaces';
import { Button } from '../Button';
import { DEFAULT_BUTTON_TEST_ID } from '../constants';

const defaultBtnProps = {
  dataTestId: DEFAULT_BUTTON_TEST_ID,
} as BaseButtonProps;

describe('<Button />', () => {
  const TEXT = 'Caption';

  it('рендерится с текстом внутри', () => {
    render(<Button {...defaultBtnProps}>{TEXT}</Button>);

    expect(screen.getByTestId(DEFAULT_BUTTON_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(TEXT)).toBeInTheDocument();
  });

  it('рендерится в состоянии disabled', () => {
    render(
      <Button {...defaultBtnProps} disabled>
        {TEXT}
      </Button>,
    );
    const buttonEl = screen.getByTestId(DEFAULT_BUTTON_TEST_ID);

    expect(buttonEl).toBeDisabled();
  });

  it('рендерится с типом submit', () => {
    render(
      <Button {...defaultBtnProps} type='submit'>
        {TEXT}
      </Button>,
    );
    const buttonEl = screen.getByTestId(DEFAULT_BUTTON_TEST_ID);

    expect(buttonEl).toHaveAttribute('type', 'submit');
  });

  it('рендерится с иконкой', () => {
    const testId = 'UIKit.Icon';
    render(
      <Button {...defaultBtnProps} iconLeft={<i data-testid={testId} />}>
        {TEXT}
      </Button>,
    );
    const iconEl = screen.getByTestId(testId);

    expect(iconEl).toBeInTheDocument();
  });
});
