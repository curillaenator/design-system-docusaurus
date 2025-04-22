import path from 'path';

import { create } from 'superstruct';

import { OptionsType } from '../../interfaces';
import { TokenJSON } from '../../validators/TokenJSON';
import { TokensConfig } from '../../types/tokens';

import { ProcessedTokens, writeScss } from './helpers/writeScss';
import { getContext, initContext } from './service/context';
import { prepareTokensForConverter } from './prepareTokensForConverter';

export const convertDenormalizedTokensToSass = async (input: object, opts: Partial<OptionsType> = {}) => {
  const { values } = create(input, TokenJSON) as { values: TokensConfig };
  const context = initContext(values, opts);

  const tokens = prepareTokensForConverter(values);

  const tokensWithGroupsVariables: ProcessedTokens[] = Object.keys(tokens).map((groupName) => ({
    groupPath: path.resolve(getContext().destination, groupName),
    subgroups: [...Object.keys(tokens[groupName]), 'variables'].filter((v) => v !== 'paragraph'),
    processed: {
      ...tokens[groupName],
      variables: context.cssvCollector.getVariablesByGroup(groupName),
    },
    groupName,
  }));

  const tokensWithAllVariables: ProcessedTokens[] = [
    ...tokensWithGroupsVariables,
    {
      processed: {
        themes: context.cssvCollector.getAllVariables(),
      },
      subgroups: ['themes'],
      groupPath: path.resolve(context.destination, 'theme'),
      groupName: '',
    },
  ];

  await Promise.all(tokensWithAllVariables.map(writeScss));
};
