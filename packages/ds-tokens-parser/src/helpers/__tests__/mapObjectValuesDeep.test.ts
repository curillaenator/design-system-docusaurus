import { mapObjectValuesDeep as fn } from '../mapObjectValuesDeep';

const mapper = () => 'v';

describe('helpers#mapObjectValuesDeep', () => {
  it('should map values of nested object', () => {
    const src = {
      value: {
        color: 'rgb(23, 23, 23)',
      },
      type: 'boxShadow',
    };
    const result = fn(src, mapper);
    expect(result).toEqual({ value: { color: 'v' }, type: 'v' });
  });

  it('should map value that is not object', () => {
    const result = fn('test', mapper);
    expect(result).toEqual('v');
  });

  it('should pass mapped value to mapper fn', () => {
    const value = 'v';
    const mapperFn = jest.fn();

    fn({ value }, mapperFn);
    expect(mapperFn).toBeCalledWith(value);
  });

  it('should return {} if empty object is passed', () => {
    const result = fn({}, mapper);
    expect(result).toEqual({});
  });

  it('should not mutate original object', () => {
    const value = 'rgb(23, 23, 23)';
    const src = { value, type: {} };
    const result = fn(src, mapper);
    expect(result).not.toBe(src);
    // @ts-expect-error
    expect(result.type).not.toBe(src.type);
    expect(src).toEqual({ value, type: {} });
  });
});
