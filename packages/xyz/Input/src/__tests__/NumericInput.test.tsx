import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { NumericInput } from '../index';
import { DEFAULT_TEST_ID } from '../constants';

describe('Тесты компонента NumericInput', () => {
  it('NumericInput рендерится в базовом режиме', () => {
    const VALUE = '134';

    render(<NumericInput value={VALUE} />);

    const input = screen.getByTestId(DEFAULT_TEST_ID);

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(VALUE);
  });

  it('При попытке ввести число в колбэк передается число', async () => {
    const changeValue = jest.fn();

    const onChange = jest.fn((e) => {
      e.preventDefault();
      changeValue(e.target.value);
    });

    const testValue = '1';

    render(<NumericInput onChange={onChange} />);
    const input = screen.getByTestId(DEFAULT_TEST_ID);

    userEvent.type(input, testValue);

    expect(onChange).toHaveBeenCalledTimes(testValue.length);
    expect(changeValue).toHaveBeenCalledWith(testValue);
  });

  it('При попытке ввести символ в колбэк передается пустая строка', () => {
    const changeValue = jest.fn();

    const onChange = jest.fn((e) => {
      e.preventDefault();
      changeValue(e.target.value);
    });

    const testValue = 'f';

    render(<NumericInput onChange={onChange} />);
    const input = screen.getByTestId(DEFAULT_TEST_ID);

    userEvent.type(input, testValue);

    expect(onChange).toHaveBeenCalledTimes(testValue.length);
    expect(changeValue).toHaveBeenCalledWith('');
  });
});
