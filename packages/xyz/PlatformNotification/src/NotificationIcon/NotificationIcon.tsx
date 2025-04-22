import React from 'react';
import { Icon, Glyph, IconProps, GlyphProps } from '@kit-xyz/icon';
import { mapPropsToIcons } from '@kit-xyz/icon/src/utils/icon/mapPropsToIcons';

const isIconProps = (props: IconProps | GlyphProps): props is IconProps => props.name in mapPropsToIcons;

export const NotificationIcon = (props: IconProps | GlyphProps) => {
  if (isIconProps(props)) {
    return <Icon {...props} />;
  }

  return <Glyph {...props} />;
};
