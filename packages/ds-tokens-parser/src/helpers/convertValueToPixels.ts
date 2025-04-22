export const convertValueToPixels = (value: string | number): string => {
  const [num] = value.toString().split('px');
  return `${+num || 0}px`;
};
