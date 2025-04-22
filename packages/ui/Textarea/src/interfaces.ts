import { ChangeEvent, RefObject, TextareaHTMLAttributes, ReactNode, MouseEventHandler } from 'react';

export type Resize = 'horizontal' | 'vertical' | 'both' | 'none' | 'autosize';

export interface TextareaBaseProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, TextareaIconsProps {
  /** тест id */
  dataTestId?: string;
  /** id для textarea */
  id?: string;
  /** value для textarea */
  value: string;
  /** placeholder для textarea */
  placeholder?: string;
  /** обработчик для textarea */
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  /** дополнительный текст слева от поля ввода */
  labelLeft?: string;
  /** дополнительный текст справа от поля ввода */
  labelRight?: string;
  /** текст блока метаинформации слева */
  captionLeft?: string;
  /** текст блока метаинформации справа */
  captionRight?: string;
  /** состояние disabled */
  disabled?: boolean;
  /** вариант ресайза, соответствует css property resize */
  resize?: Resize;
  /** стили для scrollbar */
  scrollClassName?: string;
}

export interface TextareaIconsProps {
  /** левая иконка */
  iconLeft?: ReactNode;
  /** правая иконка */
  iconRight?: ReactNode;
  /** левая иконка блока метаинформации */
  iconMetaLeft?: ReactNode;
  /** правая иконка блока метаинформации */
  iconMetaRight?: ReactNode;
  /** иконка для resize */
  gripIconNode?: ReactNode;
}

export interface TextareaInernalProps {
  isFocused: boolean;
  setIsFocused: (focus: boolean) => void;
  onHover?: (isHovered: boolean) => void;
  ariaLabelContent?: string;
}

export type TextareaProps = TextareaBaseProps & TextareaInernalProps;

export type UseTextareaClassesArgs = {
  className: string;
  scrollClassName?: string;
  iconLeft: boolean;
  iconRight: boolean;
  isLeftMetaText: boolean;
  isRightMetaText: boolean;
  focused: boolean;
  hovered: boolean;
  isScroll: boolean;
  resize: Resize;
};

export type UseTextareaClasses = (config: UseTextareaClassesArgs) => Record<string, string>;

export type UseOverlayFn = (ref: RefObject<HTMLTextAreaElement>) => string;
export type UseResizeFn = (
  ref: RefObject<HTMLTextAreaElement>,
  resize?: Resize,
) => { handleMouseDown: MouseEventHandler<HTMLButtonElement> };
export type UseAutosize = {
  (ref: RefObject<HTMLTextAreaElement>, props: TextareaProps): Exclude<Resize, 'autosize'>;
};
