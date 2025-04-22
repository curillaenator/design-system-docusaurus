import React from 'react';

import styles from '../styles.module.scss';

const PROPS = [
  { name: 'title', description: 'заголовок элемента' },
  { name: 'id', description: 'уникальный id, также используется для react key' },
  { name: 'href', description: 'адрес ссылки, куда будет перенаправлен пользователь по клику' },
  { name: 'iconName', description: 'иконка для облегчения визуального восприятия (Опционально)' },
  { name: 'onClick', description: 'колбэк, который будет вызван при клике на элемент (Опционально)' },
];

export const Items = () => {
  return (
    <>
      <p>Каждый элемент Breadcrumbs принимает набор свойств из:</p>

      <ul className={styles.list}>
        {PROPS.map((prop) => (
          <li key={prop.name} className={styles.item}>
            <b>{prop.name}</b>
            <span>-</span>
            <span>{prop.description}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
