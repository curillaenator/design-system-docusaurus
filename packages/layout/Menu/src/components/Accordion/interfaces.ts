import type { ReactText } from 'react';

import type { AccordionProps } from '@kit-xyz/accordion';

export interface MenuAccordionProps extends AccordionProps {
  triggerId?: string;
  active?: boolean;
  notifications?: ReactText;
}
