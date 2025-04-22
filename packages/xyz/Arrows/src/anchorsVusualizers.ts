import type { Anchors } from './interfaces';

export const getCorners = (cnr: 'tl' | 'tr' | 'br' | 'bl'): Anchors[] => [
  {
    position: cnr,
  },
  {
    position: `${cnr}-edge`,
  },
  {
    position: `${cnr}-x-0`,
  },
  {
    position: `${cnr}-x-1`,
  },
  {
    position: `${cnr}-edge-x-1`,
  },
  {
    position: `${cnr}-x-2`,
  },
  {
    position: `${cnr}-edge-x-2`,
  },
  {
    position: `${cnr}-y-0`,
  },
  {
    position: `${cnr}-y-1`,
  },
  {
    position: `${cnr}-edge-y-1`,
  },
  {
    position: `${cnr}-y-2`,
  },
  {
    position: `${cnr}-edge-y-2`,
  },
];

export const getTB = (tb: 'top' | 'bottom'): Anchors[] => [
  {
    position: tb,
  },
  {
    position: `${tb}-left`,
  },
  {
    position: `${tb}-left-left`,
  },
  {
    position: `${tb}-left-left-left`,
  },
  {
    position: `${tb}-right`,
  },
  {
    position: `${tb}-right-right`,
  },
  {
    position: `${tb}-right-right-right`,
  },
  {
    position: `${tb}-edge`,
  },
  {
    position: `${tb}-edge-left`,
  },
  {
    position: `${tb}-edge-left-left`,
  },
  {
    position: `${tb}-edge-left-left-left`,
  },
  {
    position: `${tb}-edge-right`,
  },
  {
    position: `${tb}-edge-right-right`,
  },
  {
    position: `${tb}-edge-right-right-right`,
  },
];

export const getLR = (lr: 'left' | 'right'): Anchors[] => [
  {
    position: lr,
  },
  {
    position: `${lr}-edge`,
  },
  {
    position: `${lr}-top`,
  },
  {
    position: `${lr}-bottom`,
  },
];

export const getMiddles = (): Anchors[] => [
  { position: 'middle' },
  { position: 'middle-left' },
  { position: 'middle-left-left' },
  { position: 'middle-left-left-left' },
  { position: 'middle-right' },
  { position: 'middle-right-right' },
  { position: 'middle-right-right-right' },
  { position: 'middle-bottom' },
  { position: 'middle-bottom-left' },
  { position: 'middle-bottom-left-left' },
  { position: 'middle-bottom-left-left-left' },
  { position: 'middle-bottom-right' },
  { position: 'middle-bottom-right-right' },
  { position: 'middle-bottom-right-right-right' },
  { position: 'middle-top' },
  { position: 'middle-top-left' },
  { position: 'middle-top-left-left' },
  { position: 'middle-top-left-left-left' },
  { position: 'middle-top-right' },
  { position: 'middle-top-right-right' },
  { position: 'middle-top-right-right-right' },
];
