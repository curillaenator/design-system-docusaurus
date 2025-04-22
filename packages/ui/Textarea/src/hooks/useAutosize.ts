import { useEffect } from 'react';

import { UseAutosize } from '../interfaces';

export const useAutosize: UseAutosize = (textareaRef, { resize = 'both', value }) => {
  const isAutosize = resize === 'autosize';
  const hookUsage = isAutosize && value;
  const currentRef = textareaRef.current;

  useEffect(() => {
    if (currentRef && isAutosize) {
      currentRef.style.height = 'auto';
      currentRef.style.height = `${currentRef.scrollHeight}px`;
    }
    return () => {
      // сброс стилей при переключении режима отображения resize
      if (currentRef) {
        currentRef.setAttribute('style', '');
      }
    };
  }, [isAutosize, hookUsage, currentRef]);
  return isAutosize ? 'none' : resize;
};
