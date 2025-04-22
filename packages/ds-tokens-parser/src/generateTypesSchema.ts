import path from 'path';
import fs from 'fs';

import { format } from 'prettier';
import { create } from 'superstruct';
import mapValues from 'lodash/mapValues';
import keys from 'lodash/keys';
import lodashValues from 'lodash/values';
import pick from 'lodash/pick';

import { TokenJSON } from './validators/TokenJSON';

const THRASHOLD = 1;

// по этим свойствам происходит чистка ключей темы для получения нужного значения юниона в типах
const SHAPE_K = 'border-radius-';
const VARIANT_K = ['-solid', '-ghost', '-elevate', '-outline'];
const APPEARANCE_K = [
  'primary',
  'secondary',
  'informative',
  'positive',
  'attention',
  'negative',
  'light',
  'lightest',
  'white',
  'dark',
  'darkest',
  'neutral',
];
const STATE_PREFIXES_TO_AVOID = ['-light', '-white', '-dark', '-black', '-ghost'];
const NOT_STATES = ['active', 'disabled', 'skeleton'];

type Tokens = Record<string, Record<string, Record<string, object>>>;
type Options = {
  destination: string;
  groups?: string[];
  prefix?: string;
};
type ElementSchema = object & {
  properties: Record<string, object>;
};
type ReturnedSchema = Record<string, ElementSchema>;

const getSchema = (tokens: Tokens, options: { prefix: string }): ReturnedSchema => {
  const { prefix } = options;

  return mapValues(tokens, (props, key) => {
    const schema = {
      title: `${prefix}${key.charAt(0).toUpperCase() + key.slice(1)}Props`,
      type: 'object',
      additionalProperties: false,
      properties: {},
    };

    // TYPES FROM SCALE

    const scales = props[`${key}/scale`];

    if (!!scales && !!keys(scales).length) {
      const added = {};

      // SIZE

      const possibleSizes = lodashValues(scales)
        .map((val) => keys(val))
        .flat();

      const uniqueSizes = [...new Set(possibleSizes)];

      if (uniqueSizes.length > THRASHOLD) {
        // @ts-expect-error
        added['size'] = { enum: uniqueSizes, type: 'string' };
      }

      // SHAPE

      if (keys(scales).some((k) => k.includes(SHAPE_K))) {
        const uniqueShapes = keys(scales)
          .filter((k) => k.includes(SHAPE_K))
          .map((k) => k.replace(SHAPE_K, ''));

        if (uniqueShapes.length > THRASHOLD) {
          // @ts-expect-error
          added['shape'] = { enum: uniqueShapes, type: 'string' };
        }
      }

      schema.properties = { ...schema.properties, ...added };
    }

    // TYPES FROM THEME

    const theme = props[`${key}/theme/light`];

    if (keys(theme).length) {
      const added = {};

      // const colorSchemas = keys(theme).map((k) => k.replace(/(color\/)|(state\/)/, ''));
      // added['colorSchemas'] = { enum: colorSchemas, type: 'string' };

      // STATE

      if (keys(theme).some((k) => /^state/.test(k))) {
        const possibleStates = keys(theme)
          .filter((k) => /^state/.test(k) && !NOT_STATES.some((skip) => k.includes(skip)))
          .map((state) => {
            let clearedState = state.replace('state/', '');

            [...VARIANT_K, ...STATE_PREFIXES_TO_AVOID].forEach((str) => {
              clearedState = clearedState.replace(str, '');
            });

            return clearedState;
          });

        const uniqueStates = [...new Set(possibleStates)];

        if (uniqueStates.length > THRASHOLD) {
          // @ts-expect-error
          added['state'] = { enum: uniqueStates, type: 'string' };
        }
      }

      // APPEARANCE

      if (keys(theme).some((k) => /^color/.test(k))) {
        const appearances = keys(theme)
          .filter((k) => /^color/.test(k))
          .map((appearance) => {
            let clearedAppearance = appearance.replace('color/', '');

            VARIANT_K.forEach((variant) => {
              clearedAppearance = clearedAppearance.replace(variant, '');
            });

            return clearedAppearance;
          });

        const uniqueAppearances = [...new Set(appearances)];

        if (uniqueAppearances.length > THRASHOLD) {
          // @ts-expect-error
          added['appearance'] = { enum: uniqueAppearances, type: 'string' };
        }
      }

      // VARIANT

      const possibleVariants = keys(theme)
        .map((k) => {
          let clearedVariant = k.replace(/^(color\/)|(state\/)/, '');

          APPEARANCE_K.forEach((appearance) => {
            clearedVariant = clearedVariant.replace(appearance, '');
          });

          return clearedVariant;
        })
        .filter((variant) => /^-.*/.test(variant))
        .map((variant) => variant.replace(/^-/, ''));

      const uniqueVariants = [...new Set(possibleVariants)];

      if (uniqueVariants.length > THRASHOLD) {
        // @ts-expect-error
        added['variant'] = { enum: uniqueVariants, type: 'string' };
      }

      // ADD ALL PROPS TO MAIN SCHEMA

      schema.properties = { ...schema.properties, ...added };
    }

    return schema;
  });
};

export const generateTypesSchema = (tokens: Tokens, options: Options) => {
  const { destination, groups = [], prefix = 'Generated' } = options;
  const { values } = create(tokens, TokenJSON);

  try {
    fs.accessSync(destination, fs.constants.F_OK);
  } catch (error) {
    fs.mkdirSync(destination, { recursive: true });
  }

  const typesSchema = getSchema(pick(values, groups) as Tokens, { prefix });

  fs.writeFileSync(
    path.resolve(destination, `typesSchema.json`),
    format(JSON.stringify(typesSchema), { parser: 'json', endOfLine: 'crlf' }),
  );
};
