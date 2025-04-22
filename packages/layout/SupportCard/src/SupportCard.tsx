import React from 'react';
import { Paper } from '@kit-xyz/paper';
import { Button } from '@kit-xyz/button';

interface ProvidedPopupProps {
  closeToast: () => void;
  onPopupClose?: () => void;
}

export const SupportCard = (props: ProvidedPopupProps) => {
  const { closeToast, onPopupClose } = props;

  const handleClosePopup = () => {
    if (onPopupClose) {
      onPopupClose();
    }

    closeToast();
  };

  return (
    <Paper borderRadius='xl' padding='2xl'>
      <div style={{ maxWidth: 'calc(320px - 80px)' }}>
        <h4 style={{ marginBottom: '16px' }}>Поддержка</h4>

        <p
          style={{
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            color: 'rgba(16, 16, 16, 0.4)',
            marginBottom: '16px',
          }}
        >
          Мы работаем ежедневно с 9:00 до 21:00. Пишите или звоните нам по любым вопросам!
        </p>

        <Button appearance='primary-solid-alt' size='xs' onClick={handleClosePopup}>
          Закрыть
        </Button>
      </div>
    </Paper>
  );
};
