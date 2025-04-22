const path = require('path');

const { generateTwConfigJSON } = require('@pcbl-ui-v4/ds-tokens-parser');

const src = path.resolve(__dirname, '../dist/XYZ.json');
const destination = path.resolve(__dirname, '../dist/');

// выборка необходимых групп из токенов для создания TW классов.
// если передан пустой массив, подтягиваются все свойства группы, иначе только указанные в массиве.
const keys = {
  style: [],
  typography: [
    'font-family',
    'line-height',
    'text-decoration',
    'text-case',
    'font-weight',
    'font-size',
    'letter-spacing',
  ],
};

// префикс добавляемый классам TW для избежания конфликтов имен
const theme = '';

generateTwConfigJSON({ src, destination, keys, theme });
