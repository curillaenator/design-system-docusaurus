import { extendTokenValues } from '../extendTokenValues';

const store = {
  button: {
    'dark-ghost': {
      scheme: {
        value: 'button.dark-elevate',
        type: 'meta',
      },
      shadow: {
        value: '0px 2px 10px 0px rgba(23, 23, 23, 0.1)',
        type: 'other',
      },
    },

    'dark-elevate': {
      scheme: {
        value: 'button.dark-solid',
        type: 'meta',
      },
      shadow: {
        value: '0px 3px 10px 0px rgba(25, 25, 25, 0.1)',
        type: 'other',
      },
    },

    'dark-solid': {
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

const expected = {
  button: {
    'dark-solid': {
      'content-general': {
        value: 'rgb(245, 245, 245)',
        type: 'color',
      },
      shadow: {
        value: '0px 0px 0px 0px rgba(0, 0, 0, 0)',
        type: 'other',
      },
    },

    'dark-elevate': {
      'content-general': {
        value: 'rgb(245, 245, 245)',
        type: 'color',
      },

      shadow: {
        value: '0px 3px 10px 0px rgba(25, 25, 25, 0.1)',
        type: 'other',
      },
    },

    'dark-ghost': {
      'content-general': {
        value: 'rgb(245, 245, 245)',
        type: 'color',
      },

      shadow: {
        value: '0px 2px 10px 0px rgba(23, 23, 23, 0.1)',
        type: 'other',
      },
    },
  },
};

describe('helpers#extendTokenValues', () => {
  it('should denormalize correctly', () => {
    const result = extendTokenValues(store, store);

    expect(result).toEqual(expected);
  });
});
