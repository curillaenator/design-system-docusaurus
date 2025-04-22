export const convertCalcedValues = (value: string): string => {
  // eslint-disable-next-line
  if (/^\d+\w*\s*[\/\*\+\-]\s*\d+\w*$/.test(value)) {
    // eslint-disable-next-line
    return `${eval(value.replace(/px/gi, ''))}px`;
  }

  return value;
};
