import React, { useState, useMemo } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DEFAULT_TEST_ID } from '../constants';
import { NumericRange, NumericRangeProps } from '../index';

describe('Тесты для компонента NumericRange', () => {
  const setup = () => {
    let handleRangeChange;

    const TestEnvironment = () => {
      const [outerRange, setOuterRange] = useState<NumericRangeProps['range']>(['', '']);

      handleRangeChange = useMemo(() => jest.fn((range: NumericRangeProps['range']) => setOuterRange([...range])), []);

      return <NumericRange range={outerRange} setRange={handleRangeChange} />;
    };

    render(<TestEnvironment />);

    return handleRangeChange;
  };

  it('NumericRange выводит переданные через range значения', () => {
    const setRange = jest.fn();
    const RANGE = ['12', '44'] as NumericRangeProps['range'];

    render(<NumericRange range={RANGE} setRange={setRange} />);

    const inputs = screen.getAllByTestId(DEFAULT_TEST_ID);

    inputs.forEach((input, idx) => {
      expect(input).toHaveValue(RANGE[idx]);
    });
  });

  it('NumericRange выводит введенные числа', () => {
    const testValues = ['11', '49'] as NumericRangeProps['range'];

    const handleRangeChange = setup();

    const inputs = screen.getAllByTestId(DEFAULT_TEST_ID);

    inputs.forEach((input, idx) => {
      userEvent.type(input, testValues[idx]);
    });

    expect(handleRangeChange).toBeCalledTimes(testValues.join('').length);
    inputs.forEach((input, idx) => {
      expect(input).toHaveValue(testValues[idx]);
    });
  });

  it('NumericRange выводит плейсходеры', () => {
    const setRange = jest.fn();
    const RANGE = ['', ''] as NumericRangeProps['range'];
    const testPlaceholders: [string, string] = ['plhldr_1', 'plhldr_2'];

    render(<NumericRange range={RANGE} setRange={setRange} placeholders={testPlaceholders} />);

    const inputs = screen.getAllByTestId(DEFAULT_TEST_ID);

    inputs.forEach((input, idx) => {
      expect(input).toHaveAttribute('placeholder', testPlaceholders[idx]);
    });
  });

  it('NumericRange выводит заголовок', () => {
    const setRange = jest.fn();
    const RANGE = ['', ''] as NumericRangeProps['range'];
    const testCaption = 'test caption';

    render(<NumericRange range={RANGE} setRange={setRange} caption={testCaption} />);

    expect(screen.getByText(testCaption)).toBeInTheDocument();
  });
});
