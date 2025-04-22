import { isObject } from '../types/guards';

export const skipSymbol = Symbol('skipSymbol');

type ProcessorType<T extends object> = (obj: object, path: string[]) => T | typeof skipSymbol;
type CheckerType<T extends object> = (obj: object) => obj is T;

export const recursion = <T extends object, K extends object>(
  object: K,
  path: string[],
  processor: ProcessorType<T>,
  isValueForProcessor: CheckerType<T>,
): K => {
  const result = {} as K;

  Object.keys(object).forEach((key: string) => {
    // @ts-ignore
    const value = object[key] as object;
    const newPath = [...path, key];

    if (isObject(value)) {
      if (isValueForProcessor(value)) {
        const temp = processor(value, newPath);
        if (temp !== skipSymbol) {
          // @ts-ignore
          result[key] = temp;
        }
      } else {
        // @ts-ignore
        result[key] = recursion(value, newPath, processor, isValueForProcessor);
      }
    } else {
      // @ts-ignore
      result[key] = value;
    }
  });

  return result;
};
