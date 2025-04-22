/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const path = require('path');

const {
  convertDenormalizedTokensToSass,
  parseLocalThemeFile,
  generateTypesSchema,
  warnInvalidScaleSize,
  validateAssocMaps,
  createVariatedDict,
} = require('@pcbl-ui-v4/ds-tokens-parser');

const { combineTokens } = require('./combineTokens');

const src = path.resolve(__dirname, '../source/XYZ.json');
const dist = path.resolve(__dirname, '../dist/XYZ.json');
const scss = path.resolve(__dirname, '../scss/');
const typesSchema = path.resolve(__dirname, '../typesSchema');

const componentsNotationsPath = path.resolve(__dirname, '../notations/components.json');
const tokensNotationsPath = path.resolve(__dirname, '../notations/dictionary.json');

(async () => {
  // предварительная настройка словарей коротких нотций
  const componentsNotations = require(componentsNotationsPath);
  const { schemaNames, tokenNames, schemaVariations, tokenNamesVariations } = require(tokensNotationsPath);

  const cssvDict = {
    schemaNames: { ...createVariatedDict(schemaNames, schemaVariations) },
    tokenNames: { ...createVariatedDict(tokenNames, tokenNamesVariations) },
  };

  if (!validateAssocMaps(componentsNotations, cssvDict)) return;

  // комбинирование токенов из чанков в единый файл
  combineTokens('../source');

  // нормальизация токенов и запись их в dist
  await parseLocalThemeFile(src, dist);

  const tokens = require(dist);

  // const groups = Object.keys(componentsNotations);
  const groups = [
    'style',
    'select',
    'scroll',
    'avatar',
    'accordion',
    'input',
    'icon',
    'badge',
    'skeleton',
    'button',
    'modal',
    'drawer',
    'radio',
    'switch',
    'checkbox',
    'paper',
    'toast',
    'tabs',
    'pagination',
    'notification',
    'spinner',
    'calendar',
    'combobox',
    'menu',
  ];

  // проверка на однотипность имен размеров в блоках scale
  warnInvalidScaleSize(tokens, { groups });

  // генерация sass мапов
  await convertDenormalizedTokensToSass(tokens, {
    destination: scss,
    groups,
    groupsAssoc: componentsNotations,
    cssvDict,
    escapeSymbols: ['%'],
    withCssv: true,
    cssvSkip: ['style'],
  });

  // генерация схем типов
  await generateTypesSchema(tokens, {
    destination: typesSchema,
    groups,
  });
})();
