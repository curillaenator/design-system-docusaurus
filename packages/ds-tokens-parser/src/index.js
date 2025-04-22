const { parseLocalThemeFile } = require('./parseLocalThemeFile');
const { parseThemeObject } = require('./parseThemeObject');
const { generateTwConfigJSON } = require('./generateTwConfigJSON');
const { getTwConfig } = require('./getTwConfig');
const { generateTypesSchema } = require('./generateTypesSchema');
const { warnInvalidScaleSize } = require('./warnInvalidScaleSize');
const { validateAssocMaps } = require('./validateAssocMaps');
const { createDictionary } = require('./helpers/createDictionary');
const { initNotations } = require('./operations/notations/index');
const { convertDenormalizedTokensToSass } = require('./operations/convertTokensToSass/index');

module.exports = {
  convertDenormalizedTokensToSass,
  parseLocalThemeFile,
  parseThemeObject,
  generateTwConfigJSON,
  getTwConfig,
  generateTypesSchema,
  warnInvalidScaleSize,
  validateAssocMaps,
  initNotations,
  createVariatedDict: createDictionary,
};
