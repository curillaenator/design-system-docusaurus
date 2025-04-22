import React, { useState, useCallback } from 'react';
import { Button } from '@kit-xyz/button';
import { Modal } from '@kit-xyz/modal';

export const YourComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <Button onClick={onOpen}>Открыть</Button>

      {
        // в portalId указывается id заранее созданного контейнера для диалогового окна
        <Modal open={open} onClose={onClose} portalId='docusaurus-portal-id' hasCloseButton>
          Hi!
        </Modal>
      }
    </>
  );
};

export const YourApp = () => (
  // верхний уровень приложения
  <div>
    {
      // контейнер в который будет отрендерено диалоговое окно
      <div id='docusaurus-portal-id' />
    }
    ...
    <YourComponent />
    ...
  </div>
);
