import rgbHex from 'rgb-hex';
import hexRgb from 'hex-rgb';

export const reHEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

export const hexToRgb = (hex: string) => {
  const { red, green, blue } = hexRgb(hex);
  return `${red} ${green} ${blue}`;
};

export const rgbaToHex = (rgba: string) => `#${rgbHex(rgba)}`;
export const rgbShort = (rgb: string) => rgb.replace(/[rgba(,)]/g, '');

export const makeColorValues = (color: string) => {
  const hexTest = reHEX.test(color);
  const hexValue = (hexTest ? color : rgbaToHex(color)).toUpperCase();
  return [`HEX: ${hexValue}`, `RGB: ${hexTest ? rgbShort(hexToRgb(color)) : rgbShort(color)}`];
};

export const makeGradientSubtitles = () => {};
