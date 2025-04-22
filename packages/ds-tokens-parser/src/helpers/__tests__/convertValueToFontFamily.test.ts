import { convertValueToFontFamily } from '../convertValueToFontFamily';

describe('helpers#convertValueToFontFamily', () => {
  it.each([
    {
      token: 'SB Sans Interface',
      expected: "'SB Sans Interface, Arial, Helvetica, sans-serif'",
    },
    {
      token: 'SB Sans Text Mono',
      expected: "'SB Sans Text Mono, monospace'",
    },
  ])('should correctly convert $token.type', ({ token, expected }) => {
    expect(convertValueToFontFamily(token)).toBe(expected);
  });
});
