import fs from 'fs-extra';

import { IconInfo } from '../../interfaces';
import cacheDecorator from '../../service/cacheHelpers/cacheDecorator';

const getMatch = (icon: IconInfo) => {
  const file = fs.readFileSync(icon.originSvgPath).toString();
  const matches = file.match(/( d=".*"|fill=".*")/g);

  return matches ? matches.join(',') : file;
};
const getMatchesWithCache = cacheDecorator(getMatch, 'memory');

const byMatch = async (a: IconInfo, b: IconInfo) => {
  const matchA = await getMatchesWithCache(a);
  const matchB = await getMatchesWithCache(b);

  return matchA === matchB;
};

export default byMatch;
