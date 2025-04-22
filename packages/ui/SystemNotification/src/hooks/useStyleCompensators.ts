import styles from '../styles/systemNotification.module.scss';

type OptionalString = string | undefined;

export const useStyleCompensators = (text: OptionalString, textSecondary: OptionalString, actions: boolean) => {
  const textPadding = text && !textSecondary ? styles.heading_compensated : '';
  const textSecondaryPadding = !text && textSecondary ? styles.subline_compensated : '';
  const clsBtnWrapperPadding = (text && textSecondary) || actions ? styles.clsBtnWrapper_compensated : '';

  return { textPadding, textSecondaryPadding, clsBtnWrapperPadding };
};
