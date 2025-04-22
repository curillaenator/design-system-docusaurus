import React from 'react';

import { Spinner, Notion } from '../../Icons';
import { ICONS_SIZE_ASSOC } from '../../../constants';
import { ButtonProps } from '../interfaces';
import styles from '../button.module.scss';

export const useButtonIcons = (props: ButtonProps) => {
  const { IconLeft, IconRight, state, size = 'xs', notion, active, disabled } = props;

  if (state === 'loading' && !notion) {
    return {
      IconLeft: () => <Spinner size={ICONS_SIZE_ASSOC[size]} className={styles.iconLoading} />,
      IconRight: undefined,
    };
  }

  if (state === 'loading' && notion) {
    return {
      IconLeft:
        IconLeft &&
        (() => (
          <Notion size={size} active={active} disabled={disabled}>
            <Spinner size={ICONS_SIZE_ASSOC[size]} className={styles.iconLoading} />
          </Notion>
        )),
      IconRight:
        IconRight &&
        (() => (
          <Notion size={size} active={active} disabled={disabled}>
            <Spinner size={ICONS_SIZE_ASSOC[size]} className={styles.iconLoading} />
          </Notion>
        )),
    };
  }

  if (state !== 'loading' && notion) {
    return {
      IconLeft:
        IconLeft &&
        (() => (
          <Notion size={size} active={active} disabled={disabled}>
            <IconLeft size={ICONS_SIZE_ASSOC[size]} />
          </Notion>
        )),

      IconRight:
        IconRight &&
        (() => (
          <Notion size={size} active={active} disabled={disabled}>
            <IconRight size={ICONS_SIZE_ASSOC[size]} />
          </Notion>
        )),
    };
  }

  return { IconLeft, IconRight };
};
