import React, { useState, useContext, useEffect } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import cn from 'classnames';
import { Paper, type PaperProps } from '@kit-xyz/paper';
import { ArrowsContainer, ArrowsCard } from '@kit-xyz/arrows';

import { InfoPageContext } from '../context';

import { TASKS_STATUSES, ANCHORS, CONTAINER_ID } from './taskStatuses.schema';
import styles from './taskStatuses.module.scss';

export const TasksStatuses = () => {
  const { colorMode } = useColorMode();
  const { width, smoothed, cardsBorderRadius } = useContext(InfoPageContext);

  const [paperProps, setPaperProps] = useState<Partial<PaperProps>>({
    borderRadius: cardsBorderRadius,
    padding: 'xl',
  });

  useEffect(() => {
    if (width >= 1920) {
      setPaperProps({
        borderRadius: cardsBorderRadius,
        padding: 'xl',
      });

      return;
    }

    setPaperProps({
      borderRadius: 'xl',
      padding: 'l',
    });
  }, [width, cardsBorderRadius]);

  return (
    <ArrowsContainer strokeColor='neutral' strokeShade='300' lineStyle='curve' colorMode={colorMode}>
      <div id={CONTAINER_ID} className={cn(styles.container, styles[`container_4`])}>
        {TASKS_STATUSES.map(({ id, title, appearance = 'default' }) => (
          <ArrowsCard
            id={id}
            key={id}
            anchors={ANCHORS[id]}
            // devMode
          >
            <Paper
              {...paperProps}
              fullwidth
              smoothedCorners={smoothed}
              className={cn(styles.status, styles[`status_${appearance}`])}
            >
              <span>{title}</span>
            </Paper>
          </ArrowsCard>
        ))}
      </div>
    </ArrowsContainer>
  );
};
