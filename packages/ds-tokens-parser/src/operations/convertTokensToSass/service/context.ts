import { OptionsType } from '../../../interfaces';
import { DEFAULT_OPTS } from '../constants';
import { TokensConfig } from '../../../types/tokens';

import { CssvCollector } from './CssvCollector';

let context: OptionsType;

export const setContext = (newContext: OptionsType) => {
  context = {
    ...newContext,
  };
};

export const getContext = (): OptionsType => context;

export const initContext = (values: TokensConfig, opts: Partial<OptionsType> = {}) => {
  const cssvCollector = new CssvCollector();
  const fullConfig = { ...DEFAULT_OPTS, ...opts };

  const {
    destination,
    groups = Object.keys(values),
    groupsAssoc: shortGroups,
    cssvDict,
    escapeSymbols,
    cssvSkip,
  } = fullConfig;

  setContext({
    destination,
    groups,
    groupsAssoc: shortGroups,
    cssvDict,
    escapeSymbols,
    cssvSkip,

    // @ts-ignore
    cssvCollector,
  });

  return context;
};
