import React from 'react';
import { Icon } from '@kit-xyz/icon';

import { TextareaProps } from '../interfaces';
import {
  ICON_LEFT_TEST_ID,
  ICON_RIGHT_TEST_ID,
  ICON_META_LEFT_TEST_ID,
  ICON_META_RIGHT_TEST_ID,
  META_ICON_SIZE,
} from '../constants';

export const useTextareaIcons = ({
  iconLeft,
  iconRight,
  iconMetaRight,
  iconMetaLeft,
  size = '2xl',
}: TextareaProps) => ({
  iconLeft: iconLeft ? <Icon name={iconLeft} size={size} dataTestId={ICON_LEFT_TEST_ID} /> : undefined,
  iconRight: iconRight ? <Icon name={iconRight} size={size} dataTestId={ICON_RIGHT_TEST_ID} /> : undefined,
  iconMetaLeft: iconMetaLeft ? (
    <Icon name={iconMetaLeft} size={META_ICON_SIZE} dataTestId={ICON_META_LEFT_TEST_ID} />
  ) : undefined,
  iconMetaRight: iconMetaRight ? (
    <Icon name={iconMetaRight} size={META_ICON_SIZE} dataTestId={ICON_META_RIGHT_TEST_ID} />
  ) : undefined,
});
