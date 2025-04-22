import NotificationIcon from '@kit-xyz/icon/src/assets/duotone/NotificationIcon';
import type { NotificationProps } from '@kit-xyz/notification';
import type { PaperProps } from '@kit-xyz/paper';

interface DocsNotificationProps {
  code?: string;
  title?: string;
  display?: PaperProps['appearance'];
}

export const APPEARANCES: (NotificationProps & DocsNotificationProps)[] = [
  {
    id: 'notification-primary',
    title: 'Primary',
    message: 'Пишите или звоните нам по любым вопросам!',
    appearance: 'primary',
    Icon: NotificationIcon,
    onClose: (id) => alert(`Notification ${id} close callback`),
    button: {
      children: 'Редактировать',
      appearance: 'primary-solid-alt',
      onClick: () => alert('Notification button callback'),
    },
  },
  {
    id: 'notification-secondary',
    title: 'Secondary',
    message: 'Пишите или звоните нам по любым вопросам!',
    appearance: 'secondary',
    Icon: NotificationIcon,
    onClose: () => alert('Notification close callback'),
    display: 'solid',
    button: {
      children: 'Редактировать',
      appearance: 'primary-solid',
      onClick: () => alert('Notification button callback'),
    },
  },
  {
    id: 'notification-tertiary',
    title: 'Tertiary',
    message: 'Пишите или звоните нам по любым вопросам!',
    appearance: 'tertiary',
    Icon: NotificationIcon,
    onClose: () => alert('Notification close callback'),
    button: {
      children: 'Редактировать',
      appearance: 'primary-solid-alt',
      onClick: () => alert('Notification button callback'),
    },
  },
  {
    id: 'notification-quaternary',
    title: 'Quaternary',
    message: 'Пишите или звоните нам по любым вопросам!',
    appearance: 'quaternary',
    Icon: NotificationIcon,
    onClose: () => alert('Notification close callback'),
    button: {
      children: 'Редактировать',
      appearance: 'primary-solid-alt',
      onClick: () => alert('Notification button callback'),
    },
  },
  {
    id: 'notification-informative',
    title: 'Informative',
    message: 'Пишите или звоните нам по любым вопросам!',
    appearance: 'informative',
    Icon: NotificationIcon,
    onClose: () => alert('Notification close callback'),
    button: {
      children: 'Редактировать',
      appearance: 'primary-solid-alt',
      onClick: () => alert('Notification button callback'),
    },
  },
  {
    id: 'notification-positive',
    title: 'Positive',
    message: 'Пишите или звоните нам по любым вопросам!',
    appearance: 'positive',
    Icon: NotificationIcon,
    onClose: () => alert('Notification close callback'),
    button: {
      children: 'Редактировать',
      appearance: 'primary-solid-alt',
      onClick: () => alert('Notification button callback'),
    },
  },
  {
    id: 'notification-attention',
    title: 'Attention',
    message: 'Пишите или звоните нам по любым вопросам!',
    appearance: 'attention',
    Icon: NotificationIcon,
    onClose: () => alert('Notification close callback'),
    button: {
      children: 'Редактировать',
      appearance: 'primary-solid-alt',
      onClick: () => alert('Notification button callback'),
    },
  },
  {
    id: 'notification-negative',
    title: 'Negative',
    message: 'Пишите или звоните нам по любым вопросам!',
    appearance: 'negative',
    Icon: NotificationIcon,
    onClose: () => alert('Notification close callback'),
    button: {
      children: 'Редактировать',
      appearance: 'primary-solid-alt',
      onClick: () => alert('Notification button callback'),
    },
  },
];
