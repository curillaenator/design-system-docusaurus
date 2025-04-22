import createMemoryCache from './createMemoryCache';
import createFileCache from './createFileCache';

const caches = {
  memory: createMemoryCache,
  file: createFileCache,
};

type TypeOfCache = keyof typeof caches;

const cacheDecorator = <T, U>(func: (arg: T, ...args: any) => U, type: TypeOfCache) => {
  const cache = caches[type]();

  return async (arg: any, ...args: any) => {
    if (cache.has(arg)) {
      return cache.get(arg);
    }

    const value = await func(arg, ...args);
    cache.set(arg, value);

    return value;
  };
};

export default cacheDecorator;
