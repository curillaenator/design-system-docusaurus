import React, { FC, useState, useContext } from 'react';
import cn from 'classnames';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import { Paper } from '@kit-xyz/paper';
import { MasonryGrid } from '@kit-xyz/grid';
import { Badge } from '@kit-xyz/badge';

import { InfoPageContext } from '../context';
import { Legend } from '../components';

import { SCHEMA, CONTAINER_ID, LEGEND_BADGES, type CardProps } from './componentsStyles.schema';
import styles from './componentsStyles.module.scss';

const Cell: FC<CardProps & { colorMode?: 'light' | 'dark' }> = (props) => {
  const { id, to, title, subtitle, imageURL, badges, colorMode = 'light' } = props;
  const { cardsBorderRadius, smoothed } = useContext(InfoPageContext);
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div className={styles.cardContainer} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Paper
        key={id}
        to={to}
        // @ts-expect-error docu Link types differs
        component={Link}
        smoothedCorners={smoothed}
        fullwidth
        padding='xl'
        borderRadius={cardsBorderRadius}
        borderWidth='m'
        colorMode={colorMode}
        withBorder={!!to && hovered}
        className={cn(styles.card, {
          [styles.card_interactive]: !!to,
        })}
      >
        <div className={styles.card_header}>
          <div className={styles.texts}>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.subtitle}>{subtitle}</span>
          </div>

          <div className={styles.image}>
            <img src={imageURL} alt={title} />
          </div>
        </div>

        {!!badges.length && (
          <div className={styles.badges}>
            {badges.map((badge) => (
              <Badge key={String(badge.children || badge.additionalLabel)} {...badge} colorMode={colorMode} />
            ))}
          </div>
        )}
      </Paper>
    </div>
  );
};

export const ComponentsStyles = () => {
  const { colorMode } = useColorMode();

  return (
    <div id={CONTAINER_ID} className={styles.container}>
      <Legend className={styles.legend} badges={LEGEND_BADGES} />

      <div className={styles.content}>
        <MasonryGrid
          id='ds-info-components-and-styles'
          items={SCHEMA.map((item) => () => <Cell {...item} colorMode={colorMode} />)}
          gap={64}
        />
      </div>
    </div>
  );
};
