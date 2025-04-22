import { object, string } from 'superstruct';

export const ShadowValue = object({
  color: string(),
  type: string(),
  x: string(),
  y: string(),
  blur: string(),
  spread: string(),
});
