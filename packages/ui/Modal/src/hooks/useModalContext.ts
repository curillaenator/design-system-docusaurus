import { useContext } from 'react';

import { ModalContext } from '../context';

export const useModalContext = () => {
  const { isAnimationCompleted } = useContext(ModalContext);
  return { isAnimationCompleted };
};
