import React, { FC } from 'react';
import cn from 'classnames';
import { useColorMode } from '@docusaurus/theme-common';
import { Badge, type BadgeProps } from '@kit-xyz/badge';

import styles from './legend.module.scss';

interface LegendProps {
  className?: string;
  title?: string;
  badges?: BadgeProps[];
}

export const Legend: FC<LegendProps> = (props) => {
  const { title = 'Легенда страницы:', badges = [], className } = props;
  const { colorMode } = useColorMode();

  return (
    <div className={cn(styles.legend, className)}>
      <div className={styles.leftElements}>
        <span className={styles.title}>{title}</span>
      </div>

      <div className={styles.badges}>
        {badges.map((badge) => (
          <Badge key={String(badge.children)} {...badge} colorMode={colorMode} />
        ))}
      </div>
    </div>
  );
};
