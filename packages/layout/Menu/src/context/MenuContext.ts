import { createContext } from 'react';

export interface MenuCommonProps {
  colorMode?: 'light' | 'dark' | 'color';
  screen?: 'mobile' | 'tablet' | 'laptop' | 'desktop';
  toggleOpen: () => void;
  isOpen?: boolean;
}

export const defaultContext: MenuCommonProps = {
  colorMode: 'light',
  isOpen: true,
  screen: 'desktop',
  toggleOpen: console.log,
};
export const MenuContext = createContext<MenuCommonProps>(defaultContext);
