import { createContext } from 'react';

interface ModalContextType {
  isAnimationCompleted: boolean;
}

export const ModalContext = createContext<ModalContextType>({
  isAnimationCompleted: false,
});
