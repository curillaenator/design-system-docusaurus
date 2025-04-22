import { render, screen } from '@testing-library/react';
import mediaQuery from 'css-mediaquery';
import React from 'react';

import { useScale, BreakpointsAssoc } from '../useScale';

function createMatchMedia(width: number) {
  return (query: string) => ({
    matches: mediaQuery.match(query, {
      width,
    }),
    addEventListener: () => {},
    removeEventListener: () => {},
  });
}

describe('тесты useScale', () => {
  const ComponentWithHook: React.FC<{ breakpointsAssoc: BreakpointsAssoc }> = (props) => {
    const brValue = useScale(props.breakpointsAssoc);
    return <div data-testid={brValue} />;
  };

  const testBreakpointsAssoc: BreakpointsAssoc = {
    s: 'xs',
    l: 'm',
    '2xl': 'xl',
    '3xl': 'xl',
  };

  it.each([
    [100, 'xs'],
    [550, 'xs'],
    [900, 'm'],
    [1100, 'm'],
    [1300, 'xl'],
    [1700, 'xl'],
    [2000, 'xl'],
  ])('при ширине окна больше %d возвращает %s', (width: number, breakpoint: string) => {
    window.matchMedia = jest.fn().mockImplementation(createMatchMedia(width));

    render(<ComponentWithHook breakpointsAssoc={testBreakpointsAssoc} />);

    expect(screen.getByTestId(breakpoint)).toBeInTheDocument();
  });
});
