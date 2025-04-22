import { TextareaBaseProps, TextareaIconsProps } from '@kit-base/textarea';
import { Icons } from '@kit-xyz/icon';

import { GeneratedTextareaProps } from './tokenInterfaces';

export type TextareaSizes = NonNullable<GeneratedTextareaProps['size']>;

export interface TextareaProps extends Omit<TextareaBaseProps, keyof TextareaIconsProps>, GeneratedTextareaProps {
  /** левая иконка */
  iconLeft?: Icons;
  /** правая иконка */
  iconRight?: Icons;
  /** левая иконка блока метаинформации */
  iconMetaLeft?: Icons;
  /** правая иконка блока метаинформации */
  iconMetaRight?: Icons;
}
