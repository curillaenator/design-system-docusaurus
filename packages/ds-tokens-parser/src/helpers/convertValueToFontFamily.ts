export const convertValueToFontFamily = (value: string): string => {
  if (value.toLowerCase().indexOf('mono') > -1) {
    return `'${value}, monospace'`;
  }
  if (value.toLowerCase().indexOf('sans') > -1) {
    return `'${value}, Arial, Helvetica, sans-serif'`;
  }
  return value;
};
