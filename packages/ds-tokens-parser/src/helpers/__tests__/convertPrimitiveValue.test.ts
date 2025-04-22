import { convertPrimitiveValue } from '../convertPrimitiveValue';

describe('helpers#convertPrimitiveValue', () => {
  it.each([
    {
      token: {
        value: 'rgb(0, 0, 0)',
        type: 'color',
      },
      expected: 'rgb(0, 0, 0)',
    },
    {
      token: {
        value: {
          color: 'rgb(23, 23, 23)',
          type: 'innerShadow',
          x: '0',
          y: '0',
          blur: '0',
          spread: '1.2',
        },
        type: 'boxShadow',
      },
      expected: 'inset 0px 0px 0px 1.2px rgb(23, 23, 23)',
    },
    {
      token: {
        value: '40',
        type: 'other',
      },
      expected: '40px',
    },
    {
      token: {
        value: 'SB Sans Interface',
        type: 'fontFamily',
      },
      expected: "'SB Sans Interface, Arial, Helvetica, sans-serif'",
    },
    {
      token: {
        value: 'SB Sans Text Mono',
        type: 'fontFamily',
      },
      expected: "'SB Sans Text Mono, monospace'",
    },
    {
      token: {
        value: '600',
        type: 'fontWeight',
      },
      expected: '600',
    },
    {
      token: {
        value: '400',
        type: 'fontWeight',
      },
      expected: '400',
    },
  ])('should correctly convert $token.type', ({ token, expected }) => {
    expect(convertPrimitiveValue(token)).toBe(expected);
  });
});
