/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import cn from 'classnames';
import { useColorMode } from '@docusaurus/theme-common';
import { Badge } from '@kit-xyz/badge';
import { Paper } from '@kit-xyz/paper';

import { useIntersection } from '../hooks/useIntersection';
import { MainPageContext } from '../context';

import { ARCHITECTURE_SCHEMA } from './architecture.schema';
import styles from './architecture.module.scss';

export const Architecture = () => {
  const { colorMode } = useColorMode();
  const { ref } = useIntersection();
  const { smoothed, cardsBorderRadius } = useContext(MainPageContext);

  return (
    <section className={styles.section} id='about-platform-section' ref={ref}>
      <h2>Архитектура решения</h2>

      <div className={styles.schema}>
        <div className={styles.paas}>
          <span>PaaS</span>

          <svg width='18' height='247' viewBox='0 0 18 247' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M17 1V1C12.5817 1 9 4.58172 9 9V112.215C9 114.343 8.15163 116.384 6.64266 117.886L1 123.5L6.64266 129.114C8.15163 130.616 9 132.657 9 134.785V238C9 242.418 12.5817 246 17 246V246'
              stroke='var(--ifm-color-emphasis-700)'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeDasharray='0.01 0.01'
            />
          </svg>
        </div>

        <div className={styles.saas}>
          <svg width='18' height='495' viewBox='0 0 18 495' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1 1V1C5.41828 1 9 4.58172 9 9V236.215C9 238.343 9.84837 240.384 11.3573 241.886L17 247.5L11.3573 253.114C9.84837 254.616 9 256.657 9 258.785V486C9 490.418 5.41828 494 1 494V494'
              stroke='var(--ifm-color-emphasis-700)'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeDasharray='0.01 0.01'
            />
          </svg>

          <span>Saas</span>
        </div>

        {ARCHITECTURE_SCHEMA.map(({ id, title, badges, subtitle }) => (
          <Paper
            borderRadius={cardsBorderRadius}
            padding='xl'
            fullwidth
            smoothedCorners={smoothed}
            key={id}
            className={cn(styles.block, styles[id])}
          >
            <h3
              className={cn(styles.title, {
                [styles.title_subtitled]: !!subtitle,
              })}
            >
              {title}
            </h3>

            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

            <div className={styles.badges}>
              {badges.map((badge, i) => (
                <Badge key={`${badge.children}-${i}`} {...badge} colorMode={colorMode} />
              ))}
            </div>
          </Paper>
        ))}
      </div>
    </section>
  );
};
