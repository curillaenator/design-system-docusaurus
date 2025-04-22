import type { InputSize, InputShape } from './interfaces';

export const SKELETON_SHAPE_ASSOC: Record<InputSize, Record<InputShape, string>> = {
  s: {
    square: '0px',
    rounded: '8px',
    circular: '24px',
  },
};

export const SKELETON_SIZE_ASSOC: Record<InputSize, string> = {
  s: '48px',
};
