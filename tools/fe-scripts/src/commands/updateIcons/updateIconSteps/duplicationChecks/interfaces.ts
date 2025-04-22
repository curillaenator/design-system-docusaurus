import { IconInfo } from '../../interfaces';

export enum TypeOfCheck {
  byFile,
  byMatch,
  byScreenshot,
  byScreenshotJimp,
}

export type compareFunction = (a: IconInfo, b: IconInfo) => Promise<boolean> | boolean;

export type CheckMaps = {
  [key in TypeOfCheck]: compareFunction;
};
