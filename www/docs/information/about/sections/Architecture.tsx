import React, { useState, useContext, useEffect } from 'react';
import cn from 'classnames';
import { useColorMode } from '@docusaurus/theme-common';
import { Badge } from '@kit-xyz/badge';
import { ArrowsContainer, ArrowsCard } from '@kit-xyz/arrows';
import { Paper } from '@kit-xyz/paper';

import { InfoPageContext } from '../context';

import { ARCHITECTURE_SCHEMAS, ANCHORS_SCHEMAS, SECTION_ID, type LayoutType } from './architecture.schema';
import styles from './architecture.module.scss';

export const Architecture = () => {
  const { colorMode } = useColorMode();
  const { sectionsWidths, setWatchResizeRefs, smoothed, cardsBorderRadius } = useContext(InfoPageContext);
  const sectionWidth = sectionsWidths[SECTION_ID];

  const [cols, setCols] = useState<LayoutType>('4cols');

  useEffect(() => {
    if (sectionWidth >= 1040) {
      setCols('4cols');
      return;
    }

    if (sectionWidth >= 768) {
      setCols('2cols');
      return;
    }

    setCols('1col');
  }, [sectionWidth]);

  return (
    <ArrowsContainer strokeColor='neutral' strokeShade='300' lineStyle='curve' colorMode={colorMode}>
      <div id={SECTION_ID} className={cn(styles.container, styles[`container_${cols}`])} ref={setWatchResizeRefs}>
        {ARCHITECTURE_SCHEMAS[cols].map(({ id, title, subtitle, badges, type = 'normal' }) => (
          <ArrowsCard
            key={id}
            id={id}
            anchors={ANCHORS_SCHEMAS[cols][id]}
            // devMode
          >
            <Paper
              colorMode={colorMode}
              appearance={title ? 'solid' : 'solid-alt'}
              borderRadius={cardsBorderRadius}
              padding='xl'
              smoothedCorners={smoothed}
              fullwidth
              className={cn(styles.card, styles[`card_${type}`])}
            >
              <div className={styles.content}>
                {title && <h3>{title}</h3>}

                {subtitle && <span>{subtitle}</span>}
              </div>

              {badges?.length && (
                <div className={styles.badges}>
                  {badges.map((badge) => (
                    <Badge key={String(badge.children)} {...badge} colorMode={colorMode} />
                  ))}
                </div>
              )}
            </Paper>
          </ArrowsCard>
        ))}
      </div>
    </ArrowsContainer>
  );
};
