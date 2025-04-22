// запускать данный скрипт для обновления блоков кода нужно только
// если обновяться токены color-transparent,

const path = require('path');
const { format } = require('prettier');
const fs = require('fs');
const SOURCE = require('@kit-xyz/theme/src/dist/XYZ.json');
const { tpValues, groups } = require('./constants');

const dist = path.resolve(__dirname, './examples/');
const TOKENS = SOURCE.values.style['color-transparent'];

const grouped = groups.map((group) => [
  group,
  Object.fromEntries(
    tpValues.map((tp) => {
      const colorName = `${group}-${tp}`;
      return [colorName, TOKENS[colorName]];
    }),
  ),
]);

grouped.forEach(([groupName, values]) => {
  const destination = path.resolve(dist, `${groupName}.txt`);
  const file = format(JSON.stringify(values), { parser: 'json', printWidth: 60 });
  fs.writeFileSync(destination, file);
});
