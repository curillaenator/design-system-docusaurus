import React, { FC, useContext } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import type { ModalProps } from '@kit-xyz/modal';

import { LayoutContext } from '../../context';
import { MODAL_PORTAL_ID } from '../../constants';

interface LocalModalProps extends Partial<Omit<ModalProps, 'colorMode'>> {
  colorMode?: 'light' | 'dark' | 'color';
}

export const Modal: FC<LocalModalProps> = (props) => {
  const { children, colorMode, ...rest } = props;

  const { state, toggleModalOpen } = useContext(LayoutContext);
  const { isModalOpen } = state;

  return (
    <BrowserOnly>
      {() => {
        // modal использует браузерное апи, поэтому завернут в специальную обертку докузавра, чтобы среверное приложение собиралось
        const { Modal: ModalThemed } = require('@kit-xyz/modal'); // eslint-disable-line global-require

        return (
          <ModalThemed
            {...rest}
            colorMode={colorMode}
            portalId={MODAL_PORTAL_ID}
            open={isModalOpen}
            onClose={() => toggleModalOpen(false)}
          >
            {children}
          </ModalThemed>
        );
      }}
    </BrowserOnly>
  );
};
