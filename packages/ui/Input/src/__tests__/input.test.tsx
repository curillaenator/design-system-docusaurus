import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@kit-xyz/button';
import { Badge } from '@kit-xyz/badge';

import { BaseInput, InputProps } from '../index';
import { DEFAULT_TEST_ID } from '../constants';

jest.mock('@kit-xyz/icon', () => ({
  Icon: 'svg',
}));

describe('Компонент Input', () => {
  const VALUE = 'VALUE';
  const onChange = jest.fn();

  const makeProps = (props?: Object): InputProps => ({
    value: VALUE,
    onChange,
    dataTestId: DEFAULT_TEST_ID,
    active: false,
    setActive: jest.fn(),
    ...props,
  });

  it('рендерится в базовом режиме', () => {
    render(<BaseInput {...makeProps()} />);
    const input = screen.getByTestId(DEFAULT_TEST_ID);

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(VALUE);
  });

  it('дизейблится', () => {
    render(<BaseInput {...makeProps({ disabled: true })} />);
    const input = screen.getByTestId(DEFAULT_TEST_ID);

    expect(input).toBeDisabled();
  });

  it('рендерится с пользовательскими элементами (adornment)', () => {
    const BUTTON_TEXT = 'button text';
    const BADGE_TEXT = 'badge text';
    const onClickButtonSpy = jest.fn();

    const customButton = <Button onClick={onClickButtonSpy}>{BUTTON_TEXT}</Button>;
    const customBadge = <Badge dataTestId={`${DEFAULT_TEST_ID}.Input.RightIcon`}>{BADGE_TEXT}</Badge>;
    const customProps = makeProps({
      nodeLeft: customButton,
      nodeRight: customBadge,
    });

    render(<BaseInput {...customProps} />);

    const endIconContainer = screen.getByTestId(`${DEFAULT_TEST_ID}.Input.RightIcon`);
    const adornmentButton = screen.getByRole('button');

    fireEvent.click(adornmentButton);

    expect(endIconContainer).toHaveTextContent(BADGE_TEXT);
    expect(adornmentButton).toBeInTheDocument();
    expect(onClickButtonSpy).toBeCalled();
  });
});
