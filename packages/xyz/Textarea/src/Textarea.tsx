import React, { forwardRef } from 'react';
import { TextareaBase } from '@kit-base/textarea';

import { TextareaProps } from './interfaces';
import { useClassName } from './hooks/useClassName';
import { useTextareaIcons } from './hooks/useTextareaIcons';
import { mapStateToLabel } from './helpers';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const classNameProps = useClassName(props);
  const icons = useTextareaIcons(props);
  const ariaLabelContent = props.state ? mapStateToLabel[props.state] : '';

  return <TextareaBase {...props} {...icons} {...classNameProps} ariaLabelContent={ariaLabelContent} ref={ref} />;
});
