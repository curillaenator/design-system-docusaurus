import React, { FC } from 'react';
import cn from 'classnames';
import { Dropable, useAnimation, useCombineControledAnimated } from '@kit-base/dropable';
import { Paper } from '@kit-xyz/paper';

import { Arrow } from './components/Arrow';
import { useDynamicOffset } from './hooks/useDynamicOffset';
import { DEFAULT_TEST_ID, PLACEMENTS_ASSOC, POPPER_OPTIONS, CORNER_RE } from './constants';
import type { HintProps } from './interfaces';
import styles from './hint.module.scss';

export const Hint: FC<HintProps> = (props) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    placement = 'top-center',
    children,
    maxWidth = 220,
    trigger = 'mouseenter focus',
    content,
    colorMode = 'light',
    id,
    borderRadius = 'xl',
    padding = 's',
    color,
    dropShadow = false,
    smoothedCorners = false,
  } = props;

  const animated = useAnimation();
  const { ...dropable } = useCombineControledAnimated({ controled: {}, animated, rest: props });

  const { offset, getOpenNodeMiddle } = useDynamicOffset(placement);

  return (
    <Dropable
      {...dropable}
      dataTestId={dataTestId}
      openNode={children}
      trigger={trigger}
      placement={PLACEMENTS_ASSOC[placement]}
      minWidth={64}
      maxWidth={maxWidth}
      maxHeight='100%'
      className={styles.dropable}
      getOpenNodeWidth={getOpenNodeMiddle}
      offset={offset}
      popperOptions={POPPER_OPTIONS}
    >
      <Paper
        id={id}
        borderRadius={borderRadius}
        padding={padding}
        borderWidth='none'
        fullwidth
        color={color}
        colorMode={colorMode}
        dropShadow={dropShadow}
        smoothedCorners={smoothedCorners}
      >
        {CORNER_RE.test(placement) && <div className={cn(styles.corner, styles[`corner_${placement}`])} />}

        <Arrow
          className={cn(styles.arrow, styles[`arrow_${placement}`], {
            [styles.arrow_none]: !(placement === 'top-center' || placement === 'bottom-center'),
          })}
        />

        {content}
      </Paper>
    </Dropable>
  );
};
