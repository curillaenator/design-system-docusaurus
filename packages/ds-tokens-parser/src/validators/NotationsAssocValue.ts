import { object, string, record } from 'superstruct';

export const ComponentsAssocStruct = record(string(), string());

export const CssvDictAssocStruct = object({
  schemaNames: record(string(), string()),
  tokenNames: record(string(), string()),
});
