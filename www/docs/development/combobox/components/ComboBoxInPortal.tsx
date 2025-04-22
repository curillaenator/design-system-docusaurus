import React, { FC, useState, useCallback } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Paper } from '@kit-xyz/paper';
import { Button } from '@kit-xyz/button';
import UsersIcon from '@kit-xyz/icon/src/assets/duotone/UsersIcon';
import { useViewportContext } from '@site/src/components/DocViewport';
import { MODAL_PORTAL_ID } from '@site/shared/constants';
import styles from '@site/src/components/Card/display.module.scss';

import { OPTION_GROUPS } from '../constants';

export const ComboBoxInPortal: FC = () => {
  const { colorMode } = useViewportContext() as { colorMode: 'light' | 'dark' | 'color' };
  const [open, setOpen] = useState<boolean>(false);
  const handleToggle = useCallback(() => setOpen(!open), [open, setOpen]);

  return (
    <>
      <Paper
        colorMode={colorMode}
        fullwidth
        appearance='solid-alt'
        borderRadius='l'
        padding='xl'
        className={styles.paper}
      >
        <Button size='xs' appearance='primary-solid' onClick={handleToggle} colorMode={colorMode}>
          Открыть
        </Button>
      </Paper>

      <BrowserOnly>
        {() => {
          const { ComboBox } = require('@kit-xyz/combobox'); // eslint-disable-line global-require
          const { Modal } = require('@kit-xyz/modal'); // eslint-disable-line global-require

          return (
            <Modal
              open={open}
              hasCloseButton
              onClose={() => setOpen(false)}
              portalId={MODAL_PORTAL_ID}
              colorMode={colorMode}
            >
              <div
                style={{
                  width: '320px',
                  // height: 800,
                }}
              >
                <ComboBox
                  // defaultMenuIsOpen
                  isMulti
                  bordered
                  isClearable
                  shape='circular'
                  options={OPTION_GROUPS}
                  appendToId={MODAL_PORTAL_ID}
                  colorMode={colorMode}
                  onChange={(data) => console.table(data)}
                  IconSearch={UsersIcon}
                />
              </div>
            </Modal>
          );
        }}
      </BrowserOnly>
    </>
  );
};
