import { render, screen } from '@testing-library/react';
import mediaQuery from 'css-mediaquery';
import { useBreakpoint, DEFAULT_BREAKPOINTS, Breakpoints } from '@kit-base/uikit-utils';
import React from 'react';

function createMatchMedia(width: number) {
  return (query: string) => ({
    matches: mediaQuery.match(query, {
      width,
    }),
    addEventListener: () => {},
    removeEventListener: () => {},
  });
}

describe('useBreakpoint tests', () => {
  const ComponentWithHook: React.FC<{ breakpoints?: Breakpoints }> = (props) => {
    const brValue = useBreakpoint(props.breakpoints);
    return <div data-testid={brValue} />;
  };

  describe('useBreakpoint при полном наборе breakpoints', () => {
    it.each([
      ['xs', DEFAULT_BREAKPOINTS['xs'], 100],
      ['s', DEFAULT_BREAKPOINTS['s'], 550],
      ['m', DEFAULT_BREAKPOINTS['m'], 900],
      ['l', DEFAULT_BREAKPOINTS['l'], 1100],
      ['xl', DEFAULT_BREAKPOINTS['xl'], 1300],
      ['2xl', DEFAULT_BREAKPOINTS['2xl'], 1700],
      ['3xl', DEFAULT_BREAKPOINTS['3xl'], 2000],
    ])(
      'useBreakpoint без параметров возвращает %s, если ширина экрана больше %d',
      (name: string, _, testValue: number) => {
        window.matchMedia = jest.fn().mockImplementation(createMatchMedia(testValue));

        render(<ComponentWithHook />);

        expect(screen.getByTestId(name)).toBeInTheDocument();
      },
    );
  });

  describe('useBreakpoint при полном наборе breakpoints в параметре', () => {
    const customBreakpoints: Breakpoints = {
      xs: 0,
      s: 200,
      m: 400,
      l: 600,
      xl: 800,
      '2xl': 1000,
      '3xl': 1200,
    };

    it.each([
      ['xs', customBreakpoints['xs'], 100],
      ['s', customBreakpoints['s'], 300],
      ['m', customBreakpoints['m'], 400],
      ['l', customBreakpoints['l'], 700],
      ['xl', customBreakpoints['xl'], 850],
      ['2xl', customBreakpoints['2xl'], 1100],
      ['3xl', customBreakpoints['3xl'], 1300],
    ])(
      'useBreakpoint без параметров возвращает %s, если ширина экрана больше %d',
      (name: string, _, testValue: number) => {
        window.matchMedia = jest.fn().mockImplementation(createMatchMedia(testValue));

        render(<ComponentWithHook breakpoints={customBreakpoints} />);

        expect(screen.getByTestId(name)).toBeInTheDocument();
      },
    );

    it('неверно указан порядок значений breakpoints', () => {
      const screenWidth = 1000;
      const badBreakpoints: Breakpoints = {
        xs: 0,
        s: 200,
        m: 750,
        l: 600,
        xl: 800,
        '2xl': 1000,
        '3xl': 1200,
      };

      jest.spyOn(console, 'error').mockImplementation(() => {});

      window.matchMedia = jest.fn().mockImplementation(createMatchMedia(screenWidth));

      expect(() => {
        render(<ComponentWithHook breakpoints={badBreakpoints} />);
      }).toThrow('Неверно указаны значения брейкпоинтов в порядке mobile-first');
    });
  });

  describe('useBreakpoint при свободном числе breakpoints', () => {
    it('неверно указан наименьший breakpoint', () => {
      const screenWidth = 800;
      const breakpoints: Breakpoints = {
        l: 600,
      };

      jest.spyOn(console, 'error').mockImplementation(() => {});

      window.matchMedia = jest.fn().mockImplementation(createMatchMedia(screenWidth));

      expect(() => {
        render(<ComponentWithHook breakpoints={breakpoints} />);
      }).toThrow('Перечисление breakpoints должно начинаться с 0');
    });

    it('указан только один breakpoint', () => {
      const screenWidth = 800;
      const breakpoints: Breakpoints = {
        l: 0,
      };

      window.matchMedia = jest.fn().mockImplementation(createMatchMedia(screenWidth));

      render(<ComponentWithHook breakpoints={breakpoints} />);

      expect(screen.getByTestId('l')).toBeInTheDocument();
    });

    it('указано несколько breakpoints', () => {
      const breakpoints: Breakpoints = {
        s: 0,
        l: 500,
      };

      window.matchMedia = jest.fn().mockImplementation(createMatchMedia(100));
      render(<ComponentWithHook breakpoints={breakpoints} />);
      expect(screen.getByTestId('s')).toBeInTheDocument();

      window.matchMedia = jest.fn().mockImplementation(createMatchMedia(800));
      render(<ComponentWithHook breakpoints={breakpoints} />);
      expect(screen.getByTestId('l')).toBeInTheDocument();
    });

    it('breakpoints не указаны', () => {
      const breakpoints: Breakpoints = {};

      window.matchMedia = jest.fn().mockImplementation(createMatchMedia(100));
      jest.spyOn(console, 'error').mockImplementation(() => {});

      expect(() => {
        render(<ComponentWithHook breakpoints={breakpoints} />);
      }).toThrow('Передан пустой массив breakpoints');
    });
  });
});
