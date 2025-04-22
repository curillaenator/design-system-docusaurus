import React, { FC, useCallback, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, updateEdge, type Node } from 'reactflow';

import { FlowBadgeNode } from './nodes/FlowBadge';

import type { FlowProps } from './interfaces';
import styles from './flow.module.scss';

import 'reactflow/dist/base.css';

const NODE_TYPES = { badge: FlowBadgeNode };

export const Flow: FC<FlowProps> = (props) => {
  const {
    id,
    initialData,
    height = 512,
    children,
    snapToGrid = true,
    connectExternalControls,
    ...flowFullProps
  } = props;

  const [nodes, setNodes, onNodesChange] = useNodesState(initialData?.nodes || []);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialData?.edges || []);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge({ ...params, type: 'step' }, eds)), [setEdges]);

  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  }, []);

  useEffect(() => {
    if (connectExternalControls)
      connectExternalControls({
        setNodes,
        addNode: (node: Node) => setNodes((prevNodes) => [...prevNodes, node]),
        removeNode: () => console.log('Заглушка removeNode'),
        // / TODO: проработать механизм внешнего управления
      });
  }, []);

  // реакт flow требует явно заданную высоту родителя для своего корректного отображения
  return (
    <div className={styles.container} style={{ height }}>
      <ReactFlow
        {...flowFullProps}
        id={id}
        fitView
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onEdgeUpdate={onEdgeUpdate}
        onConnect={onConnect}
        nodeTypes={NODE_TYPES}
        snapToGrid={snapToGrid}
      >
        {children}
      </ReactFlow>
    </div>
  );
};
