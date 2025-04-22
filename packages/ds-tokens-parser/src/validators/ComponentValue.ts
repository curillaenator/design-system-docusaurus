import { object, string, coerce, define, enums, optional } from 'superstruct';

export const ComponentNameType = define('ComponentNameType', (v) => typeof v === 'string' && v.split('/').length > 1);

export const ComponentGroups = enums(['scale', 'theme', 'style']);

const ComponentInfoStruct = object({
  name: string(),
  group: ComponentGroups,
  subgroup: optional(string()),
});

export const ComponentInfo = coerce(ComponentInfoStruct, ComponentNameType, (str: string) => {
  const [name, group, subgroup] = str.split('/');
  return { name, group, ...(subgroup ? { subgroup } : {}) };
});
