import styles from './accordion.module.scss';

type TransitionProps = 'enter' | 'enterFrom' | 'enterTo' | 'leave' | 'leaveFrom' | 'leaveTo';

export const accordionTransitions: Record<TransitionProps, string> = {
  enter: styles.accordion_enter,
  enterFrom: styles.accordion_enter_from,
  enterTo: styles.accordion_enter_to,
  leave: styles.accordion_leave,
  leaveFrom: styles.accordion_leave_from,
  leaveTo: styles.accordion_leave_to,
};
