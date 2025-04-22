import React, { useContext } from 'react';
import cn from 'classnames';
import Link from '@docusaurus/Link';
import { Button } from '@kit-xyz/button';
import { Paper } from '@kit-xyz/paper';
import { useColorMode } from '@docusaurus/theme-common';

import { useIntersection } from '../hooks/useIntersection';
import { MainPageContext } from '../context';

import { DELIVERY_SCHEMA } from './delivery.schema';
import styles from './delivery.module.scss';

export const Delivery = () => {
  const { smoothed, cardsBorderRadius } = useContext(MainPageContext);
  const { colorMode } = useColorMode();
  const { ref } = useIntersection();

  return (
    <section className={styles.section} id='delivery-section' ref={ref}>
      <h2>Модели поставок</h2>

      <div className={styles.cards}>
        {DELIVERY_SCHEMA.map(({ id, to, title, subtitle, image, statements, button }) => (
          <Paper
            key={id}
            // @ts-expect-error docu Link types differs from react-router-dom, but works
            component={Link}
            borderRadius={cardsBorderRadius}
            borderWidth='m'
            padding='xl'
            withBorder
            fullwidth
            smoothedCorners={smoothed}
            to={to}
            colorMode={colorMode}
            className={cn(styles.card, {
              [styles.card_interactive]: !!to,
            })}
          >
            <div className={styles.header}>
              <div className={styles.titles}>
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </div>

              {image && (
                <div className={styles.imageWrapper}>
                  <img src={image} alt={title} />
                </div>
              )}
            </div>

            <ul>
              {statements.map((stmnt) => (
                <li key={stmnt}>
                  <span>{stmnt}</span>
                </li>
              ))}
            </ul>

            {button && <Button {...button} colorMode={colorMode} />}
          </Paper>
        ))}
      </div>
    </section>
  );
};
