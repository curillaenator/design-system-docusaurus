import type { SpinnerProps } from '@kit-xyz/spinner';

interface DocsSpinnerProps {
  code?: string;
  title?: string;
}

export const SIZES: (SpinnerProps & DocsSpinnerProps)[] = [
  {
    id: 'spinner-primary-xs',
    title: 'XS',
    size: 'xs',
  },
  {
    id: 'spinner-primary-s',
    title: 'S',
    size: 's',
  },
  {
    id: 'spinner-primary-m',
    title: 'M',
    size: 'm',
  },
  {
    id: 'spinner-primary-l',
    title: 'L',
    size: 'l',
  },
  {
    id: 'spinner-primary-xl',
    title: 'XL',
    size: 'xl',
  },
  {
    id: 'spinner-primary-2xl',
    title: '2XL',
    size: '2xl',
  },
];
