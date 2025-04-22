import { ReactNode } from 'react';
import { PolymorphicComponentWithRef } from '@kit-base/common-types';

/**
 * если вам требуется применить текстовые стили, например, к кнопке, то оберните компонент в родительский Button / Navlink и тд
 * для использования внутри других элементов практически всегда стоит использовать component="span"
 * при этом стоит иметь в виду, что не каждый элемент можно вложить в другой
 * более подробно можно прочитать в спецификациях
 * @see {@link https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2}
 */

export interface BaseTypographyProps {
  /** id для тега */
  id?: string;
  /** children для типографии */
  children: ReactNode;
  /** тест id */
  dataTestId?: string;
  /** глобальный атрибут title
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title
   */
  title?: string;
  /** стили для остальных нужд, например hover, active и так далее, НЕ ПЕРЕБИВАЙТЕ ДЕФОЛТНЫЕ СТИЛИ */
  className?: string;
  /** текущий язык @see https://developer.mozilla.org/ru/docs/Web/HTML/Global_attributes/lang */
  lang?: string;
  /** флаг заблокированного текста */
  disabled?: boolean;
}

export type TypographyComponent = PolymorphicComponentWithRef<BaseTypographyProps, 'as', 'p'>;
