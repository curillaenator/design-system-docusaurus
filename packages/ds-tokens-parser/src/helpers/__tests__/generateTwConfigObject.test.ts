import { generateTwConfigObject } from '../generateTwConfigObject';

describe('helpers#generateTwConfigObject', () => {
  const tokens = {
    palette: {
      'gray-warm-200': 'rgb(231, 229, 228)',
      'gray-warm-100': 'rgb(245, 245, 244)',
      'indigo-900': 'rgb(49, 46, 129)',
      'indigo-800': 'rgb(55, 48, 163)',
    },
    color: {
      'primary-900': 'rgb(49, 46, 129)',
      'primary-800': 'rgb(55, 48, 163)',
    },
    moreColor: {
      transparent: 'rgba(0, 0, 0, 0)',
      'neutral-900': 'rgb(23, 23, 23)',
      'neutral-900-80%': 'rgba(23, 23, 23, 0.8)',
    },
    'border-radius': {
      '8xl': '32px',
      '7xl': '28px',
    },
  };

  const twAssoc = {
    colors: ['palette', 'color', 'moreColor'],
    border: ['border-radius'],
    shadow: ['shadow', 'border-shadow'],
  };

  it('Generated config is correct', () => {
    const colorKeys = [
      'gray-warm-200',
      'gray-warm-100',
      'indigo-900',
      'indigo-800',
      'primary-900',
      'primary-800',
      'transparent',
      'neutral-900',
      'neutral-900-80%',
    ];

    const borderKeys = ['8xl', '7xl'];

    const config = generateTwConfigObject(twAssoc, tokens);
    const { colors, border } = config;

    expect('colors' in config).toBe(true);
    expect('border' in config).toBe(true);

    expect('shadow' in config).toBe(false);

    expect(Object.keys(config)).toHaveLength(2);
    expect(Object.keys(colors)).toHaveLength(colorKeys.length);
    expect(Object.keys(border)).toHaveLength(borderKeys.length);

    colorKeys.forEach((key) => {
      expect(key in colors).toBe(true);
    });

    borderKeys.forEach((key) => {
      expect(key in border).toBe(true);
    });
  });
});
