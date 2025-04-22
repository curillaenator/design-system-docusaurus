import type { ToastContainerProps, ToastOptions } from 'react-toastify';

export type ToastId = number | string;

type OmitedToastOptions = Omit<ToastOptions, 'closeButton'>;
type OmitedToastContainerProps = Omit<ToastContainerProps, 'className' | 'closeButton'>;

export interface ToastProps extends OmitedToastOptions, OmitedToastContainerProps {
  // containerStyle?: CSSProperties;
}
