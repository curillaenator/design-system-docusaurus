const path = require('path');

const { getTwConfig } = require('@pcbl-ui-v4/ds-tokens-parser');

// объект опций для генерации конфига из токенов может содержать 2 свойства-обекта:
// themeAssoc - для переопределения дефолтных значений в theme,
// extendAssoc - для расширения через extend,

// если указаны несколько искомых свойств в токенах, то они будут смержены (пример - colors, boxShadow)
// если в токенах не будет найдено ни одно из значений, указанных в массиве искомых свойств,
// то сам ключ конфига TW в переопределение/расширение добавлен не будет.

const tokensOptions = {
  themeAssoc: {
    colors: ['palette', 'color'],
  },

  extendAssoc: {
    boxShadow: ['shadow', 'border-shadow'],
    fontFamily: ['font-family'],
    fontSize: ['font-size'],
    lineHeight: ['line-height'],
    letterSpacing: ['letter-spacing'],
    blur: ['blur'],
    borderRadius: ['border-radius'],
    borderColor: ['border-color'],
    borderWidth: ['border-width'],
    backgroundImage: ['gradient'],
    fontWeight: ['font-weight'],
    opacity: ['opacity'],
  },
};

const tokensTheme = getTwConfig(path.resolve(__dirname, '../dist/extend.json'), tokensOptions);

module.exports = { tokensTheme };
