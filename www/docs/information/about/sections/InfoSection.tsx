import React, { FC, useContext } from 'react';
import cn from 'classnames';

import { InfoPageContext } from '../context';

import { InfoSectionProps } from './infoSection.schema';
import styles from './infosection.module.scss';

const COLUMN_SECTION_WIDTH = 1300;

const getLayout = (w: number) => (w >= COLUMN_SECTION_WIDTH ? '2cols' : '1col');

export const InfoSection: FC<InfoSectionProps> = (props) => {
  const { id, appearance = 'neutral-300-200', title, imageURL, description, flip = false, button } = props;

  const { sectionsWidths, setWatchResizeRefs } = useContext(InfoPageContext);
  const sectionWidth = sectionsWidths[id];

  return (
    <div
      id={id}
      ref={setWatchResizeRefs}
      className={cn(
        styles.container,
        styles[`container_${appearance}`],
        styles[`container_${getLayout(sectionWidth)}`],
        {
          [styles.container_fliped]: flip && sectionWidth >= COLUMN_SECTION_WIDTH,
        },
      )}
    >
      <div className={cn(styles.content, styles.block)}>
        <span className={styles.description}>{description}</span>

        {button}
      </div>

      <div className={cn(styles.image, styles.block)}>
        <img src={imageURL} alt={title} />
      </div>
    </div>
  );
};
