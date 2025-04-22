import { convertValueToPixels } from '../helpers/convertValueToPixels';

type Shadow = {
  x: string;
  y: string;
  blur: string;
  spread: string;
  color: string;
  type: string;
};

export const mapDropShadow = (shadowObj: object | null): string => {
  if (!shadowObj) {
    return '';
  }

  const shadow = shadowObj as Shadow;

  return [
    shadow.type === 'innerShadow' ? 'inset' : false,
    convertValueToPixels(shadow.x),
    convertValueToPixels(shadow.y),
    convertValueToPixels(shadow.blur),
    convertValueToPixels(shadow.spread),
    shadow.color,
  ]
    .filter(Boolean)
    .join(' ');
};
