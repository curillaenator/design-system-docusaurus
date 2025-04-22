import { convertTypographyValues } from '../../operations/convertTokensToSass/processors/typography/convertTypographyValues';

describe('helpers#convertTypographyValues', () => {
  it.each([
    {
      token: {
        fontFamily: 'SB Sans Interface',
        textCase: 'None',
        textDecoration: 'None',
        fontWeight: '600',
        fontSize: '32px',
        letterSpacing: '0px',
        lineHeight: '44px',
        paragraphSpacing: '24px',
      },
      expected: {
        fontFamily: "'SB Sans Interface, Arial, Helvetica, sans-serif'",
        textCase: 'None',
        textDecoration: 'None',
        fontWeight: '600',
        fontSize: '32px',
        letterSpacing: '0px',
        lineHeight: '44px',
        paragraphSpacing: '24px',
      },
    },
  ])('should correctly convert $token.type', ({ token, expected }) => {
    expect(convertTypographyValues(token)).toEqual(expected);
  });
});
