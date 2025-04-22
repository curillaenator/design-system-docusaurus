import { NormalToken } from '../tokens';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isObject = (obj: any): obj is object => typeof obj === 'object';

export const isToken = (obj: object): obj is NormalToken => isObject(obj) && 'value' in obj && 'type' in obj;
