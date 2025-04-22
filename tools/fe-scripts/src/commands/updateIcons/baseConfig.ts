import path from 'path';
import { BaseConfig } from './interfaces';

const allowedStrokeWidth = ['1.4', '1.6', '1.8', '2.0'];

const tempPath = path.resolve(__dirname, './cache/');
const reportPath = path.resolve(__dirname, './report/');

export const baseConfig: BaseConfig = {
  tempPath,
  reportPath,
  clearIcon: [/ fill="none"/],
  chunkSize: 200,
  sleep: 30000,
  fallBackIcon: path.resolve(__dirname, './assets/default/ic-kosyak.svg'),

  filter: {
    section: [], // ['>Outline>20'],
  },
  transformIcon: {
    black: 'currentColor',
    white: 'currentColor',
    '#000': 'currentColor',
    '#374151': 'currentColor',
    '#334155': 'currentColor',
    '#171717': 'currentColor',
    [`stroke-width="${allowedStrokeWidth[0]}"`]: 'stroke-width="inherit"',
    [`stroke-width="${allowedStrokeWidth[1]}"`]: 'stroke-width="inherit"',
    [`stroke-width="${allowedStrokeWidth[2]}"`]: 'stroke-width="inherit"',
    [`stroke-width="${allowedStrokeWidth[3]}"`]: 'stroke-width="inherit"',
  },
};
