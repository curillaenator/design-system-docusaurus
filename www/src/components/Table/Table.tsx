/* eslint-disable react/no-array-index-key */

import React, { FC } from 'react';
import { Badge } from '@kit-xyz/badge';
import { useViewportContext } from '@site/src/components/DocViewport';

import { TableProps, CellResolverProps } from './interfaces';
import styles from './table.module.scss';

const CellResolver: FC<CellResolverProps> = (props) => {
  const { cell, index, row } = props;
  const { colorMode } = useViewportContext();

  if (index === 0 || row[index] === 'Size') {
    return (
      <Badge appearance='secondary-transparent' colorMode={colorMode} withBorder>
        {cell}
      </Badge>
    );
  }

  if (row[index] === 'Icon size' || row[index] === 'Text size') {
    return (
      <Badge appearance='primary-transparent' colorMode={colorMode} withBorder>
        {cell}
      </Badge>
    );
  }

  return <span data-cell='default-cell'>{cell}</span>;
};

export const Table: FC<TableProps> = (props) => {
  const { data = [] } = props;

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            {data[0].length &&
              data[0].map((cell, i) => (
                <th key={`row-head-cell-${i}`}>
                  <span data-cell='default-cell'>{cell}</span>
                </th>
              ))}
          </tr>
        </thead>

        <tbody>
          {data.length >= 2 &&
            data.slice(1).map((row, i) => (
              <tr key={`row-${i}`}>
                {row.length &&
                  row.map((cell, j) => (
                    <td key={`row-${i}-cell-${j}`} data-tbody-td={`cell-${j}`}>
                      <CellResolver cell={cell} index={j} row={data[0]} />
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
