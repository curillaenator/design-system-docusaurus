import React, { FC, useState, useCallback, type ReactNode } from 'react';
import { useResizeObserver } from '@kit-base/uikit-utils';
import cn from 'classnames';

import styles from './styles.module.scss';

interface ExamplesGridProps {
  children: ReactNode;
  id?: string;
  minCardWidth?: number;
  mb?: number;
}

export const ExamplesGrid: FC<ExamplesGridProps> = (props) => {
  const { id, children, mb = 0, minCardWidth = 420 } = props;

  const [columns, setColumns] = useState<number | null>(null);

  const onSizeChange = useCallback(
    (element: Element) => {
      const calcedCols = Math.floor(element.clientWidth / minCardWidth) || 1;

      if (!Array.isArray(children)) {
        setColumns(1);
      } else {
        setColumns(calcedCols > children.length ? children.length : calcedCols);
      }
    },
    [children, minCardWidth],
  );

  const { ref } = useResizeObserver(onSizeChange);

  return (
    <div
      id={id}
      ref={ref}
      className={cn(styles.examples, styles[`examples_${columns}`], {
        [styles.examples_visible]: columns,
      })}
      style={{ marginBottom: mb }}
    >
      {children}
    </div>
  );
};
