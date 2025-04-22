import React, { FC } from 'react';

import { VERSION } from './version';
import { DEFAULT_TEST_ID, CORNERS } from './constants';
import type { ShapeProps } from './interfaces';
import { useCorners } from './hooks/useCorners';
import styles from './corners.module.scss';

// данные смусд корнеры не используют никаких ресайз обсерверов и не используют генерацию свг на лету
// один раз при первом рендере родителя создается 4 абсолютно спозиционированные по углам
// иконки имитирующие гладкие углы.
// при дальнейших манипуляциях с размерами родительского контейнера перерасчета svg не происходит
// если не меняются ключевые параметры - stroke и borderRadius.
// иконки собой перекрывают дефолтные радиусы и содержат все необходимое для корректной отрисовки бордеров

// механизм в разы быстрее того, что лежит рядом в компоненте Shape, где происходит динамеческая генерация SVG по ResizeObserver

const Component: FC<ShapeProps> = (props) => {
  const { dataTestId, path, borderPath, commonSvgProps, stroke, className } = useCorners(props);

  return (
    <div data-testid={dataTestId} data-analytics={DEFAULT_TEST_ID} data-version={VERSION} className={className}>
      {CORNERS.map((corner) => (
        <svg {...commonSvgProps} key={corner} className={styles[corner]}>
          <path d={path} fill='var(--shp-bgc, blue)' />
          {stroke && <path d={borderPath} strokeWidth={stroke} stroke='var(--shp-bdc, red)' fill='none' />}
        </svg>
      ))}
    </div>
  );
};

export const Corners = React.memo(Component);
