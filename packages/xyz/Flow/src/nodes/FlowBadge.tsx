import React, { FC } from 'react';
import cn from 'classnames';
import { Badge, type BadgeProps } from '@kit-xyz/badge';

import DotIcon from '@kit-xyz/icon/src/assets/solid/DotIcon';

import { Handle, Position, type NodeProps } from 'reactflow';

import styles from './flowbadge.module.scss';

type EdgeId = 'a' | 'b' | 'c' | 'd' | 'e' | 'f';

interface FlowBadgeNodeProps extends BadgeProps {
  edgeIds?: EdgeId[];
}

const HANDLE_SPACING = 32;

const getHandlePosX = (count: number, index: number) => {
  let multiplier = 0;
  const mid = Math.floor(count / 2);
  const isOdd = count % 2 > 0;

  if (isOdd) {
    multiplier = (mid - index) * -HANDLE_SPACING;
  } else {
    multiplier = (mid - 1 - index) * -HANDLE_SPACING;
  }

  return `calc(-50% ${multiplier > 0 ? '+' : '-'} ${Math.abs(multiplier)}px ${isOdd ? '' : '- 16px'})`;
};

export const FlowBadgeNode: FC<NodeProps<FlowBadgeNodeProps>> = (props) => {
  const { data, selected } = props;
  const { edgeIds, ...badgeProps } = data;

  return (
    <div
      className={cn(styles.container, {
        [styles.container_selected]: !!selected,
      })}
    >
      <Badge
        {...badgeProps}
        className={cn(styles.badge, badgeProps.className || '')}
        size='xs'
        shape='circular'
        IconLeft={DotIcon}
      />

      {[Position.Top, Position.Bottom].map((handlePosition) => {
        return !edgeIds?.length ? (
          <Handle key={handlePosition} type='target' position={handlePosition} id={handlePosition} />
        ) : (
          edgeIds.map((edgeId, i) => (
            <Handle
              key={`${handlePosition}-${edgeId}`}
              type='target'
              position={handlePosition}
              id={`${handlePosition}-${edgeId}`}
              style={{ transform: `translate(${getHandlePosX(edgeIds.length, i)}, 0)` }}
            />
          ))
        );
      })}

      <Handle type='target' position={Position.Left} id='left' />
      <Handle type='target' position={Position.Right} id='right' />

      {[Position.Top, Position.Bottom].map((handlePosition) => {
        return !edgeIds?.length ? (
          <Handle key={handlePosition} type='source' position={handlePosition} id={handlePosition} />
        ) : (
          edgeIds.map((edgeId, i) => (
            <Handle
              key={`${handlePosition}-${edgeId}`}
              type='source'
              position={handlePosition}
              id={`${handlePosition}-${edgeId}`}
              style={{ transform: `translate(${getHandlePosX(edgeIds.length, i)}, 0)` }}
            />
          ))
        );
      })}

      <Handle type='source' position={Position.Left} id='left' />
      <Handle type='source' position={Position.Right} id='right' />
    </div>
  );
};
