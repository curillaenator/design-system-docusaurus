import type { ReactText } from 'react';
import type { BaseAccordionProps } from '@kit-base/accordion';
import type { ButtonProps } from '@kit-xyz/button';

import type { GeneratedAccordionProps } from '../../tokenInterfaces';

export interface AccordionProps extends GeneratedAccordionProps, Omit<BaseAccordionProps, 'openNode' | 'isOpen'> {
  /** открыт ли по дефолту accordion, по дефолту false */
  openByDefault?: boolean;
  /** заголовок для accordion */
  title?: ReactText;
  /** режим */
  colorMode?: 'light' | 'dark' | 'color';
  /** пропсы открывающей ноды */
  openNodeProps?: ButtonProps;
}
