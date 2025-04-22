import { CheckMaps, TypeOfCheck } from './interfaces';
import byFile from './byFile';
import byMatch from './byMatch';
import byScreenShot from './byScreenShot';
import byScreenShotJimp from './byScreenShotJimp';

const checksMap: CheckMaps = {
  [TypeOfCheck.byFile]: byFile,
  [TypeOfCheck.byMatch]: byMatch,
  [TypeOfCheck.byScreenshot]: byScreenShot,
  [TypeOfCheck.byScreenshotJimp]: byScreenShotJimp,
};

export default checksMap;
