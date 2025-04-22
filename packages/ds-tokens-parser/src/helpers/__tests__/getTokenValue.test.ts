import { getTokenValue } from '../getTokenValue';

const store = {
  color: {
    white: {
      value: '#fff',
      type: 'color',
    },
    black: {
      value: '#000',
      type: 'color',
    },
    'neutral-100': {
      value: '#00f',
      type: 'color',
    },
    'state/active': {
      value: '#ff0',
      type: 'color',
    },
  },
  'border-shadow': {
    value: {
      color: '{color.white}',
      type: 'innerShadow',
      x: '0',
      y: '1',
      blur: '2',
      spread: '3',
    },
    type: 'boxShadow',
  },
  opacity: {
    '50%': {
      value: '0.5',
      type: 'opacity',
    },
  },
};

describe('helpers#getTokenValue', () => {
  it.each([
    ['{color.white}', store.color.white.value],
    ['{color.neutral-100}', store.color['neutral-100'].value],
    ['{opacity.50%}', store.opacity['50%'].value],
    ['{color.state/active}', store.color['state/active'].value],
  ])('should replace link %s in a string', (str, expected) => {
    const result = getTokenValue(str, store);
    expect(result).toBe(expected);
  });

  it('should replace all links in a string', () => {
    const result = getTokenValue('rgba({color.white}, {opacity.50%})', store);
    expect(result).toBe(`rgba(${store.color.white.value}, ${store.opacity['50%'].value})`);
  });

  it.each([
    { type: 'boxShadow', str: '{border-shadow}', expected: `inset 0px 1px 2px 3px ${store.color.white.value}` },
  ])('should replace link to a value with $type type', ({ str, expected }) => {
    const result = getTokenValue(str, store);
    expect(result).toBe(expected);
  });

  it('should return undefined when linked value does not exist', () => {
    const result = getTokenValue('{not-exist}', store);
    expect(result).toBe('undefined');
  });
});
