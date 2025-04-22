import { useWindowSize } from '@kit-base/uikit-utils';

export const useBreakpoints = () => {
  const { width } = useWindowSize();
  if (width > 1920) return 'col--3';
  if (width >= 1440) return 'col--4';
  if (width >= 997) return 'col--6';
  return 'col--12';
};
