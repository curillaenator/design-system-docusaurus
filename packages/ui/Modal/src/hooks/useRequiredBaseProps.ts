import { OmitedBaseModalProps } from '../interfaces';

export const useRequiredBaseProps = (props: OmitedBaseModalProps): OmitedBaseModalProps => {
  const { portalId, open, onClose, disableBackgroundClick, scrollBody } = props;

  return {
    portalId,
    open,
    onClose,
    disableBackgroundClick,
    scrollBody,
  };
};
