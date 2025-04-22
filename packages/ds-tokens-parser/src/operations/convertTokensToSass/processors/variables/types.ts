import { CssvDictionaryType } from '../../interfaces';

export type Primitive = {
  type: string;
  value: string;
  varName?: string;
};

export type Options = {
  path: string[];

  cssvSkip: string[];
  cssvDict?: CssvDictionaryType;
  groupsAssoc?: Record<string, string>;
};

export type CssV = {
  value: string;
  variableName: string | null;
  fallbackValue: string;
};

export type MakeNotatedColorSchemaNameArgs = {
  name: string;
  cssvDict: CssvDictionaryType;
  type?: 'schemaNames' | 'tokenNames';
};
