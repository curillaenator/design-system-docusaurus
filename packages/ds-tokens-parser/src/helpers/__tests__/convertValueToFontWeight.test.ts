import { convertValueToFontWeight } from '../convertValueToFontWeight';

describe('helpers#convertValueToFontWeight', () => {
  it.each([
    {
      token: '600',
      expected: '600',
    },
    {
      token: '400',
      expected: '400',
    },
  ])('should correctly convert $token.type', ({ token, expected }) => {
    expect(convertValueToFontWeight(token)).toBe(expected);
  });
});
