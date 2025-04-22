import React, { FC } from 'react';
import cn from 'classnames';
import { BaseShape } from '@kit-base/shape';
import { CoverImage } from '@site/src/components/DocsHeader';

import { useIntersection } from '../hooks/useIntersection';

import styles from './cover.module.scss';

interface CoverProps {
  id?: string;
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageSize?: string;
  button?: JSX.Element;
  appearance?: 'darkToPrimary' | 'dark';
  section?: 'high' | 'low';
}

export const Cover: FC<CoverProps> = (props) => {
  const {
    id,
    title,
    subtitle,
    imageSrc,
    button,
    appearance = 'darkToPrimary',
    section = 'low',
    imageSize = '100%',
  } = props;

  const { ref } = useIntersection();

  return (
    <section className={cn(styles.section, styles[`section_${section}`])} id={id} ref={ref}>
      <div className={cn(styles.cover, styles[`cover_${appearance}`])}>
        <BaseShape borderRadius={24} isGradient gradientDirection='right' />

        <div className={styles.coverImage}>
          <CoverImage src={imageSrc} srcSize={imageSize} isBlur={false} isGrid={false} />
        </div>

        <div className={styles.coverContent}>
          <h1>{title}</h1>

          <p>{subtitle}</p>

          {button}
        </div>
      </div>
    </section>
  );
};
