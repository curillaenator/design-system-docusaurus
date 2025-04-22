import { disvowel } from '../../../../../utils/disvowel';

export const schemaNameFallback = (schemaName: string) =>
  schemaName.includes('state-')
    ? disvowel(schemaName.replace('state-', 's-'))
    : disvowel(schemaName.replace('color-', ''));
