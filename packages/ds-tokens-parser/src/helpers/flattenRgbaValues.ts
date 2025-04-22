const FIND_RGBA_VALUES = /rgba\(.*?\)/g;
const EXTRACT_RGB_VALUE = /rgb\(.*?\)/;

export const flattenRgbaValues = (str = ''): string => {
  const matches = str.match(FIND_RGBA_VALUES);

  if (!matches) {
    return str;
  }

  const rgbMatches = matches.map((link) => link.match(EXTRACT_RGB_VALUE))?.[0];
  if (!rgbMatches || !rgbMatches.every((value) => value)) {
    return str;
  }
  let cssValue = str;
  rgbMatches.forEach((rgbMatch) => {
    const rgbValue = rgbMatch.match(/\((?<content>.*?)\)/)?.groups?.content ?? 'invalidValue';
    cssValue = cssValue.replace(rgbMatch, rgbValue);
  });
  return flattenRgbaValues(cssValue);
};
