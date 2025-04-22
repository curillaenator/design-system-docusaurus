import type { ColorMode } from '@docusaurus/theme-common';

export type ModesType = ColorMode | 'color';

export interface ColorModeToggleProps {
  value: ModesType;
  onChange: (value: ModesType) => void;
  globalValue?: ModesType;
  disabled?: boolean;
  title?: string;
  modes?: ModesType[];
  className?: string;
}
