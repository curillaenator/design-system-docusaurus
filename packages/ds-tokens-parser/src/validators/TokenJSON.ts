import { object, string, optional, record } from 'superstruct';

export const TokenJSON = object({
  version: optional(string()),
  updatedAt: optional(string()),
  values: record(string(), object()),
});
