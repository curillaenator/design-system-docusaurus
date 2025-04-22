/* eslint-disable import/no-webpack-loader-syntax, import/extensions */

import Gradient from 'javascript-color-gradient';
import json from '@kit-xyz/theme/src/dist/XYZ.json';
import { rgbaToHex, makeColorValues } from '@site/shared/docsUtils';

import indigoTokens from '!!raw-loader!./examples/indigo.txt';
import purpleTokens from '!!raw-loader!./examples/purple.txt';
import blueTokens from '!!raw-loader!./examples/blue.txt';
import greenTokens from '!!raw-loader!./examples/green.txt';
import yellowTokens from '!!raw-loader!./examples/yellow.txt';
import redTokens from '!!raw-loader!./examples/red.txt';

const COLOR_JSON = json.values.style.palette;

const getColor = (colorName: string) => COLOR_JSON[colorName]?.value || 'rgb(255 0 0)';

const DEFAULT = [
  { title: 'black', name: 'black', color: getColor('black') },
  { title: 'white', name: 'white', color: getColor('white') },
  { title: 'indigo', name: 'indigo-700', color: getColor('indigo-700'), code: indigoTokens },
  { title: 'purple', name: 'purple-700', color: getColor('purple-700'), code: purpleTokens },
  { title: 'blue', name: 'blue-700', color: getColor('blue-700'), code: blueTokens },
  { title: 'green', name: 'green-700', color: getColor('green-700'), code: greenTokens },
  { title: 'yellow', name: 'yellow-700', color: getColor('yellow-700'), code: yellowTokens },
  { title: 'red', name: 'red-700', color: getColor('red-700'), code: redTokens },
];

export const PALETTE = DEFAULT.map((palette) => ({
  ...palette,
  title: palette.title.slice(0, 1).toUpperCase() + palette.title.slice(1),
  subtitles: makeColorValues(palette.color),
  valueStyle: palette.color,
}));

// Sample combination

const makeGradient = (from: string, to: string, steps = 25): string[] =>
  // конструктор возвращает набор steps цветов, включая последний, но не первый. первый добавляется в ручную
  [from, ...new Gradient().setColorGradient(from, to).setMidpoint(steps).getColors()];
interface MatrixColor {
  value: string;
  position: { x: number; y: number };
}

const makeColorMatrix = (hexColor: string, darkest: string, lightest: string): MatrixColor[] => {
  const colorToDarkest = makeGradient(hexColor, darkest);
  const lightestToDarkest = makeGradient(lightest, darkest);

  return colorToDarkest
    .map((color, y) => makeGradient(color, lightestToDarkest[y]).map((c, x) => ({ value: c, position: { x, y } })))
    .flat();
};

export const DOT_POSITIONS_MATRIX = ['25_1', '25_3', '25_12', '25_21', '25_23', '25_24'];
export const COLOR_MATRIX = makeColorMatrix(
  rgbaToHex(getColor('purple-700')),
  rgbaToHex(getColor('gray-700')),
  rgbaToHex(getColor('gray-100')),
);

const makeColorRow = (mid: string) => {
  // start и end не меняются
  const start = rgbaToHex(getColor('gray-700'));
  const middle = rgbaToHex(mid);
  const end = rgbaToHex(getColor('gray-100'));

  // в строке цветов 51 элемент, где 26ой эл - основной цвет. pop нужен ввиду специфики работы makeGradient
  const startToMid = makeGradient(start, middle, 25);
  startToMid.pop();
  const midToEnd = makeGradient(middle, end, 25);

  // возвращаеется массив из 51 элемента с ремапом в нужный формат
  return [...startToMid, ...midToEnd].map((color, x) => ({ value: color, position: { x, y: 0 } }));
};

export const DOT_POSITIONS_ROW = ['25_0', '27_0', '31_0', '37_0', '42_0', '46_0', '48_0'];
export const INDIGO = makeColorRow(getColor('indigo-700'));
export const PURPLE = makeColorRow(getColor('purple-700'));
export const BLUE = makeColorRow(getColor('blue-700'));
export const GREEN = makeColorRow(getColor('green-700'));
export const YELLOW = makeColorRow(getColor('yellow-700'));
export const RED = makeColorRow(getColor('red-700'));
