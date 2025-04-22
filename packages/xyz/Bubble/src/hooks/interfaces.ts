import { BaseBubbleProps } from '../interfaces';

export type UseBubbleClassnamesHookProps = Omit<
  BaseBubbleProps,
  'title' | 'subTitle' | 'iconLeftName' | 'iconRightName'
>;
