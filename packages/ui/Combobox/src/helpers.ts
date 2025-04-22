import type { ReactNode } from 'react';
import type { GroupBase, OptionsOrGroups } from 'react-select';

import type { ComboBoxOption } from './interfaces';

export const getOptionLabel = (option: ComboBoxOption): string => option.title;

export const getOptionValue = (option: ComboBoxOption): string => option.id.toString();

export const breakWords = (content: ReactNode) => {
  if (typeof content !== 'string') return false;
  return content.split(' ').some((word) => word.length > 27);
};

export const menuHasScroll = (
  options: OptionsOrGroups<ComboBoxOption, GroupBase<ComboBoxOption>>,
  limit: number,
): boolean => {
  let isScrollable = options.length * 44 + 16 > limit;

  if (options.some((option) => 'options' in option && 'label' in option)) {
    const groupedLength = (options as GroupBase<ComboBoxOption>[]).reduce(
      (acc, cur) => acc + cur.options.length,
      options.length,
    );

    isScrollable = groupedLength * 44 + 16 > limit;
  }

  return isScrollable;
};
