import React, { FC } from 'react';
import { BaseAvatar } from '@kit-base/avatar';

import { useAvatarProps } from './hooks/useAvatarProps';
import { DEFAULT_TEST_ID } from './constants';
import { AvatarProps } from './interfaces';

export const Avatar: FC<AvatarProps> = (props) => {
  const { dataTestId, ...rest } = useAvatarProps(props);
  return <BaseAvatar {...rest} dataTestId={dataTestId || DEFAULT_TEST_ID} />;
};
