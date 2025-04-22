import { getContext } from '../../../service/context';
import { disvowel } from '../../../../../utils/disvowel';

import { schemaNameFallback } from './schemaNameFallback';

export const getNotateGroupName = (name: string) => getContext()?.groupsAssoc?.[name];

export const getNotateSchemaName = (name: string) => {
  const pureName = name.replace('/', '-');
  if (!(pureName.includes('state') || pureName.includes('color'))) return '';

  return getContext()?.cssvDict?.schemaNames[pureName] || schemaNameFallback(pureName);
};

export const getNotateTokenName = (name: string) => getContext()?.cssvDict?.tokenNames[name] || disvowel(name);
