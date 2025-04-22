import { useContext } from 'react';

import { ViewportContext } from '../context';

export const useViewportContext = () => {
  const ctx = useContext(ViewportContext);
  return ctx;
};
