import * as path from 'path';

import sharp from 'sharp';
import Jimp from 'jimp';

import { IconInfo } from '../../interfaces';
import { baseConfig } from '../../baseConfig';
import cacheDecorator from '../../service/cacheHelpers/cacheDecorator';

const getJimpObject = async (icon: IconInfo) => {
  const pathPng = path.resolve(baseConfig.tempPath, `${icon.fullName}.png`);
  await sharp(icon.originSvgPath).resize({ width: 100, height: 100 }).png().toFile(pathPng);

  return Jimp.read(pathPng);
};

const getJimpObjectWithCache = cacheDecorator(getJimpObject, 'memory');

const byScreenShotJimp = async (a: IconInfo, b: IconInfo) => {
  const screenShootA = await getJimpObjectWithCache(a);
  const screenShootB = await getJimpObjectWithCache(b);
  const { percent } = Jimp.diff(screenShootA, screenShootB);

  return percent === 0;
};

export default byScreenShotJimp;
