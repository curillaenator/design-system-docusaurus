import React from 'react';
import { render, screen } from '@testing-library/react';
import GridIcon from '@kit-xyz/icon/src/assets/duotone/GridIcon';

import { Button, ButtonProps } from '../components/Button';
import { DEFAULT_BUTTON_TEST_ID } from '../constants';

const defaultBtnProps = {
  dataTestId: DEFAULT_BUTTON_TEST_ID,
} as ButtonProps;

describe('Button', () => {
  const TEXT = 'Caption';

  it('рендерит текст', () => {
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
    render(
      <Button {...defaultBtnProps} IconLeft={GridIcon}>
        {TEXT}
      </Button>,
    );

    expect(screen.getByTestId('XYZKit.Icon')).toBeInTheDocument();
  });
});
