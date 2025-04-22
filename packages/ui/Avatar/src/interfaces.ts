import type { ReactNode, MouseEvent, FunctionComponent, SVGAttributes } from 'react';

export type SvgrComponent = FunctionComponent<SVGAttributes<SVGElement>>;

export type NotionPlacement = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left' | 'off';

export interface BaseAvatarImageProps {
  dataTestId?: string;
  title?: string;
  alt?: string;
  src?: string;
  svg?: SvgrComponent;
  initials?: string;
  withBorder?: boolean;
  notion?: ReactNode;
  children?: ReactNode;
  notionPlacement?: NotionPlacement;
  className?: string;
}

export interface BaseAvatarCaptionProps {
  dataTestId?: string;
  username?: string;
  subline?: string;
  fullwidth?: boolean;
  className?: string;
}

export interface BaseAvatarProps {
  dataTestId?: string;
  as?: 'div' | 'button';
  fullwidth?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
  children?: ReactNode;
}

export type CombinedBaseAvatarProps = BaseAvatarProps & BaseAvatarImageProps & BaseAvatarCaptionProps;
