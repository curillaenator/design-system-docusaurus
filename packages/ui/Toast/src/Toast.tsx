import React, { FC } from 'react';
import cn from 'classnames';
import { ToastContainer as Container, toast as toastify, type ToastContainerProps } from 'react-toastify';

import type { ToastId, ToastProps } from './interfaces';
import styles from './toast.module.scss';

/**
 * ToastContainer
 * Контейнер со сброшенными дефолтными стилями
 * @param props - объект с конфигурацией контейнера
 */
const ToastContainer: FC<ToastContainerProps> = (props) => (
  <Container {...props} icon={false} className={cn(styles.container, props.className)} />
);

/**
 * Функция, которая показывает тост, стили сброшены до полностью прозрачного тоста, принимающего контент-компонент
 * @ToastContent - рендер функция (React.ElementType), компонент отображающийся внутри тоста
 * @param props - объект с конфигурацией тоста
 * @returns toastId, необходим для ручного удаления тоста
 */
const toast = (ToastContent: FC, props: ToastProps) => {
  const { autoClose = 3000, ...rest } = props;

  // const Close = (closeButton || 'button') as React.ElementType;

  return toastify(ToastContent, {
    ...rest,
    autoClose,
    hideProgressBar: true,
    draggable: false,
    closeButton: false,
  });
};

/**
 * Функция, которая удаляет из стека тост с соответствующим toastId.
 * Если toastId - undefined, то удалит все открытые тосты
 * @param toastId - id удаляемого тоста
 */
const closeToast = (toastId?: ToastId): void => toastify.dismiss(toastId);

export { ToastContainer, toast, closeToast };
