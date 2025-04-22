/* eslint-disable react/no-array-index-key */
import React, { FC, useContext } from 'react';
import cn from 'classnames';
import { Badge } from '@kit-xyz/badge';
import Link from '@docusaurus/Link';
import { MasonryGrid } from '@kit-xyz/grid';
import { Paper } from '@kit-xyz/paper';
import { useColorMode } from '@docusaurus/theme-common';

import { useIntersection } from '../hooks/useIntersection';
import { MainPageContext } from '../context';

import { ARTICLES_SCHEMA, type ArticleProps } from './articles.schema';
import styles from './articles.module.scss';

const Article: FC<ArticleProps & { colorMode?: 'light' | 'dark' }> = (props) => {
  const { id, to, coverImgSrc, title, type, published, description, contentImgSrc, colorMode } = props;
  const { smoothed, cardsBorderRadius } = useContext(MainPageContext);

  return (
    <Paper
      // @ts-expect-error docu Link types differs from react-router-dom, but works
      component={Link}
      key={id}
      to={to}
      borderRadius={cardsBorderRadius}
      borderWidth='m'
      withBorder
      fullwidth
      padding='xl'
      smoothedCorners={smoothed}
      colorMode={colorMode}
      className={cn(styles.article, {
        [styles.article_interactive]: !!to,
      })}
    >
      {coverImgSrc && <img className={styles.coverImg} src={coverImgSrc} alt={title} />}

      <div className={styles.badges}>
        <Badge appearance='secondary-transparent' withBorder colorMode={colorMode}>
          {type}
        </Badge>

        <Badge appearance='primary-transparent' withBorder colorMode={colorMode}>
          {published}
        </Badge>
      </div>

      <h3>{title}</h3>

      {description && <p>{description}</p>}

      {contentImgSrc && <img className={styles.contentImg} src={contentImgSrc} alt={title} />}
    </Paper>
  );
};

export const Articles = () => {
  const { ref } = useIntersection();
  const { colorMode } = useColorMode();

  return (
    <section className={styles.section} id='articles-section' ref={ref}>
      <h2>Публикации</h2>

      <MasonryGrid
        id='home-page-articles'
        items={ARTICLES_SCHEMA.map((article) => () => <Article {...article} colorMode={colorMode} />)}
        gap={32}
      />
    </section>
  );
};
