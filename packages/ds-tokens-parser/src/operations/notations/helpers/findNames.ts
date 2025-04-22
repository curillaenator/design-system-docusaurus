import uniq from 'lodash/uniq';

import { SkipAssocType } from '../../../types/common';
import { ComponentConfig, NormalToken, TokensConfig, VariantName } from '../../../types/tokens';
import { gatherByRecursion, GatherResult } from '../../../utils/gatherByRecursion';
import { getPureComponentConfig } from '../utils/getPureComponentConfig';
import { availableSchemasParts } from '../constants';
import { isToken } from '../../../types/guards';

type FoundNames = {
  tokensNames: string[];
  schemasNames: string[];
};
type SchemeConfig = Record<VariantName, NormalToken>;

export const isSchemeConfig = (obj: object): obj is SchemeConfig => Object.values(obj).some(isToken);

export const findNames = (tokesConfig: TokensConfig, opts: { skipAssoc: SkipAssocType }): FoundNames => {
  const { skipAssoc } = opts;
  const availableComponentsKeys: string[] = Object.keys(tokesConfig).filter((key) => !skipAssoc[key]);

  const schemes = availableComponentsKeys
    .map<GatherResult<ComponentConfig<'any'>>[]>((componentKey) => {
      const componentConfig = getPureComponentConfig(tokesConfig[componentKey]);

      return gatherByRecursion<ComponentConfig<'any'>>(componentConfig, isSchemeConfig);
    })
    .flat(1);

  const availableSchemes = schemes.filter((scheme) =>
    availableSchemasParts.some((schemaInitName) => scheme.key.includes(schemaInitName)),
  );

  const tokensNames = availableSchemes.map((item) => Object.keys(item.value)).flat(1);
  const schemasNames = availableSchemes.map((item) => item.key);

  return {
    schemasNames: uniq(schemasNames),
    tokensNames: uniq(tokensNames),
  };
};
