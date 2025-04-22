import { extendObject } from '../extendObject';

const store = {
  'button/theme/light': {
    'color/dark-solid': {
      'content-general': {
        value: 'rgb(245, 245, 245)',
        type: 'color',
      },
      shadow: {
        value: '0px 0px 0px 0px rgba(0, 0, 0, 0)',
        type: 'other',
      },
    },
  },
};

const src = {
  shadow: {
    value: '0px 2px 10px 0px rgba(23, 23, 23, 0.1)',
    type: 'other',
  },
};

const expected = {
  'content-general': {
    value: 'rgb(245, 245, 245)',
    type: 'color',
  },
  shadow: {
    value: '0px 2px 10px 0px rgba(23, 23, 23, 0.1)',
    type: 'other',
  },
};

describe('helpers#extendObject', () => {
  it('should extend linked object', () => {
    const result = extendObject('button/theme/light.color/dark-solid', src, store);

    expect(result).toEqual(expected);
  });

  it('should return cloned original value if linked source was not found', () => {
    const result = extendObject('unknown', src, store);

    expect(result).toEqual(src);
    expect(result).not.toBe(src);
  });
});
