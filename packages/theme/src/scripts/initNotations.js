const path = require('path');

const { initNotations } = require('@pcbl-ui-v4/ds-tokens-parser');

const src = path.resolve(__dirname, '../dist/XYZ.json');
const dist = path.resolve(__dirname, '../notations/suggestedNotations.json');

const comps = require('../notations/components.json');
const schemasTokens = require('../notations/dictionary.json');

const SKIP = {
  style: true,
  media: true,
  glyph: true,
  typography: true,
  utility: true,
  layout: true,
  link: true,
};

const VARIATIONS_TO_AVOID_ASSOC = {
  schemaNames: Object.keys(schemasTokens.schemaVariations).map((variation) => `-${variation}`),
  tokenNames: Object.keys(schemasTokens.tokenNamesVariations).map((variation) => `-${variation}`),
};

initNotations({
  src,
  dist,
  skipAssoc: SKIP,
  variationsAssoc: VARIATIONS_TO_AVOID_ASSOC,
  existingNotations: {
    componentNames: comps,
    ...schemasTokens,
  },
});
