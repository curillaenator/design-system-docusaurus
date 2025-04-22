import React, { FC, useState, useRef } from 'react';
import { useViewportContext } from '@site/src/components/DocViewport';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Button } from '@kit-xyz/button';
import { DRAWER_PORTAL_ID } from '@site/shared/constants';

type Placements = 'left' | 'right';

export const StatedDrawer: FC = ({ children, ...rest }) => {
  const { colorMode } = useViewportContext();

  const placement = useRef<Placements>('left');
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = (side: Placements) => {
    placement.current = side;
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Button
        appearance='primary-solid-alt'
        onClick={() => handleToggle('left')}
        colorMode={colorMode}
        style={{ marginRight: 32 }}
      >
        Открыть левый
      </Button>

      <Button appearance='primary-solid-alt' onClick={() => handleToggle('right')} colorMode={colorMode}>
        Открыть правый
      </Button>

      <BrowserOnly>
        {() => {
          const { Drawer } = require('@kit-xyz/drawer'); // eslint-disable-line global-require

          return (
            <Drawer
              {...rest}
              size='xl'
              open={open}
              onClose={() => setOpen(false)}
              portalId={DRAWER_PORTAL_ID}
              colorMode={colorMode}
              placement={placement.current}
            >
              {children}
            </Drawer>
          );
        }}
      </BrowserOnly>
    </>
  );
};
