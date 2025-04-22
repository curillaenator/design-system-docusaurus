import { OmitedBaseDrawerProps } from '../interfaces';

export const useRequiredBaseProps = (props: OmitedBaseDrawerProps): OmitedBaseDrawerProps => {
  const { onAnimationProgress, portalId, open, onClose, disableBackgroundClick, placement, disableOverlay = false } = props;

  return {
    portalId,
    open,
    onClose,
    disableOverlay,
    disableBackgroundClick,
    onAnimationProgress,
    placement,
  };
};
