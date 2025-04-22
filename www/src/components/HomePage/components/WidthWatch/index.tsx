import React, { useContext, useEffect, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useWindowSize } from '@kit-base/uikit-utils';

import { MainPageContext } from '../../context';

interface WidthWatchProps {
  delay?: number;
}

const Component = (props: WidthWatchProps) => {
  const { delay = 500 } = props;
  const { setWidth } = useContext(MainPageContext);
  const { width } = useWindowSize();
  const timer = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setWidth(width), delay);
  }, [width, delay, setWidth]);

  return null;
};

export const WidthWatch = (props: WidthWatchProps) => <BrowserOnly>{() => <Component {...props} />}</BrowserOnly>;
