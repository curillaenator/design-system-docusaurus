import type { ButtonProps } from '@kit-xyz/button';
import { NotificationBadgeProps } from '../components/NotificationBadge/NotificationBadge';

export interface ButtonWithIconProps extends Pick<ButtonProps, 'children' | 'onClick' | 'to' | 'href' | 'IconRight'>, NotificationBadgeProps {}
export interface ButtonWithoutIconProps extends Pick<ButtonProps, 'children' | 'onClick' | 'to' | 'href'>, NotificationBadgeProps {}
