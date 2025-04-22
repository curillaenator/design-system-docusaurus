import * as path from 'path';

import sharp from 'sharp';
import { imgDiff } from 'img-diff-js';

import { IconInfo } from '../../interfaces';
import { baseConfig } from '../../baseConfig';
import cacheDecorator from '../../service/cacheHelpers/cacheDecorator';

const getImgPath = async (icon: IconInfo) => {
  const pathPng = path.resolve(baseConfig.tempPath, `${icon.fullName}.png`);
  try {
    await sharp(icon.originSvgPath).resize({ width: 30, height: 30 }).png().toFile(pathPng);
  } catch (e) {
    console.log('Ошибка чтения изображения', icon);
    throw e;
  }
  return pathPng;
};

const getImgPathWithCache = cacheDecorator(getImgPath, 'memory');

const byScreenShot = async (a: IconInfo, b: IconInfo) => {
  const pathA = await getImgPathWithCache(a);
  const pathB = await getImgPathWithCache(b);

  const result = await imgDiff({
    actualFilename: pathA,
    expectedFilename: pathB,
  });
  return result.imagesAreSame;
};

export default byScreenShot;
