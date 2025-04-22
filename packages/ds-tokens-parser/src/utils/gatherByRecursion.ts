type CheckFunction = (obj: object) => boolean;
export type GatherResult<T> = {
  key: string;
  value: T;
};

export const gatherByRecursion = <T>(obj: object, check: CheckFunction): GatherResult<T>[] => {
  const result: GatherResult<T>[] = [];

  if (obj) {
    Object.keys(obj).forEach((key) => {
      // @ts-ignore
      const value = obj[key];
      if (value && check(value)) {
        result.push({
          key,
          value,
        });
      } else {
        result.push(...gatherByRecursion<T>(value, check));
      }
    });
  }

  return result;
};
