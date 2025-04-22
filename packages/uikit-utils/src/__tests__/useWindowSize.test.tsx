import React from 'react';
import { render, act } from '@testing-library/react';

import { useWindowSize, WindowFallback } from '../useWindowSize';

function ComponentWithHook() {
  const size = useWindowSize();
  return <div data-test-width={size.width} data-test-height={size.height} />;
}

function ComponentWithHookWithParams(windowObjectFallback: WindowFallback) {
  const size = useWindowSize(windowObjectFallback);

  return <div data-test-width={size.width} data-test-height={size.height} />;
}

describe('useWindowSize', () => {
  it('значение width и height изменяются при событии resize, когда window определен', () => {
    global.innerWidth = 200;
    global.innerHeight = 768;

    render(<ComponentWithHook />);

    const contentWidthFirst = document.querySelector(`[data-test-width="200"]`);
    const contentHeightFirst = document.querySelector(`[data-test-height="768"]`);
    expect(contentWidthFirst).toBeInTheDocument();
    expect(contentHeightFirst).toBeInTheDocument();

    global.innerWidth = 500;
    global.innerHeight = 600;

    act(() => {
      global.dispatchEvent(new Event('resize'));
    });

    const contentWidthSecond = document.querySelector(`[data-test-width="500"]`);
    const contentHeightSecond = document.querySelector(`[data-test-height="600"]`);
    expect(contentWidthSecond).toBeInTheDocument();
    expect(contentHeightSecond).toBeInTheDocument();
  });

  it('width и height не определены, когда window не определен', () => {
    const WINDOW_OBJECT_FALLBACK = {
      innerWidth: undefined,
      innerHeight: undefined,
      addEventListener: () => {},
      removeEventListener: () => {},
    };

    render(<ComponentWithHookWithParams {...WINDOW_OBJECT_FALLBACK} />);

    const contentWidth = document.querySelector(`[data-test-width]`);
    const contentHeight = document.querySelector(`[data-test-height]`);

    expect(contentWidth).not.toBeInTheDocument();
    expect(contentHeight).not.toBeInTheDocument();
  });

  it('вызывает setState при событии resize, когда window определен', () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    global.innerWidth = 200;
    global.innerHeight = 768;
    useStateSpy.mockImplementation(() => [{ width: 200, height: 768 }, setState]);

    render(<ComponentWithHook />);

    global.innerWidth = 500;

    act(() => {
      global.dispatchEvent(new Event('resize'));
    });

    expect(setState).toHaveBeenCalledTimes(1);
    expect(setState).toHaveBeenLastCalledWith({ width: 500, height: 768 });
  });
});
