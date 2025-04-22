const { rules } = require('@commitlint/config-conventional');

const extendedRule = 'type-enum';

module.exports = {
  rules: {
    ...rules,
    [extendedRule]: [2, 'always', [...rules[extendedRule][2], 'release']],
    'references-empty': [2, 'never'],
    'header-max-length': () => [0, 'always', Infinity],
  },
  parserPreset: {
    parserOpts: {
      referenceActions: null,
      issuePrefixes: ['(EDU|DS|XYZ|KEY)-'],
    },
  },
  ignores: [(message) => message.includes('[manually skip]') || message.includes('[ci skip]') || message.includes('[master]')],
};
