/* eslint-disable react/no-array-index-key */
import React, { FC, useContext } from 'react';
import cn from 'classnames';
import { useColorMode } from '@docusaurus/theme-common';
import { Badge } from '@kit-xyz/badge';
import { Paper } from '@kit-xyz/paper';

import { useIntersection } from '../hooks/useIntersection';
import { MainPageContext } from '../context';

import {
  TECHNOLOGIES_SCHEMA_1,
  TECHNOLOGIES_SCHEMA_2,
  TABLE,
  IMAGES,
  type TechnologyProps,
} from './technologies.schema';
import styles from './technologies.module.scss';

const Technology: FC<TechnologyProps & { listCols?: number; colorMode?: 'light' | 'dark' }> = (props) => {
  const { id, title, badges, items, listCols = 1, colorMode } = props;
  const { smoothed, cardsBorderRadius } = useContext(MainPageContext);

  return (
    <Paper
      key={id}
      borderRadius={cardsBorderRadius}
      padding='xl'
      smoothedCorners={smoothed}
      fullwidth
      className={styles.technology}
      colorMode={colorMode}
    >
      <div className={styles.content}>
        <h3>{title}</h3>

        <div className={styles.badges}>
          {badges.map((badge) => (
            <Badge {...badge} colorMode={colorMode} key={String(badge.children)} />
          ))}
        </div>

        <ul className={cn(styles.list, styles[`list_${listCols}`])}>
          {items.map(({ label, appearance = 'primary' }) => (
            <li key={label} className={cn(styles.item, styles[`item_${appearance}`])}>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      {IMAGES[id]}
    </Paper>
  );
};

export const Technologies = () => {
  const { colorMode } = useColorMode();
  const { smoothed, cardsBorderRadius } = useContext(MainPageContext);
  const { ref } = useIntersection();

  return (
    <section className={styles.section} id='products-tech-section-expanded' ref={ref}>
      <h2>Технологические продукты</h2>

      <div className={cn(styles.technologies, styles.technologies_mb32, styles.technologies_2)}>
        {TECHNOLOGIES_SCHEMA_1.map((technology) => (
          <Technology {...technology} key={technology.id} listCols={2} colorMode={colorMode} />
        ))}
      </div>

      <div className={cn(styles.technologies, styles.technologies_mb64, styles.technologies_4)}>
        {TECHNOLOGIES_SCHEMA_2.map((technology) => (
          <Technology {...technology} key={technology.id} listCols={1} colorMode={colorMode} />
        ))}
      </div>

      <Paper
        padding='none'
        borderRadius={cardsBorderRadius}
        smoothedCorners={smoothed}
        colorMode={colorMode}
        className={cn(styles.tableContainer, styles[`tableContainer_${colorMode}`])}
      >
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                {TABLE[0].map(({ id, content }, i) => (
                  <th key={id} data-column={`column-${i}`}>
                    <span>{content}</span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {TABLE.slice(1).map((row, i) => (
                <tr key={`row-${i}`}>
                  {row.map(({ id, content, badges, dataCell }, j) => (
                    <td key={id} data-column={`column-${j}`}>
                      {badges?.length ? (
                        <div data-cell='cell-flex'>
                          {badges.map((badge) => (
                            <Badge {...badge} colorMode={colorMode} key={String(badge.children)} />
                          ))}
                        </div>
                      ) : (
                        <span data-cell={dataCell}>{content}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Paper>
    </section>
  );
};
