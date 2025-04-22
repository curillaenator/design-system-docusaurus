import React, { FC, useState, useCallback } from 'react';
import { useViewportContext } from '@site/src/components/DocViewport';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Button } from '@kit-xyz/button';
import { MODAL_PORTAL_ID } from '@site/shared/constants';

export const StatedModal: FC = ({ children }) => {
  const { colorMode } = useViewportContext();
  const [open, setOpen] = useState<boolean>(false);
  const handleToggle = useCallback(() => setOpen(!open), [open, setOpen]);

  return (
    <>
      <Button appearance='primary-solid-alt' onClick={handleToggle} colorMode={colorMode}>
        Открыть
      </Button>

      <BrowserOnly>
        {() => {
          const { Modal } = require('@kit-xyz/modal'); // eslint-disable-line global-require

          return (
            <Modal
              open={open}
              hasCloseButton
              onClose={() => setOpen(false)}
              portalId={MODAL_PORTAL_ID}
              colorMode={colorMode}
            >
              {children}
            </Modal>
          );
        }}
      </BrowserOnly>
    </>
  );
};
