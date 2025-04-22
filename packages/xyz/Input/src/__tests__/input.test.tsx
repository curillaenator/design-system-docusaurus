import React from 'react';
import { render, screen } from '@testing-library/react';

import { Input, InputProps, InputState } from '../index';
import { DEFAULT_TEST_ID } from '../constants';

describe('Input', () => {
  const VALUE = 'VALUE';
  const onChange = jest.fn();

  const makeProps = (props?: InputProps) => ({
    value: VALUE,
    onChange,
    dataTestId: DEFAULT_TEST_ID,
    ...props,
  });

  it('рендерится в базовом режиме', () => {
    render(<Input {...makeProps()} />);
    const input = screen.getByTestId(DEFAULT_TEST_ID);

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(VALUE);
  });

  it('рендерится в другом размере, типе и радиусе', () => {
    const customProps = makeProps({
      size: 'default',
      type: 'password',
    });

    render(<Input {...customProps} />);
    const input = screen.getByTestId(DEFAULT_TEST_ID);

    expect(input).toHaveAttribute('type', 'password');
  });

  it('рендерится в success и error', () => {
    const states: InputState[] = ['success', 'error'];

    const inputs = (
      <>
        {states.map((state) => (
          <Input key={state} state={state} dataTestId={`${DEFAULT_TEST_ID}.${state}`} />
        ))}
      </>
    );

    render(inputs);
    states.forEach((state) => {
      const inputWrapper = screen.getByTestId(`${DEFAULT_TEST_ID}.${state}.Container`);

      expect(inputWrapper).toBeInTheDocument();
    });
  });

  it('рендерит messages', () => {
    const customProps = {
      startMetaText: 'Text start',
      endMetaText: 'Text end',
    };
    render(<Input {...customProps} />);
    expect(screen.getByText(customProps.startMetaText)).toBeInTheDocument();
    expect(screen.getByText(customProps.endMetaText)).toBeInTheDocument();
  });

  it('дизейблится', () => {
    const customProps = makeProps({
      disabled: true,
    });

    render(<Input {...customProps} />);
    const input = screen.getByTestId(DEFAULT_TEST_ID);

    expect(input).toBeDisabled();
  });

  // it('рендреиться clearable', () => {
  //   const onClearSpy = jest.fn();
  //   const customProps = makeProps({
  //     clearable: true,
  //     onClearInput: onClearSpy,
  //   });

  //   render(<Input {...customProps} />);

  //   const input = screen.getByTestId(DEFAULT_TEST_ID);

  //   fireEvent.focusIn(input);

  //   const inputClearIcon = screen.getByTestId(`${DEFAULT_TEST_ID}.Action`);

  //   fireEvent.click(inputClearIcon);

  //   expect(onClearSpy).toBeCalled();
  //   expect(inputClearIcon).toBeInTheDocument();
  // });
});
