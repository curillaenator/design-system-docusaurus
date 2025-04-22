import React, { useContext } from 'react';
import { Paper } from '@kit-xyz/paper';
import { useColorMode } from '@docusaurus/theme-common';

import { useIntersection } from '../hooks/useIntersection';
import { MainPageContext } from '../context';

import { CARDS } from './advantages.schema';
import styles from './advantages.module.scss';

export const Advantages = () => {
  const { ref } = useIntersection();
  const { colorMode } = useColorMode();
  const { smoothed, cardsBorderRadius } = useContext(MainPageContext);

  return (
    <section className={styles.section} id='advantages-section' ref={ref}>
      <h2>Преимущества платформы</h2>

      <div className={styles.cards}>
        {CARDS.map((card) => (
          <Paper
            key={card.title}
            smoothedCorners={smoothed}
            borderRadius={cardsBorderRadius}
            padding='xl'
            borderWidth='m'
            withBorder
            fullwidth
            appearance='solid-alt'
            colorMode={colorMode}
            className={styles.card}
          >
            {card.image && <img src={card.image} alt={card.title} />}

            <div className={styles.content}>
              <span className={styles.title}>{card.title}</span>
              <span className={styles.text}>{card.text}</span>
            </div>
          </Paper>
        ))}
      </div>
    </section>
  );
};
